import React from 'react'
import { useHistory } from 'react-router-dom'

import { ContainerFooter, Logo } from './StyleFooter'

function Footer() {
    const goToFeed = () => {
        history.push("/")
    }

    const history = useHistory()

    return (
        <ContainerFooter>
            <Logo onClick={goToFeed}>LabEddit</Logo>
        </ContainerFooter>
    )
}

export default Footer