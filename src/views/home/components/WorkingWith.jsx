import Carousel from '@/common/components/carousel';

function WorkingWith() {
	return (
		<div
			className="flex flex-col mt-16 pb-12 gap-6 items-start sm:items-center bg-no-repeat md:px-8 lg:px-24"
			style={{ backgroundImage: `url('src/assets/img/bg-3.png')` }}>
			<div className="px-8 md:px-0">
				<p className="uppercase text-[#212A34] text-sm tracking-widest sm:text-center pb-4">
					We are serving in
				</p>

				<h1 className="text-4xl sm:text-5xl font-extrabold text-left sm:text-center">
					<span className="text-primary">Industries</span> We Are Working With
				</h1>
			</div>

			<Carousel />
		</div>
	);
}

export default WorkingWith;
