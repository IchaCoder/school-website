import React from "react";

const Values = () => {
	return (
		<div className="container mx-auto py-20">
			<p className="text-base lg:text-xl font-medium text-gray-500 text-center">
				WHY CHOOSE US
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-16 py-20">
				<div className="flex flex-col gap-5 items-center">
					<img src="/assets/v1.svg" alt="v1" />
					<p className="text-2xl font-semibold">Speaking clubs</p>
					<p className="text-gray-500 text-center">
						In our school you will practice <br /> your speaking skills and just
						get a lot of positive emotions!
					</p>
				</div>
				<div className="flex flex-col gap-5 items-center">
					<img src="/assets/v2.svg" alt="v1" />
					<p className="text-2xl font-semibold">Small Class Size</p>
					<p className="text-gray-500 text-center">
						Small class size in the school <br /> enables students to get the
						attention they need
					</p>
				</div>{" "}
				<div className="flex flex-col gap-5 items-center">
					<img src="/assets/v3.svg" alt="v1" />
					<p className="text-2xl font-semibold">Highly Qualified Staff</p>
					<p className="text-gray-500 text-center">
						In our school, the staff are highly qualified. <br /> They have
						acquired the best certificates from <br /> the best schools in Ghana
					</p>
				</div>
				<div className="flex flex-col gap-5 items-center">
					<img src="/assets/v1.svg" alt="v1" />
					<p className="text-2xl font-semibold">Outstanding French Program</p>
					<p className="text-gray-500 text-center">
						With our new french syllabus <br /> We embed the french language
						into the students expert teachers
					</p>
				</div>
			</div>
		</div>
	);
};

export default Values;
