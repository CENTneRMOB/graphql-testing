'use strict';

const user = require("../models/user");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          id: 1,
          nickname: 'firstUser',
          email: 'first@user.com',
          password: 'password1',
        },
        {
          id: 2,
          nickname: 'secondUser',
          email: 'second@user.com',
          password: 'password2',
        }
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'posts',
      [
        {
          id: 1,
          title: 'first title',
          body: 'first body',
          author: 1,
          published_at: new Date(),
        },
        {
          id: 2,
          title: 'second title',
          body: 'second body',
          author: 1,
          published_at: new Date(),
        },
        {
          id: 3,
          title: 'third title',
          body: 'third body',
          author: 2,
          published_at: new Date(),
        }
      ],
      {}
    );
    await queryInterface.bulkInsert(
      'comments',
      [
        {
          id: 1,
          body: 'first comment',
          author: 2,
          published_at: new Date(),
        },
        {
          id: 2,
          body: 'second comment',
          author: 2,
          published_at: new Date(),
        },
        {
          id: 3,
          body: 'third comment',
          author: 1,
          published_at: new Date(),
        }
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('comments', null, bulkDeleteOptions);
    await queryInterface.bulkDelete('posts', null, bulkDeleteOptions);
    await queryInterface.bulkDelete('users', null, bulkDeleteOptions);
  }
};
