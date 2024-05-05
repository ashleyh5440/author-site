import React from 'react';
import { useRoutes } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Power3, gsap } from 'gsap';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navigation';

function App({ router }) {
  // console.log('router object:', router)
  // const routeResult = useRoutes(router);
  // console.log('router result:', routeResult)

  if (!router) {
    return<div>Loading...</div>;
  }

  const routeResult = useRoutes(router); 

  // const onEnter = node => {
  //   gsap.from(
  //     [node.children[0].firstElementChild, node.children[0].lastElementChild],
  //     0.6,
  //     {
  //       y: 30,
  //       delay: 0.6,
  //       ease: Power3.easeInOut,
  //       opacity: 0,
  //       stagger: {
  //         amount: 0.2,
  //       },
  //     }
  //   );
  // };

  // const onExit = node => {
  //   gsap.to(
  //     [node.children[0].firstElementChild, node.children[0].lastElementChild],
  //     0.6,
  //     {
  //       y: -30,
  //       ease: Power3.easeInOut,
  //       stagger: {
  //         amount: 0.2,
  //       },
  //     }
  //   );
  // };

  return (
    <main>
      <Navigation />
      {routeResult}
      {/* {routeResult && (
        <CSSTransition
        in={true}
        timeout={1200}
        classNames="page"
        onExit={onExit}
        onEntering={onEnter}
        unmountOnExit>
          <div className="page">{routeResult}</div>
        </CSSTransition>
      )} */}
      {/* <Outlet /> */}
    </main>
  );
}

export default App;
