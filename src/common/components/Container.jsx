import PropTypes from 'prop-types';

function Container({ shouldColReverse = true, children, className = '' }) {
	return (
		<div
			className={`flex ${
				shouldColReverse ? 'flex-col-reverse' : ''
			}  md:flex-row px-8 gap-y-16 gap-x-32 lg:px-24 py-8 md:py-20 flex-wrap md:flex-nowrap items-center ${className}`}>
			{children}
		</div>
	);
}

Container.propTypes = {
	children: PropTypes.arrayOf(PropTypes.element),
	shouldColReverse: PropTypes.bool,
	className: PropTypes.string,
};

export default Container;
