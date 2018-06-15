import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'

import query from '../queries/fetchSong'
import LyricCreate from './LyricCreate'
import LyricList from './LyricList'

class SongDetail extends Component {
    render() {
        const { song, loading } = this.props.data
        if (!song) {
            return (
                <div>
                    <div className="preloader-wrapper active">
                        <div className="spinner-layer spinner-blue-only">
                            <div className="circle-clipper left">
                                <div className="circle"></div>
                            </div><div className="gap-patch">
                            <div className="circle"></div>
                            </div><div className="circle-clipper right">
                                <div className="circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <h2>{song.title}</h2>
                <LyricList lyrics={song.lyrics}/>
                <LyricCreate songId={this.props.params.id} />
                <Link to="/"className="waves-effect waves-light btn">
                    <i className="material-icons left">arrow_back</i>Back
                </Link>
            </div>
        )
    }
}

export default graphql(query, {
    options: (props) => (
        {
        variables: {
          id: props.params.id
        }
  })
})(SongDetail)