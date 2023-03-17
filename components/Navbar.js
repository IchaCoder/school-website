import { useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<div className="">
			<div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
				<img src="/crest.jpg" alt="logo" className="w-[80px]" />
				<div onClick={() => setShowMenu(!showMenu)}>
					{showMenu ? (
						<MdOutlineRestaurantMenu className="text-4xl lg:hidden cursor-pointer" />
					) : (
						<CgMenuLeft className="text-4xl lg:hidden cursor-pointer" />
					)}
				</div>
				{showMenu && (
					<div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
						<p>Courses</p>
						<p>About Us</p>
						<p>Teacher</p>
						<p>Careers</p>
						<p>Blog</p>
					</div>
				)}
				<div className="lg:flex flex-col lg:flex-row justify-center hidden  lg:justify-between items-center gap-5">
					<p>Courses</p>
					<p>About Us</p>
					<p>Teacher</p>
					<p>Careers</p>
					<p>Blog</p>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
