/**
 * This is the base configuration that's used when testing locally. It also cascades to other environments
 * unless the properties are explicitly overridden in those later configurations.
 */
import {dbs} from './bootstrap/db';

/**
 * MongoDB Environmental Variable Configuration and Defaults
 * Provide a custom MongoDB connection URL by setting environmental variable MONGO_DB_CONN, otherwise
 * a simple connection url will be used based on the environmental variables or defaults set below.
 * *********************************************************************************************************************
 */
const MONGO_DB_ADDRESS = process.env.MONGO_DB_ADDRESS || 'localhost';
const MONGO_DB_PORT = process.env.MONGO_DB_PORT || '37001';
const MONGO_DB_CONN = process.env.MONGO_DB_CONN || null;
const MONGO_DB_NAME = process.env.MONGO_DB_NAME || 'sapivinod'; // default connection db

const url = MONGO_DB_CONN || `mongodb://${MONGO_DB_ADDRESS}:${MONGO_DB_PORT}/${MONGO_DB_NAME}`;
/**********************************************************************************************************************/

// tslint:disable:max-line-length
module.exports = {
  /**
   * see: https://github.com/expressjs/cors
   */
  cors: {
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    /**
     * Security: this should be updated to the URL(s) of your application for production
     */
    origin: ['*']
  },

  /**
   * Database configurations for SakuraAPI
   */
  dbConnections: [{
    mongoClientoptions:{},
    name:dbs.user.db,
    url
  }
  ],
  /**
   * Logging configuration for SakuraAPI
   */
  logging: {
    transports: [
      {
        colorize: true,
        json: true,
        level: 'debug',
        transport: 'Console'
      }
    ]
  },
  /**
   * Server configuration
   */
  server: {
    address: '127.0.0.1',
    port: 8001
  },
  /**
   * Email configuration for SakuraAPI
   */
  smtp: {
    auth: {
      pass: process.env.SMTP_PASSWORD || '',
      user: process.env.SMTP_USER || ''
    },
    host: process.env.SMTP_HOST || '',
    port: Number.parseInt(process.env.SMTP_PORT || '465'),
    requireTLS: true
  },
  smtpOptions: {
    dateFormat: process.env.SMTP_DATE_FORMAT || 'MMMM D, YYYY h:mm A (UTC: ZZ)',
    forgotPasswordTokenUrl: 'http://localhost:4200/forgot-password',
    from: process.env.SMTP_FROM || 'LOCAL Test<none@do-not-reply>',
    newUserTokenUrl: 'http://localhost:4200/confirm-email',
    templates: './config/templates/email'
  }
};
// tslint:enable:max-line-length
