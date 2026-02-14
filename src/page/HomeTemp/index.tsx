import { Outlet } from "react-router-dom";
import Header from "../../cmps/header/header";
import Footer from "../../cmps/footer/footer";

export default function index() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
