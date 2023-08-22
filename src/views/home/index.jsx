import Divider from '@/common/components/Divider';

import Landing from './components/Landing';
import HowItWorks from './components/HowItWorks';
import WorkingWith from './components/WorkingWith';
import ForEmployers from './components/ForEmployers';
import Testimonials from './components/Testimonials';
import JobSeekers from './components/JobSeekers';
import Serving from './components/Serving';
import NewsLetter from './components/NewsLetter';

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

			<Divider />

			<Serving />
			<NewsLetter />
		</div>
	);
}

export default Home;
