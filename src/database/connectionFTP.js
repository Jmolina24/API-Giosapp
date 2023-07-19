const Client = require('ftp');
import config from '../config';
export async function getConnectionFTP() {
    try {
        const ftpClient = new Client();
        ftpClient.connect({
            host: 'demo.mainsoft.technology',
            user: 'mainsoftdemo',
            password: 'dgduNL3JvS#5U'
        });
        return ftpClient;
    } catch (error) {
        console.log('Error Conectando el FTP', error);
    }
}
