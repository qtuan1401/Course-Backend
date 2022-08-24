const { buildSchema } = require('graphql');
export const schema = buildSchema(`
  type Query {
    getCourse(id: String!): Course
    getCourseByLecturer(lecturer: String!): [Course]
  }
  type Mutation {
    updateCourse(
      id: String!, 
      title: String,
      lecturer: String,
      description: String,
    ): Course
  }
  type Course {
    id: String
    title: String
    lecturer: String
    description: String
  }
`);
module.exports = { schema };
