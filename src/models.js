"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const { buildSchema } = require('graphql');
exports.schema = buildSchema(`
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
module.exports = { schema: exports.schema };
