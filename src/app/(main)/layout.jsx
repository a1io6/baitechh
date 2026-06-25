import FloatingButton from "../../components/handlClick/HandleClick";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import NavItem from "../../components/navitem/NavItem";
import { Suspense } from "react";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <NavItem/>
      </Suspense>
        <FloatingButton/>
      {children}
      <Footer/>
    </>
  );
}
