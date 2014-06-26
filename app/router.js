import React from 'github:reactjs/react-bower/react';
import ReactRouter from 'github:toranb/toranb-react-nested-router/main';
import App from './main';
import Session from './session';

var Route = ReactRouter.Route;
var Router = ReactRouter.Router;

export default = Router(
  Route( {handler:App}, 
    Route( {name:"session", path:"session/:sessionId", handler:Session})
  )
)
