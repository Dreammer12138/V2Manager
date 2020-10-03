import Home from './components/Home'
import ConfigGuide from "./components/ConfigGuide";
import LogIn from './components/LogIn'

const routers = [
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/configGuide',
        name: 'configGuide',
        component: ConfigGuide
    },
    {
        path: '/',
        component: LogIn
    }
]

export default routers
