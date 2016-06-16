declare module 'tcomb' {

  // runtime type introspection hack
  declare type $Reify<T> = $Type<T>;

  // refinement hack
  declare interface $Refinement<P: (x: any) => boolean> {}

  declare type $Integer = number;

  declare type Predicate = (x: any) => boolean;

  declare type Props = {[key: string]: $Type};

  declare type MetaIrreducible = {
    kind: 'irreducible',
    name: ?string,
    identity: true,
    predicate: Predicate
  };

  declare type MetaRefinement = {
    kind: 'refinement',
    name: ?string,
    identity: boolean,
    type: $Type,
    predicate: Predicate
  };

  declare type MetaMaybe = {
    kind: 'maybe',
    name: ?string,
    identity: boolean,
    type: $Type
  };

  declare type MetaStruct = {
    kind: 'struct',
    name: ?string,
    identity: false,
    props: Props,
    strict: boolean,
    defaultProps: {[keys: string]: any}
  };

  declare type MetaInterface = {
    kind: 'interface',
    name: ?string,
    identity: boolean,
    props: Props,
    strict: boolean
  };

  declare type MetaFunc = {
    kind: 'func',
    name: ?string,
    identity: true,
    domain: Array<$Type>,
    codomain: $Type
  };

  declare type MetaTuple = {
    kind: 'tuple',
    name: ?string,
    identity: boolean,
    types: Array<$Type>
  };

  declare type MetaList = {
    kind: 'list',
    name: ?string,
    identity: boolean,
    type: $Type
  };

  declare type MetaDict = {
    kind: 'dict',
    name: ?string,
    identity: boolean,
    domain: $Type,
    codomain: $Type
  };

  declare type MetaEnums = {
    kind: 'enums',
    name: ?string,
    identity: true,
    map: {[key: string]: any}
  };

  declare type MetaUnion = {
    kind: 'union',
    name: ?string,
    identity: boolean,
    types: Array<$Type>
  };

  declare type MetaIntersection = {
    kind: 'intersection',
    name: ?string,
    identity: boolean,
    types: Array<$Type>
  };

  declare type Meta =
      MetaIrreducible
    | MetaRefinement
    | MetaMaybe
    | MetaStruct
    | MetaInterface
    | MetaFunc
    | MetaTuple
    | MetaList
    | MetaDict
    | MetaEnums
    | MetaUnion
    | MetaIntersection;

  declare interface $Type<T> {
    (x: T): T;
    is(x: any): boolean;
    meta: Meta;
  }

  declare type OptionsStruct =
    string
    | { name?: string, strict?: boolean, defaultProps?: {[keys: string]: any} };

  declare type OptionsInterface =
    string
    | { name?: string, strict?: boolean };

  declare type Mixin = Struct | Interface | Props;

  declare type Command = OptionsUpdate
    | CommandSet
    | CommandApply
    | CommandPush
    | CommandRemove
    | CommandSplice
    | CommandSwap
    | CommandUnshift
    | CommandMerge;
  declare type CommandSet = { $set: any };
  declare type CommandApply = { $apply: Function; };
  declare type CommandPush = { $push: Array<any>; };
  declare type CommandRemove = { $remove: Array<string>; };
  declare type CommandSplice = { $splice: Array<Array<any>>; };
  declare type CommandSwap = { $swap: { from: number; to: number; }; };
  declare type CommandUnshift = { $unshift: Array<any>; };
  declare type CommandMerge = { $merge: Object; };
  declare type OptionsUpdate = {[key: string]: Command};

  declare interface Struct<T> extends $Type<T> {
    new (x: T): T;
    update(instance: Struct, options: OptionsUpdate): Struct;
    extend(mixins: Mixin | Array<Mixin>, options?: OptionsStruct): Struct;
  }

  declare interface Interface<T> extends $Type<T> {
    update(instance: Interface, options: OptionsUpdate): Interface;
    extend(mixins: Mixin | Array<Mixin>, options?: OptionsInterface): Interface;
  }

  declare interface Enums {
    (map: {[key: string]: any}, name?: string): $Type;
    of(enums: string | Array<string>): $Type;
  }

  declare interface Declare extends $Type {
    define(type: $Type): void;
  }

  declare type Message = string | () => string;

  declare var exports: {

    // utils
    assert(guard: boolean, message?: Message): void;
    fail(message?: Message): void;
    stringify(x: any): string;
    mixin(target: Object, source: ?Object, unsafe?: boolean): Object;
    update(instance: Object, options: OptionsUpdate): Object;
    isType: Predicate;

    // irreducibles
    Nil: $Type<void | null>;
    String: $Type<string>;
    Number: $Type<number>;
    Integer: $Type<number>;
    Boolean: $Type<boolean>;
    Array: $Type<Array<any>>;
    Object: $Type<Object>;
    Function: $Type<Function>;
    Error: $Type<Error>;
    RegExp: $Type<RegExp>;
    Date: $Type<Date>;
    Any: $Type<any>;
    Type: $Type<$Type>;

    // combinators
    irreducible(name: string, predicate: Predicate): $Type;
    refinement(type: $Type, predicate: Predicate, name?: string): $Type;
    enums: Enums;
    maybe(type: $Type, name?: string): $Type;
    struct(props: {[key: string]: $Type}, options?: OptionsStruct): Struct;
    tuple(types: Array<$Type>, name?: string): $Type;
    list<T>(type: $Type<T>, name?: string): $Type<Array<T>>;
    dict(domain: $Type, codomain: $Type, name?: string): $Type;
    union(types: Array<$Type>, name?: string): $Type;
    intersection(types: Array<$Type>, name?: string): $Type;
    interface(props: {[key: string]: $Type}, options?: OptionsInterface): Interface;
    declare(name: string): Declare;

  };
}
