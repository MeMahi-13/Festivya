import { Player } from "@lottiefiles/react-lottie-player";
import booking from '../Lotties/booking.json';
import browse from "../Lotties/browse.json";
import profile from "../Lotties/profile.json";

const HowItWorks = () => {
  return (
   <div className="bg-pink-100 dark:bg-pink-900 text-black py-130 md:py-60 lg:py-60 xl:py-60 relative z-10">

      <section
        id="how-it-works"
        className="max-w-6xl w-full mx-auto py-12 px-6 bg-white dark:bg-base-200 rounded-2xl absolute z-20 -top-24 left-1/2 transform -translate-x-1/2 shadow-xl"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-pink-600">How It Works</h2>
          <p className="text-gray-600 mt-3 text-lg">
            Book or offer services in just a few clicks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          <div className="bg-pink-50 dark:bg-pink-900 p-6 rounded-xl shadow hover:shadow-md transition duration-300">
            <Player
              autoplay
              loop
              src={profile}
              className="w-32 h-32 mx-auto mb-4"
            />
            <h5 className="text-xl font-semibold mb-2 text-pink-600 dark:text-white">Create Profile</h5>
            <p className="text-gray-600 dark:text-white">
              Sign up with email or Google, then set up your profile with photo & bio.
            </p>
          </div>

          
          <div className="bg-pink-50 dark:bg-pink-900 p-6 rounded-xl shadow hover:shadow-md transition duration-300">
            <Player
              autoplay
              loop
              src={booking}
              className="w-32 h-32 mx-auto mb-4"
            />
            <h5 className="text-xl font-semibold mb-2 text-pink-600 dark:text-white">Browse or List</h5>
            <p className="text-gray-600 dark:text-white">
              Explore others’ services or create your own with images, description, and price.
            </p>
          </div>

          
          <div className="bg-pink-50 dark:bg-pink-900 p-6 rounded-xl shadow hover:shadow-md transition duration-300">
            <Player
              autoplay
              loop
              src={browse}
              className="w-32 h-32 mx-auto mb-4"
            />
            <h5 className="text-xl font-semibold mb-2 text-pink-600 dark:text-white">Book & Manage</h5>
            <p className="text-gray-600 dark:text-white">
              Book a service or manage requests. Providers update status as jobs progress.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
