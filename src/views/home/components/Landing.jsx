import person1 from '@/assets/img/user-image-1.png';
import person2 from '@/assets/img/user-image-2.png';
import person3 from '@/assets/img/user-image-3.png';
import person4 from '@/assets/img/user-image-4.png';
import person5 from '@/assets/img/user-image-5.png';
import person6 from '@/assets/img/user-image-6.png';
import person7 from '@/assets/img/user-image-7.png';
import person8 from '@/assets/img/user-image-8.png';

function Landing() {
	return (
		<div className="flex container mx-auto px-4 bg-[url('@/assets/img/bg-1.png')] bg-no-repeat bg-auto bg-bottom min-h-[calc(100vh-90px)] flex-wrap">
			<div className="flex flex-col justify-center w-full md:w-1/2 items-center md:items-start">
				<h2 className="text-5xl sm:text-6xl font-extrabold leading-[50px] sm:leading-[72px]">
					<span className="capitalize">Modern Temp</span>
					<br />
					<span className="primary-gradient capitalize text-primary bg-[-webkit-linear-gradient(#eee, #333)]">
						Labour Solution
					</span>
				</h2>

				<div className="flex mt-8 gap-5 w-full">
					<button
						className="bg-[#353843] text-slate-50 py-3 px-6 rounded-xl font-bold w-1/2 md:w-auto"
						type="button">
						Find Workers
					</button>

					<button
						className="bg-primary text-slate-50 py-3 px-6 rounded-xl font-bold w-1/2 md:w-auto"
						type="button">
						Find a Job
					</button>
				</div>
			</div>

			<div className="w-full md:flex gap-7 md:w-1/2 pt-20 md:items-start hidden">
				<div className="flex flex-col gap-7">
					<img className="rounded-tl-[40%]" src={person8} alt="user-image-8" />
					<img
						className="rounded-bl-[40%] w-28 ml-auto"
						src={person4}
						alt="user-image-4"
					/>
					<img
						className="rounded-bl-[40%] w-32 mr-auto"
						src={person3}
						alt="user-image-3"
					/>
				</div>

				<div className="flex flex-col gap-7">
					<img
						className="rounded-[20%] w-16 mr-auto mt-auto"
						src={person7}
						alt="user-image-7"
					/>
					<img className="rounded-tr-[40%]" src={person5} alt="user-image-5" />
					<img className="rounded-br-[40%] mb-auto" src={person2} alt="user-image-2" />
				</div>

				<div className="flex flex-col gap-7">
					<img
						className="rounded-tr-[40%] w-20 relative right-12"
						src={person6}
						alt="user-image-6"
					/>
					<img className="rounded-br-[40%] mt-32" src={person1} alt="user-image-1" />
				</div>
			</div>

			<div className="w-full flex gap-7 md:w-1/2 pt-16 justify-center md:hidden">
				<div className="flex flex-col gap-7">
					<img className="rounded-tl-[40%]" src={person8} alt="user-image-8" />
					<img className="rounded-bl-[40%] w-44" src={person4} alt="user-image-4" />
				</div>

				<div className="flex flex-col gap-7 pt-24">
					<img className="rounded-tr-[40%]" src={person5} alt="user-image-5" />
					<img className="rounded-br-[40%]" src={person2} alt="user-image-2" />
				</div>
			</div>
		</div>
	);
}

export default Landing;
