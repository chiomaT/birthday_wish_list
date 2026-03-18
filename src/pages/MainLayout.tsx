import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
// import Landing from "./landing/Landing";
import AnimatedScreen from "../components/Animations";

const MainLayout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <div className="relative">
        <AnimatedScreen>
          <main>
            <Outlet />
          </main>
        </AnimatedScreen>
      </div>
    </>
  );
};

export default MainLayout;
