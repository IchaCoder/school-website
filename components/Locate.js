import dynamic from "next/dynamic";
import { MdEmail, MdCall } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import Link from "next/link";

const Locate = () => {
	const Map = dynamic(() => import("./MapBox"), {
		loading: () => <p>A map is loading</p>,
		ssr: false,
	});
	return (
		<div className="container mx-auto ">
			<div className="text-gray-500 text-base lg:text-xl font-medium uppercase text-center">
				Locate Us
			</div>
			<div className="flex flex-col md:flex-row gap-8">
				<div className="w-[70%]">
					<Map />
				</div>
				<div className="self-center">
					<p className="text-center font-semibold text-lg sm:text-2xl">
						Annas - Daisy School - North Kaneshie <br />
						Visit us at North Kaneshie - Accra <br />
					</p>
					<div className="flex justify-around mt-4">
						<Link href="mailto:ADsch@gmail.com">
							<MdEmail className="text-3xl" />
						</Link>
						<Link href="tel:0548384183">
							<MdCall className="text-3xl" />
						</Link>
						<Link href="https://api.whatsapp.com/send?phone=233550009555&text=Hello">
							<RiWhatsappFill className="text-3xl" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Locate;
