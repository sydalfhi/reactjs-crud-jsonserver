import { Link } from "react-router-dom";
import Hero from "../assets/img/(12).png";
const WelcomePage = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-5 items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src={Hero}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            CRUD Witd React js & JSON Server
          </h1>
          <p className="mb-8 leading-relaxed">
            Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
            tousled. Chambray dreamcatcher trust fund, kitsch vice godard
            disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh.
            Pour-over meditation PBR&amp;B pickled ennui celiac mlkshk freegan
            photo booth af fingerstache pitchfork.
          </p>
          <div className="flex justify-center">
            <Link
              to="/login"
              className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomePage;
