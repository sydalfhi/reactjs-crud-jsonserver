// import Navbar from "../../components/Navbar";
import Sidebar from "../../layout/back-end/Sidebar";

const HomePage = () => {
  const style = {
    sidebar: "hidden lg:flex flex-col col-span-1 justify-between  h-screen",
  };
  return (
    <div className="grid grid-cols-6 ">
      {/* sidebar */}
      <div className={style.sidebar}>
        <Sidebar />
      </div>

      <div className="  col-span-5  h-screen "></div>
    </div>
  );
};

export default HomePage;
