import React from 'react';

declare module 'react-router' {

  declare interface ReactRouter extends React.Component {
    Link: React.Component;
    Route: React.Component;
    Router: React.Component;
    Redirect: React.Component;
    hashHistory: any;
  }

  declare var exports: ReactRouter;

}
