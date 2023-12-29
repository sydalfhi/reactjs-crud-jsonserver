import { useRef } from "react";
import { AuthRegister } from "../../service/auth.service";
import { Link } from "react-router-dom";

const Register = () => {
  const namaRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
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
            <input
              type="text"
              className="px-5 py-2 border border-gray-300 rounded"
              placeholder="Masukan Nama Anda"
              ref={namaRef}
            />
            <input
              type="email"
              className="px-5 py-2 border border-gray-300 rounded"
              placeholder="Masukan Email Anda"
              ref={emailRef}
            />
            <input
              type="password"
              className="px-5 py-2 border border-gray-300 rounded"
              placeholder="Masukan Password"
              ref={passwordRef}
            />
            <input
              type="password"
              className="px-5 py-2 border border-gray-300 rounded"
              placeholder=" konfirmasi Password "
              ref={confirmPasswordRef}
            />

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
          <div className="w-[50%] aspect-square rounded-lg bg-gray-500 "></div>
        </div>
      </div>
    </>
  );
};

export default Register;
