import type { $Type } from 'tcomb'
import t from 'tcomb'

declare module 'tcomb-react' {

  declare type Options = {
    strict?: boolean
  };

  declare var exports: {
    t: typeof t;
    props(type: $Type | Object, options?: Options): any;
    propTypes(type: $Type | Object, options?: Options): any;
    ReactElement: $Type,
    ReactNode: $Type,
    ReactChild: $Type,
    ReactChildren: $Type
  };
}