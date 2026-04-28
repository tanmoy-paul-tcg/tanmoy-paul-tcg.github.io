'use client';

import React, { useState, useEffect } from 'react';

export default function MessagesAdmin() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/messages');
      if (!response.ok) throw new Error('Failed to fetch messages');
      const data = await response.json();
      setMessages(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this message?')) {
      return;
    }

    try {
      const response = await fetch(`/api/messages/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) throw new Error('Failed to delete message');
      
      // Update state to remove the deleted message
      setMessages(messages.filter(msg => msg._id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  const formatDate = (isoString) => {
    if (!isoString) return 'Unknown date';
    const date = new Date(isoString);
    return date.toLocaleString();
  };

  if (loading) return <div className="loading">Loading messages...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="admin-section">
      <div className="header-container">
        <h1>Messages</h1>
        <p>View messages submitted through the contact form.</p>
      </div>

      <div className="messages-container">
        {messages.length === 0 ? (
          <p className="no-messages">No messages received yet.</p>
        ) : (
          <div className="messages-list">
            {messages.map((msg) => (
              <div key={msg._id} className="message-card">
                <div className="message-header">
                  <div className="sender-info">
                    <strong>{msg.name}</strong>
                    <a href={`mailto:${msg.email}`} className="email-link">
                      {msg.email}
                    </a>
                  </div>
                  <div className="message-meta">
                    <span className="date">{formatDate(msg.createdAt)}</span>
                    <button 
                      onClick={() => handleDelete(msg._id)}
                      className="delete-btn"
                      title="Delete message"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="message-body">
                  {msg.message}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .admin-section {
          background: #111814;
          padding: 30px;
          border-radius: 12px;
          border: 1px solid rgba(158, 210, 3, 0.1);
        }

        .header-container {
          margin-bottom: 30px;
          border-bottom: 1px solid rgba(158, 210, 3, 0.1);
          padding-bottom: 20px;
        }

        h1 {
          color: #9ed203;
          font-size: 28px;
          margin: 0 0 10px 0;
        }

        p {
          color: #e9f3de;
          opacity: 0.8;
          margin: 0;
        }

        .no-messages {
          text-align: center;
          padding: 40px;
          background: rgba(158, 210, 3, 0.05);
          border-radius: 8px;
          color: #e9f3de;
        }

        .messages-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .message-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(158, 210, 3, 0.1);
          border-radius: 8px;
          padding: 20px;
          transition: border-color 0.2s;
        }

        .message-card:hover {
          border-color: rgba(158, 210, 3, 0.3);
        }

        .message-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 15px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 15px;
        }

        .sender-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .sender-info strong {
          color: #fff;
          font-size: 18px;
        }

        .email-link {
          color: #9ed203;
          text-decoration: none;
          font-size: 14px;
        }

        .email-link:hover {
          text-decoration: underline;
        }

        .message-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
        }

        .date {
          color: rgba(233, 243, 222, 0.6);
          font-size: 13px;
        }

        .delete-btn {
          background: rgba(255, 107, 107, 0.1);
          color: #ff6b6b;
          border: 1px solid rgba(255, 107, 107, 0.2);
          padding: 6px 12px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 13px;
          transition: all 0.2s;
        }

        .delete-btn:hover {
          background: #ff6b6b;
          color: #fff;
        }

        .message-body {
          color: #e9f3de;
          line-height: 1.6;
          white-space: pre-wrap;
          font-size: 15px;
        }

        .loading, .error {
          text-align: center;
          padding: 40px;
          color: #e9f3de;
          background: #111814;
          border-radius: 12px;
          border: 1px solid rgba(158, 210, 3, 0.1);
        }
        
        .error {
          color: #ff6b6b;
          border-color: rgba(255, 107, 107, 0.3);
        }
      `}</style>
    </div>
  );
}
