import Carousel from '@/common/components/carousel';

function WorkingWith() {
	return (
		<div
			className="flex flex-col mt-16 gap-6 items-center bg-no-repeat"
			style={{ backgroundImage: `url('src/assets/img/bg-3.png')` }}>
			<p className="uppercase text-[#212A34] text-sm tracking-widest">
				We are serving in
			</p>

			<h1 className="text-4xl sm:text-5xl font-extrabold px-10">
				<span className="text-primary">Industries</span> We Are Working With
			</h1>

			<Carousel />
		</div>
	);
}

export default WorkingWith;
