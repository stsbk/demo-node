import express, { Response } from 'express'
import { RequestWithBody, RequestWithParams, RequestWithParamsAndBody, RequestWithQuery } from '../types'
import { CourseCreateModel } from '../models/CourseCreateModel'
import { CourseUpdateModel } from '../models/CourseUpdateModel'
import { GetCoursesQueryModel } from '../models/GetCoursesQueryModel'
import { CourseViewModel } from '../models/CourseViewModel'
import { URIParamsCourseModel } from '../models/URIParamsCourseModel'
import { getCourseViewModel } from '../app'
import { CourseType, DBType } from '../db/db'
import { HTTP_STATUSES } from '../utils'

export const getCoursesRouter = (db: DBType) => {
const router = express.Router()

router.get('/', (req: RequestWithQuery<GetCoursesQueryModel>, res: Response<CourseViewModel[]>) => {
    let foundCourses = db.courses;
  
    if (req.query.title) {
      foundCourses = foundCourses.filter(c => c.title.indexOf(req.query.title as string) > -1)
    }
  
    if (!foundCourses) {
      res.sendStatus(HTTP_STATUSES.NOT_FOUND_404)
      return
    }
    
    res.json(foundCourses.map(getCourseViewModel))
  })
  
  router.get('/:id', (req: RequestWithParams<URIParamsCourseModel>, res: Response<CourseViewModel>) => {
    let foundCourse = db.courses.find(c => c.id === +req.params.id);
  
    if (!foundCourse) {
      res.sendStatus(HTTP_STATUSES.NOT_FOUND_404)
      return;
    }
    
    res.json(getCourseViewModel(foundCourse))
  })
  
  router.post('/', (req: RequestWithBody<CourseCreateModel>, res: Response<CourseViewModel>) => {
    if (!req.body.title) {
      res.sendStatus(HTTP_STATUSES.BAD_REQUEST_400)
      return
    }
  
    const createdCourse: CourseType = {
      id: +(new Date()),
      title: req.body.title,
      studentsCount: 0
    }
    db.courses.push(createdCourse)
  
    res.status(HTTP_STATUSES.CREATED_201).json(getCourseViewModel(createdCourse))
  })
  
  router.delete('/:id', (req: RequestWithParams<URIParamsCourseModel>, res: Response) => {
    db.courses = db.courses.filter(c => c.id !== +req.params.id)
  
    res.sendStatus(HTTP_STATUSES.NO_CONTENT_204)
  })
  
  router.put('/:id', (req: RequestWithParamsAndBody<URIParamsCourseModel, CourseUpdateModel>, res) => {
    if (!req.body.title) {
      res.sendStatus(HTTP_STATUSES.BAD_REQUEST_400)
      return
    }
    
    const foundCourse = db.courses.find(c => c.id === +req.params.id)
    if (!foundCourse) {
      res.sendStatus(HTTP_STATUSES.NOT_FOUND_404)
      return
    }
  
    foundCourse.title = req.body.title
  
    res.status(HTTP_STATUSES.NO_CONTENT_204)
  })

  return router
}