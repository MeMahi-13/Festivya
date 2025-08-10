import Lottie from "lottie-react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import registerLottie from "../../src/pages/Lotties/register.json";
import useTitle from "../components/useTitle";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const { createUser, setUser, updateUser, signInWithGoogle } = useContext(AuthContext);
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const formData = new FormData(form);
    const { photo, password, ...userProfile } = Object.fromEntries(formData.entries());

    if (name.length < 5) {
      setNameError("Name should be more than 5 characters");
      return;
    } else {
      setNameError("");
    }

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;

    if (!hasUppercase || !hasLowercase || !isLongEnough) {
      setPasswordError("Password must be at least 6 characters and include both uppercase and lowercase letters.");
      return;
    } else {
      setPasswordError("");
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        fetch(`https://fest-olive.vercel.app/users`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your account is created successfully!",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            console.error(error);
            setUser(user);
          });
      })
      .catch((error) => alert(error.message));
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => console.error("Google sign-in error:", error));
  };
  useTitle('Register|Festivya');
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#fffbea] dark:bg-[#1e1e1e] px-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-4xl">

        {/* Lottie Animation */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Lottie className="w-2/3 max-w-md" animationData={registerLottie} loop={true} />
        </div>

        {/* Register Form */}
        <div className="bg-white dark:bg-[#2e2e2e] rounded-2xl shadow-lg w-full md:w-1/2 p-8 space-y-6">
          <h2 className="text-3xl font-bold text-center text-[#2E7D32] dark:text-[#A5D6A7]">
            Register Your Account
          </h2>

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Name</label>
              <input
                name="name"
                type="text"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white"
                placeholder="Your full name"
              />
              {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Photo URL</label>
              <input
                name="photo"
                type="text"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white"
                placeholder="https://example.com/photo.jpg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Email</label>
              <input
                name="email"
                type="email"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Password</label>
              <input
                name="password"
                type="password"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white"
                placeholder="Create a password"
              />
              {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-semibold rounded-lg transition-all"
            >
              Register
            </button>

            <p className="text-center text-sm font-medium text-gray-700 dark:text-gray-300 pt-3">
              Already have an account?{" "}
              <Link to="/auth/login" className="bg-pink-200 hover:underline">
                Login
              </Link>
            </p>
          </form>

          <div className="text-center">
            <div className="divider dark:divider-neutral">OR</div>
            <button
              onClick={handleGoogleSignIn}
              className="text-black dark:text-white w-full flex items-center justify-center gap-2 py-2 border border-gray-300 dark:border-gray-500 rounded-lg text-sm font-medium hover:bg-green-200 cursor-pointer dark:hover:bg-gray-700 transition"
            >
              <img
                src="https://img.icons8.com/color/20/google-logo.png"
                alt="Google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
