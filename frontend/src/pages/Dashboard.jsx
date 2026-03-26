import React, { useEffect, useState } from 'react';
import { BarChart3, Users, Database, Activity } from 'lucide-react';
import axios from 'axios';

const StatCard = ({ title, value, icon: Icon, color }) => (
  <div className="card flex items-center justify-between">
    <div>
      <p className="text-gray-500 text-sm font-medium">{title}</p>
      <p className="text-3xl font-bold mt-1">{value}</p>
    </div>
    <div className={`p-3 rounded-full ${color}`}>
      <Icon size={24} className="text-white" />
    </div>
  </div>
);

const Dashboard = () => {
  const [stats, setStats] = useState({
    modelsTrained: 0,
    datasetsUploaded: 0,
    accuracy: 0
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await axios.get('/api/stats');
      setStats(response.data);
    } catch (error) {
      console.log('Using default stats');
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
        <button className="btn-primary">New Project</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
          title="Models Trained" 
          value={stats.modelsTrained || 12} 
          icon={BarChart3} 
          color="bg-blue-500" 
        />
        <StatCard 
          title="Datasets Uploaded" 
          value={stats.datasetsUploaded || 5} 
          icon={Database} 
          color="bg-purple-500" 
        />
        <StatCard 
          title="Avg. Accuracy" 
          value={`${stats.accuracy || 94}%`} 
          icon={Activity} 
          color="bg-green-500" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium">Trained Random Forest Model</p>
                  <p className="text-sm text-gray-500">2 hours ago • 95% accuracy</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-bold mb-4">Quick Start</h3>
          <div className="space-y-3">
            <button className="w-full p-4 text-left border rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all">
              <p className="font-semibold text-blue-600">Classification Tutorial</p>
              <p className="text-sm text-gray-600 mt-1">Learn to classify Iris dataset</p>
            </button>
            <button className="w-full p-4 text-left border rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all">
              <p className="font-semibold text-purple-600">Regression Basics</p>
              <p className="text-sm text-gray-600 mt-1">Predict house prices</p>
            </button>
            <button className="w-full p-4 text-left border rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all">
              <p className="font-semibold text-green-600">Clustering Guide</p>
              <p className="text-sm text-gray-600 mt-1">Customer segmentation</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;