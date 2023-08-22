import PropTypes from 'prop-types';

import vector from '@/assets/svg/vector.svg';
import check from '@/assets/svg/check.svg';
import arrowRight from '@/assets/svg/arrow-right.svg';

function TwoColumnLayout({
	imgSection = '',
	subHeading = '',
	heading = '',
	list = [],
	shouldReverseOrder,
}) {
	return (
		<div
			className={`flex flex-col-reverse md:flex-row px-8 gap-y-16 gap-x-32 lg:px-24 py-8 md:py-20 flex-wrap md:flex-nowrap items-center ${
				shouldReverseOrder ? 'md:flex-row-reverse' : ''
			}`}>
			<div className="w-full md:w-[55%] lg:w-1/2 flex sm:justify-center">
				<img className="sm:w-[65%] md:w-full" src={imgSection} alt="image-section" />
			</div>

			<div className="flex flex-col w-full md:w-[45%] lg:w-1/2 sm:items-center md:items-start">
				<p className="uppercase text-[#212A34] text-sm tracking-widest">{subHeading}</p>

				<h1 className="text-4xl sm:text-5xl font-extrabold py-5 pb-10 sm:text-center md:text-left">
					{heading}
				</h1>

				<img className="w-44" src={vector} alt="vector" />

				<div>
					<ul className="flex flex-col gap-3.5 py-10 text-lg font-medium">
						{list.map((item, index) => {
							return (
								<li key={index} className="flex gap-4">
									<img src={check} alt="check" />
									{typeof item == 'function' ? item() : <span>{item}</span>}
								</li>
							);
						})}
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

TwoColumnLayout.propTypes = {
	imgSection: PropTypes.string,
	subHeading: PropTypes.string,
	heading: PropTypes.element,
	list: PropTypes.array,
	shouldReverseOrder: PropTypes.bool,
};

export default TwoColumnLayout;
