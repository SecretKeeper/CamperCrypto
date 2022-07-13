import { ReactNode } from "react";
import Navigation from "@/components/nav/nav";
import Footer from "@/components/footer";

type Props = {
	children: ReactNode;
};

const BaseLayout = ({ children }: Props): JSX.Element => {
	return (
		<>
			<Navigation />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default BaseLayout;
