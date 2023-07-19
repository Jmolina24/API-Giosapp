const morgan = require('morgan');
import express from 'express';
import config from './config';
import indexRouter from './routes/index.routes';
import loginRouter from './routes/login.routes';
import adminRouter from './routes/admin.routes';
import optionRouter from './routes/option.routes';
import uploadRouter from './routes/upload.routes';


const cors = require('cors');
const app = express();

// settings
app.set('port', config.port);
app.set('json spaces', 2);

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use(indexRouter);
app.use('/api/v1/login', loginRouter);
app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/option', optionRouter);

app.use('/api/v1/upload', uploadRouter);

export default app