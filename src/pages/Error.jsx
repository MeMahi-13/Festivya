
const Error = () => {
  return (
    <div className="font-roboto flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-4xl p-6 bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-6">
        <img
          src="https://i.ibb.co/zTQvfXgG/tom.jpg"
          alt="Drunk Tom"
          className="w-48 h-48 object-cover rounded-full shadow-lg"
        />
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-semibold text-gray-800">
            Oops! The Party Was Too Much Today. Tom's Lost in the Milk!
          </h1>
          <h2 className="mt-2 text-xl text-gray-600">
            Nevermind! We got your back after the party too.
          </h2>
          <button
            onClick={() => window.location.href = '/'}
            className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300"
          >
            Go Back Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
