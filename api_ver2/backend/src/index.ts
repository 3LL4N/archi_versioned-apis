import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const bodyParser = require('body-parser');

const express = require('express');

const app = express();

const db = new PrismaClient();

const PORT = 5050;

interface PersonV1 {
  id: number;
  firstName: string;
  lastName: string;
}

interface PersonV2 {
  id: number;
  familyName: string;
  givenName: string;
}

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
  .get('/v2/people', (request: any, response: any) => {
    db
      .person
      .findMany()
      .then((people) => {
        response.json(people);
  })
  .listen(PORT, () => {
    console.log('Server started at localhost:5050');
  });
