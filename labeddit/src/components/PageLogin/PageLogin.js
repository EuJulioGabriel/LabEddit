import React, { useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import { url } from '../../constants/constants'

import useInput from '../../hooks/useInput'

import FormPageLogin from './FormPageLogin'

function PageLogin() {
    const history = useHistory()
    const {form, onChange, resetInput} = useInput({
        email: "",
        password: ""
    })

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        if (token !== null) {
            history.replace("/feed")
        }
    }, [])

    const handleInputChange = (event) => {
        const {name, value} = event.target
        onChange(name, value)
    }

    const handleSave = (event) => {
        event.preventDefault()
        onClickLogin()
    }

    const onClickLogin = () => {
        const body = {
            email: form.email,
            password: form.password
        }

        axios
        .post(`${url}/login`, body)
        .then((response) => {
            window.localStorage.setItem("token", response.data.token)
            resetInput()
            history.replace("/feed")
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    const goToSignUp = () => {
        history.push("/signup")
    }
    
    return (
        <FormPageLogin 
            handleSave= {handleSave}
            handleInputChange= {handleInputChange}
            form= {form}
            goToSignUp= {goToSignUp}
        />
    )
}

export default PageLogin