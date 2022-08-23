"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.root = void 0;
const data = require('./MOCK_DATA.js');
const findCourse = (id) => {
    return data.find((course) => course.id === id);
};
const getCourse = (req) => {
    const { id } = req;
    return findCourse(id);
};
const getCourseByLecturer = (req) => {
    const { lecturer } = req;
    return data.filter((course) => course.lecturer === lecturer);
};
const updateCourse = (req) => {
    const { id, lecturer, title, description } = req;
    const course = findCourse(id);
    if (lecturer !== undefined)
        course.lecturer = lecturer;
    if (title !== undefined)
        course.title = title;
    if (description !== undefined)
        course.description = description;
    return course;
};
exports.root = {
    getCourse: getCourse,
    getCourseByLecturer: getCourseByLecturer,
    updateCourse: updateCourse,
};
module.exports = { root: exports.root };
