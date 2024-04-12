'use strict';

/**
 * user-strapi service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-strapi.user-strapi');
