import {SHOP_ROUTE} from "./utils/consts";
import {DEVICE_ROUTE} from "./utils/consts";
import Shop from './pages/Shop';
import DevicePage from './pages/DevicePage';
// export const authRoutes = [
//
// ]

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: Shop
  },
  {
    path: DEVICE_ROUTE + '/:id',
    Component: DevicePage
  }
]
