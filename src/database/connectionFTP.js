const Client = require('ftp');
import config from '../config';
export async function getConnectionFTP() {
    try {
        const ftpClient = new Client();
        ftpClient.connect({
            host: 'giosapp.mipresapp.co',
            user: 'sumneg_giosapp',
            password: 'zTRhrVrN5!3'
        });
        return ftpClient;
    } catch (error) {
        console.log('Error Conectando el FTP', error);
    }
}
