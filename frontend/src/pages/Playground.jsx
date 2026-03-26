import React, { useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Playground = () => {
  const [algorithm, setAlgorithm] = useState('linear_regression');
  const [dataset, setDataset] = useState('iris');
  const [training, setTraining] = useState(false);
  const [results, setResults] = useState(null);

  const algorithms = [
    { id: 'linear_regression', name: 'Linear Regression', type: 'Regression' },
    { id: 'logistic_regression', name: 'Logistic Regression', type: 'Classification' },
    { id: 'random_forest', name: 'Random Forest', type: 'Both' },
    { id: 'svm', name: 'Support Vector Machine', type: 'Classification' },
    { id: 'kmeans', name: 'K-Means Clustering', type: 'Clustering' }
  ];

  const handleTrain = async () => {
    setTraining(true);
    try {
      const response = await axios.post('/api/train', {
        algorithm,
        dataset
      });
      setResults(response.data);
    } catch (error) {
      alert('Training failed: ' + error.message);
    }
    setTraining(false);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">ML Playground</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Control Panel */}
        <div className="card space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Algorithm
            </label>
            <select 
              value={algorithm} 
              onChange={(e) => setAlgorithm(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            >
              {algorithms.map(algo => (
                <option key={algo.id} value={algo.id}>
                  {algo.name} ({algo.type})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Dataset
            </label>
            <select 
              value={dataset} 
              onChange={(e) => setDataset(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="iris">Iris Classification</option>
              <option value="boston">Boston Housing</option>
              <option value="diabetes">Diabetes Dataset</option>
              <option value="custom">Upload Custom</option>
            </select>
          </div>

          <div className="pt-4">
            <button 
              onClick={handleTrain}
              disabled={training}
              className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {training ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Training...
                </>
              ) : (
                'Train Model'
              )}
            </button>
          </div>

          {results && (
            <div className="bg-gray-50 p-4 rounded-lg space-y-2">
              <h4 className="font-semibold text-gray-700">Results</h4>
              <div className="flex justify-between text-sm">
                <span>Accuracy:</span>
                <span className="font-bold text-green-600">{results.accuracy}%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Training Time:</span>
                <span className="font-medium">{results.training_time}s</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>F1 Score:</span>
                <span className="font-medium">{results.f1_score}</span>
              </div>
            </div>
          )}
        </div>

        {/* Visualization Panel */}
        <div className="card lg:col-span-2">
          <h3 className="text-lg font-bold mb-4">Training Visualization</h3>
          <div className="h-96 bg-gray-50 rounded-lg p-4">
            {results ? (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={results.metrics_history}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="epoch" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="accuracy" stroke="#3B82F6" strokeWidth={2} />
                  <Line type="monotone" dataKey="loss" stroke="#EF4444" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-400">
                <p>Train a model to see visualization</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Code Editor Preview */}
      <div className="card bg-gray-900 text-white">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold">Generated Python Code</h3>
          <button className="text-sm bg-gray-800 px-3 py-1 rounded hover:bg-gray-700">
            Copy
          </button>
        </div>
        <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm font-mono">
{`from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split

# Load dataset
data = load_iris()
X_train, X_test, y_train, y_test = train_test_split(
    data.data, data.target, test_size=0.2
)

# Train model
model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)

# Evaluate
accuracy = model.score(X_test, y_test)
print(f"Accuracy: {accuracy:.2f}")`}
        </pre>
      </div>
    </div>
  );
};

export default Playground;