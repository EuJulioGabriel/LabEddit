import React from 'react'
import axios from 'axios'

import useInput from '../../hooks/useInput'

import { url, headers } from '../../constants/constants'

import { TextPost, TitlePost, ContainerPost, FormPost, 
         ContainerPublication, CreatePostButton } from "../PageLogin/StylePageLogin"

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
        const body={
            "text": form.textPost,
	        "title": form.titlePost
        }
        
        axios
        .post(`${url}/posts`, body, {
            headers
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
            <div>
                <ContainerPublication>
                    <h1>Criar publicação</h1>
                </ContainerPublication>
                <ContainerPost>
                    <FormPost onSubmit={handleSave}>
                        <TitlePost 
                            onChange={handleInputChange} 
                            name={"titlePost"} 
                            value={form.titlePost} 
                            placeholder={"Escreva o titulo do seu Post"} 
                            type={"text"} 
                            required
                        />
                        <div>
                            <TextPost 
                                onChange={handleInputChange} 
                                name={"textPost"} 
                                value={form.textPost} 
                                placeholder={"Escreva seu Post"} 
                                type={"text"} 
                                required 
                            />
                        </div>
                        <CreatePostButton>Criar Post</CreatePostButton>
                    </FormPost>
                </ContainerPost>
            </div>
    )
}

export default NewPost