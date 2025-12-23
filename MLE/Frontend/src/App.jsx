
import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingSpinner = () => (
    <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-lloyds-green"></div>
    </div>
);

function App() {
    const [formData, setFormData] = useState({
        Age: 30,
        AmountSpent: 500,
        LoginFrequency: 5, // New Field
        Gender: 'M',
        IncomeLevel: 'Medium',
        MaritalStatus: 'Single',
        ProductCategory: 'Electronics',
        InteractionType: 'Inquiry', // New Field
        ResolutionStatus: 'Resolved', // New Field
        ServiceUsage: 'Mobile App'
    });

    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setResult(null);
        try {
            // Assuming Backend is running on port 8000
            const response = await axios.post('http://localhost:8000/predict/churn', formData);
            setResult(response.data);
        } catch (err) {
            setError('Failed to connect to API. Is the Backend running?');
            console.error(err);
        }
        setLoading(false);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
            {/* Header */}
            <header className="bg-lloyds-green text-white p-6 shadow-md">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Lloyds Banking Group</h1>
                        <p className="text-lloyds-light opacity-90 text-sm mt-1">Enterprise Analytics AI · Churn Prediction System</p>
                    </div>
                    <div className="hidden md:block">
                        <span className="bg-white/10 px-3 py-1 rounded text-xs font-medium uppercase tracking-wider">v1.1 Updates</span>
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto p-6 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Input Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
                    >
                        <h2 className="text-xl font-semibold mb-6 flex items-center text-lloyds-dark">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                            Customer Profile
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Age</label>
                                    <input type="number" name="Age" value={formData.Age} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lloyds-green/20 focus:border-lloyds-green transition-all" required />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Avg Spend (£)</label>
                                    <input type="number" name="AmountSpent" value={formData.AmountSpent} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lloyds-green/20 focus:border-lloyds-green transition-all" required />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Login Frequency / Year</label>
                                <input type="number" name="LoginFrequency" value={formData.LoginFrequency} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lloyds-green/20 focus:border-lloyds-green transition-all" required />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Gender</label>
                                    <select name="Gender" value={formData.Gender} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lloyds-green/20 focus:border-lloyds-green transition-all">
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Income</label>
                                    <select name="IncomeLevel" value={formData.IncomeLevel} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lloyds-green/20 focus:border-lloyds-green transition-all">
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Marital Status</label>
                                    <select name="MaritalStatus" value={formData.MaritalStatus} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lloyds-green/20 focus:border-lloyds-green transition-all">
                                        <option value="Single">Single</option>
                                        <option value="Married">Married</option>
                                        <option value="Divorced">Divorced</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Service Usage</label>
                                    <select name="ServiceUsage" value={formData.ServiceUsage} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lloyds-green/20 focus:border-lloyds-green transition-all">
                                        <option value="Mobile App">Mobile App</option>
                                        <option value="Website">Website</option>
                                        <option value="Online Banking">Online Banking</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Product Category</label>
                                <select name="ProductCategory" value={formData.ProductCategory} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lloyds-green/20 focus:border-lloyds-green transition-all">
                                    <option value="Electronics">Electronics</option>
                                    <option value="Clothing">Clothing</option>
                                    <option value="Books">Books</option>
                                    <option value="Furniture">Furniture</option>
                                    <option value="Groceries">Groceries</option>
                                </select>
                            </div>

                            {/* New Fields: Interaction & Resolution */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Interaction Type</label>
                                    <select name="InteractionType" value={formData.InteractionType} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lloyds-green/20 focus:border-lloyds-green transition-all">
                                        <option value="Inquiry">Inquiry</option>
                                        <option value="Complaint">Complaint</option>
                                        <option value="Feedback">Feedback</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold uppercase text-gray-500 mb-1">Resolution Status</label>
                                    <select name="ResolutionStatus" value={formData.ResolutionStatus} onChange={handleChange} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-lloyds-green/20 focus:border-lloyds-green transition-all">
                                        <option value="Resolved">Resolved</option>
                                        <option value="Unresolved">Unresolved</option>
                                        <option value="User Ignored">User Ignored</option>
                                    </select>
                                </div>
                            </div>

                            <button type="submit" disabled={loading} className="w-full bg-lloyds-green hover:bg-lloyds-dark text-white font-bold py-3 rounded-lg shadow-lg shadow-lloyds-green/30 transition-all transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed">
                                {loading ? 'Analyzing...' : 'Predict Churn Risk'}
                            </button>
                        </form>
                    </motion.div>

                    {/* Results Panel */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col justify-center"
                        >
                            <h2 className="text-xl font-semibold mb-6 text-lloyds-dark">Prediction Result</h2>

                            {loading && <LoadingSpinner />}

                            {error && (
                                <div className="bg-red-50 text-red-600 p-4 rounded-lg flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    {error}
                                </div>
                            )}

                            {!loading && !result && !error && (
                                <div className="text-center text-gray-400 py-12">
                                    <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                                    <p>Enter customer details to generate AI prediction.</p>
                                </div>
                            )}

                            <AnimatePresence>
                                {result && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-center"
                                    >
                                        <div className={`text-5xl font-extrabold mb-2 ${result.prediction === 'Churn' ? 'text-red-500' : 'text-lloyds-green'}`}>
                                            {result.prediction}
                                        </div>
                                        <p className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-8">Predicted Status</p>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <span className="block text-gray-400 text-xs font-semibold uppercase mb-1">Probability</span>
                                                <span className="text-2xl font-bold text-gray-800">{(result.probability * 100).toFixed(1)}%</span>
                                            </div>
                                            <div className={`p-4 rounded-lg ${result.risk_level === 'Critical' ? 'bg-red-50 text-red-600' : result.risk_level === 'Warning' ? 'bg-orange-50 text-orange-600' : 'bg-green-50 text-green-600'}`}>
                                                <span className="block opacity-70 text-xs font-semibold uppercase mb-1">Risk Level</span>
                                                <span className="text-2xl font-bold">{result.risk_level}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </main>

            <footer className="max-w-4xl mx-auto p-6 text-center text-gray-400 text-xs">
                <p>&copy; 2025 Lloyd Banking Group · MLE Division · Powered by React & FastAPI</p>
            </footer>
        </div>
    );
}

export default App;
