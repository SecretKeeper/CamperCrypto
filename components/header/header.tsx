import HeaderArt from "../vectors/headerArt";
import HeaderIntro from "./intro";

const Header = (): JSX.Element => (
	<header className="container flex pt-20 mx-auto">
		<div className="w-6/12">
			<HeaderArt />
		</div>
		<HeaderIntro />
	</header>
);

export default Header;
