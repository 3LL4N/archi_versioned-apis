import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const bodyParser = require('body-parser');

const express = require('express');

const app = express();

const db = new PrismaClient();

const PORT = 5050;

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
  .listen(PORT, () => {
    console.log('Server started at localhost:5050');
  });
