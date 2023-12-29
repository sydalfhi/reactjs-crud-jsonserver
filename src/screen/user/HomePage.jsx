// import Navbar from "../../components/Navbar";
import Sidebar from "../../layout/back-end/Sidebar";

const HomePage = () => {
  const style = {
    sidebar: "hidden lg:flex flex-col col-span-2 justify-between  h-screen",
  };
  return (
    <div className=" grid lg:grid-cols-8 ">
      {/* sidebar */}
      <div className={`${style.sidebar} w-64 `}>
        <Sidebar />
      </div>

      <div className="  lg:col-span-6 w-full h-screen "></div>
    </div>
  );
};

export default HomePage;
