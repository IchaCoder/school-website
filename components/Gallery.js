import Image from "next/image";

const Gallery = () => {
	return (
		<section className="pt-20">
			<h2 className="text-gray-500 text-base lg:text-xl font-medium uppercase text-center">
				Gallery
			</h2>
			<div className="max-w-[80%] flex flex-col sm:flex-row mx-auto mt-10 justify-between gap-4 sm:gap-0">
				<div className="w-full sm:w-[32.5%] flex flex-col gap-4">
					<Image
						src="/assets/g1.jpeg"
						alt="service"
						width="200"
						height="200"
						className="w-full object-cover "
					/>
					<Image
						src="/assets/g2.jpeg"
						alt="service"
						width="200"
						height="200"
						className="w-full object-cover "
					/>
				</div>
				<div className="w-full sm:w-[32.5%] flex flex-col gap-4">
					<Image
						src="/assets/g3.jpeg"
						alt="service"
						width="200"
						height="200"
						className="w-full object-cover "
					/>
					<Image
						src="/assets/g4.jpeg"
						alt="service"
						width="200"
						height="200"
						className="w-full object-cover "
					/>
				</div>
				<div className="w-full sm:w-[32.5%] flex flex-col gap-4">
					<Image
						src="/assets/g5.jpeg"
						alt="service"
						width="200"
						height="200"
						className="w-full object-cover "
					/>
					<Image
						src="/assets/g1.jpeg"
						alt="service"
						width="200"
						height="200"
						className="w-full object-cover "
					/>
				</div>
			</div>
		</section>
	);
};

export default Gallery;
