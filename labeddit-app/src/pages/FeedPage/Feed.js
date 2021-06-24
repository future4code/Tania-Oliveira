import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import useResquestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import PostCard from '../../components/PostCard/PostCard'
import { PostListContainer, AddPostButton } from './styledFeed'
import { useHistory } from 'react-router-dom'
// import { Add } from '@material-ui/icons'
import { goToPost } from '../../routes/coordinator'


const Feed = () => {
    useProtectedPage()

    const history = useHistory()
    const posts = useResquestData([], `${BASE_URL}/posts`)

    const onClickCard = (id) =>{
        goToPost(history, id)
        
    }

    const postCards = posts.map((post) => {
        

        return (
            <PostCard
                key={post.id}
                title={post.title}
                image={post.image}
                onClick={()=>onClickCard(post.id)}
                />
                )
            })
                
    return (
        
        <PostListContainer>
            {postCards}
            
        </PostListContainer >
    )
}

export default Feed
{/* <AddPostButton color={'primary'} onClick={() => goToPost(history)} >
                <Add />
            </AddPostButton> */}