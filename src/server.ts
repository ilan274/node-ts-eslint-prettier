import express, { Request, Response } from 'express';

const app = express();

app.get('/', (_request: Request, response: Response) => {
  return response.status(200).json({
    message: 'NodeJS template with TypeScript, ESLint and Prettier :)',
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
