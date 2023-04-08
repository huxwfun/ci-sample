import { useState } from 'react'

function Button({ onClick, children, ...props }) {
    const [loading, setLoading] = useState(false)
    return (
        <button
            disabled={loading}
            style={{ color: loading ? 'gray' : null }}
            className='button App-link'
            onClick={async (e) => {
                e.preventDefault()
                setLoading(true)
                try {
                    if (onClick)
                        await onClick()
                } finally {
                    setLoading(false)
                }
            }}
            target="_blank"
            rel="noopener noreferrer"
            {...props}
        >
            {loading ? 'loading' : children}
        </button>
    )
}

export default Button