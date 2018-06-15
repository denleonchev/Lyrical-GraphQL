import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class LyricVote extends Component {
    handleVote() {
        console.log('voted', this.props.lyricId)
        this.props.mutate({
            variables: {
                id: this.props.lyricId
            },
            optimisticResponse: {
                __typename: 'Mutation',
                likeLyric: {
                    __typename: 'LyricType',
                    id: this.props.lyricId,
                    likes: this.props.likes + 1
                }
            }
        })
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div className="right valign-wrapper">
                <label>{this.props.likes || 0}</label>
                <i onClick={this.handleVote.bind(this)} className="material-icons secondary-content icon-clickable">thumb_up_alt</i>
            </div>
        )
    }
}

const mutation = gql`
    mutation LikeLyric($id: ID) {
        likeLyric(id: $id) {
            id
            likes
        }
    }
`

export default graphql(mutation)(LyricVote)