import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

class LyricCreate extends Component {
    constructor(props) {
        super(props)
        this.state = { content: '' }
    }
    handleChange(event) {
        this.setState({ content: event.target.value})
    }
    handleSubmit(event) {
        event.preventDefault()
        this.props.mutate({
            variables: {
                songId: this.props.songId,
                content: this.state.content
            }
        })
            .catch(err => console.log(err))
        this.setState({ content: ''})
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>Add lyrics</label>
                <input value={this.state.content} onChange={this.handleChange.bind(this)}/>
            </form>
        )
    }
}

const mutation = gql`
    mutation AddLyricToSong($content: String, $songId: ID) {
        addLyricToSong(content: $content, songId: $songId) {
            id
            title
            lyrics {
                id
                content
                likes
            }
        }
    }
`

export default graphql(mutation)(LyricCreate)