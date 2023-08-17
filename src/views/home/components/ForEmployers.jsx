import imgSection1 from '@/assets/img/img-section-1.png';
import vector from '@/assets/svg/vector.svg';
import check from '@/assets/svg/check.svg';
import arrowRight from '@/assets/svg/arrow-right.svg';

function ForEmployers() {
	return (
		<div className="flex flex-col-reverse md:flex-row px-8 gap-y-16 gap-x-32 lg:px-24 py-8 md:py-20 flex-wrap md:flex-nowrap items-center">
			<div className="w-full md:w-[55%] lg:w-1/2 flex sm:justify-center">
				<img className="sm:w-[65%] md:w-full" src={imgSection1} alt="image-section-1" />
			</div>

			<div className="flex flex-col w-full md:w-[45%] lg:w-1/2 sm:items-center md:items-start">
				<p className="uppercase text-[#212A34] text-sm tracking-widest">For Employers</p>

				<h1 className="text-4xl sm:text-5xl font-extrabold py-5 pb-10 sm:text-center md:text-left">
					<span className="text-primary">Workspace</span> At Your Fingertips
				</h1>

				<img className="w-44" src={vector} alt="vector" />

				<div>
					<ul className="flex flex-col gap-3.5 py-10 text-lg font-medium">
						<li className="flex gap-4">
							<img src={check} alt="check" />
							<span> Easy to use mobile & web platform</span>
						</li>
						<li className="flex gap-4">
							<img src={check} alt="check" />
							<span>
								<span className="font-extrabold">45,000+</span> workers
							</span>
						</li>
						<li className="flex gap-4">
							<img src={check} alt="check" />
							<span>
								Realtime <span className="font-extrabold">tracking</span>
							</span>
						</li>
						<li className="flex gap-4">
							<img src={check} alt="check" />
							<span>
								<span className="font-extrabold">95%</span> fulfillment rate
							</span>
						</li>
						<li className="flex gap-4">
							<img src={check} alt="check" />
							<span> Preferred worker list</span>
						</li>
					</ul>

					<button className="w-max flex font-extrabold gap-9 border-b-2 py-4 border-b-primary">
						<span>Learn More</span>
						<img src={arrowRight} alt="arrow-right" />
					</button>
				</div>
			</div>
		</div>
	);
}

export default ForEmployers;
