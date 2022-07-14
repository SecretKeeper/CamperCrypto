import Image from "next/image";
import { MUITheme } from "@/utilities";
import { ThemeProvider } from "@emotion/react";
import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	Chip,
} from "@mui/material";
import { West } from "@mui/icons-material";

type Announcement = {
	image: string;
	title: string;
	actionText: string;
	single?: boolean;
};

const announcements = [
	{
		image:
			"https://images.unsplash.com/photo-1636467472048-99be973392b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
		title: "امروز را با یک دوره آزمایشی رایگان سفارشی امتحان کنید",
		actionText: "جزئیات بیشتر",
		single: true,
	},
	{
		image:
			"https://images.unsplash.com/photo-1622020457014-aed1cc44f25e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
		title: "امروز را با یک دوره آزمایشی رایگان سفارشی امتحان کنید",
		actionText: "جزئیات بیشتر",
	},
	{
		image:
			"https://images.unsplash.com/photo-1641580543317-4cea85891afe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
		title: "امروز را با یک دوره آزمایشی رایگان سفارشی امتحان کنید",
		actionText: "جزئیات بیشتر",
	},
];

const Announcement = ({
	image,
	title,
	actionText,
	single = false,
}: Announcement): JSX.Element => (
	<ThemeProvider theme={MUITheme}>
		<Card className="rtl shadow-none border rounded !p-0">
			<CardActions className="!p-0 !block">
				<CardContent className="!p-0">
					<Image
						alt="title"
						src={image}
						width={900}
						height={single ? 900 : 500}
						layout="responsive"
						className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
					/>
					<div className="px-4 pb-6">
						<h1 className="font-bold text-xl mt-4">{title}</h1>
						<div className="text-blue-accent hover:cursor-pointer mt-6">
							{actionText} <West />
						</div>
					</div>
				</CardContent>
			</CardActions>
		</Card>
	</ThemeProvider>
);

const Announcements = (): JSX.Element => (
	<section className="container mx-auto mt-28">
		<div className="rtl grid grid-rows-2 grid-flow-col gap-4">
			<div className="col-span-2 row-span-3">
				<Announcement {...announcements[0]} />
			</div>
			<div className="col-span-1 mb-10">
				<Announcement {...announcements[1]} />
			</div>
			<div className="row-span-2 col-span-1">
				<Announcement {...announcements[2]} />
			</div>
		</div>
	</section>
);

export default Announcements;
