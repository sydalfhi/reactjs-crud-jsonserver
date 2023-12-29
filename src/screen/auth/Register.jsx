import { useRef } from "react";
import { AuthRegister } from "../../service/auth.service";
import { Link } from "react-router-dom";
import Ilustration from "../../assets/img/(6).png";
import { useState } from "react";

const Register = () => {
  const namaRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [typeInput, setTypeInput] = useState(false);
  const [typeInputKon, setTypeInputKon] = useState(false);
  const stylePage = {
    registerPage: `  mx-auto flex flex-col justify-center items-center w-full`,
  };

  const handleSubmit = (even) => {
    even.preventDefault();
    const dataLogin = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    const requestTo = "/dashboard";

    return AuthRegister(dataLogin, requestTo);
  };

  return (
    <>
      <div className="w-full grid grid-cols-2">
        {/* login */}
        <div className={stylePage.registerPage}>
          <h1 className="text-3xl font-bold ">Register</h1>
          <p className="my-3">Buat akun agar kamu bisa akses</p>
          <form
            method="post"
            onSubmit={handleSubmit}
            className="grid place-items-center grid-cols-1 gap-2 "
          >
            <div className="w-full ">
              <label
                htmlFor="username"
                className="block text-sm text-gray-500 dark:text-gray-300"
              >
                Username
              </label>
              <input
                ref={namaRef}
                type="text"
                placeholder="Nama Anda"
                className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-500 dark:text-gray-300"
              >
                Email Address
              </label>
              <div className="relative flex items-center mt-2">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 mx-3 text-gray-400 dark:text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <input
                  ref={emailRef}
                  type="email"
                  placeholder="example@email.com"
                  className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm text-gray-500 dark:text-gray-300"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-xs text-gray-600 hover:underline dark:text-gray-400"
                >
                  Forget Password?
                </a>
              </div>
              <div className="relative flex items-center mt-2">
                <button
                  onClick={() => setTypeInput(!typeInput)}
                  type="button"
                  className="absolute right-0 focus:outline-none rtl:left-0 rtl:right-auto"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 mx-4 text-gray-400 transition-colors duration-300 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400"
                  >
                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                    <path
                      fillRule="evenodd"
                      d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <input
                  ref={passwordRef}
                  type={typeInput ? "text" : "password"}
                  placeholder={typeInput ? "Masukan Password" : "**********"}
                  className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-5 pr-11 rtl:pr-5 rtl:pl-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>

            <div>
              <div className="relative flex items-center mt-2">
                <button
                  onClick={() => setTypeInputKon(!typeInputKon)}
                  type="button"
                  className="absolute right-0 focus:outline-none rtl:left-0 rtl:right-auto"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 mx-4 text-gray-400 transition-colors duration-300 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400"
                  >
                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                    <path
                      fillRule="evenodd"
                      d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <input
                  ref={confirmPasswordRef}
                  type={typeInputKon ? "text" : "password"}
                  placeholder={
                    typeInputKon ? "Konfirmasi Password" : "**********"
                  }
                  className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-5 pr-11 rtl:pr-5 rtl:pl-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>

            <button className="w-full py-2 bg-orange-500 hover:bg-black font-semibold rounded text-white">
              Kirim
            </button>
          </form>

          <p className="mt-5 ">
            sudah punya akun ?{" "}
            <Link to={"/login"} className="text-blue-500">
              Login
            </Link>
          </p>
        </div>

        {/* tambahan */}
        <div className="w-full   grid h-screen place-items-center">
          <div className="relative w-full mt-12  lg:mt-0">
            <img
              className="w-full max-w-lg lg:mx-auto"
              src={Ilustration}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
