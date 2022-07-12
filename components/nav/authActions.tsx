import { Button, ThemeProvider } from "@mui/material";
import { MUITheme } from "@/utilities";

const AuthActions = (): JSX.Element => (
	<ThemeProvider theme={MUITheme}>
		<div className="flex flex-grow items-center justify-end">
			<div className="hover:cursor-pointer hover:text-blue-accent mr-5">
				Sign In
			</div>
			<Button variant="contained">Try it for free</Button>
		</div>
	</ThemeProvider>
);

export default AuthActions;
