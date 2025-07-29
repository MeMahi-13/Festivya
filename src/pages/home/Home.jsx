import { Suspense } from 'react';
import Banner from '../../components/Banner';
import useTitle from '../../components/useTitle';
import HowItWorks from './HowItWorks';
import PopularServices from './PopularServices';
import Testimonial from './Testimonial';

const Home = () => {
      useTitle("Home | Festivya");
    const servicesPromise = fetch('https://fest-olive.vercel.app/services').then(res => res.json())


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