import React from 'react';
import Home from './components/end-user/Contact';
import About from './components/end-user/About';
import Lists from './components/manager-system/product/Lists';
import CreateProduct from './components/manager-system/product/Create';
import EndUser from './layouts/EndUser';
import ManagerSystem from './layouts/ManagerSystem';
import Contact from './components/end-user/Contact';

const routes = [
    {
        path : '/end-user',
        exact : false,
        main : () => <EndUser />
    },
    {
        path : '/system',
        exact : false,
        main : () => <ManagerSystem />
    },
    {
        path : '/end-user/contact',
        exact : false,
        main : () => <Contact />
    },
    {
        path : '/end-user/about',
        exact : false,
        main : () => <About />
    },
    {
        path : '/system/product/list',
        exact : false,
        main : () => <Lists />
    },
    {
        path : '/system/product/create',
        exact : false,
        main : () => <CreateProduct />
    }
];

export default routes;
