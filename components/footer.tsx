import Image from "next/image";

const Footer = (): JSX.Element => (
	<footer>
		<div className="rtl container grid grid-cols-5 text-white mx-auto py-20">
			<div className="col-span-2 text-white">
				<Image
					src="/images/pattern.png.webp"
					alt="logo"
					width={105}
					height={70}
				/>
				<p className="my-4">تهران.میدان موذن.سعدیه ساختمان مونا واحد 7</p>
				<p className="mb-4">تلفن: 02177889966</p>
				<p>ایمیل: info@example.com</p>
			</div>
			<div className="">
				<h4 className="text-xl mb-4">منابع</h4>
				<div className="text-gray-400 hover:cursor-pointer mb-3">
					مقالات مفید
				</div>
				<div className="text-gray-400 hover:cursor-pointer mb-3">مستندات</div>
				<div className="text-gray-400 hover:cursor-pointer mb-3">پشتیبانی</div>
			</div>
			<div className="">
				<h4 className="text-xl mb-4">مجاز</h4>
				<div className="text-gray-400 hover:cursor-pointer mb-3">
					شرایط استفاده
				</div>
				<div className="text-gray-400 hover:cursor-pointer mb-3">سیاست</div>
			</div>
			<div className="">
				<h4 className="text-xl mb-4">شرکت</h4>
				<div className="text-gray-400 hover:cursor-pointer mb-3">درباره ما</div>
				<div className="text-gray-400 hover:cursor-pointer mb-3">وبلاگ</div>
				<div className="text-gray-400 hover:cursor-pointer mb-3">مشاغل</div>
				<div className="text-gray-400 hover:cursor-pointer mb-3">
					تماس با ما
				</div>
			</div>
		</div>
		<div className="rtl container flex mx-auto py-8">
			<div className="text-white">
				تمامی حقوق برای شرکت کمپر کریپتو محفوظ است.
			</div>
			<div></div>
		</div>
	</footer>
);

export default Footer;
