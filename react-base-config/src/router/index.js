import asyncComponent from "../utils/asyncComponent"

const routers = [
    {
        path:"/",
        exact:true,
        titleName:"首页",
        name:"home",
        component:asyncComponent( () => import(/* webpackChunkName: "home" */"../pages/home/home"))
    },
    {
        path:"/list",
        titleName:"列表",
        name:"list",
        component:asyncComponent( () => import(/* webpackChunkName: "list" */"../pages/list/list"))
    },
    {
        path:"/hook",
        titleName:"HOOK",
        name:"hook",
        component:asyncComponent( () => import(/* webpackChunkName: "hook" */"../pages/hook/hook"))
    }
]
export default  routers