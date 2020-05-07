const lazyLoad = page => {
    return () => import(`@app/pages/${page}.vue`);
};

const routes = [
    { path: "/", component: lazyLoad("Home") },
    { path: "/about", component: lazyLoad("About") }
];

export default routes;
