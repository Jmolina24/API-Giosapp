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


router.get('/api/v1/lit-elemt', (req, res) => {
    const people = [
        {
          name: 'Calvin Hawkins',
          email: 'calvin.hawkins@example.com',
          phone: '1-770-736-8031',
          website: 'hildegard.org',          
          image:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          name: 'Kristen Ramos',
          email: 'kristen.ramos@example.com',
          phone: '010-692-6593',
          website: 'hildegard.org',
          image:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          name: 'Ted Fox',
          email: 'ted.fox@example.com',
          phone: '1-770-736-8031',
          website: 'hildegard.org',
          image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          name: 'Tedes Foxas',
          email: 'ted.foxas@example.com',
          phone: '151-770-736-8031',
          website: 'awsgard.org',
          image:
          'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          name: 'Ervin Howell',
          email: 'Shanna@melissa.tv',
          phone: '9-770-8031',
          website: 'anastasia.net',
          image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Calvin Hawkins',
            email: 'calvin.hawkins@example.com',
            phone: '1-770-736-8031',
            website: 'hildegard.org',          
            image:
              'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          {
            name: 'Kristen Ramos',
            email: 'kristen.ramos@example.com',
            phone: '010-692-6593',
            website: 'hildegard.org',
            image:
              'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          {
            name: 'Ted Fox',
            email: 'ted.fox@example.com',
            phone: '1-770-736-8031',
            website: 'hildegard.org',
            image:
              'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          {
            name: 'Tedes Foxas',
            email: 'ted.foxas@example.com',
            phone: '151-770-736-8031',
            website: 'awsgard.org',
            image:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
          {
            name: 'Ervin Howell',
            email: 'Shanna@melissa.tv',
            phone: '9-770-8031',
            website: 'anastasia.net',
            image:
              'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          }        
      ]
    res.json(people);
})






module.exports = router;