const Contact = () => {
  return (
    <div className="bg-pink-50 dark:bg-base-200  min-h-screen flex items-center justify-center">
      <div className="text-black dark:text-white mx-auto max-w-6xl p-5">
        <h1 className="text-center dark:text-white text-pink-950 text-5xl md:text-5xl font-semibold p-5">
          Connect with Us
        </h1>

        <div className="flex flex-col-reverse md:flex-row items-center gap-5">
          <div className="space-y-2 text-2xl pt-35 px-15">
            <h2 className="text-3xl">Mail Us:</h2>
            <p>contact@festivya.com</p>
            <p>support@festivya.com</p>
            <p className="text-3xl">Contact:</p>
            <p>01234567890</p>
          </div>
          <div className="p-25">
            <img
              src="https://i.ibb.co/sdvDxF57/pexels-leah-newhouse-50725-540522.jpg"
              alt="Contact Us"
              className="w-full h-auto object-cover rounded-t-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
