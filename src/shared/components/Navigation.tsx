import {
	Avatar,
	Divider,
	Drawer,
	Icon,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { ReactNode } from "react";
import { useDrawerContext } from "../contexts";

interface INavigation {
	children: ReactNode;
}

export const Navigation = ({ children }: INavigation) => {
	const theme = useTheme();
	const isScreenMobile = useMediaQuery(theme.breakpoints.down("sm"));

	const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

	return (
		<>
			<Drawer
				open={isDrawerOpen}
				variant={isScreenMobile ? "temporary" : "permanent"}
				onClose={toggleDrawerOpen}>
				<Box
					width={theme.spacing(28)}
					height="100%"
					display="flex"
					flexDirection="column">
					<Box
						width="100%"
						height={theme.spacing(20)}
						display="flex"
						alignItems="center"
						justifyContent="center">
						<Avatar
							alt="Remy Sharp"
							src="https://github.com/acamposlucas.png"
							sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
						/>
					</Box>
					<Divider />
					<Box flex={1}>
						<List component="nav">
							<ListItemButton>
								<ListItemIcon>
									<Icon>home</Icon>
								</ListItemIcon>
								<ListItemText primary="Página inicial" />
							</ListItemButton>
						</List>
					</Box>
				</Box>
			</Drawer>
			<Box height="100vh" marginLeft={isScreenMobile ? 0 : theme.spacing(28)}>
				{children}
			</Box>
		</>
	);
};
