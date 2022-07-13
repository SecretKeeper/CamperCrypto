import Image from "next/image";

type Service = typeof services[number];

const services = [
	{
		imagePath: "/images/analytics.png.webp",
		title: "بصورت آنلاین و خودکار",
		description:
			"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است		",
	},
	{
		imagePath: "/images/calls.png.webp",
		title: "برآوردگر هزینه",
		description:
			"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است		",
	},
	{
		imagePath: "/images/record-2.png.webp",
		title: "ساخت در مقابل خرید",
		description:
			"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است		",
	},
	{
		imagePath: "/images/support.png.webp",
		title: "قیمت گذاری",
		description:
			"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است		",
	},
];

const Service = ({ imagePath, title, description }: Service): JSX.Element => (
	<div>
		<Image src={imagePath} alt="me" width="64" height="64" />
		<h3 className="text-xl font-bold mb-3 mt-2">{title}</h3>
		<p className="">{description}</p>
	</div>
);

const ServicesSection = (): JSX.Element => {
	return (
		<section className="container mx-auto my-32">
			<h2 className="text-3xl font-bold text-center mb-4">
				ویژگی های شگفت انگیز
			</h2>
			<p className="text-lg text-center first-letter:text-gray-700 mb-10">
				لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
				از طراحان گرافیک است
			</p>
			<div className="rtl grid grid-cols-4 gap-6">
				{services &&
					services.map((service: Service, index: number) => (
						<Service key={index} {...service} />
					))}
			</div>
		</section>
	);
};

export default ServicesSection;
