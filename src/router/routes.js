import HomePage from '../views/HomePage';
import SiloPage from '../views/SiloPage';
import UretimPage from '../views/UretimPage';

export default[
    {
        path: '/silolar',
        component: SiloPage,
    },
    {
        path: '/uretim',
        component: UretimPage,
    },
    {
        path: '/homepage',
        component: HomePage,
    },
]