import { Link } from 'react-router-dom'

function Button({ children, disabled, to, type, onClick }) {
    const base =
        'duration: 400 text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed'

    const styles = {
        primary: base + 'px-4 py-3 sm:px-4 sm:py-2 md:px-6 md:py-4',
        small: base + 'py-2 px-4 sm:px-4 sm:py-2 md:px-5 md:py-2.5 text-xs',
        soldOut:
            base +
            'py-2 sm:px-4 sm:py-2 md:px-5 md:py-2.5 text-xs opacity-70 grayscale cursor-not-allowed',
        secondary:
            'duration: 400 text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors hover:bg-stone-300 hover:text-stone-800   focus:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5',
        round: base + 'py-1 px-2.5 sm:px-2.5 sm:py-2 md:px-3.5 md:py-2 text-sm',
    }

    if (to)
        return (
            <Link to={to} className={styles[type]}>
                {children}
            </Link>
        )

    if (onClick)
        return (
            <button
                disabled={disabled}
                onClick={onClick}
                className={styles[type]}
            >
                {children}
            </button>
        )

    return (
        <button disabled={disabled} to={to} className={styles[type]}>
            {children}
        </button>
    )
}

export default Button
