import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileText, Trash2, Download } from 'lucide-react';
{/* all the requird data sets  */}
const Datasets = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Handle file upload to backend
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/csv': ['.csv'],
      'application/json': ['.json']
    }
  });

  const datasets = [
    { name: 'sales_data.csv', size: '2.4 MB', rows: 15420, uploaded: '2 days ago' },
    { name: 'customer_churn.json', size: '1.1 MB', rows: 5000, uploaded: '1 week ago' },
    { name: 'housing_prices.csv', size: '890 KB', rows: 20640, uploaded: '2 weeks ago' }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">Datasets</h2>

      {/* Upload Area */}
      <div 
        {...getRootProps()} 
        className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-colors ${
          isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'
        }`}
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <p className="text-lg font-medium text-gray-700">
          {isDragActive ? 'Drop files here...' : 'Drag & drop CSV/JSON files here'}
        </p>
        <p className="text-sm text-gray-500 mt-2">or click to select files</p>
      </div>

      {/* Dataset List */}
      <div className="card">
        <h3 className="text-lg font-bold mb-4">Your Datasets</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-gray-600">Name</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Size</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Rows</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Uploaded</th>
                <th className="text-right py-3 px-4 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {datasets.map((dataset, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-4 flex items-center gap-2">
                    <FileText size={20} className="text-blue-600" />
                    <span className="font-medium">{dataset.name}</span>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{dataset.size}</td>
                  <td className="py-4 px-4 text-gray-600">{dataset.rows.toLocaleString()}</td>
                  <td className="py-4 px-4 text-gray-600">{dataset.uploaded}</td>
                  <td className="py-4 px-4 text-right">
                    <button className="p-2 hover:bg-gray-200 rounded-lg text-gray-600 hover:text-blue-600 transition-colors">
                      <Download size={18} />
                    </button>
                    <button className="p-2 hover:bg-gray-200 rounded-lg text-gray-600 hover:text-red-600 transition-colors ml-2">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Datasets;
