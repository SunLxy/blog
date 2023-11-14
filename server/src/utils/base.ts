
import { RouteItemType, Method } from "../interface"
import { Repository, EntityTarget } from 'typeorm'
import { AppDataSource } from '../data-source'

/**收集当前类的路由数据*/
export function routeMethod(route: string, method: Method = "post") {
  return function (target: any, key: any) {
    target.routes = target.routes || {};
    target.routes[key] = { method: method || "post", route: route || "/" };
  };
}

/**添加实例和路由前缀*/
export function Controller<T>(repository: EntityTarget<T>, baseRoute?: string) {
  return function (target: Function) {
    target.prototype.baseRoute = baseRoute || "/"
    /**实体类*/
    target.prototype.baseRepository = AppDataSource.getRepository(repository)
  }
}

/**控制器 基础类*/
export class ControllerBase<T> {
  /**当前类的路由数据*/
  declare public routes: Record<string, RouteItemType>
  /**当前类中路由前缀*/
  declare public baseRoute?: string
  /**操作数据实体类*/
  declare public baseRepository: Repository<T>
}

// export function createControllerBase<T>(repository: EntityTarget<T>) {
//   return class ControllerBase {
//     /**当前类的路由数据*/
//     declare routes: Record<string, RouteItemType>
//     /**当前类中路由前缀*/
//     declare baseRoute?: string
//     /**操作数据实体类*/
//     public baseRepository = AppDataSource.getRepository(repository)
//   }
// }
