declare module 'react-redux' {

  declare var exports: {
    Provider: Function,
    connect(mapStateToProps?: Function, mapDispatchToProps?: Function): (component: Function) => Function
  }
}
