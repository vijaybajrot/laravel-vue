const lazyLoad = page => {
	return () => import(`@app/pages/${page}.vue`);
};

const routes = [
	{ path: '/', component: lazyLoad('Home/index') },
	{ path: '/about', component: lazyLoad('About') },
];

export default routes;
