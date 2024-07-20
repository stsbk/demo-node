import request from 'supertest'
import { app } from '../../src/app'
import { CourseCreateModel } from '../../src/models/CourseCreateModel'
import { CourseUpdateModel } from '../../src/models/CourseUpdateModel'
import { HTTP_STATUSES } from '../../src/utils'

describe('/courses', () => {
    beforeAll(async () => {
        await request(app)
        .delete('/__test__/data')
    })

    it('should return 200', async () => {
        await request(app)
        .get('/courses')
        .expect(HTTP_STATUSES.OK_200, [])
    })

    // it('should return 404 for not existing course', async () => {
    //     await request(app)
    //     .get('/courses/999999')
    //     .expect(HTTP_STATUSES.NOT_FOUND_404)
    // })

    // it('shouldn"t create course with correct input data', async () => {
    //     const data: CourseCreateModel = { title: '' }
    //     await request(app)
    //     .post('/courses')
    //     .send(data)
    //     .expect(HTTP_STATUSES.BAD_REQUEST_400)

    //     await request(app)
    //     .get('/courses')
    //     .expect(HTTP_STATUSES.OK_200, [])
    // })

    // let createdCourse: any = null;
    // it('should create course with correct input data', async () => {
    //     const data: CourseCreateModel = { title: 'New course' }
    //     const createResponse = await request(app)
    //     .post('/courses')
    //     .send(data)
    //     .expect(HTTP_STATUSES.CREATED_201)

    //     createdCourse = createResponse.body
        
    //     expect(createdCourse).toEqual({
    //         id: expect.any(Number),
    //         title: data.title
    //     })

    //     await request(app)
    //     .get('/courses')
    //     .expect(HTTP_STATUSES.OK_200, [createdCourse])
    // })

    // let createdCourse2: any = null;
    // it('should create one more course', async () => {
    //     const data: CourseCreateModel = { title: 'New course' }
    //     const createResponse = await request(app)
    //     .post('/courses')
    //     .send(data)
    //     .expect(HTTP_STATUSES.CREATED_201)

    //     createdCourse2 = createResponse.body

    //     expect(createdCourse2).toEqual({
    //         id: expect.any(Number),
    //         title: data.title
    //     })

    //     await request(app)
    //     .get('/courses')
    //     .expect(HTTP_STATUSES.OK_200, [createdCourse, createdCourse2])
    // })

    // it('shouldn"t update course with incorrect input data', async () => {
    //     const data: CourseUpdateModel = { title: '' } 
    //     await request(app)
    //     .put('/courses/' + createdCourse.id)
    //     .send(data)
    //     .expect(HTTP_STATUSES.BAD_REQUEST_400)

    //     await request(app)
    //     .get('/course/' + createdCourse.id)
    //     .expect(HTTP_STATUSES.NOT_FOUND_404, createdCourse)
    // })

    // it('shouldn"t update course that not exist', async () => {
    //     const data: CourseUpdateModel = { title: 'good title' }
    //     await request(app)
    //     .put('/courses/' + -100)
    //     .send(data)
    //     .expect(HTTP_STATUSES.NOT_FOUND_404)
    // })

    // it('should update course with correct input data', async () => {
    //     const data: CourseUpdateModel = { title: 'good title' }
    //     await request(app)
    //     .put('/courses/' + createdCourse.id)
    //     .send(data)
    //     .expect(HTTP_STATUSES.NO_CONTENT_204)

    //     await request(app)
    //     .get('/course/' + createdCourse.id)
    //     .expect(HTTP_STATUSES.OK_200, {
    //         ...createdCourse,
    //         title: data.title
    // })
    // })
})
