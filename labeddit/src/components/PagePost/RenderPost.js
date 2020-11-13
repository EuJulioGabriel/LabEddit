import React, { useContext } from 'react'
import axios from 'axios'

import { url } from '../../constants/constants'

import PostDetailContext from '../../contexts/PostDetailContext'
import RequestDetailPostContext from '../../contexts/RequestDetailPostContext'

import { ContainerCard, ContainerCards, ContainerInfo } from "../PageLogin/StylePageLogin"

import ButtonsVotePost from './ButtonsVotePost'

function RenderPost() {
    const post = useContext(PostDetailContext)
    const requestDetailPostContext = useContext(RequestDetailPostContext)

    const requestVotePost = (body, idPost) => {
        const token = window.localStorage.getItem("token")

        axios
        .put(`${url}/posts/${idPost}/vote`, body, {
            headers: {
                Authorization: token
            }
        })
        .then(() => {
            requestDetailPostContext()
        })
        .catch((error) => {
            alert(error.message)
        })

    }

    return (
         <ContainerCards>
            <ContainerCard>
                <ContainerInfo>
                    <h2>{post.username}</h2>
                    <div>
                        <h3>{post.title}</h3>
                        <p>{post.text}</p>
                    </div>
                    <p>Comentários: {post.commentsCount}</p>
                </ContainerInfo>
                <ButtonsVotePost 
                    post= {post}
                    requestVotePost= {requestVotePost}
                />
            </ContainerCard>
        </ContainerCards>
    )
}

export default RenderPost