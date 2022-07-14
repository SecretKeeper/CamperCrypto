import { Done } from "@mui/icons-material";
import { Button, Card, CardContent } from "@mui/material";
import { PricingCard } from "./pricing";

const PricingCard = ({
	plan,
	features,
	price,
	period,
	recommended,
}: PricingCard): JSX.Element => (
	<Card sx={{ maxWidth: 345 }}>
		<CardContent className={`rtl px-8 ${recommended && "bg-blue-accent"}`}>
			<div
				className={`font-vazir ${
					recommended ? "text-white" : "text-black"
				} text-xl mb-2`}
			>
				{plan}
			</div>
			<div
				className={`${recommended ? "text-gray-200" : "text-gray-400"} mb-10`}
			>
				لورم ایپسوم متن ساختگی با تولید سادگی
			</div>
			<h2
				className={`font-vazir !text-2xl ${
					recommended ? "text-white" : "text-black"
				} mb-6`}
			>
				{price} {period && <span className="!text-lg">/ {period}</span>}
			</h2>
			<Button
				className={`w-full ${
					recommended ? "!text-black !bg-white" : "text-white"
				} my-4 py-3`}
				variant="contained"
			>
				همین حالا شروع کنید
			</Button>
			<ul className="mt-6">
				{features &&
					features.map((feature, index: number) => (
						<li
							key={index}
							className={`text-base ${
								recommended ? "text-white" : "text-gray-800"
							} mb-5`}
						>
							<Done className="text-green-400" /> {feature}
						</li>
					))}
			</ul>
		</CardContent>
	</Card>
);

export default PricingCard;
