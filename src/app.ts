import express from 'express';
//import bodyParser from 'body-parser';
import { db } from './dao/db';
import { indexRouter } from './router/indexRouter';
import { brandRouter } from './router/brandRouter';
import { categoryRouter } from './router/categoryRouter';


const app = express();

const port = process.env.port || 3000;
app.set('port', port);

/*
    ? Middleware Registration
*/
//app.use(bodyParser.json());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

/*
    ? Router Registration
*/
app.use('', indexRouter);
app.use('/brands', brandRouter);
app.use('/categories', categoryRouter);

process.on('unhandledRejection', () => {
    db.end().then(() => {
        console.log('Database pool closed');
    });
});

app.listen(port, () => {
    console.log(`Home app running at http://localhost:${port}`);
});