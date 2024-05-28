import { Outlet } from "react-router-dom";
import Footer from "../component/page/Footer";
import Header from "../component/page/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <section id="content">
        <Outlet />
      </section>
      <Footer />
    </>
  );
}
