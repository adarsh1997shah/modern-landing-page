import TwoColumnLayout from '@/views/common/TwoColumnLayout';

import imgSection1 from '@/assets/img/img-section-1.png';

const LIST = [
	'Easy to use mobile & web platform',
	() => (
		<span>
			<span className="font-extrabold">45,000+</span> workers
		</span>
	),
	() => (
		<span>
			Realtime <span className="font-extrabold">tracking</span>
		</span>
	),
	() => (
		<span>
			<span className="font-extrabold">95%</span> fulfillment rate
		</span>
	),
	'Preferred worker list',
];

function ForEmployers() {
	return (
		<TwoColumnLayout
			imgSection={imgSection1}
			subHeading="For Employers"
			heading={
				<span>
					<span className="text-primary">Workspace</span> At Your Fingertips
				</span>
			}
			list={LIST}
		/>
	);
}

export default ForEmployers;
