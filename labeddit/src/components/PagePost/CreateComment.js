import React, { useContext } from 'react'
import axios from 'axios'

import useInput from '../../hooks/useInput'
import { url } from '../../constants/constants'

import PostDetailContext from '../../contexts/PostDetailContext'
import requestDetailPostContext from '../../contexts/RequestDetailPostContext'

import FormCreateComment from './FormCreateComment'

function CreateComment() {
    const {form, onChange, resetInput} = useInput({
        comment: ""
    })

    const post = useContext(PostDetailContext)
    const request = useContext(requestDetailPostContext)

    const handleInputChange = (event) => {
        const {name, value} = event.target
        onChange(name, value)
    }

    const handleSave = (event) => {
        event.preventDefault()
        onClickComment()
    }

    const onClickComment = () => {
        const token = window.localStorage.getItem("token")

        const body = {
            text: form.comment
        }

        axios
        .post(`${url}/posts/${post.id}/comment`, body, {
            headers: {
                Authorization: token
            }
        })
        .then(() => {
            alert("Você comentou com sucesso")
            resetInput()
            request()
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    return (
        <FormCreateComment 
            handleInputChange= {handleInputChange}
            handleSave= {handleSave}
            form= {form}
        />
    )
}

export default CreateComment