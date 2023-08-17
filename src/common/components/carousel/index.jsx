import { useCallback, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import useMediaQuery from '@/common/hooks/useMediaQuery';

import img1 from '@/assets/img/carousel-img-1.png';
import img2 from '@/assets/img/carousel-img-2.png';
import img3 from '@/assets/img/carousel-img-3.png';
import img4 from '@/assets/img/carousel-img-4.png';
import img5 from '@/assets/img/carousel-img-5.png';

const IMAGES = [
	{ src: img1, alt: 'img1', text: 'Warehousing' },
	{ src: img2, alt: 'img2', text: 'Manufacturing' },
	{ src: img3, alt: 'img3', text: 'Food & Beverage' },
	{ src: img4, alt: 'img4', text: 'Hospitality' },
	{ src: img5, alt: 'img5', text: 'Restaurants' },
];
const IMAGES_LENGTH = IMAGES.length;

function Carousel() {
	const [count, setCount] = useState(0);

	const carouselRef = useRef(null);
	const isSlidingRef = useRef(false);

	const isMobile = useMediaQuery('(max-width: 768px)');

	const CURR_NUM_OF_IMAGES_TO_SHOW = useMemo(
		() => (isMobile ? 3 : IMAGES_LENGTH),
		[isMobile]
	);
	const IMAGE_WIDTH = useMemo(
		() => 100 / (CURR_NUM_OF_IMAGES_TO_SHOW - 1),
		[CURR_NUM_OF_IMAGES_TO_SHOW]
	);

	const injectTransition = () => {
		carouselRef.current.style.transition = 'transform 500ms ease';
	};

	const onTransitionEnd = useCallback(() => {
		if (count == -IMAGES_LENGTH) {
			setCount(0);
		} else if (count == 1) {
			setCount(-IMAGES_LENGTH + 1);
		}

		carouselRef.current.style.transition = 'none';

		setTimeout(() => {
			isSlidingRef.current = false;
		}, 100);
	}, [count]);

	const handleNext = () => {
		if (!isSlidingRef.current) {
			setCount(count - 1);

			isSlidingRef.current = true;
			injectTransition();
		}
	};

	const handlePrev = () => {
		if (!isSlidingRef.current) {
			setCount(count + 1);

			isSlidingRef.current = true;
			injectTransition();
		}
	};

	return (
		<div className="carousel-container relative mx-auto w-full lg:w-[90%] overflow-x-hidden">
			<div
				className="carousel flex h-48 py-6 relative"
				style={{
					transform: `translateX(${count * IMAGE_WIDTH}%)`,
					left: `-${IMAGE_WIDTH + IMAGE_WIDTH / 2}%`,
				}}
				ref={carouselRef}
				onTransitionEnd={onTransitionEnd}>
				{IMAGES.slice(
					IMAGES.length - Math.ceil(CURR_NUM_OF_IMAGES_TO_SHOW / 2),
					IMAGES_LENGTH
				).map((image, index, arr) => {
					const { src } = image;
					const isActive = index == arr.length - 1 && count == 1;

					return (
						<Image
							className="clone"
							key={src}
							isActive={isActive}
							index={index}
							{...image}
							imageWidth={IMAGE_WIDTH}
						/>
					);
				})}

				{IMAGES.map((image, index) => {
					const { src } = image;
					const isActive =
						index == Math.abs(count) && count != 1 && count != -IMAGES_LENGTH;

					return (
						<Image
							className="main"
							key={src}
							isActive={isActive}
							index={index}
							{...image}
							imageWidth={IMAGE_WIDTH}
						/>
					);
				})}

				{IMAGES.slice(0, Math.ceil(CURR_NUM_OF_IMAGES_TO_SHOW / 2)).map(
					(image, index) => {
						const { src } = image;
						const isActive = index == 0 && count == -IMAGES_LENGTH;

						return (
							<Image
								className="clone"
								key={src}
								isActive={isActive}
								index={index}
								{...image}
								imageWidth={IMAGE_WIDTH}
							/>
						);
					}
				)}
			</div>

			<div>
				<SlideLeftBtn handlePrev={handlePrev} />
				<SliderRightBtn handleNext={handleNext} />
			</div>
		</div>
	);
}

function Image({ className, index, isActive, src, imageWidth, alt, text }) {
	return (
		<div
			className={`slide-${index} relative px-1 ${className} ${
				isActive ? 'active' : 'grayscale'
			}`}
			style={{
				minWidth: `${imageWidth}%`,
				transition: `transform 500ms ease`,
			}}>
			<img className="w-full h-full rounded-xl" src={src} alt={alt} />
			<p className="w-4/5 break-words absolute bottom-4 text-white font-bold text-2xl left-5">
				{text}
			</p>
		</div>
	);
}

function SlideLeftBtn({ handlePrev }) {
	return (
		<button className="absolute -translate-y-1/2 top-1/2 left-4" onClick={handlePrev}>
			<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-neutral-400">
				<svg
					className="w-4 h-4 text-white dark:text-gray-800"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 6 10">
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M5 1 1 5l4 4"
					/>
				</svg>
			</span>
		</button>
	);
}

function SliderRightBtn({ handleNext }) {
	return (
		<button className="absolute -translate-y-1/2 top-1/2 right-4" onClick={handleNext}>
			<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-neutral-400">
				<svg
					className="w-4 h-4 text-white dark:text-gray-800"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 6 10">
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="m1 9 4-4-4-4"
					/>
				</svg>
			</span>
		</button>
	);
}

Image.propTypes = {
	className: PropTypes.string,
	index: PropTypes.number,
	isActive: PropTypes.bool,
	src: PropTypes.string,
	imageWidth: PropTypes.number,
	alt: PropTypes.string,
	text: PropTypes.string,
};

SlideLeftBtn.propTypes = {
	handlePrev: PropTypes.func,
};

SliderRightBtn.propTypes = {
	handleNext: PropTypes.func,
};

export default Carousel;
