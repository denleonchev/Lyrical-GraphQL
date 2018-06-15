import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'

import query from '../queries/fetchSongs'
import './SongList.css'

class SongList extends Component {
    removeSong(id) {
        this.props.mutate({
            variables: { id }
        })
            .then(() => this.props.data.refetch())
            .catch(err => console.log(err))
        
    }
    renderSongs() {
        const { loading, songs } = this.props.data
        if (loading) {
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
        if (songs.length) {
            return (
                <ul className="collection">
                    {songs.map((song) => (
                        <li key={song.id} className="collection-item">
                            <Link to={`/song/${song.id}`}>{song.title}</Link>
                            <i onClick={() => this.removeSong(song.id)} className="material-icons secondary-content icon-clickable">remove</i>
                        </li>
                    ))}
                </ul>    
            ) 
        }
        return (
            <h2>There are no songs!</h2>
        )
    }
    render() {
        return (
            <div>
                {this.renderSongs()}
                <Link to="/song/create" className="btn-floating btn-large red">
                    <i className="large material-icons">add</i>
                </Link>
            </div>    
        )
    }
}

const mutation = gql`
    mutation DeleteSong($id: ID) {
        deleteSong(id: $id){
            id
        }
    }
`


export default graphql(mutation)(graphql(query)(SongList))