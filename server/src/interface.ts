

export type Method = 'get' | 'post' | 'put' | 'delete'

export type RouteItemType = {
  /**请求方式*/
  method: Method,
  /**请求路由*/
  route: string
}

export interface ControllerType {
  /**方法名称对应的路由信息*/
  routes: Record<string, RouteItemType>
  /***/
  baseRoute?: string
}