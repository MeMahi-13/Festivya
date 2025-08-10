const Contact = () => {
  return (
<div className="bg-pink-50 text-black" >
     <h1 className="text-center  bg-pink-50 text-pink-950 text-4xl font-semibold p-5">Connect with Us</h1>

        <div className="flex flex-row items-center gap-5">
     
      <div className="space-y-2 text-xl p-15">
        <h2>Email:</h2>
        <p>contact@example.com</p>
        <p>support@example.com</p>
        <p>info@example.com</p>
      </div>
      <div className="p-5 rounded-t-full">
        <img
          src="https://i.ibb.co/sdvDxF57/pexels-leah-newhouse-50725-540522.jpg"
          alt="Contact Us"
          className="w-full h-auto rounded-t-full"
        />
      </div>
    </div>
</div>
  );
};

export default Contact;
