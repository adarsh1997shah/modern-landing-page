import { useCallback, useMemo, useRef, useState } from 'react';

import useMediaQuery from '@/common/hooks/useMediaQuery';

import img1 from '@/assets/img/carousel-img-1.png';
import img2 from '@/assets/img/carousel-img-2.png';
import img3 from '@/assets/img/carousel-img-3.png';
import img4 from '@/assets/img/carousel-img-4.png';
import img5 from '@/assets/img/carousel-img-5.png';

const IMAGES = [
	{ src: img1, alt: 'img1' },
	{ src: img2, alt: 'img2' },
	{ src: img3, alt: 'img3' },
	{ src: img4, alt: 'img4' },
	{ src: img5, alt: 'img5' },
];
const IMAGES_LENGTH = IMAGES.length;

function Carousel() {
	const [count, setCount] = useState(0);

	const carouselRef = useRef(null);
	const isSlidingRef = useRef(false);

	const isMobile = useMediaQuery('(max-width: 768px)');

	const IMAGE_WIDTH = useMemo(() => 100 / (isMobile ? 2 : IMAGES_LENGTH - 1), [isMobile]);

	const toggleTransitionNone = () => {
		carouselRef.current.classList.add('transition-none');

		setTimeout(() => {
			carouselRef.current.classList.remove('transition-none');
		}, 100);
	};

	const onTransitionEnd = useCallback(() => {
		if (count == -IMAGES_LENGTH) {
			setCount(0);

			toggleTransitionNone();
		} else if (count == 1) {
			setCount(-IMAGES_LENGTH + 1);

			toggleTransitionNone();
		}

		setTimeout(() => {
			isSlidingRef.current = false;
		}, 100);
	}, [count]);

	const handleNext = () => {
		if (!isSlidingRef.current) {
			setCount(count - 1);

			isSlidingRef.current = true;
		}
	};

	const handlePrev = () => {
		if (!isSlidingRef.current) {
			setCount(count + 1);

			isSlidingRef.current = true;
		}
	};

	return (
		<div className="relative mx-auto w-full md:w-[90%] overflow-x-hidden">
			<div
				className="flex h-40 relative scroll-smooth transition-transform"
				style={{
					transform: `translateX(${count * IMAGE_WIDTH}%)`,
					left: `-${IMAGE_WIDTH + IMAGE_WIDTH / 2}%`,
				}}
				ref={carouselRef}
				onTransitionEnd={onTransitionEnd}>
				<img
					className="slide-5 rounded-xl pr-2"
					src={IMAGES[IMAGES_LENGTH - 1].src}
					alt="imgLast"
					style={{ minWidth: `${IMAGE_WIDTH}%` }}
				/>

				{IMAGES.map(({ src, alt }, index) => {
					return (
						<img
							key={src}
							className={`slide-${index} rounded-xl pr-2${
								index == Math.abs(count) + Math.floor(IMAGES_LENGTH / 2) ? '' : ''
							}`}
							src={src}
							alt={alt}
							style={{ minWidth: `${IMAGE_WIDTH}%` }}
						/>
					);
				})}

				{IMAGES.map(({ src, alt }, index) => (
					<img
						key={src}
						className={`second-slide-${index} rounded-xl pr-2${
							index == Math.abs(count) - Math.ceil(IMAGES_LENGTH / 2) ? '' : ''
						}`}
						src={src}
						alt={alt}
						style={{ minWidth: `${IMAGE_WIDTH}%` }}
					/>
				))}
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
