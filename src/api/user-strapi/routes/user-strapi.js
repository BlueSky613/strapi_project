'use strict';

/**
 * user-strapi router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::user-strapi.user-strapi');
