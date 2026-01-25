import Header from "@/components/header/Header.jsx";
import Footer from "@/components/footer/Footer";
import NavItem from "@/components/navitem/NavItem";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <NavItem/>
      {children}
      <Footer />
    </>
  );
}