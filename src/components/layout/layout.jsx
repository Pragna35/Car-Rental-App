import Header from "../header/header";
import Footer from "../footer/footer";
import Routers from "../../routers/routers";
const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};
export default Layout;
