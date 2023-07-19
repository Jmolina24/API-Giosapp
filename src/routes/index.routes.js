const { Router } = require("express");
import config from '../config';
const router = Router();

router.get('/', (req, res) => {
    res.redirect('/api/v1/');
})

router.get('/api/v1/', (req, res) => {
    const data = {
        "Api": "Rest Api Giosapp",
        "Version": `${config.version}`,
        "Year": "2023",
        "Developer": "Desarrollado por Jair Molina",
        "URL": "https://www.instagram.com/jamolina24"
    }
    res.json(data);
})





module.exports = router;