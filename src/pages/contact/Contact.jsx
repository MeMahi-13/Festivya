const Contact = () => {
  return (
    <div className="bg-pink-50 min-h-screen flex items-center justify-center">
      <div className="text-black mx-auto max-w-6xl p-5">
        <h1 className="text-center text-pink-950 text-4xl font-semibold p-5">
          Connect with Us
        </h1>

        <div className="flex flex-row items-center gap-5">
          <div className="space-y-2 text-xl p-15">
            <h2>Email: contact@Festivya.com</h2>
            <h2>support@example.com</h2>
            <p>Contact: 01234567890</p>
            
          </div>
          <div className="p-5 m-20 rounded-t-full">
            <img
              src="https://i.ibb.co/sdvDxF57/pexels-leah-newhouse-50725-540522.jpg"
              alt="Contact Us"
              className="rounded-t-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
