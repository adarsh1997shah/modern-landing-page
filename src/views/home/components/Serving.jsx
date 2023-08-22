import Container from '@/common/components/Container';

import map from '@/assets/img/map.png';

function Serving() {
	return (
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
	);
}

export default Serving;
