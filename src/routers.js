import Home from './components/Home'
import ConfigGuide from "./components/ConfigGuide";
import LogIn from './components/LogIn'
import Status from './components/Status'
import Config from './components/Config'

const routers = [
    {
        path: '/home',
        name: 'home',
        component: Home,
        children: [
            { path: '', component: Status },
            { path: 'Status', component: Status },
            { path: 'Config', component: Config }
        ]
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
