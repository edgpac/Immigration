'use client';

import { useState } from 'react';
import { MessageCircle, X, Send, Loader, Bot } from 'lucide-react';

export function FloatingContactButtons() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = {
      role: 'user',
      content: input
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/groq-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: input,
          history: messages
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();

      const assistantMessage = {
        role: 'assistant',
        content: data.response
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage = {
        role: 'assistant',
        content: 'Sorry, I had trouble processing that. Please try again or contact us directly at chatscalendar@gmail.com or +52 624 125 9640.'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/526241259640?text=Hi!%20I%20need%20help%20with%20Mexican%20immigration%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group"
          style={{
            width: '64px',
            height: '64px',
            boxShadow: '0 8px 24px rgba(34, 197, 94, 0.4), 0 4px 12px rgba(0,0,0,0.2)'
          }}
          aria-label="Contact us on WhatsApp"
        >
          <svg 
            viewBox="0 0 24 24" 
            width="28" 
            height="28" 
            className="group-hover:scale-110 transition-transform"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>

        {/* AI Chat Button */}
        <button
          onClick={() => setIsChatOpen(true)}
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group relative"
          style={{
            width: '64px',
            height: '64px',
            boxShadow: '0 8px 24px rgba(80, 16, 39, 0.4), 0 4px 12px rgba(0,0,0,0.2)'
          }}
          aria-label="AI Immigration Assistant"
        >
          <Bot size={28} className="group-hover:scale-110 transition-transform" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        </button>
      </div>

      {/* AI Chat Modal */}
      {isChatOpen && (
        <div className="fixed inset-0 z-[60] flex items-end lg:items-center lg:justify-end lg:pr-6 lg:pb-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsChatOpen(false)}
          />
          
          {/* Chat Container */}
          <div className="relative w-full lg:w-[420px] h-[85vh] lg:h-[600px] bg-background border border-border rounded-t-2xl lg:rounded-2xl shadow-2xl overflow-hidden flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Immigration Assistant</h3>
                  <p className="text-xs opacity-90">Ask about visas, residency & more</p>
                </div>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Welcome Message */}
              {messages.length === 0 && (
                <div className="flex justify-start">
                  <div className="bg-white p-2 rounded-full mr-2 h-10 w-10 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Bot size={16} className="text-primary" />
                  </div>
                  <div className="max-w-[85%]">
                    <div className="text-xs text-muted-foreground mb-1 ml-1">Cabo Immigration Assistant</div>
                    <div className="bg-white border border-border rounded-2xl rounded-bl-none shadow-sm p-3">
                      <p className="text-sm">¡Hola! 👋 I'm your immigration assistant for Los Cabos.</p>
                      <p className="text-sm mt-2">I can help you with:</p>
                      <ul className="text-sm mt-2 space-y-1 ml-4 list-disc">
                        <li>Temporary & Permanent Residency</li>
                        <li>Visa requirements & processes</li>
                        <li>Document preparation</li>
                        <li>Timeline estimates</li>
                        <li>Cost information</li>
                      </ul>
                      <p className="text-sm mt-2">What would you like to know?</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Chat Messages */}
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'assistant' && (
                    <div className="bg-white p-2 rounded-full mr-2 h-8 w-8 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Bot size={14} className="text-primary" />
                    </div>
                  )}
                  <div className={`max-w-[85%] ${msg.role === 'user' ? 'order-1' : 'order-2'}`}>
                    {msg.role === 'assistant' && (
                      <div className="text-xs text-muted-foreground mb-1 ml-1">Cabo Immigration Assistant</div>
                    )}
                    <div className={`p-3 rounded-2xl text-sm ${
                      msg.role === 'user' 
                        ? 'bg-primary text-primary-foreground rounded-br-none shadow-sm' 
                        : 'bg-white border border-border rounded-bl-none shadow-sm'
                    }`}>
                      <div className="whitespace-pre-line">{msg.content}</div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Loading */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-2 rounded-full mr-2 h-8 w-8 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Bot size={14} className="text-primary" />
                  </div>
                  <div className="bg-white border border-border p-3 rounded-2xl rounded-bl-none shadow-sm">
                    <Loader className="animate-spin w-4 h-4 text-primary" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border bg-muted/20">
              <div className="flex space-x-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about residency, visas, costs..."
                  className="flex-1 p-3 border-2 border-border focus:border-primary rounded-full text-sm outline-none transition-colors bg-white"
                  disabled={isLoading}
                  autoFocus
                />
                <button 
                  onClick={handleSendMessage}
                  disabled={!input.trim() || isLoading}
                  className="bg-primary hover:bg-primary/90 disabled:bg-muted disabled:cursor-not-allowed text-primary-foreground px-4 rounded-full transition-colors flex-shrink-0"
                >
                  <Send size={18} />
                </button>
              </div>
              <div className="mt-2 text-xs text-center text-muted-foreground">
                • For consultation: +52 624 125 9640
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
