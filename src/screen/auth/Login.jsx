import { useRef } from "react";
import { AuthLogin } from "../../service/auth.service";
import { Link } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const stylePage = {
    loginPage: `  mx-auto flex flex-col justify-center items-center w-full`,
  };

  const handleSubmit = (even) => {
    even.preventDefault();
    const dataLogin = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    const requestTo = "/dashboard";

    return AuthLogin(dataLogin, requestTo);
  };

  return (
    <>
      <div className="w-full grid grid-cols-2">
        <div className="w-full   grid h-screen place-items-center">
          <div className="w-[50%] aspect-square rounded-lg bg-gray-500 "></div>
        </div>
        {/* login */}
        <div className={stylePage.loginPage}>
          <h1 className="text-3xl font-bold ">Login</h1>
          <p className="my-3">login dulu kamu baru bisa melanjutkan</p>
          <form
            method="post"
            onSubmit={handleSubmit}
            className="grid place-items-center grid-cols-1 gap-2 "
          >
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

            <button className="w-full py-2 bg-orange-500 hover:bg-black font-semibold rounded text-white">
              Kirim
            </button>
          </form>

          <p className="mt-5 ">
            belum punya akun ?{" "}
            <Link to={"/register"} className="text-blue-500">
              buat akun
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
