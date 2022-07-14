import { createTheme } from "@mui/material/styles";

const MUITheme = createTheme({
	typography: {
		fontFamily: [
			"-apple-system",
			"Vazir",
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
		].join(","),
	},
	palette: {
		primary: {
			main: "#2354e7",
		},
		secondary: {
			main: "#f44336",
		},
	},
});

export default MUITheme;
