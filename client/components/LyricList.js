import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import LyricVote from './LyricVote'

class LyricList extends Component {
    renderLyrics() {
        const { loading, lyrics } = this.props
        if (loading) {
            return null
        } 
        return (
            <ul className="collection">
                {lyrics.map((lyric) => (
                    <li key={lyric.id} className="collection-item">
                        {lyric.content}
                        <LyricVote lyricId={lyric.id} likes={lyric.likes}/>
                    </li>
                ))}
            </ul>    
        ) 
    }
    render() {
        return (
            <div>
                {this.renderLyrics()}
            </div>    
        )
    }
}

export default LyricList