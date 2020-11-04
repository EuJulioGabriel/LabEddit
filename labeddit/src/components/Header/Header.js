import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { ContainerHeader, LogoutButton, Logo } from './StyleHeaders'

function Header() {
    const pathParams = useParams()
    const history = useHistory()
    
    const token = window.localStorage.getItem("token")

    const logout = () => {
        window.localStorage.clear()
        history.push("/")
    }

    useEffect(() => {
        renderInScreen()
    }, [pathParams])

    const renderInScreen = () => {
        if (token !== null) {
            return (
                <LogoutButton onClick={logout}>Logout</LogoutButton>
            )
        }
    }

    const goToFeed = () => {
        history.push("/")
    }

    return(
        <ContainerHeader>
            <Logo onClick={goToFeed}>LabEddit</Logo>
            {renderInScreen()}
        </ContainerHeader>
    )
}

export default Header