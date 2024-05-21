import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="bg-black">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
