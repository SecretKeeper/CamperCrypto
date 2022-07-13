import { MUITheme } from "@/utilities";
import { ThemeProvider } from "@emotion/react";
import { West } from "@mui/icons-material";
import { Button } from "@mui/material";
import Blog from "../blog/blogCard";

export type Blog = typeof blogs[number];

const blogs = [
	{
		title: " قابلیت‌های حریم خصوصی موافق هستید قدرت ساخت در مقابل خرید",
		category: "رمز ارز",
		image:
			"https://images.unsplash.com/photo-1631603090989-93f9ef6f9d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80",
	},
	{
		title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
		category: "رمز ارز",
		image:
			"https://images.unsplash.com/photo-1609554496796-c345a5335ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80",
	},
	{
		title: "بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",
		category: "رمز ارز",
		image:
			"https://images.unsplash.com/photo-1638913970961-1946e5ee65c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80",
	},
];

const Blogs = (): JSX.Element => (
	<ThemeProvider theme={MUITheme}>
		<section className="container mx-auto">
			<div className="rtl flex items-center">
				<div className="flex-grow">
					<h1 className="font-bold text-4xl mb-6">
						بازار خود را با اطمینان رشد دهید
					</h1>
					<p className="mb-10">
						لورم ایپسوم متن ساختگی با تولید از صنعت چاپ و با استفاده از طراحان
						گرافیک است
					</p>
				</div>

				<Button variant="text" className="text-base">
					مشاهده تمام بلاگ ها
					<West className="mr-2" />
				</Button>
			</div>
			<div className="grid grid-cols-3 gap-10">
				{blogs &&
					blogs.map((blog: Blog, index: number) => (
						<Blog key={index} {...blog} />
					))}
			</div>
		</section>
	</ThemeProvider>
);

export default Blogs;
