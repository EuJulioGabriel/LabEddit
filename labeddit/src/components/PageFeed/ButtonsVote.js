import React from 'react'
import axios from 'axios'

import { url, headers } from '../../constants/constants'

import { Button, ContainerVotesButton } from "../PageLogin/StylePageLogin"

function ButtonsVote(props) {    
    const like = (post) => {
        if(post.userVoteDirection !== 1){
            const body = {
                "direction": 1
            }
            vote(post, body)
        } else {
            removeVote(post)
        }
    }
    
    const unliked = (post) => {
        if(post.userVoteDirection !== -1){
            const body = {
                "direction": -1
            }
            vote(post, body)
        } else {
            removeVote(post)
        }
    }
    
    const removeVote = (post) => {
        const body = {
            "direction": 0
        }
        vote(post, body)
    }
    
    const vote = (post, body) => {
        axios
        .put(`${url}/posts/${post.id}/vote`, body, {
            headers
        })
        .then(() => {
            props.getPosts()
        })
        .catch((error) => {
            alert(error.message)
        })
    }
    
    return (
        <ContainerVotesButton>
            <Button 
                color={props.post.userVoteDirection === 1 ? "green" : "white"}
                textColor={props.post.userVoteDirection === 1 ? "white" : "black"}
                onClick={()=> like(props.post)}
            >
                ↑
            </Button>
            <p>{props.post.votesCount}</p>
            <Button 
                color={props.post.userVoteDirection === -1 ? "red" : "white"}
                textColor={props.post.userVoteDirection === -1 ? "white" : "black"}
                onClick={()=> unliked(props.post)}
            >
                ↓
            </Button>
        </ContainerVotesButton>
    )
}

export default ButtonsVote