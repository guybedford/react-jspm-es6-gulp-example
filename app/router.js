import React from 'npm:react/react';
import ReactRouter from 'npm:react-nested-router/modules/main';
import App from './app';
import Session from './session';

var Route = ReactRouter.Route;
var Router = ReactRouter.Router;

var router = Router(
  Route( {handler:App}, 
    Route( {name:"session", path:"session/:sessionId", handler:Session})
  )
);

router.renderComponent(document.body);
