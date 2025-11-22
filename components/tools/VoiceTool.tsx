import React, { useState } from 'react';
import { Mic, StopCircle, Copy, RefreshCw } from 'lucide-react';

const VoiceTool: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [loading, setLoading] = useState(false);

  const toggleRecording = () => {
    if (!isRecording) {
      setIsRecording(true);
      setTranscript('');
      // Simulation of recording for UI purposes
      setTimeout(() => {
         setTranscript("Thinking about the future of AI creates a sense of wonder. It's not just about automation, but about augmentation...");
         setIsRecording(false);
      }, 3000);
    } else {
      setIsRecording(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Click the microphone to start recording. Your voice will be transcribed into text instantly.
        </p>
        
        <button
          onClick={toggleRecording}
          className={`relative w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 ${
            isRecording 
              ? 'bg-red-100 text-red-600 animate-pulse ring-4 ring-red-200 dark:ring-red-900/30' 
              : 'bg-blue-100 text-blue-600 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400'
          }`}
        >
            {isRecording ? (
                 <span className="absolute inset-0 rounded-full animate-ping bg-red-400 opacity-20"></span>
            ) : null}
          {isRecording ? <StopCircle className="h-10 w-10" /> : <Mic className="h-10 w-10" />}
        </button>
        
        <p className="mt-4 text-sm font-medium text-gray-500">
            {isRecording ? 'Listening...' : 'Ready to Record'}
        </p>
      </div>

      {transcript && (
        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 relative animate-fade-in">
           <div className="flex justify-between items-center mb-2">
             <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Transcript</h4>
             <div className="flex gap-2">
                <button 
                    className="p-1.5 text-gray-400 hover:text-blue-500 rounded-md transition-colors"
                    onClick={() => setTranscript('')}
                    title="Clear"
                >
                    <RefreshCw className="h-4 w-4" />
                </button>
                <button 
                    className="p-1.5 text-gray-400 hover:text-blue-500 rounded-md transition-colors"
                    onClick={() => navigator.clipboard.writeText(transcript)}
                    title="Copy"
                >
                    <Copy className="h-4 w-4" />
                </button>
             </div>
           </div>
          <div className="prose dark:prose-invert text-lg text-gray-800 dark:text-gray-200 max-w-none">
            "{transcript}"
          </div>
        </div>
      )}
    </div>
  );
};

export default VoiceTool;