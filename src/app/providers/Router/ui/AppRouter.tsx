import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
    type AppRoutesProps,
    routeConfig,
} from 'app/providers/Router/config/routeConfig';


const AppRouter = () => {
    const renderWithWrapper = React.useCallback((route: AppRoutesProps) => {

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.element}
            />
        );
    }, []);


    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default React.memo(AppRouter);
