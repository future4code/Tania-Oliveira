import React from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/urls'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { ScreenContainer, PostContainer } from './styledPost'
import Typography from '@material-ui/core/Typography'
import Loading from '../../components/Loading/Loading'

const Post = () => {
    useProtectedPage()
    const params = useParams()
    const post = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
    


    return (
        <div>
            {post[0] && <h1>{post[0].body}</h1>}
        </div>
    )
}

export default Post
// <ScreenContainer>
//     {post ?
//         <PostContainer>
//             <p>{post.body}</p>
//             <Typography gutterBottom align={'center'} variant={'h5'} color={'primary'}>{post.body}</Typography>
//             <Typography align={'center'}>{post.description}</Typography>
//         </PostContainer>
//         :
//         <Loading />
//     }
// </ScreenContainer>
