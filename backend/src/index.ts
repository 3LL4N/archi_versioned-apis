import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const bodyParser = require('body-parser');

const express = require('express');

const app = express();

const db = new PrismaClient();

app
  .use(cors())
  .use(bodyParser.json())
  .get('/people', (request: any, response: any) => {
    db
      .person
      .findMany()
      .then((people) => {
        response.json(people);
      });
  })
  .listen(8000, () => {
    console.log('Server started at http://localhost:8000');
  });
