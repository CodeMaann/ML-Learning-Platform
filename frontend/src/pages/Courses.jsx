import React, { useState } from 'react';
import { PlayCircle, Clock, BookOpen, CheckCircle, X, ChevronRight, Lock } from 'lucide-react';

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      id: 1,
      title: 'Machine Learning Fundamentals',
      description: 'Learn the basics of ML algorithms and data preprocessing',
      duration: '4 weeks',
      lessons: 12,
      completed: 8,
      level: 'Beginner',
      color: 'bg-blue-100 text-blue-800',
      content: [
        { title: 'Introduction to ML', duration: '15 min', completed: true },
        { title: 'Types of Machine Learning', duration: '20 min', completed: true },
        { title: 'Python for ML Setup', duration: '25 min', completed: true },
        { title: 'Data Preprocessing Basics', duration: '30 min', completed: true },
        { title: 'Linear Regression', duration: '45 min', completed: true },
        { title: 'Logistic Regression', duration: '40 min', completed: true },
        { title: 'Decision Trees', duration: '35 min', completed: true },
        { title: 'Random Forest', duration: '40 min', completed: true },
        { title: 'Model Evaluation', duration: '30 min', completed: false },
        { title: 'Cross Validation', duration: '25 min', completed: false },
        { title: 'Hyperparameter Tuning', duration: '35 min', completed: false },
        { title: 'Final Project', duration: '60 min', completed: false }
      ]
    },
    {
      id: 2,
      title: 'Deep Learning with TensorFlow',
      description: 'Neural networks, CNNs, RNNs and practical applications',
      duration: '6 weeks',
      lessons: 18,
      completed: 0,
      level: 'Advanced',
      color: 'bg-purple-100 text-purple-800',
      locked: true,
      content: [
        { title: 'Introduction to Neural Networks', duration: '30 min', completed: false },
        { title: 'TensorFlow Basics', duration: '45 min', completed: false },
        { title: 'Building Your First NN', duration: '50 min', completed: false },
        { title: 'Convolutional Neural Networks', duration: '60 min', completed: false },
        { title: 'Recurrent Neural Networks', duration: '55 min', completed: false },
        { title: 'Transfer Learning', duration: '40 min', completed: false }
      ]
    },
    {
      id: 3,
      title: 'Data Preprocessing Mastery',
      description: 'Cleaning, transforming, and feature engineering techniques',
      duration: '2 weeks',
      lessons: 8,
      completed: 5,
      level: 'Intermediate',
      color: 'bg-green-100 text-green-800',
      content: [
        { title: 'Handling Missing Values', duration: '20 min', completed: true },
        { title: 'Feature Scaling', duration: '25 min', completed: true },
        { title: 'Encoding Categorical Data', duration: '30 min', completed: true },
        { title: 'Outlier Detection', duration: '35 min', completed: true },
        { title: 'Feature Selection', duration: '40 min', completed: true },
        { title: 'Dimensionality Reduction', duration: '35 min', completed: false },
        { title: 'Data Pipeline Creation', duration: '45 min', completed: false },
        { title: 'Real-world Case Study', duration: '50 min', completed: false }
      ]
    }
  ];

  const handleStartLesson = (lessonTitle) => {
    alert(`Starting lesson: ${lessonTitle}\n\nIn a full app, this would open a video player or interactive coding environment!`);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Learning Center</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="card hover:scale-105 transition-transform duration-300">
            <div className="flex justify-between items-start mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${course.color}`}>
                {course.level}
              </span>
              {course.completed > 0 && (
                <span className="flex items-center gap-1 text-green-600 text-sm font-medium">
                  <CheckCircle size={16} />
                  {Math.round((course.completed / course.lessons) * 100)}%
                </span>
              )}
            </div>
            
            <h3 className="text-xl font-bold mb-2">{course.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{course.description}</p>
            
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <span className="flex items-center gap-1">
                <Clock size={16} />
                {course.duration}
              </span>
              <span className="flex items-center gap-1">
                <BookOpen size={16} />
                {course.lessons} lessons
              </span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all"
                style={{ width: `${(course.completed / course.lessons) * 100}%` }}
              ></div>
            </div>

            <button 
              onClick={() => setSelectedCourse(course)}
              className="w-full py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-medium flex items-center justify-center gap-2"
            >
              {course.locked && <Lock size={18} />}
              <PlayCircle size={20} />
              {course.completed > 0 ? 'Continue' : 'Start Learning'}
            </button>
          </div>
        ))}
      </div>

      {/* Course Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="p-6 border-b flex justify-between items-center bg-gray-50">
              <div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${selectedCourse.color} mb-2 inline-block`}>
                  {selectedCourse.level}
                </span>
                <h3 className="text-2xl font-bold">{selectedCourse.title}</h3>
              </div>
              <button 
                onClick={() => setSelectedCourse(null)}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <p className="text-gray-600 mb-6">{selectedCourse.description}</p>
              
              <div className="flex items-center gap-6 mb-6 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Clock size={16} />
                  {selectedCourse.duration}
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen size={16} />
                  {selectedCourse.lessons} lessons
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle size={16} />
                  {selectedCourse.completed} completed
                </span>
              </div>

              <h4 className="font-bold text-lg mb-4">Course Content</h4>
              <div className="space-y-2">
                {selectedCourse.content.map((lesson, idx) => (
                  <div 
                    key={idx}
                    onClick={() => !lesson.completed && handleStartLesson(lesson.title)}
                    className={`flex items-center justify-between p-4 rounded-lg border cursor-pointer transition-colors ${
                      lesson.completed 
                        ? 'bg-green-50 border-green-200 text-green-800' 
                        : 'hover:bg-blue-50 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        lesson.completed ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
                      }`}>
                        {lesson.completed ? (
                          <CheckCircle size={16} />
                        ) : (
                          <span className="text-sm font-bold">{idx + 1}</span>
                        )}
                      </div>
                      <span className="font-medium">{lesson.title}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-500">{lesson.duration}</span>
                      {!lesson.completed && (
                        <ChevronRight size={18} className="text-blue-600" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t bg-gray-50">
              <button 
                onClick={() => {
                  const nextLesson = selectedCourse.content.find(l => !l.completed);
                  if (nextLesson) handleStartLesson(nextLesson.title);
                  else alert('Congratulations! You completed all lessons!');
                }}
                className="w-full btn-primary py-3 flex items-center justify-center gap-2"
              >
                <PlayCircle size={20} />
                {selectedCourse.completed === 0 ? 'Start First Lesson' : 'Continue Learning'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;