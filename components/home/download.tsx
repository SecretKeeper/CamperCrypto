import { Button } from "@mui/material";
import DownloadArt from "../vectors/downloadArt";

const DownloadSection = (): JSX.Element => (
	<section className="container mx-auto mt-24">
		<div className="rtl grid grid-cols-2">
			<div className="px-8">
				<h3 className="font-semibold text-2xl text-green-600 mb-6">
					دانلود ربات استاک سرف
				</h3>
				<h2 className="font-bold text-4xl leading-[55px]">
					همین الان استاک سرف رو دانلود کنید و از ترید ارزهای دیجیتال لذت ببرید!
				</h2>
				{/* <div className="flex">
					<Button variant="contained" startIcon={<DeleteIcon />}>
						Delete
					</Button>
					<Button variant="contained" startIcon={<DeleteIcon />}>
						Delete
					</Button>
					<Button variant="contained" startIcon={<DeleteIcon />}>
						Delete
					</Button>
				</div> */}
			</div>
			<div className="flex justify-center items-center">
				<DownloadArt />
			</div>
		</div>
	</section>
);

export default DownloadSection;
