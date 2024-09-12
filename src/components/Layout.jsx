import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {

	return (
		<div>
			<ScrollToTop />
			<Navbar/>
			<main>
				<Outlet />
			</main>
		</div>
	);
};
export default Layout;
