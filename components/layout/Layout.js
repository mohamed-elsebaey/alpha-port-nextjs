import MainNavigation from "../header/MainNavigation";
import Footer from "../footer/Footer";

function Layout(props) {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
      <MainNavigation />
      <main className="my-12 py-4">{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
