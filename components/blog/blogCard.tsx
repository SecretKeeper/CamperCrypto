import Image from "next/image";
import { Card, CardActionArea, CardContent, Chip } from "@mui/material";
import { Blog } from "@/components/home/blogs";
import { ThemeProvider } from "@emotion/react";
import { MUITheme } from "@/utilities";

const Blog = ({ title, category, image }: Blog): JSX.Element => (
	<ThemeProvider theme={MUITheme}>
		<Card className="rtl shadow-none border rounded !p-0">
			<CardActionArea className="!p-0">
				<CardContent className="!p-0">
					<Image
						alt="title"
						width={500}
						height={300}
						src={image}
						className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
					/>
					<div className="px-4 pb-4">
						<h1 className="font-bold text-lg">{title}</h1>
						<Chip
							label={category}
							className="!bg-blue-accent !text-white mt-4"
						/>
					</div>
				</CardContent>
			</CardActionArea>
		</Card>
	</ThemeProvider>
);

export default Blog;
