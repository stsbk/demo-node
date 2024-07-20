import express, { Response } from 'express'
import { CourseViewModel } from './models/CourseViewModel'
import { getCoursesRouter } from './routes/courses'
import { CourseType, db } from './db/db'
import { getTestsRouter } from './routes/tests'

export const app = express()

const jsonBodyMiddleware = express.json()
  app.use(jsonBodyMiddleware)
  
  export const getCourseViewModel = (dbCourse: CourseType): CourseViewModel => ({
    id: dbCourse.id,
    title: dbCourse.title
  })

  app.use('/courses', getCoursesRouter(db))
  app.use('/__tests__', getTestsRouter(db))
