import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import  useResquestData  from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import PostCard from '../../components/PostCard/PostCard'
import { PostListContainer } from './styledPost'

const Post = () => {
    useProtectedPage()

    const posts = useResquestData([], `${BASE_URL}/posts`)
    const postCards = posts.map((post) => {
        return (
            <PostCard
                key={post.post_id}
                title={post.title}
                image={post.image}
            />
        )
    })

    return (
        <PostListContainer>
            {postCards}
        </PostListContainer>
    )
}

export default Post
