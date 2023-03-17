import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
	return (
		<div className="container mx-auto my-10 ">
			<div className="bg-[#fff5f1] px-6 lg:px-16 py-10 rounded-3xl">
				<Navbar />
				<div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
					<div className="flex flex-col gap-5 lg:gap-10 mt-12">
						<p className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
							Giving a Unique approach <br className="lg:flex hidden" /> to
							Teaching <br className="lg:flex hidden" /> and learning
						</p>
						<p className="text-sm sm:text-base lg:text-lg text-gray-500">
							A serene environment for your ward
							<br className="lg:flex hidden" /> equiped with modern
							infrastructure
						</p>
						<button className="btn btn-sm lg:btn-lg bg-[#524fd5] text-white rounded-full border-none w-36 lg:w-44 capitalize">
							Get Started
						</button>
					</div>
					<img
						src="/hero.png"
						alt="hero_img"
						className="max-w-full rounded-3xl md:max-w-[650px]"
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
