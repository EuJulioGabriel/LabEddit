import React from 'react'
import axios from 'axios'

import useInput from '../../hooks/useInput'

import { url } from '../../constants/constants'

import { TextPost, TitlePost, ContainerPost, FormPost, 
         ContainerPublication, CreatePostButton, ContainerCreatePost } from "../PageLogin/StylePageLogin"

function NewPost(props) {
    const { form, onChange, resetInput } = useInput({
        textPost: "",
        titlePost: ""
    })

    const handleInputChange = event => {
        const {name, value} = event.target
        
        onChange(name, value)
    }
    
    const handleSave = (event) => {
        event.preventDefault()
        createPost()
    }

    const createPost = () => {
        const token = window.localStorage.getItem("token")

        const body={
            "text": form.textPost,
	        "title": form.titlePost
        }
        
        axios
        .post(`${url}/posts`, body, {
            headers: {
                Authorization: token
            }
        })
        .then(() => {
            props.getPosts()
            resetInput()
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    return (
            <>
                <ContainerPublication>
                    <h1>Criar publicação</h1>
                </ContainerPublication>
                <ContainerPost>
                    <FormPost onSubmit={handleSave}>
                        <ContainerCreatePost>
                            <TitlePost 
                                onChange={handleInputChange} 
                                name={"titlePost"} 
                                value={form.titlePost} 
                                placeholder={"Digite aqui o titulo do seu Post"} 
                                type={"text"} 
                                required
                            />
                            <TextPost 
                                onChange={handleInputChange} 
                                name={"textPost"} 
                                value={form.textPost} 
                                placeholder={"Digite aqui seu Post."} 
                                type={"text"} 
                                required 
                            />
                            <CreatePostButton>Criar Post</CreatePostButton>
                        </ContainerCreatePost>
                    </FormPost>
                </ContainerPost>
            </>
    )
}

export default NewPost