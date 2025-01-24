import Button from '../../ui/Button.jsx'
import { increaseItemQuantity, decreaseItemQuantity } from './cartSlice.js'
import { useDispatch } from 'react-redux'

function UpdateQuantityItem({ pizzaId, currentQuantity }) {
    const dispatch = useDispatch()

    return (
        <div className="flex items-center gap-1 md:gap-3">
            <Button
                type="round"
                onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
            >
                -
            </Button>
            <span className="gap-4 px-1 text-sm font-medium">
                {currentQuantity}
            </span>
            <Button
                type="round"
                onClick={() => dispatch(increaseItemQuantity(pizzaId))}
            >
                +
            </Button>
        </div>
    )
}

export default UpdateQuantityItem
