const data = require('./MOCK_DATA.js');

interface Course {
  id: string
  title?: string
  lecturer?: string
  description?: string
}

interface CourseByLecturer {
  lecturer: string
}
  

const findCourse = (id: string) => {
  return data.find((course: Course) => course.id === id);
}

const getCourse = (req: Course) => {
  const { id } = req;
  return findCourse(id);
}

const getCourseByLecturer = (req: CourseByLecturer) => {
  const { lecturer } = req;
  return data.filter((course: Course) => course.lecturer === lecturer);
}

const updateCourse = (req: Course) => {
  const { id, lecturer, title, description } = req;
  const course = findCourse(id);

  if (lecturer !== undefined) course.lecturer = lecturer;
  if (title !== undefined) course.title = title;
  if (description !== undefined) course.description = description;

  return course;
}

export const root = {
  getCourse: getCourse,
  getCourseByLecturer: getCourseByLecturer,
  updateCourse: updateCourse,
}

module.exports = { root }; 