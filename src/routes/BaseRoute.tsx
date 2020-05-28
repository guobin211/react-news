export interface BaseRoute {
  path: string,
  component: any,
  routes: BaseRoute[]
}
