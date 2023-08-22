import { useCallback, useEffect, useRef, useState } from 'react';

import Slide from './Slide';

import companyLogo1 from '@/assets/svg/company-logo-1.svg';
import companyLogo7 from '@/assets/svg/company-logo-7.svg';
import companyLogo8 from '@/assets/svg/company-logo-8.svg';

const IMAGES = [{ logo: companyLogo1 }, { logo: companyLogo7 }, { logo: companyLogo8 }];

function StackCarousel() {
	const [count, setCount] = useState(0);

	const carousalRef = useRef(null);

	let intervalId = useRef(null);
	let observer = useRef(null);

	const startInterval = useCallback(() => {
		stopInterval();

		intervalId.current = setInterval(() => {
			setCount((prev) => (prev === 2 ? 0 : prev + 1));
		}, 2000);
	}, []);

	const stopInterval = () => {
		clearInterval(intervalId.current);
	};

	const createObserver = useCallback(() => {
		let options = {
			root: null,
		};

		function handleIntersect(entries) {
			if (entries[0].isIntersecting) {
				startInterval();
			} else {
				stopInterval();
			}
		}

		observer.current = new IntersectionObserver(handleIntersect, options);
		observer.current.observe(carousalRef.current);
	}, [startInterval]);

	useEffect(() => {
		const ref = carousalRef.current;

		createObserver();

		return () => {
			observer?.current?.unobserve(ref);
			stopInterval();
		};
	}, [createObserver]);

	return (
		<div ref={carousalRef} className="relative mx-3">
			{/* This first slide is for placeholder for other slides */}
			<Slide className="invisible -z-20 relative" companyLogo={companyLogo1} />

			{IMAGES.map(({ logo }, index, arr) => (
				<Slide
					key={index}
					companyLogo={logo}
					index={index}
					zIndex={arr.length - index - 1}
					count={count}
				/>
			))}
		</div>
	);
}

export default StackCarousel;
