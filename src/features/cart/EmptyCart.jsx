import LinkButton from './../../ui/LinkButton'

function EmptyCart() {
    return (
        <div className="px-3 py-3">
            <LinkButton to="/menu">&larr; Back to menu</LinkButton>

            <p className="font-semi-bold mt-7 text-yellow-800">
                Your cart is still empty. Start adding some pizzas :)
            </p>
        </div>
    )
}

export default EmptyCart
