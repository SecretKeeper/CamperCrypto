import { Button, ThemeProvider } from "@mui/material";
import { MUITheme } from "@/utilities";

const AuthActions = (): JSX.Element => (
	<ThemeProvider theme={MUITheme}>
		<div className="rtl flex flex-grow items-center justify-end">
			<div className="hover:cursor-pointer hover:text-blue-accent ml-5">
				ورود
			</div>
			<Button variant="contained">رایگان شروع کنید</Button>
		</div>
	</ThemeProvider>
);

export default AuthActions;
