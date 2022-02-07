const { ApolloServer, gql } = require('apollo-server');
const db = require('./models/index.js');

const PORT = process.env.PORT || 5000;

const typeDefs = gql`
  type Post {
    title: String!
    body: String!
    author: User
    published_at: String!
  }

  type Comment {
    body: String!
    author: User
    published_at: String!
  }

  type User {
    nickname: String!
    email: String!
    password: String!
  }

  type Mutation {
    addPost(title: String!, body: String!, published_at: String): Post
  }

  type Query {
    posts: [Post]
  }

  type Query {
    users: [User]
  }
`;

const resolvers = {
  Query: {
    users: async () => {
      const users = await db.User.findAll({
        where: {
          nickname: 'firstUser',
        }
      });
      return users;
    },
  },
  Mutation: {
    addPost(parent, args, context, info) {
      
    }
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
  // console.log(typeDefs);
  // console.log(resolvers);
});