import React from 'react';
import { Modal } from './ReusableComponents';

const StartupReadinessQuiz = ({ isOpen, onClose }) => {
    const questions = React.useMemo(() => [
        { q: 'What stage is your idea?', o: ['Just an idea', 'Prototype built', 'Early customers', 'Generating revenue'], s: [1, 3, 4, 5] },
        { q: 'Who is on your team?', o: ['Just me', 'Co-founder(s)', 'Small team (2-5)', 'Growing team (5+)'], s: [2, 4, 5, 5] },
        { q: 'Have you identified your target market?', o: ['Not yet', 'A broad idea', 'Specific niche identified', 'Actively engaging with them'], s: [1, 2, 4, 5] },
        { q: 'What is your primary need right now?', o: ['Mentorship', 'Funding', 'Networking', 'All of the above'], s: [3, 3, 3, 5] }
    ], []);

    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [score, setScore] = React.useState(0);
    const [showResult, setShowResult] = React.useState(false);

    const handleAnswer = (points) => {
        setScore(prev => prev + points);
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
        } else {
            setShowResult(true);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
    };
    
    React.useEffect(() => {
        if (!isOpen) {
            setTimeout(resetQuiz, 300);
        }
    }, [isOpen]);

    const getResultContent = () => {
        const percentage = (score / (questions.length * 5)) * 100;
        if (percentage >= 80) return { title: "You're Ready to Launch!", text: "Your preparation is impressive. You have a solid foundation. V-NEST is the perfect place to accelerate your growth.", color: 'text-green-400' };
        if (percentage >= 50) return { title: "On the Right Track!", text: "You have a strong base to build upon. V-NEST's mentorship and resources can help you fill in the gaps and prepare for the next level.", color: 'text-yellow-400' };
        return { title: "The Journey Begins!", text: "Every great company starts with an idea. V-NEST is designed to help founders at your stage refine their vision and build a successful venture from the ground up.", color: 'text-red-400' };
    };

    const result = getResultContent();

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            {!showResult ? (
                <div>
                    <h2 className="text-3xl font-bold text-white mb-2 text-center">Startup Readiness Quiz</h2>
                    <p className="text-purple-200 mb-8 text-center">Question {currentQuestion + 1} of {questions.length}</p>
                    <div className="p-6 bg-black rounded-xl border border-purple-900/50">
                        <h3 className="text-2xl font-bold text-purple-300 mb-6 text-center">{questions[currentQuestion].q}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {questions[currentQuestion].o.map((option, i) => (
                                <button key={i} onClick={() => handleAnswer(questions[currentQuestion].s[i])} className="quiz-option">
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                 <div className="text-center animate-fade-in-fast">
                    <h2 className={`text-4xl font-bold mb-4 ${result.color}`}>{result.title}</h2>
                    <p className="text-lg text-purple-200 mb-8 max-w-xl mx-auto">{result.text}</p>
                    <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600 mb-8">
                        {Math.round((score / (questions.length * 5)) * 100)}%
                        <span className="text-2xl text-purple-300"> Ready</span>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <a href="#apply" onClick={onClose} className="cta-button">Apply to V-NEST</a>
                        <button onClick={resetQuiz} className="cta-button-small bg-purple-950 border border-purple-800">Retake Quiz</button>
                    </div>
                </div>
            )}
        </Modal>
    );
};

export default StartupReadinessQuiz;
