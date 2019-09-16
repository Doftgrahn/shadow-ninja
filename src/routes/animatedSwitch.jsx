import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';



const AnimatedSwitch = ({ animationClassName, animationTimeout, children }) => (
  <Route render={({ location }) => (
    <TransitionGroup style={{
      flex: 1,
      position: 'relative',
    }}>
      <CSSTransition
        key={location.key}
        timeout={animationTimeout}
        classNames={animationClassName}
      >
        <Switch location={location}>
          {children}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )} />
);

export default AnimatedSwitch;
