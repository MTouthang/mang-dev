import Footer from "../Component/Footer";
import Header from "./Header";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className="bg-primary-bg">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
