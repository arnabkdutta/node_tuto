import express from 'express';
import api from './route/route'
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
//app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.text({ type: 'text/html' }));

const route = () => api({}, app);
route();

const port = 3000;
app.listen(port, () => console.log(`Server has started at ${port}`));