const { gql } =  require('apollo-server-express');
const { Course } = require('../src/database.js');

const typeDefs = gql`
  type Query {
    getCourse(courseId: String!): Course
    getCourseByLecturer(lecturer: String!): [Course]
  }
  type Mutation {
    updateCourse(
      courseId: String!, 
      title: String,
      lecturer: String,
      description: String,
    ): Course
  }
  type Course {
    courseId: String
    title: String
    lecturer: String
    description: String
  }
`;

const getCourse = async (obj: any, args: any, context: any, info: any) => {
  const data = await Course.findByPk(args.courseId);
  return data;
}

const getCourseByLecturer = async (obj: any, args: any, context: any, info: any) => {
  const data = await Course.findAll({
    where: {
      lecturer: args.lecturer
    }
  });
  return data;
}

const updateCourse = async (obj: any, args: any, context: any, info: any) => {
  await Course.update(
    { ...args }, 
    {
      where: {
        courseId: args.courseId,
      }
    }
  );
  
  return "Updated successfully!";
}

const resolvers = {
  Query: {
    getCourse,
    getCourseByLecturer,
  },
  Mutation: {
    updateCourse,
  }
};

module.exports = { typeDefs, resolvers };