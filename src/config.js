import {config} from 'dotenv';
config();

export default {
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER || '',
    dbPassword: process.env.DB_PASSWORD || '',
    dbDatabase: process.env.DB_DATABASE || '',
    dbServer: process.env.DB_SERVER || '',
    jwtSecret: process.env.JWT_SECRET || '',
    version: process.env.VERSION_APP || '',
    ftpHost: process.env.FTP_HOST || '',
    ftpUser: process.env.FTP_USER || '',
    ftpPassword: process.env.FTP_PASSWORD || '',
    mailUser: process.env.USER_MAIL || '',
    mailPass: process.env.PASS_MAIL || '',
    hostPass: process.env.HOST_MAIL || '',
    portPass: process.env.PORT_MAIL || '',
}