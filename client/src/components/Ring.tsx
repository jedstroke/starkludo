import React from 'react'

const Ring = () => {
    return (
        <span className='relative h-7 w-7 rounded-full border border-secondary'>
            <span className='absolute h-4 w-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-secondary'>
            </span>
        </span>
    )
}

export default Ring