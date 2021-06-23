import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

const Feed = () => {
    useProtectedPage()
    return (
        <div>
            FEED
        </div>
    )
}

export default Feed
