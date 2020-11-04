import React from 'react'

import { Button, ContainerVotesButton } from "../PageLogin/StylePageLogin"

function ButtonsVote(props) {
    return (
        <ContainerVotesButton>
            <Button
                onClick={props.onClickLiked}
                color={props.commentVoteDirection === 1 ? "green" : "white"}
                textColor={props.commentVoteDirection === 1 ? "white" : "black"}
            >
                ↑
            </Button>
            <p>{props.commentVotesCount}</p>
            <Button
                onClick={props.onClickUnliked}
                color={props.commentVoteDirection === -1 ? "red" : "white"}
                textColor={props.commentVoteDirection === -1 ? "white" : "black"}
            >
                ↓
            </Button>
        </ContainerVotesButton>
    )
}

export default ButtonsVote