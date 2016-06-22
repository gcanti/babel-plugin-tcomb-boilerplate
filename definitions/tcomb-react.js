import React from 'react'
import type { Type } from 'tcomb'

declare module 'tcomb-react' {

  declare type Options = {
    strict?: boolean
  };

  declare type ReactElementT = React.Element;

  declare type ReactNodeT = string | number | ReactElementT | Array<ReactElementT>;

  declare type ReactChildT = ReactNodeT | boolean | void | null;

  declare type ReactChildrenT = ReactChildT | Array<ReactChildrenT>;

  declare var exports: {
    props(type: Type | Object, options?: Options): any;
    propTypes(type: Type | Object, options?: Options): any;
    ReactElement: Type,
    ReactNode: Type,
    ReactChild: Type,
    ReactChildren: Type
  };
}