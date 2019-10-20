import Home from '../views/home/home'
import Poe from '../views/poe/poe'
export default [
  {
    name: 'Home',
    path: '/',
    exact: true,
    active: true,
    icon: 'fa-home',
    component: Home
  },
  {
    name: 'Poe',
    path: '/poe',
    icon: 'fa-book',
    exact: false,
    active: false,
    component: Poe
  },
  {
    name: 'Music',
    icon: 'fa-music',
    path: '/music',
    exact: false,
    active: false
  },
  {
    name: 'Article',
    icon: 'fa-pencil',
    path: '/article',
    exact: false,
    active: false
  },
  {
    name: 'Photograph',
    icon: 'fa-camera-retro',
    path: '/photograph',
    exact: false,
    active: false
  }
]
