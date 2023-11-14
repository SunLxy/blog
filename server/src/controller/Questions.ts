import { NextFunction, Request, Response } from 'express'
import { Questions } from '../entity/Questions'
import { routeMethod, ControllerBase, Controller } from "../utils"

@Controller(Questions)
export class QuestionsController extends ControllerBase<Questions> {
  /**分页查询*/
  @routeMethod("/api/questions/list")
  async list(request: Request, response: Response, next: NextFunction) {
    console.log("/api/questions/list")
    response.status(200).json({
      code: 1,
      message: '/api/questions/list',
    })
  }
  /**查询单个详情*/
  @routeMethod("/api/questions/info")
  async info(
    request: Request<Questions>,
    response: Response,
    next: NextFunction,
  ) {
    console.log("/api/questions/info")
    response.status(200).json({
      code: 1,
      message: '/api/questions/info',
    })
  }
  /**创建*/
  @routeMethod("/api/questions/create")
  async create(request: Request, response: Response, next: NextFunction) {
    console.log("/api/questions/create")
    response.status(200).json({
      code: 1,
      message: '/api/questions/create',
    })
  }
  /**删除*/
  @routeMethod("/api/questions/delete")
  async delete(request: Request, response: Response, next: NextFunction) {
    console.log("/api/questions/delete")
    response.status(200).json({
      code: 1,
      message: '/api/questions/delete',
    })

  }
}
