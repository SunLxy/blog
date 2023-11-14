import express from 'express'
import bodyParser from 'body-parser'
import { AppDataSource } from './data-source'
import { createRoutes } from "./routes"

AppDataSource.initialize()
  .then(async () => {
    // create express app
    const app = express()

    app.use(bodyParser.json())

    createRoutes(app)

    // start express server
    app.listen(8096)

    console.log('Express server has started on port 8096. Open http://localhost:8096 to see results')
  })
  .catch((error) => console.log(error))
