import React from 'react'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import fetch from 'node-fetch'

import AppView from '../components/Playlists'

global.fetch = fetch

const apolloClient = new ApolloClient({ uri: 'http://localhost:3000' })

const AppProvider = () => (
  <ApolloProvider client={apolloClient}>
    <AppView />
  </ApolloProvider>
)

export default AppProvider
