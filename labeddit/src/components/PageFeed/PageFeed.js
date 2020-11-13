import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import { url } from '../../constants/constants'

import NewPost from './NewPost'
import CardPost from './CardPost'

import { ContainerMinimumHeight } from "../PageLogin/StylePageLogin"

function PageFeed() {
    const [post, setPost]= useState([])
    
    const history = useHistory()
    
    useEffect(() => {
        const token = window.localStorage.getItem("token")
        
        if (token === null) {
            history.push("/")
        }
        
    }, [history])

    useEffect(() => {
        getPosts()
    }, [])
    
    const goToPost = (idPost) => {
        history.push(`/post/${idPost}`)
    }
    
    const getPosts = () => {
        const token = window.localStorage.getItem("token")

        axios
        .get(`${url}/posts`, {
            headers: {
                Authorization: token
            }
        })
        .then(response=>{
            setPost(response.data.posts)
        })
        .catch((error)=>{
            alert(error.message)
        })
    }
    
    return (
        <ContainerMinimumHeight>
            <NewPost 
                getPosts={getPosts}
            />
            <CardPost
                getPosts={getPosts} 
                post={post}
                goToPost={goToPost}
            />
        </ContainerMinimumHeight>
    )
}

export default PageFeed