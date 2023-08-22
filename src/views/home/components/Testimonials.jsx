import StackCarousel from '@/common/components/stackCarousel';

import heart from '@/assets/svg/heart.svg';

import mountain1 from '@/assets/svg/mountain-1.svg';
import mountain2 from '@/assets/svg/mountain-2.svg';

import companyLogo2 from '@/assets/svg/company-logo-2.svg';
import companyLogo3 from '@/assets/svg/company-logo-3.svg';
import companyLogo4 from '@/assets/svg/company-logo-4.svg';
import companyLogo5 from '@/assets/svg/company-logo-5.svg';
import companyLogo6 from '@/assets/svg/company-logo-6.svg';

function CustomerSays() {
	return (
		<div className="flex flex-col px-8 py-16 items-start sm:items-center bg-no-repeat bg-[#F5F8FF]">
			<img src={heart} alt="heart" />

			<p className="uppercase text-[#212A34] text-sm tracking-widest pt-10">
				Testimonials
			</p>

			<h1 className="text-4xl sm:text-5xl font-extrabold pt-2 capitalize text-left sm:text-center">
				See what our <span className="text-primary">customers</span> are saying
			</h1>

			<div className="pt-20 relative">
				<StackCarousel />

				<img
					className="hidden sm:block absolute top-[40%] -left-8"
					src={mountain1}
					alt="mountain-1"
				/>
				<img
					className="hidden sm:block absolute top-[40%] -right-8"
					src={mountain2}
					alt="mountain-2"
				/>
			</div>

			<p className="uppercase text-[#212A34] text-sm tracking-widest py-10">
				Featured Customers
			</p>

			<div className="flex justify-between sm:justify-evenly w-full flex-wrap gap-x-7 gap-y-2">
				<img src={companyLogo2} alt="company-logo-2" />
				<img src={companyLogo3} alt="company-logo-3" />
				<img src={companyLogo4} alt="company-logo-4" />
				<img src={companyLogo5} alt="company-logo-5" />
				<img src={companyLogo6} alt="company-logo-6" />
			</div>
		</div>
	);
}

export default CustomerSays;
