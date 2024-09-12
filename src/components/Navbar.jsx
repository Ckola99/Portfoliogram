import { IoMoonOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";

const Navbar = () => {
  return (
		<div className="grid grid-cols-3 mx-5 mt-2">
			<IoMoonOutline className="text-xl"/>
			<h1 className="text-xl font-bold justify-self-center">kola.dev</h1>
			<FaRegBell className="text-xl justify-self-end"/>
		</div>
  );
}
export default Navbar
