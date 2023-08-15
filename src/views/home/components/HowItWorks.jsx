import PropTypes from 'prop-types';

import step1 from '@/assets/svg/step1.svg';
import step2 from '@/assets/svg/step2.svg';
import step3 from '@/assets/svg/step3.svg';
import step4 from '@/assets/svg/step4.svg';

function HowItWorks() {
	return (
		<div className="bg-[#f0ffff] py-16 flex flex-col items-center">
			<h1 className="text-4xl sm:text-5xl font-extrabold pb-12 px-10">
				<span className="text-primary">How</span> on-demand staffing works
			</h1>

			<div className="grid sm:grid-cols-2 lg:grid-cols-4 w-10/12 gap-10">
				<Step
					icon={step1}
					number={1}
					title="Quick SignUp"
					content="Use our mobile app or web platform from the office or on the go, any time of day"
				/>

				<Step
					icon={step2}
					number={2}
					title="Post Jobs 24/7"
					content="Use our mobile app or web platform from the office or on the go, any time of day"
				/>

				<Step
					icon={step3}
					number={3}
					title="View Matches"
					content="With thousands of ready-to-go workers you can watch your jobs being filled in real time"
				/>

				<Step
					icon={step4}
					number={4}
					title="We Do The Rest!"
					content="We take care of payroll, deductions and insurance"
				/>
			</div>
		</div>
	);
}

function Step({ icon, number, title, content }) {
	return (
		<div className="shadow-md p-4 rounded-sm">
			<img className="mb-7 h-16" src={icon} alt={`step${number}`} />

			<div className="flex flex-col gap-2">
				<span className="uppercase font-medium text-[#282C3F] tracking-[2px]">
					{`Step ${number}`}
				</span>
				<h5 className="text-2xl font-black">{title}</h5>
				<p className="text-base text-[#555770]">{content}</p>
			</div>
		</div>
	);
}

Step.propTypes = {
	icon: PropTypes.string,
	number: PropTypes.number,
	title: PropTypes.string,
	content: PropTypes.string,
};

export default HowItWorks;
