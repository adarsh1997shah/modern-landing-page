import PropTypes from 'prop-types';

import invertedComma from '@/assets/svg/invertedComma.svg';

function Slide({ companyLogo = '', className = '', zIndex = 0, index = 0, count = 0 }) {
	return (
		<div className={`flex absolute top-0 bottom-0 ${className}`}>
			<div
				className={`flex items-center sm:w-[70%] mx-auto bg-white p-7 rounded-md relative`}
				style={{
					transition: 'all 500ms ease',
					boxShadow: '0px 14px 94.00000762939453px 0px rgba(0, 0, 0, 0.05)',
					zIndex: index < count ? Math.abs(zIndex - count) : zIndex + count,
					transform: `translateX(${(index - count) * 15}%) scale(${
						1 - Math.abs((index - count) * 0.2)
					})`,
				}}>
				<img className="absolute -top-5" src={invertedComma} alt="inverted-comma" />

				<div>
					<p className="md:text-xl">
						Excellent App! Best in Langley for temp labour! They provide 24/7 support,
						call them and get your labour right away. Also, they pay their labour same
						day! With Grizzly Force you will have efficient labour and better control!
					</p>

					<div className="mt-8">
						<p className="font-extrabold mb-1">Tony Hartzenberg</p>
						<p className="text-[#212A34] text-xs">CEO, Sugarplum</p>
					</div>
				</div>

				<img className="hidden lg:block" src={companyLogo} alt="company-logo-1" />
			</div>
		</div>
	);
}

Slide.propTypes = {
	companyLogo: PropTypes.string,
	className: PropTypes.string,
	zIndex: PropTypes.number,
	index: PropTypes.number,
	count: PropTypes.number,
};

export default Slide;
