import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from "./slider-setting";

const Teacher = () => {
	return (
		<div className="container mx-auto py-20">
			<p className="text-3xl lg:text-5xl font-semibold text-gray-500  mt-3">
				Meet our staff
			</p>
			<div className="mt-4">
				<Slider className="relative" {...settings}>
					<div className="flex flex-col gap-5 ">
						<div className="m-4">
							<img src="/assets/t1.svg" alt="v1" />
							<p className="text-2xl font-semibold">Christian Howard</p>
							<div className="flex items-center gap-2">
								<p className="text-gray-500">French teacher</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-5 ">
						<div className="m-4">
							<img src="/assets/t2.svg" alt="v1" />
							<p className="text-2xl font-semibold">Tristan Tate</p>
							<div className="flex items-center gap-2">
								<p className="text-gray-500">ICT teacher</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-5 ">
						<div className="m-4">
							<img src="/assets/t3.svg" alt="v1" />
							<p className="text-2xl font-semibold">John Doe</p>
							<div className="flex items-center gap-2">
								<p className="text-gray-500">English teacher</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-5 ">
						<div className="m-4">
							<img src="/assets/t1.svg" alt="v1" />
							<p className="text-2xl font-semibold">Andrew Howard</p>
							<div className="flex items-center gap-2">
								<p className="text-gray-500">Mathematics teacher</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-5 ">
						<div className="m-4">
							<img src="/assets/t2.svg" alt="v1" />
							<p className="text-2xl font-semibold">Adin Ross</p>
							<div className="flex items-center gap-2">
								<p className="text-gray-500">French teacher</p>
							</div>
						</div>
					</div>
				</Slider>
			</div>
		</div>
	);
};

export default Teacher;
