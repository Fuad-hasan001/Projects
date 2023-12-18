import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './componenets/About/About.jsx';
import Contact from './componenets/Contact/Contact.jsx';
import Home from './componenets/Home/Home.jsx';
import First from './componenets/First/First.jsx';
import Friends from './componenets/friends/friends.jsx';
import FriendDetail from './componenets/FriendDetail/FriendDetail.jsx';

/* const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>
  },
  {
    path: '/about',
    element: <About></About>
  },
  {
    path: 'contact',
    element: <Contact></Contact>
  }
]) */

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path:'/',
        element: <First></First>
      },
      {
        path:'friends',
        element: <Friends></Friends>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:'friend/:friendId',
        element: <FriendDetail></FriendDetail>,
        // loader: ({params}) => console.log(params.friendId)
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path: 'about',
        element: <About></About>
      },

      {
        path: 'contact',
        element: <Contact></Contact>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
