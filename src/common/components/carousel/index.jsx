import { useCallback, useMemo, useRef, useState } from 'react';

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
				).map(({ src, alt, text }, index) => (
					<div
						className={`clone slide-${index} relative px-1 grayscale`}
						key={src}
						style={{ minWidth: `${IMAGE_WIDTH}%` }}>
						<img className="w-full h-full rounded-xl" src={src} alt={alt} />
						<p className="w-4/5 break-words absolute bottom-4 text-white font-bold text-2xl left-5">
							{text}
						</p>
					</div>
				))}

				{IMAGES.map(({ src, alt, text }, index) => {
					return (
						<div
							className={`main slide-${index} relative px-1${
								index == Math.abs(count) ? ' active' : ' grayscale'
							}`}
							key={src}
							style={{ minWidth: `${IMAGE_WIDTH}%` }}>
							<img className="w-full h-full rounded-xl" src={src} alt={alt} />
							<p className="w-4/5 break-words absolute bottom-4 text-white font-bold text-2xl left-5">
								{text}
							</p>
						</div>
					);
				})}

				{IMAGES.slice(0, Math.ceil(CURR_NUM_OF_IMAGES_TO_SHOW / 2)).map(
					({ src, alt, text }, index) => (
						<div
							className={`clone slide-${index} px-1 relative grayscale`}
							key={src}
							style={{ minWidth: `${IMAGE_WIDTH}%` }}>
							<img className="w-full h-full rounded-xl" src={src} alt={alt} />
							<p className="w-4/5 break-words absolute bottom-4 text-white font-bold text-2xl left-5">
								{text}
							</p>
						</div>
					)
				)}
			</div>

			<div>
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
				<button
					className="absolute -translate-y-1/2 top-1/2 right-4"
					onClick={handleNext}>
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
			</div>
		</div>
	);
}

export default Carousel;
