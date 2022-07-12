import Logo from "./logo";
import MenuC from "./menu";

const Navigation = (): JSX.Element => (
	<div className="container flex items-center mx-auto py-5">
		<Logo />
		<MenuC />
	</div>
);

export default Navigation;
