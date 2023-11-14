export * from "./base"
/**格式化路由*/
export const formateRoute = (baseRoute: string, route: string) => {
  return (baseRoute + route).replace(/\/\//g, "/")
}