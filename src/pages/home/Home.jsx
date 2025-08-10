import { Suspense } from 'react';
import Banner from '../../components/Banner';
import useTitle from '../../components/useTitle';
import Contact from '../contact/Contact';
import HowItWorks from './HowItWorks';
import PopularServices from './PopularServices';
import Testimonial from './Testimonial';

const Home = () => {
      useTitle("Home | Festivya");
    const servicesPromise = fetch('https://fest-olive.vercel.app/services').then(res => res.json())


    return (
        <div className='font-roboto'>
            <Banner />
            <HowItWorks />
            <Suspense fallback={'Loading Popular Jobs'}>
                <PopularServices servicesPromise={servicesPromise} />
            </Suspense>
            <Testimonial />
            <Contact/>
        </div>
    );
};

export default Home;