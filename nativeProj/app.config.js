import 'dotenv/config';

export default {
  name: 'CoolApp',
  version: '1.0.0',
  extra: {
    backendUrl: process.env.BACKEND_URL,
  },
};