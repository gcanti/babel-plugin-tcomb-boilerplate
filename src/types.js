export type Paths
  = '/'
  | '/repos'
  | '/about';

export interface ReactRouterHandler {
  history: Object;
  location: Object;
  params: Object;
  route: Object;
  routeParams: Object;
  routes: Array<any>;
  children: any;
}