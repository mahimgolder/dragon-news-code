import React from 'react';
import { Outlet } from 'react-router-dom';

const MainSection = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainSection;