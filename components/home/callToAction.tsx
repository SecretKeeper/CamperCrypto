import { MUITheme } from "@/utilities";
import { ThemeProvider } from "@emotion/react";
import { Button } from "@mui/material";

type Props = {
	title: string;
	description: string;
	buttonName: string;
	onClick?: undefined | (() => void);
};

const CallToAction = ({ title, description, onClick }: Props): JSX.Element => (
	<ThemeProvider theme={MUITheme}>
		<section className="container mx-auto mt-28">
			<div className="rtl flex items-center bg-blue-accent rounded-lg py-8 px-10">
				<div className="flex-grow text-white">
					<h3 className="text-xl font-bold mb-4">{title}</h3>
					<p>{description}</p>
				</div>
				<div className="">
					<Button
						variant="contained"
						onClick={onClick}
						className="!text-gray-800"
						style={{ backgroundColor: "#fff !important" }}
					>
						شروع کنید
					</Button>
				</div>
			</div>
		</section>
	</ThemeProvider>
);

export default CallToAction;
