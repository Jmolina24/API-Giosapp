import { Router } from 'express';
import { signController } from '../controllers/login.controller';


const router = Router()


// login
router.post('/sign', signController);





export default router;