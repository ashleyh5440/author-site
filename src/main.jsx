import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRef } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, NavLink, useLocation, useOutlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

// import App from './App.jsx'
import './index.css'
import './App.css'

import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About'
import Contact from './pages/Contact';
import Poetry from './pages/Poetry'
import Footer from './components/Footer'
// import Campfire from './components/Campfire';

const routes = [
  {
    path: '/',
    name: 'Home',
    element: <Home />,
    nodeRef: createRef()
  },
  {
    path: '/poetry',
    name: 'Poetry',
    element: <Poetry />,
    nodeRef: createRef()
  },
  // {
  //     path: '/about',
  //     name: 'About',
  //     element: <About />,
  //     nodeRef: createRef()
  //   },
    {
      path: '/contact',
      name: 'Contact',
      element: <Contact />,
      nodeRef: createRef()
    },
    // {
    //   path: '/campfire',
    //   name: 'Campfire',
    //   element: <Campfire />,
    //   nodeRef: createRef()
    // },
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
  },
])

function App() {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } = routes.find((route) => route.path === location.pathname) ?? {}
  return (
    <>
    <Navigation routes={routes} style={{color: "white"}}/>
    <Container className="application">
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          nodeRef={nodeRef}
          timeout={300}
          classNames="page"
          unmountOnExit>
            {(state) => (
              <div ref={nodeRef} className="page">
                {currentOutlet}
              </div>
            )}
        </CSSTransition>
      </SwitchTransition>
    </Container>
    <Footer />
    </>
  )
}

const application = document.getElementById('root')
const root = createRoot(application)
root.render(<RouterProvider router={router} />)