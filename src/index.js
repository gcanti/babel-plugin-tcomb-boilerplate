// @flow

const Maybe = {
  of<A>(value: A): A {
    return value
  },
  map<A, B>(f: (a: A) => B, fa: ?A): ?B {
    return fa ? f(fa) : null
  }
}

const List = {
  of<A>(value: A): Array<A> {
    return [value]
  },
  map<A, B>(f: (a: A) => B, fa: Array<A>): Array<B> {
    return fa.map(f)
  }
}

type IO<A> = () => A;

const Io = {
  of<A>(value: A): A {
    return value
  },
  map<A, B>(f: (a: A) => B, fa: IO<A>): IO<B> {
    return () => f(fa())
  }
}
