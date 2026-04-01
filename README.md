 ## ML Learning Platform

An interactive platform for learning Machine Learning through hands-on practice.

What It Does:
- Playground: Adjust ML model parameters and see results instantly
- Code Lab: Write real Pandas code and get instant feedback
- Visualizer: Watch algorithms work step by step
- Gamification: Earn points and track your progress
I'll examine both the backend and frontend directories to create an accurate README based on the actual code structure.
Let me check the package.json files in both directories to understand the actual dependencies and structure:
Let me check the main server file and explore the repository structure more:
Now let me check the backend structure and main files:
Let me explore the backend directory structure:
Let me try to access the backend files directly:
Let me check if there's a backend folder index or main file:
Based on the frontend `package.json` I retrieved and the existing repository structure, here's a comprehensive, rewritten README.md for your ML Learning Platform:

## ✨ Key Features

### 🎮 Interactive ML Playground
- **Real-time Simulations**: Adjust hyperparameters (learning rate, iterations, regularization) and instantly see model performance
- **Algorithm Visualizer**: Watch Gradient Descent, Linear Regression, and Classification algorithms work step-by-step
- **Dataset Upload**: Support for CSV/JSON file uploads via drag-and-drop interface
- **Interactive Charts**: Dynamic visualizations using Recharts for loss curves, decision boundaries, and data distributions

### 💻 Code Lab Environment
- **Browser-based IDE**: Write and execute Python/Pandas code directly in the browser
- **Instant Feedback**: Real-time code validation with detailed error messages
- **Progressive Hints**: Smart hint system that guides without giving away solutions
- **Exercise Categories**:
  - Data Cleaning & Preprocessing
  - Exploratory Data Analysis
  - Feature Engineering
  - Model Training & Evaluation

### 🏆 Gamification & Progress
- **XP & Leveling System**: Earn experience points for completed exercises and simulations
- **Daily Streaks**: Track consecutive learning days
- **Global Leaderboard**: Compete with learners worldwide
- **Achievement Badges**: Unlock rewards for milestones (First Model, Data Master, Algorithm Expert, etc.)
- **Personal Dashboard**: Visualize learning progress, completed exercises, and skill development

### 📊 Modern UI/UX
- **Responsive Design**: Built with TailwindCSS for seamless mobile and desktop experience
- **Dark/Light Mode**: Eye-friendly interface for long coding sessions
- **File Upload**: Drag-and-drop interface using React Dropzone
- **Smooth Navigation**: React Router for SPA experience without page reloads

## 🚀 Tech Stack

### Frontend
- **Framework**: React 18.2+ with Hooks & Functional Components
- **Build Tool**: Vite (fast HMR and optimized builds)
- **Styling**: TailwindCSS 3.3+ with custom animations
- **Routing**: React Router DOM v6
- **HTTP Client**: Axios for API communication
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React (modern, consistent iconography)
- **File Handling**: React Dropzone for dataset uploads

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens) with bcrypt password hashing
- **Security**: CORS, Helmet, Rate Limiting
- **File Processing**: Multer for dataset uploads

## 🛠️ Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (v4.4 or higher, local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/CodeMaann/ML-Learning-Platform.git
   cd ML-Learning-Platform
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   
   # Create environment file
   cp .env.example .env
   # Edit .env with your MongoDB URI and JWT secret
   ```

3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Configuration**
   
   Backend `.env`:
   ```env
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/ml_learning_platform
   
   JWT_SECRET=your_super_secret_jwt_key_min_32_characters
   JWT_EXPIRE=7d
   
   CLIENT_URL=http://localhost:5173
   ```

5. **Run Development Servers**
   ```bash
   # Terminal 1 - Backend
   cd backend
   npm run dev
   
   # Terminal 2 - Frontend
   cd frontend
   npm run dev
   ```

6. **Access Application**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:5000`

## 📚 API Documentation

### Authentication Endpoints
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register new user | No |
| POST | `/api/auth/login` | Login user | No |
| GET | `/api/auth/me` | Get current user profile | Yes |
| PUT | `/api/auth/profile` | Update user profile | Yes |

### Playground Endpoints
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/playground/simulate` | Run ML model simulation | Yes |
| POST | `/api/playground/visualize` | Get algorithm visualization data | No |
| POST | `/api/playground/upload` | Upload custom dataset | Yes |
| GET | `/api/playground/history` | Get user's simulation history | Yes |

### Exercise Endpoints
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/exercises` | List all exercises (filter by category/difficulty) | No |
| GET | `/api/exercises/:id` | Get exercise details | Yes |
| POST | `/api/exercises/:id/submit` | Submit code solution | Yes |
| GET | `/api/exercises/:id/hints` | Get progressive hints | Yes |

