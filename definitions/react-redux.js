import React from 'react'
import type { Dispatch } from 'redux'

declare module 'react-redux' {

  declare type MapStateToProps<State, OwnProps, StateProps> = (state: State, ownProps: OwnProps) => StateProps;

  declare type MapDispatchToProps<Action, OwnProps, DispatchProps> = (dispatch: Dispatch<Action>, ownProps: OwnProps) => DispatchProps;

  declare type ComponentWrapper<Props, OwnProps> = (component: React.Component<any, Props, any>) => React.Component<any, OwnProps, any>;

  declare var exports: {
    Provider: React.Component,
    connect<State, Action, OwnProps, StateProps, DispatchProps>(
      mapStateToProps?: MapStateToProps<State, OwnProps, StateProps>,
      mapDispatchToProps?: MapDispatchToProps<Action, OwnProps, DispatchProps>
    ): ComponentWrapper<StateProps & DispatchProps, OwnProps>
  }
}
