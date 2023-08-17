import Divider from '@/common/components/Divider';

import Landing from './components/Landing';
import HowItWorks from './components/HowItWorks';
import WorkingWith from './components/WorkingWith';
import ForEmployers from './components/ForEmployers';

function Home() {
	return (
		<div>
			<Landing />
			<HowItWorks />
			<WorkingWith />

			<Divider />

			<ForEmployers />
		</div>
	);
}

export default Home;
