import { MUITheme } from "@/utilities";
import { ThemeProvider } from "@emotion/react";
import PricingCard from "./pricingCard";

const pricingCards = [
	{
		plan: "شخصی",
		price: "رایگان",
		period: "",
		recommended: false,
		features: [
			"پشتیبانی ۲۴/۷",
			"میزبانی سفارشی",
			"۱۰ حساب کاربری",
			"دسترسی نامحدود",
			"پشتیبانی ۲۴/۷",
			"میزبانی سفارشی",
			"۱۰ حساب کاربری",
			"دسترسی نامحدود",
		],
	},
	{
		plan: "شخصی",
		price: "دو میلیون تومان",
		period: "ماهانه",
		recommended: true,
		features: [
			"پشتیبانی ۲۴/۷",
			"میزبانی سفارشی",
			"۱۰ حساب کاربری",
			"دسترسی نامحدود",
			"پشتیبانی ۲۴/۷",
			"میزبانی سفارشی",
			"۱۰ حساب کاربری",
			"دسترسی نامحدود",
		],
	},
	{
		plan: "شخصی",
		price: "ده میلیون تومان",
		period: "ماهانه",
		recommended: false,
		features: [
			"پشتیبانی ۲۴/۷",
			"میزبانی سفارشی",
			"۱۰ حساب کاربری",
			"دسترسی نامحدود",
			"پشتیبانی ۲۴/۷",
			"میزبانی سفارشی",
			"۱۰ حساب کاربری",
			"دسترسی نامحدود",
		],
	},
];

export type PricingCard = typeof pricingCards[number];

const Pricing = (): JSX.Element => {
	return (
		<ThemeProvider theme={MUITheme}>
			<section className="container mt-28 mx-auto">
				<h3 className="text-4xl text-center font-bold mb-10">
					برنامه های قیمت گذاری عالی
				</h3>
				<p className="text-lg text-center mb-4">
					لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
					از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و .
					سطرآنچنان که لازم است
				</p>
				<p className="text-lg text-center">
					لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
					از طراحان گرافیک است.
				</p>
				<div className="grid grid-cols-3 mt-16">
					{pricingCards &&
						pricingCards.map((card: PricingCard, index: number) => (
							<PricingCard key={index} {...card} />
						))}
				</div>
			</section>
		</ThemeProvider>
	);
};

export default Pricing;
