import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { browserHistory } from 'react-router'

import query from '../queries/fetchSongs'

class SongCreate extends Component {
    constructor(props) {
        super(props)
        this.state = { title: '' }
    }
    handleSubmit(event) {
        event.preventDefault()
        this.props.mutate({
            variables: { title: this.state.title},
            refetchQueries: [{ query }]
        })
            .then(() => {
                this.props.router.push('/')
             })
            .catch(err => console.log(err))
        
    }
    render() {
        return (
            <div>
                <h2>Create a song!</h2>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>Song title:</label>
                    <input value={this.state.title} onChange={(event) => this.setState({title: event.target.value})}/>
                </form>
            </div>    
        )
    }
}

const mutation = gql`
    mutation AddSong($title: String) {
        addSong(title: $title) {
            id,
            title
        }
    }
`

export default graphql(mutation)(SongCreate)