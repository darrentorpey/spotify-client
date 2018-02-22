import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

import Card, { CardContent } from 'material-ui/Card'
import List, { ListItem } from 'material-ui/List'

const PlaylistsQuery = gql`
  query GetMyPlaylists {
    myPlaylists {
      id
      href
      name
      tracks {
        track_number
        name
      }
    }
  }
`

class Song extends Component {
  static propTypes = {
    data: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }

  render() {
    const { name } = this.props.data
    return <span>{name}</span>
  }
}

class Playlist extends Component {
  static propTypes = {
    data: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      tracks: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
  }

  render() {
    const { name, tracks } = this.props.data

    return (
      <div className="playlist">
        <Card>
          <CardContent>
            <h4>
              {name} ({tracks.length})
            </h4>
          </CardContent>

          <CardContent>
            <List>
              {tracks.map((track, i) => (
                <ListItem key={`${i}:${track.id}`}>
                  <Song data={track} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </div>
    )
  }
}

class Playlists extends Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  render() {
    const playlists = this.props.data && this.props.data.filter(p => p.tracks)

    return playlists ? (
      <div>
        {playlists.map(
          playlist =>
            console.log(`playlist`, playlist) || <Playlist key={playlist.id} data={playlist} />
        )}
      </div>
    ) : (
      <p>Nada</p>
    )
  }
}

export default class AppView extends Component {
  static propTypes = {
    playlists: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
  }

  render() {
    return (
      <Card>
        <CardContent>
          <Query query={PlaylistsQuery}>
            {({ loading, error, data }) => {
              console.log(`data`, data)
              if (loading) {
                return <p>Loading</p>
              }

              if (error) {
                return <p>Error</p>
              }

              return <Playlists data={filterNonOwnedPlaylists(data.myPlaylists)} />
            }}
          </Query>
        </CardContent>
      </Card>
    )
  }
}

function filterNonOwnedPlaylists(playlists) {
  console.log(`playlists[0]`, playlists[0])
  return playlists.filter(playlist => playlist.href.includes('users/darrentorpey'))
}
