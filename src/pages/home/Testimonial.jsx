import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const Testimonial = [
  {
    id: 1,
    name: "Wedding Celebration",
    description:
      "A joyful ceremony to celebrate the union of two people, often including rituals, music, and feasting.",
    duration: "1 day",
    image: "https://i.ibb.co/6cg1Cb3H/pexels-simon-robben-55958-614810.jpg",
  },
  {
    id: 2,
    name: "Birthday Party",
    description:
      "A fun event to celebrate someone's birth anniversary with friends, family, cake, and games.",
    duration: "Few hours",
    image: "https://i.ibb.co/DDnRkjnF/pexels-mastercowley-1300402.jpg",
  },
  {
    id: 3,
    name: "Corporate Event",
    description:
      "Professional gatherings like conferences, seminars, or product launches designed to connect and inform.",
    duration: "1-3 days",
    image: "https://i.ibb.co/fZxqyfz/Perfocal-17-11-2019-TYWFAQ-100-standard-3.jpg",
  },
  {
    id: 4,
    name: "Baby Shower",
    description:
      "A celebration to welcome an expected baby, with gifts, games, and joyous moments for the parents-to-be.",
    duration: "Few hours",
    image: "https://i.ibb.co/fZxqyfz/Perfocal-17-11-2019-TYWFAQ-100-standard-3.jpg",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setIndex((index + Testimonial.length - 1) % Testimonial.length);
  };

  const next = () => {
    setDirection(1);
    setIndex((index + 1) % Testimonial.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      position: "absolute",
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative",
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      position: "absolute",
    }),
  };

  const t = Testimonial[index];

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-12 px-4 transition-colors duration-500">
      <div className="max-w-xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
          What Our Clients Say
        </h2>
      </div>

      <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg py-8 px-6 md:px-10 flex flex-col items-center text-center transition-colors duration-500 max-w-lg mx-auto min-h-[480px] overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={t.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col items-center text-center px-6"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-pink-300 dark:border-pink-500"
            />
            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
              {t.name}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 italic mb-4">
              {t.description}
            </p>
            <p className="text-sm font-medium text-pink-600 dark:text-pink-400 mb-6">
              Duration: {t.duration}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex space-x-4 z-10">
          <button
            onClick={prev}
            aria-label="Previous program"
            className="px-4 py-2 bg-pink-200 dark:bg-pink-700 text-black dark:text-white rounded-full hover:bg-pink-300 dark:hover:bg-pink-600 transition"
          >
            ←
          </button>
          <button
            onClick={next}
            aria-label="Next program"
            className="px-4 py-2 bg-pink-200 dark:bg-pink-700 text-black dark:text-white rounded-full hover:bg-pink-300 dark:hover:bg-pink-600 transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
