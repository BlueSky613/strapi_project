'use strict';

/**
 * user-strapi controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::user-strapi.user-strapi');
