'use client';

import React, { useState, useEffect } from 'react';

export default function AdminAdvertisement() {
  const [form, setForm] = useState({ text: '', link: '' });
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch('/api/marquee').then(r => r.json()).then(data => {
      setForm({ text: data.text || '', link: data.link || '' });
      setLoading(false);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/marquee', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  if (loading) return <div style={{color:'#e9f3de',textAlign:'center',padding:60}}>Loading...</div>;

  return (
    <div>
      <h1 className="admin-title">Advertisement Ticker</h1>
      <p className="admin-subtitle">Update the scrolling news ticker displayed at the top of the homepage.</p>

      <div className="preview-card">
        <h3>Live Preview</h3>
        <div className="preview-marquee">
          <span className="preview-badge">NEWS</span>
          <div className="preview-text">
            <marquee>{form.text || 'Your advertisement text will appear here...'}</marquee>
          </div>
        </div>
      </div>

      <div className="form-card">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label>Advertisement Text</label>
            <textarea
              rows={3}
              value={form.text}
              onChange={e => setForm({...form, text: e.target.value})}
              placeholder="Enter the scrolling news text..."
              required
            />
          </div>
          <div className="form-row">
            <label>Link URL</label>
            <input
              value={form.link}
              onChange={e => setForm({...form, link: e.target.value})}
              placeholder="https://example.com/..."
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="save-btn">
              {saved ? '✓ Saved!' : 'Update Advertisement'}
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        .admin-title { font-size: 28px; color: #e9f3de; margin: 0 0 8px 0; }
        .admin-subtitle { color: rgba(233,243,222,0.6); margin-bottom: 24px; }

        .preview-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(158,210,3,0.12); border-radius: 14px; padding: 20px; margin-bottom: 24px; }
        .preview-card h3 { color: #9ed203; font-size: 16px; margin: 0 0 12px 0; }
        .preview-marquee { display: flex; align-items: center; background: var(--primary-color, #004D40); border-radius: 6px; overflow: hidden; }
        .preview-badge { background: #9ed203; color: #004D40; padding: 8px 12px; font-weight: bold; font-size: 14px; }
        .preview-text { flex: 1; color: #e9f3de; padding: 0 12px; font-size: 14px; }

        .form-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(158,210,3,0.15); border-radius: 16px; padding: 28px; }
        .form-row { margin-bottom: 16px; }
        .form-row label { display: block; color: rgba(233,243,222,0.7); font-size: 13px; font-weight: 600; margin-bottom: 6px; }
        .form-row input, .form-row textarea { width: 100%; padding: 12px 14px; background: rgba(255,255,255,0.06); border: 1px solid rgba(158,210,3,0.2); border-radius: 8px; color: #e9f3de; font-size: 14px; outline: none; resize: vertical; }
        .form-row input:focus, .form-row textarea:focus { border-color: #9ed203; }
        .form-actions { margin-top: 20px; }
        .save-btn { padding: 12px 28px; background: linear-gradient(135deg, #9ed203, #7ab802); border: none; border-radius: 10px; color: #004D40; font-weight: 600; font-size: 15px; cursor: pointer; transition: all 0.2s; }
        .save-btn:hover { transform: translateY(-1px); box-shadow: 0 4px 15px rgba(158,210,3,0.3); }
      `}</style>
    </div>
  );
}
