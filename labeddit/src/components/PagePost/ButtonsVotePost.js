import React from 'react'

import { Button, ContainerVotesButton } from "../PageLogin/StylePageLogin"

function ButtonsVotePost(props) {
    const onClickLiked = (direction) => {
        if (direction !== 1) {
            const body = {
                direction: 1
            }
            const idPost = props.post.id
            props.requestVotePost(body, idPost)
        } else {
            onClickDeleteVote()
        }
        
    }

    const onClickUnliked = (direction) => {
        if (direction !== -1) {
            const body = {
                direction: -1
            }
            const idPost = props.post.id
            props.requestVotePost(body, idPost)
        } else {
            onClickDeleteVote()
        }
    }

    const onClickDeleteVote = () => {
        const body = {
            direction: 0
        }
        const idPost = props.post.id
        props.requestVotePost(body, idPost)
    }

    return (         
        <ContainerVotesButton>
            <Button 
                color={props.post.userVoteDirection === 1 ? "green" : "white"}
                textColor={props.post.userVoteDirection === 1 ? "white" : "black"}
                onClick={() => onClickLiked(props.post.userVoteDirection)}
            >
                ↑
            </Button>
            <p>{props.post.votesCount}</p>
            <Button 
                color={props.post.userVoteDirection === -1 ? "red" : "white"}
                textColor={props.post.userVoteDirection === -1 ? "white" : "black"}
                onClick={() => onClickUnliked(props.post.userVoteDirection)}
            >
                ↓
            </Button>
        </ContainerVotesButton>
    )
}

export default ButtonsVotePost