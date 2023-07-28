import {type RouteProps} from 'react-router-dom';
import {MainPage} from "pages/MainPage";


export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    redirect?: string;
};

export enum AppRoutes {
    MAIN = 'main',
    // Last

}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
        authOnly: false,
        redirect: RoutePath.main,
    },
};
