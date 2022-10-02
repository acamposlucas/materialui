import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { Navigation } from "./shared/components/Navigation";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";

export const App = () => {
	return (
		<AppThemeProvider>
			<BrowserRouter>
				<Navigation>
					<AppRoutes />
				</Navigation>
			</BrowserRouter>
		</AppThemeProvider>
	);
};
