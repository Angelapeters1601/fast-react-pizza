import { formatCurrency } from './../../utils/helpers'
import DeleteItem from './DeleteItem.jsx'
import UpdateQuantityItem from './updateQuantityItem'
import { useSelector } from 'react-redux'
import { getCurrentQuantityById } from './cartSlice.js'

function CartItem({ item }) {
    const { pizzaId, name, quantity, unitPrice } = item

    const currentQuantity = useSelector(getCurrentQuantityById(pizzaId))

    return (
        <li className="py-3 sm:flex sm:items-center sm:justify-between">
            <p className="mb-1 sm:mb-0">
                {quantity}&times; {name}
            </p>
            <div className="flex items-center justify-between sm:gap-6">
                <p className="text-sm font-bold">{formatCurrency(unitPrice)}</p>

                <UpdateQuantityItem
                    pizzaId={pizzaId}
                    currentQuantity={currentQuantity}
                />
                <DeleteItem pizzaId={pizzaId} />
            </div>
        </li>
    )
}

export default CartItem
