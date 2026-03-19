 ## ML Learning Platform

An interactive platform for learning Machine Learning through hands-on practice.

What It Does:
- Playground: Adjust ML model parameters and see results instantly
- Code Lab: Write real Pandas code and get instant feedback
- Visualizer: Watch algorithms work step by step
- Gamification: Earn points and track your progress

Tech Stack:
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express, MongoDB

## Environment Setup

Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/ml_learning_platform
# For production: mongodb+srv://user:pass@cluster.mongodb.net/ml_learning_platform

# Security
JWT_SECRET=your_super_secret_random_string_min_32_chars
JWT_EXPIRE=7d

# CORS (Frontend URL)
CLIENT_URL=http://localhost:3000
```

## API Documentation

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | No |
| POST | `/api/auth/login` | Login user | No |
| GET | `/api/auth/me` | Get current user | Yes |

**Register/Login Request:**
```json
{
  "username": "ml_learner",
  "email": "user@example.com",
  "password": "securepassword123"
}
```

### Playground Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/playground/simulate` | Run ML model simulation | Yes |
| POST | `/api/playground/visualize` | Get algorithm visualization data | No |

**Simulation Request:**
```json
{
  "modelType": "classification",
  "datasetType": "linear",
  "sampleSize": 100,
  "learningRate": 0.01,
  "iterations": 100,
  "noiseLevel": 0.1
}
```

**Visualization Request:**
```json
{
  "algorithm": "gradient-descent",
  "params": {
    "function": "quadratic",
    "learningRate": 0.1,
    "iterations": 50
  }
}
```

### Exercise Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/exercises` | List all exercises | No |
| GET | `/api/exercises/:id` | Get exercise details | Yes |
| POST | `/api/exercises/:id/submit` | Submit code solution | Yes |
| GET | `/api/exercises/:id/hints` | Get progressive hints | Yes |

**Code Submission Request:**
```json
{
  "code": "df = df.drop_duplicates()\ndf['sales'] = df['sales'].fillna(df['sales'].mean())"
}
```

### Progress Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/progress/dashboard` | Get user dashboard stats | Yes |
| GET | `/api/progress/leaderboard` | Get global leaderboard | No |

## Database Schema

### User
```javascript
{
  username: String,
  email: String,
  password: String (hashed),
  level: Number (default: 1),
  xp: Number (default: 0),
  streak: Number (default: 0),
  completedExercises: Array,
  playgroundHistory: Array
}
```

### Exercise
```javascript
{
  title: String,
  description: String,
  category: Enum ['data-cleaning', 'visualization', 'preprocessing', 'analysis'],
  difficulty: Enum ['beginner', 'intermediate', 'advanced'],
  dataset: Object,
  starterCode: String,
  solution: String,
  validationRules: Array,
  xpReward: Number
}
```

### Progress
```javascript
{
  user: ObjectId (ref: User),
  exercise: ObjectId (ref: Exercise),
  status: Enum ['started', 'in-progress', 'completed'],
  attempts: Array,
  bestScore: Number
}
```

## Deployment

### Deploy to Render

1. Push code to GitHub
2. Create new Web Service on [Render](https://render.com)
3. Connect GitHub repository
4. Add environment variables in Render Dashboard
5. Deploy!

**Build Command:** `npm install`
**Start Command:** `npm start`

### Deploy to Railway

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

### MongoDB Atlas Setup

1. Create free cluster at [MongoDB Atlas](https://mongodb.com/atlas)
2. Database Access → Create new user
3. Network Access → Add IP (0.0.0.0/0 for all)
4. Clusters → Connect → Drivers → Node.js
5. Copy connection string to `MONGODB_URI`

## Frontend Integration

### Base URL Configuration

```javascript
// config.js
const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-api-domain.com/api'
  : 'http://localhost:5000/api';
```

### Example API Calls

```javascript
// Authentication
const login = async (credentials) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  });
  return res.json();
};

// Run ML Simulation
const runSimulation = async (params, token) => {
  const res = await fetch(`${API_URL}/playground/simulate`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(params)
  });
  return res.json();
};

// Submit Exercise Code
const submitSolution = async (exerciseId, code, token) => {
  const res = await fetch(`${API_URL}/exercises/${exerciseId}/submit`, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ code })
  });
  return res.json();
};
```

## Testing

```bash
# Run tests (when implemented)
npm test

# Test API endpoints manually
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"test","email":"test@test.com","password":"password123"}'
```

## Project Structure

```
ml-learning-platform/
├── server/
│   ├── config/
│   │   └── database.js          # MongoDB connection
│   ├── models/
│   │   ├── User.js              # User schema
│   │   ├── Exercise.js          # Exercise schema
│   │   └── Progress.js          # Progress tracking
│   ├── routes/
│   │   ├── auth.js              # Authentication routes
│   │   ├── playground.js        # ML simulation routes
│   │   ├── exercises.js         # Exercise routes
│   │   └── progress.js          # Progress routes
│   ├── middleware/
│   │   └── auth.js              # JWT verification
│   └── server.js                # Entry point
├── .env.example                 # Environment template
├── package.json
└── README.md
```
**Built with love for ML learners everywhere**
```

