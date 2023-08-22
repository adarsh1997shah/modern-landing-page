import TwoColumnLayout from '@/views/common/TwoColumnLayout';

import imgSection2 from '@/assets/img/img-section-2.png';

const LIST = [
	'User friendly mobile app',
	() => (
		<span>
			New jobs <span className="font-extrabold">everyday</span>
		</span>
	),
	() => (
		<span>
			Payout in <span className="font-extrabold">24hrs</span>
		</span>
	),
	'Employment benefits',
	'Temporary & permanent positions',
];

function JobSeekers() {
	return (
		<TwoColumnLayout
			imgSection={imgSection2}
			subHeading="For Job Seekers"
			heading={
				<span>
					Connecting You With <span className="text-primary">Flexible Work</span>
				</span>
			}
			list={LIST}
			shouldReverseOrder
		/>
	);
}

export default JobSeekers;
