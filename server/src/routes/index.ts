
import core from "express-serve-static-core";
import { QuestionsController } from "./../controller/Questions"
import { formateRoute } from "../utils"

const controllers = [
  QuestionsController,
]

/**创建路由*/
export const createRoutes = (app: core.Express) => {
  controllers.forEach((Controller) => {
    /**实例化*/
    const instance: any = new Controller()
    /**获取方法名称对应的路由信息*/
    const routes = instance.routes || {}
    /**获取基础前缀路径*/
    const baseRoute = instance.baseRoute || "/"
    /**循环路由*/
    Object.entries(routes).forEach(([keys, item]: [string, any]) => {
      const newRoute = formateRoute(baseRoute, item.route)
      app[item.method](newRoute, (...arg: any[]) => instance[keys](...arg))
    })
  })
}
