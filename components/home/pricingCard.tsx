import { Done } from "@mui/icons-material";
import {
	Button,
	Card,
	CardActionArea,
	CardContent,
	Typography,
} from "@mui/material";
import { PricingCard } from "./pricing";

const PricingCard = ({
	plan,
	features,
	price,
	period,
}: PricingCard): JSX.Element => (
	<Card sx={{ maxWidth: 345 }}>
		<CardContent className="rtl px-8">
			<div className="font-vazir text-2xl mb-4">{plan}</div>
			<Typography
				gutterBottom
				variant="h2"
				component="div"
				className="font-vazir text-3xl mb-6"
			>
				{price} {period && <span className="text-lg">/ {period}</span>}
			</Typography>
			<ul className="mt-6">
				{features &&
					features.map((feature, index: number) => (
						<li key={index} className="text-base mb-3">
							<Done /> {feature}
						</li>
					))}
			</ul>
			<Button className="mt-4" variant="contained">
				شروع کنید
			</Button>
		</CardContent>
	</Card>
);

export default PricingCard;
