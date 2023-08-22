import Container from '@/common/components/Container';

import map from '@/assets/img/map.png';
import slantRightArrow1 from '@/assets/svg/slant-right-arrow-1.svg';
import slantRightArrow2 from '@/assets/svg/slant-right-arrow-2.svg';

function Serving() {
	return (
		<>
			<Container className="gap-x-10" shouldColReverse={false}>
				<div className="flex flex-col w-full md:w-1/2 sm:items-center md:items-start">
					<p className="uppercase text-[#212A34] text-sm tracking-widest">
						Grizzly Force Cities
					</p>

					<h1 className="text-4xl sm:text-5xl font-extrabold py-5 pb-10 sm:text-center md:text-left">
						<span>
							Serving <span className="text-primary">The Greater Vancouver</span>,{' '}
							<span className="text-primary">Victoria</span>,{' '}
							<span className="text-primary">Okanagan</span>,{' '}
							<span className="text-primary">Calgary</span> &{' '}
							<span className="text-primary">Toronto</span> Areas
						</span>
					</h1>
				</div>

				<div className="w-full md:w-1/2 flex sm:justify-center">
					<img className="sm:w-[65%] md:w-full" src={map} alt="map" />
				</div>
			</Container>

			<div className="flex p-8 lg:px-24 flex-wrap md:flex-nowrap gap-10 items-center justify-center">
				<button
					className="w-full sm:w-[70%] md:w-1/2 bg-[#2B2E33] bg-cover rounded-[20px] p-9"
					style={{ backgroundImage: "url('src/assets/webp/button-bg-1.webp')" }}>
					<div className="text-left font-extrabold text-white text-3xl">
						Looking for additional help?
					</div>
					<div className="flex">
						<span className="mr-2 text-primary font-extrabold">Find Workers</span>
						<img src={slantRightArrow1} alt="slant-right-arrow" />
					</div>
				</button>

				<button
					className="w-full sm:w-[70%] md:w-1/2 bg-primary bg-cover rounded-[20px] p-9"
					style={{ backgroundImage: "url('src/assets/webp/button-bg-1.webp')" }}>
					<div className="text-left font-extrabold text-white text-3xl">
						Looking for extra cash?
					</div>
					<div className="flex">
						<span className="mr-2 text-white font-extrabold">Find a Job</span>
						<img className="fill-white" src={slantRightArrow2} alt="slant-right-arrow" />
					</div>
				</button>
			</div>
		</>
	);
}

export default Serving;