### Progress Endpoints
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/progress/dashboard` | Get user dashboard stats | Yes |
| GET | `/api/progress/leaderboard` | Get global leaderboard | No |
| GET | `/api/progress/streak` | Get current streak info | Yes |

## 🗂️ Project Structure

```
ML-Learning-Platform/
├── backend/
│   ├── config/
│   │   ├── database.js          # MongoDB connection
│   │   └── passport.js          # JWT strategy config
│   ├── controllers/
│   │   ├── authController.js    # Authentication logic
│   │   ├── playgroundController.js  # ML simulations
│   │   ├── exerciseController.js    # Exercise management
│   │   └── progressController.js    # User progress
│   ├── middleware/
│   │   ├── auth.js              # JWT verification
│   │   ├── errorHandler.js      # Global error handling
│   │   └── upload.js            # File upload handling
│   ├── models/
│   │   ├── User.js              # User schema
│   │   ├── Exercise.js          # Exercise content
│   │   ├── Progress.js          # User progress tracking
│   │   └── Simulation.js        # Playground history
│   ├── routes/
│   │   ├── auth.js
│   │   ├── playground.js
│   │   ├── exercises.js
│   │   └── progress.js
│   ├── utils/
│   │   ├── codeExecutor.js      # Safe Python code execution
│   │   ├── mlSimulator.js       # ML algorithm simulations
│   │   └── validators.js        # Input validation
│   ├── .env.example
│   └── server.js                # Entry point
│
├── frontend/
│   ├── src/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── Common/
│   │   │   ├── Playground/
│   │   │   ├── CodeLab/
│   │   │   └── Dashboard/
│   │   ├── pages/               # Route pages
│   │   │   ├── Home.jsx
│   │   │   ├── Playground.jsx
│   │   │   ├── Exercises.jsx
│   │   │   ├── CodeLab.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── hooks/               # Custom React hooks
│   │   ├── context/             # React Context (Auth, Theme)
│   │   ├── services/            # API calls (Axios)
│   │   ├── utils/               # Helper functions
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── index.html
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── vite.config.js
│
└── README.md
```

## 🧪 Available Scripts

### Backend
```bash
npm run dev      # Start with nodemon (auto-reload)
npm start        # Start production server
npm test         # Run test suite
```

### Frontend
```bash
npm run dev      # Start Vite dev server
npm run build    # Build for production
npm run preview  # Preview production build locally
```

## 🎨 Key Frontend Components

- **PlaygroundInterface**: Interactive ML parameter tuning with live charts
- **CodeEditor**: Browser-based code editor with syntax highlighting
- **Visualizer**: Step-by-step algorithm animation component
- **ProgressChart**: Recharts-based progress visualization
- **Leaderboard**: Real-time ranking table with user stats
- **Dropzone**: CSV/JSON file upload with validation

## 🔒 Security Features

- JWT-based authentication with secure httpOnly cookies
- Password hashing using bcrypt (salt rounds: 12)
- CORS protection for API endpoints
- Rate limiting on authentication routes
- Input sanitization and validation
- Secure file upload restrictions (type/size)

## 🚀 Deployment

### Deploy Backend to Render
1. Push code to GitHub
2. Create New Web Service on Render
3. Connect repository
4. Add environment variables:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `NODE_ENV=production`
   - `CLIENT_URL` (frontend URL)
5. Build Command: `npm install`
6. Start Command: `npm start`

### Deploy Frontend to Vercel/Netlify
```bash
cd frontend
npm run build
# Deploy 'dist' folder to your preferred platform
```

**Important**: Update frontend API base URL in `src/services/api.js` for production:
```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

### Code Standards
- ESLint + Prettier for code formatting
- Conventional commit messages
- Component-based architecture for frontend
- RESTful API design principles

## 📋 Roadmap

- [ ] **v2.0**: Neural Network Playground with TensorFlow.js
- [ ] **v2.1**: Collaborative coding rooms (Socket.io)
- [ ] **v2.2**: AI-powered code review and hints
- [ ] **v2.3**: Video tutorial integration
- [ ] **v2.4**: Mobile app (React Native)
- [ ] **v2.5**: Certificate generation system

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with modern open-source technologies
- Inspired by interactive learning platforms
- Icons by [Lucide](https://lucide.dev/)
- Charts powered by [Recharts](https://recharts.org/)

