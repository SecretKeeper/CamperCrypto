import SecondIntroArt from "../vectors/secondIntoArt";

const SecondIntro = (): JSX.Element => (
	<section className="container mx-auto mt-20">
		<div className="rtl grid grid-cols-2">
			<div className="flex flex-col justify-center">
				<h3 className="text-4xl mb-10">
					موضوع کرایپ تو لند بهترین برای آی سی ا شما است
				</h3>
				<p className="text-lg mb-4">
					لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
					از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
					سطرآنچنان که لازم است.
				</p>
				<ul className="text-lg list-disc mr-4">
					<li>لورم ایپسوم متن ساختگی با تولید سادگی</li>
					<li>لورم ایپسوم متن ساختگی با تولید سادگی</li>
					<li>لورم ایپسوم متن ساختگی با تولید سادگی</li>
				</ul>
			</div>
			<div className="flex items-center justify-center">
				<SecondIntroArt />
			</div>
		</div>
	</section>
);

export default SecondIntro;
