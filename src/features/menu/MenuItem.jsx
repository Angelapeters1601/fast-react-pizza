import { formatCurrency } from '../../utils/helpers.js'
import Button from '../../ui/Button.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, getCurrentQuantityById } from '../cart/cartSlice.js'
import DeleteItem from '../cart/DeleteItem.jsx'
import UpdateQuantityItem from '../cart/updateQuantityItem.jsx'

/*eslint-disable*/
function MenuItem({ pizza }) {
    const { id, name, unitPrice, quantity, ingredients, soldOut, imageUrl } = pizza

    const currentQuantity = useSelector(getCurrentQuantityById(id))
    // console.log(currentQuantity)
    const isInCart = currentQuantity > 0

    const dispatch = useDispatch()

    const handleAddToCart = () => {
        // console.log(id)
        const newItem = {
            pizzaId: id,
            name: name,
            quantity: 1,
            unitPrice,
            totalPrice: unitPrice * 1,
        }
        dispatch(addItem(newItem))
    }

    return (
        <li className="flex gap-4 py-2">
            <img
                src={imageUrl}
                alt={name}
                className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
            />
            <div className="pt flex grow flex-col pt-0.5">
                <p className="font-medium">{name}</p>
                <p className="text-sm capitalize italic text-stone-500">
                    {ingredients.join(', ')}
                </p>
                <div className="mt-auto flex items-center justify-between">
                    {!soldOut ? (
                        <p className="text-sm">{formatCurrency(unitPrice)}</p>
                    ) : (
                        <p className="text-sm font-medium uppercase text-stone-500">
                            Sold out
                        </p>
                    )}
                    {/* chose btw rendering button conditionally on soldout or assigning class */}
                    {isInCart && (
                        <div className="flex items-center gap-3 sm:gap-8">
                            <UpdateQuantityItem
                                pizzaId={id}
                                currentQuantity={currentQuantity}
                            />
                            <DeleteItem pizzaId={id} />
                        </div>
                    )}

                    {!soldOut && !isInCart && (
                        <Button
                            type={`${soldOut ? 'soldOut' : 'small'}`}
                            onClick={handleAddToCart}
                        >
                            Add to cart
                        </Button>
                    )}
                </div>
            </div>
        </li>
    )
}
/*eslint-enable*/

export default MenuItem
