import { Suspense } from 'react';
import Banner from '../../components/Banner';
import HowItWorks from './HowItWorks';
import PopularServices from './PopularServices';
import Testimonial from './Testimonial';

const Home = () => {
    const servicesPromise = fetch('http://localhost:3000/services').then(res => res.json())


    return (
        <div>
            <Banner />
            <HowItWorks />
            <Suspense fallback={'Loading Popular Jobs'}>
                <PopularServices servicesPromise={servicesPromise} />
            </Suspense>
            <Testimonial />
        </div>
    );
};

export default Home;