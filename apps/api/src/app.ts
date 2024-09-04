import express, { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload, VerifyErrors } from 'jsonwebtoken';
import cors from 'cors';
import { PORT } from './config';
import { SampleRouter } from './routers/sample.router';

const app = express();
const port: number = parseInt(process.env.PORT as string, 10) || PORT || 3000;

// Middleware for JWT authentication
const withAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      status: 'error',
      message: 'Unauthorized: No token provided',
    });
  }

  jwt.verify(token, process.env.JWT_SECRET as string, (err: VerifyErrors | null, decoded: JwtPayload | undefined, expired: boolean | undefined) => {
    if (err) {
      return res.status(401).json({
        status: 'error',
        message: 'Unauthorized: Invalid token',
      });
    }
    req.user = decoded;  // Note: You might need to extend the Request interface
    next();
  });

// Configure app
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const sampleRouter = new SampleRouter();

app.post('/api/login', (req: Request, res: Response) => {
  const { email, password } = req.body;
  
  if (email !== 'jgX2Z@example.com') {
    return res.status(404).json({
      status: 'error',
      message: 'Email not found',
    });
  }
  if (password !== 'password') {
    return res.status(401).json({
      status: 'error',
      message: 'Password incorrect',
    });
  }
  
  const token = jwt.sign({ id: 1, email: 'jgX2Z@example.com' }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
  
  res.json({
    status: 'ok',
    message: 'Login Success',
    data: {
      token,
    },
  });
});

app.get('/api', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    message: 'API is running',
    data: {},
  });
});

app.get('/api/user/profile', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    message: 'Profile fetched successfully',
    data: {
      name: 'John Doe',
      email: 'jgX2Z@example.com',
      role: 'admin',
      id: 1,
    },
  });
});

app.get('/api/events', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    message: 'Success Get Events List',
    events: [
      { id: 1, title: 'Event 1', date: '2024-09-20', location: 'Jakarta', price: 'IDR 100.000' },
      { id: 2, title: 'Event 2', date: '2024-10-10', location: 'Bandung', price: 'IDR 50.000' },
      { id: 3, title: 'Event 3', date: '2024-11-11', location: 'Jogja', price: 'IDR 150.000' },
      { id: 4, title: 'Event 4', date: '2024-12-12', location: 'Jogja', price: 'IDR 250.000' },
    ],
    totalPages: 1,
  });
});

app.get('/api/withAuth', withAuth, (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    message: 'Success Get Events List',
    data: [
      { id: 1, title: 'Music Concert', date: '2024-09-01', location: 'NYC', registrations: 100, revenue: 5000 },
      { id: 2, title: 'Art Exhibition', date: '2024-10-01', location: 'LA', registrations: 150, revenue: 7500 },
    ],
  });
});

app.use('/api/samples', sampleRouter.getRouter());

// Error Handling
app.use((req: Request, res: Response, next: NextFunction) => {
  if (req.path.includes('/api/')) {
    res.status(404).send('Not found!');
  } else {
    next();
  }
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (req.path.includes('/api/')) {
    console.error('Error:', err.stack);
    res.status(500).send('Error!');
  } else {
    next();
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
