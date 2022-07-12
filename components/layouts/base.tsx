import { ReactNode } from "react";
import Navigation from "@/components/nav/nav";

type Props = {
	children: ReactNode;
};

const BaseLayout = ({ children }: Props): JSX.Element => {
	return (
		<>
			<Navigation />
			<main className="flex justify-center">
				<div className="container">{children}</div>
			</main>
			<style jsx>
				{`
					main {
						background-color: #131417;
					}
				`}
			</style>
		</>
	);
};

export default BaseLayout;
