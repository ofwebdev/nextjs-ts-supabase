import React from "react";
import TopMenu from "./includes/TopMenu";
import MainHeader from "./includes/MainHeader";
import SubMenu from "./includes/SubMenu";
import Footer from "./includes/Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

// const MainLayout: React.FC<MainLayoutProps> = ({ children }) =>

function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <div className="min-w-[1050px] max-w-[1300px] mx-auto" id="MainLayout">
        <div>
          {/* {isLoading ? <Loading /> : <div></div>} */}
          <TopMenu />
          <MainHeader />
          <SubMenu />
        </div>

        <div>{children}</div>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default MainLayout;
