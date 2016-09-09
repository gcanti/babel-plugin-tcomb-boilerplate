declare module 'tcomb' {

  // runtime type introspection hack
  declare type $Reify<T> = TypeT<T>;

  // refinement hack
  declare type Predicate = (x: any) => boolean;

  declare type $Refinement<P: Predicate> = {};

  declare type IntegerT = number;

  declare type Props = {[key: string]: TypeT<*>};

  declare type TypeT<T> = {
    (x: T): T;
    is(x: any): boolean;
    meta: Object;
    fromJSON?: Function;
  };

  declare type OptionsStruct =
    string
    | { name?: string, strict?: boolean, defaultProps?: {[keys: string]: any} };

  declare type OptionsInterface =
    string
    | { name?: string, strict?: boolean };

  declare type Mixin = Struct<*> | Interface<*> | Props;

  declare type Command
    = CommandSet
    | CommandApply
    | CommandPush
    | CommandRemove
    | CommandSplice
    | CommandSwap
    | CommandUnshift
    | CommandMerge
    | OptionsUpdate;
  declare type CommandSet = { $set: any };
  declare type CommandApply = { $apply: Function; };
  declare type CommandPush = { $push: Array<any>; };
  declare type CommandRemove = { $remove: Array<string>; };
  declare type CommandSplice = { $splice: Array<Array<any>>; };
  declare type CommandSwap = { $swap: { from: number; to: number; }; };
  declare type CommandUnshift = { $unshift: Array<any>; };
  declare type CommandMerge = { $merge: Object; };
  declare type OptionsUpdate = {[key: string]: Command};

  declare type Struct<T> = {
    new (x: T): T;
    (x: T): T;
    update(instance: T, options: OptionsUpdate): T;
    extend(mixins: Mixin | Array<Mixin>, options?: OptionsStruct): Struct<*>;
  } & TypeT<T>;

  declare type Interface<T> = {
    (x: T): T;
    update(instance: T, options: OptionsUpdate): T;
    extend(mixins: Mixin | Array<Mixin>, options?: OptionsInterface): Interface<*>;
  } & TypeT<T>;

  declare type Enums = {
    (map: {[key: string]: any}, name?: string): TypeT<*>;
    of(enums: string | Array<string>): TypeT<*>;
  };

  declare type Declare = {
    define(type: TypeT<*>): void;
  } & TypeT<*>;

  declare type Ctor<T> = Function | TypeT<T>;

  declare module.exports: {

    assert(guard: boolean, message?: string | () => string): void;
    fail(message?: string): void;
    stringify(x: any): string;
    update<T>(instance: T, options: OptionsUpdate): T;
    mixin<A: Object, B: Object>(target: A, source: B, unsafe?: boolean): A & B;
    isType(x: any): boolean;
    is(x: any, type: Ctor<*>): boolean;
    getTypeName(type: Ctor<*>): string;
    match(x: any, ...cases: Array<any>): any;

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
    Type: TypeT<TypeT<*>>;

    // combinators
    irreducible(name: string, predicate: Predicate): TypeT<*>;
    refinement<T>(type: Ctor<T>, predicate: Predicate, name?: string): TypeT<T>;
    enums: Enums;
    maybe<T>(type: Ctor<T>, name?: string): TypeT<T>;
    struct<P: {[key: string]: Ctor<*>}>(props: P, options?: OptionsStruct): Struct<{[key: $Keys<P>]: *}>;
    tuple(types: Array<Ctor<*>>, name?: string): TypeT<*>;
    list<T>(type: Ctor<T>, name?: string): TypeT<Array<T>>;
    dict(domain: Ctor<*>, codomain: Ctor<*>, name?: string): TypeT<*>;
    union(types: Array<Ctor<*>>, name?: string): TypeT<*>;
    intersection(types: Array<Ctor<*>>, name?: string): TypeT<*>;
    interface<P: {[key: string]: Ctor<*>}>(props: P, options?: OptionsInterface): Interface<{[key: $Keys<P>]: *}>;
    declare(name: string): Declare;

  };
}

declare module 'tcomb/lib/fromJSON' {
  declare module.exports: (value: any, type: Function) => any;
}

declare module 'tcomb/lib/isSubsetOf' {
  declare module.exports: (a: Function, b: Function) => boolean;
}
