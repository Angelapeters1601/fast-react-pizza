import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Menu, { loader as menuLoader } from './features/menu/Menu'
import Cart from './features/cart/Cart'
import CreateOrder, {
    action as CreateOrderAction,
} from './features/order/CreateOrder'
import Order, { loader as orderLoader } from './features/order/Order'
import { action as updateOrderAction } from './features/order/UpdateOrder.jsx'
import AppLayout from './ui/AppLayout'
import Error from './ui/Error'
import Home from './ui/Home'

const router = createBrowserRouter(
    [
        {
            element: <AppLayout />,
            errorElement: <Error />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/menu',
                    element: <Menu />,
                    loader: menuLoader,
                    errorElement: <Error />,
                },
                {
                    path: '/cart',
                    element: <Cart />,
                },
                {
                    path: '/order/new',
                    element: <CreateOrder />,
                    action: CreateOrderAction,
                },
                {
                    path: '/order/:orderId',
                    element: <Order />,
                    loader: orderLoader,
                    errorElement: <Error />,
                    action: updateOrderAction,
                },
            ],
        },
    ],
    {
        basename: '/fast-react-pizza',
    }
)

function App() {
    return <RouterProvider router={router} />
}

export default App
