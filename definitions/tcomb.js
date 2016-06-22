declare module 'tcomb' {

  // runtime type introspection hack
  declare type $Reify<T> = TypeT<T>;

  // refinement hack
  declare interface $Refinement<P: (x: any) => boolean> {}

  declare type IntegerT = number;

  declare type Predicate = (x: any) => boolean;

  declare type Props = {[key: string]: TypeT};

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
    type: TypeT,
    predicate: Predicate
  };

  declare type MetaMaybe = {
    kind: 'maybe',
    name: ?string,
    identity: boolean,
    type: TypeT
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
    domain: Array<TypeT>,
    codomain: TypeT
  };

  declare type MetaTuple = {
    kind: 'tuple',
    name: ?string,
    identity: boolean,
    types: Array<TypeT>
  };

  declare type MetaList = {
    kind: 'list',
    name: ?string,
    identity: boolean,
    type: TypeT
  };

  declare type MetaDict = {
    kind: 'dict',
    name: ?string,
    identity: boolean,
    domain: TypeT,
    codomain: TypeT
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
    types: Array<TypeT>
  };

  declare type MetaIntersection = {
    kind: 'intersection',
    name: ?string,
    identity: boolean,
    types: Array<TypeT>
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

  declare interface TypeT<T> {
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

  declare interface Struct<T> extends TypeT<T> {
    new (x: T): T;
    update(instance: Struct, options: OptionsUpdate): Struct;
    extend(mixins: Mixin | Array<Mixin>, options?: OptionsStruct): Struct;
  }

  declare interface Interface<T> extends TypeT<T> {
    update(instance: Interface, options: OptionsUpdate): Interface;
    extend(mixins: Mixin | Array<Mixin>, options?: OptionsInterface): Interface;
  }

  declare interface Enums {
    (map: {[key: string]: any}, name?: string): TypeT;
    of(enums: string | Array<string>): TypeT;
  }

  declare interface Declare extends TypeT {
    define(type: TypeT): void;
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
    Nil: TypeT<void | null>;
    String: TypeT<string>;
    Number: TypeT<number>;
    Integer: TypeT<number>;
    Boolean: TypeT<boolean>;
    Array: TypeT<Array<any>>;
    Object: TypeT<Object>;
    Function: TypeT<Function>;
    Error: TypeT<Error>;
    RegExp: TypeT<RegExp>;
    Date: TypeT<Date>;
    Any: TypeT<any>;
    Type: TypeT<TypeT>;

    // combinators
    irreducible(name: string, predicate: Predicate): TypeT;
    refinement(type: TypeT, predicate: Predicate, name?: string): TypeT;
    enums: Enums;
    maybe(type: TypeT, name?: string): TypeT;
    struct(props: {[key: string]: TypeT}, options?: OptionsStruct): Struct;
    tuple(types: Array<TypeT>, name?: string): TypeT;
    list<T>(type: TypeT<T>, name?: string): TypeT<Array<T>>;
    dict(domain: TypeT, codomain: TypeT, name?: string): TypeT;
    union(types: Array<TypeT>, name?: string): TypeT;
    intersection(types: Array<TypeT>, name?: string): TypeT;
    interface(props: {[key: string]: TypeT}, options?: OptionsInterface): Interface;
    declare(name: string): Declare;

  };
}
