import AuthActions from "./authActions";
import Logo from "./logo";
import MenuC from "./menu";

const Navigation = (): JSX.Element => (
	<div className="border-b">
		<div className="rtl container flex items-center mx-auto py-5">
			<Logo />
			<MenuC />
			<AuthActions />
		</div>
	</div>
);

export default Navigation;
