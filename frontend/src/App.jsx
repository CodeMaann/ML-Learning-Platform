import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Brain, BookOpen, Play, Upload, BarChart3, Home } from 'lucide-react';
import Dashboard from './pages/Dashboard';
import Playground from './pages/Playground';
import Datasets from './pages/Datasets';
import Courses from './pages/Courses';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-xl h-screen fixed left-0 top-0">
          <div className="p-6 border-b">
            <div className="flex items-center gap-2 text-blue-600">
              <Brain size={32} />
              <h1 className="text-xl font-bold">ML Platform</h1>
            </div>
          </div>
          
          <nav className="p-4 space-y-2">
            <Link to="/" className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors">
              <Home size={20} />
              <span className="font-medium">Dashboard</span>
            </Link>
            <Link to="/playground" className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors">
              <Play size={20} />
              <span className="font-medium">ML Playground</span>
            </Link>
            <Link to="/datasets" className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors">
              <Upload size={20} />
              <span className="font-medium">Datasets</span>
            </Link>
            <Link to="/courses" className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors">
              <BookOpen size={20} />
              <span className="font-medium">Courses</span>
            </Link>
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-lg">
              <p className="text-sm font-medium">Pro Features</p>
              <p className="text-xs mt-1 opacity-90">Upgrade for GPU training</p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-64 p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/datasets" element={<Datasets />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;