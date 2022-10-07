import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { Navigation } from "./shared/components/Navigation";
import { DrawerProvider } from "./shared/contexts";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";

export const App = () => {
	return (
		<AppThemeProvider>
			<DrawerProvider>
				<BrowserRouter>
					<Navigation>
						<AppRoutes />
					</Navigation>
				</BrowserRouter>
			</DrawerProvider>
		</AppThemeProvider>
	);
};
