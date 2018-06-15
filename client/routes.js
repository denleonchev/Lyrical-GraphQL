import React from 'react'

import App from './components/App'
import SongList from './components/SongList'
import SongCreate from './components/SongCreate'
import SongDetail from './components/SongDetail'

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: SongList },
  childRoutes: [
    { path: 'song/create', component: SongCreate },
    { path: 'song/:id', component: SongDetail }
  ]
}

export default routes