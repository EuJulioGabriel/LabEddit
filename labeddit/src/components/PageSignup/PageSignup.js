import React from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

import { url } from '../../constants/constants'

import useInput from '../../hooks/useInput'

import { ContainerPageSignup, BackButton } from '../PageLogin/StylePageLogin'

import FormPageSignup from './FormPageSignup'
  
function PageSignup() {
    const { form, onChange, resetInput } = useInput({
        userName: "",
        email: "",
        password: ""
    })

    const history = useHistory()

    const handleInputChange = (event) => {
        const { name, value} = event.target
    
        onChange(name, value)
    }

    const handleSave = (event) => {
        event.preventDefault()
        signup()
    }

    const goToLogin = () => {
        history.push("/")
    }

    const signup = () => {
        const body ={
            "email": form.email,
            "password": form.password,
            "username": form.userName
        }
        axios
        .post(`${url}/signup`, body)
        .then((response) => {
            window.localStorage.setItem("token", response.data.token)
            history.push("/")
            resetInput()
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    return (
        <ContainerPageSignup>
            <BackButton onClick={goToLogin}>Voltar</BackButton>
            <FormPageSignup 
                handleInputChange={handleInputChange}
                handleSave={handleSave}
                form={form}
            />
        </ContainerPageSignup>
    )
}

export default PageSignup