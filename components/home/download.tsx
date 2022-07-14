import { MUITheme } from "@/utilities";
import { ThemeProvider } from "@emotion/react";
import { Button } from "@mui/material";
import Image from "next/image";
import DownloadArt from "../vectors/downloadArt";

const DownloadSection = (): JSX.Element => (
	<ThemeProvider theme={MUITheme}>
		<section className="container mx-auto mt-10">
			<div className="rtl grid grid-cols-2">
				<div className="px-8">
					<h3 className="font-semibold text-2xl text-green-600 mb-6">
						دانلود اپلیکیشن کریپتو کمپر
					</h3>
					<h2 className="font-bold text-4xl leading-[55px]">
						همین الان کریپتو کمپر رو دانلود کنید و از ترید ارزهای دیجیتال لذت
						ببرید!
					</h2>
					<div className="flex mt-16">
						<Button
							variant="contained"
							endIcon={
								<Image
									src={`/images/apple.svg`}
									width={30}
									height={30}
									alt="Download From App Store"
								/>
							}
							className="!ml-4"
						>
							<div className="pl-4">دانلود از اپ استور</div>
						</Button>
						<Button
							variant="contained"
							endIcon={
								<Image
									src={`/images/google-play.svg`}
									width={30}
									height={30}
									alt="Download From Google Play"
								/>
							}
						>
							<div className="pl-4">دانلود از گوگل پلی</div>
						</Button>
					</div>
				</div>
				<div className="flex justify-center items-center">
					<DownloadArt />
				</div>
			</div>
		</section>
	</ThemeProvider>
);

export default DownloadSection;
