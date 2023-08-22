import Divider from '@/common/components/Divider';

import Landing from './components/Landing';
import HowItWorks from './components/HowItWorks';
import WorkingWith from './components/WorkingWith';
import ForEmployers from './components/ForEmployers';
import Testimonials from './components/Testimonials';
import JobSeekers from './components/JobSeekers';

function Home() {
	return (
		<div>
			<Landing />
			<HowItWorks />
			<WorkingWith />

			<Divider />

			<ForEmployers />
			<Testimonials />
			<JobSeekers />
		</div>
	);
}

export default Home;
