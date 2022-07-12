import { Button, ThemeProvider } from "@mui/material";
import { MUITheme } from "@/utilities";

const HeaderIntro = (): JSX.Element => (
	<ThemeProvider theme={MUITheme}>
		<div className="text-right w-6/12">
			<h1 className="text-5xl leading-[60px] font-bold mb-5">
				سرمایه گذاری برای آینده از فن آوری کسب و کار
			</h1>
			<p className="leading-8 mb-5">
				لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
				از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
				سطرآنچنان که لازم است
			</p>
			<Button variant="contained">همین حالا شروع کنید</Button>
		</div>
	</ThemeProvider>
);

export default HeaderIntro;
