'use client';

import React, { useState, useEffect } from 'react';

export default function AdminPublications() {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ title: '', authors: '', journal: '', date: '', link: '' });

  const fetchData = async () => {
    const res = await fetch('/api/publications');
    const data = await res.json();
    setPublications(data);
    setLoading(false);
  };

  useEffect(() => { fetchData(); }, []);

  const resetForm = () => {
    setForm({ title: '', authors: '', journal: '', date: '', link: '' });
    setEditId(null);
    setShowForm(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await fetch(`/api/publications/${editId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    } else {
      await fetch('/api/publications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    }
    resetForm();
    fetchData();
  };

  const handleEdit = (pub) => {
    setForm({ title: pub.title, authors: pub.authors, journal: pub.journal, date: pub.date, link: pub.link });
    setEditId(pub._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this publication?')) return;
    await fetch(`/api/publications/${id}`, { method: 'DELETE' });
    fetchData();
  };

  if (loading) return <div className="admin-loading">Loading...</div>;

  return (
    <div>
      <div className="admin-header">
        <h1>Publications</h1>
        <button className="add-btn" onClick={() => { resetForm(); setShowForm(true); }}>
          + Add Publication
        </button>
      </div>

      {showForm && (
        <div className="form-card">
          <h3>{editId ? 'Edit Publication' : 'New Publication'}</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <label>Title</label>
              <input value={form.title} onChange={e => setForm({...form, title: e.target.value})} required />
            </div>
            <div className="form-row">
              <label>Authors</label>
              <input value={form.authors} onChange={e => setForm({...form, authors: e.target.value})} required />
            </div>
            <div className="form-grid-2">
              <div className="form-row">
                <label>Journal</label>
                <input value={form.journal} onChange={e => setForm({...form, journal: e.target.value})} />
              </div>
              <div className="form-row">
                <label>Year</label>
                <input value={form.date} onChange={e => setForm({...form, date: e.target.value})} required />
              </div>
            </div>
            <div className="form-row">
              <label>Link</label>
              <input value={form.link} onChange={e => setForm({...form, link: e.target.value})} />
            </div>
            <div className="form-actions">
              <button type="submit" className="save-btn">{editId ? 'Update' : 'Add'}</button>
              <button type="button" className="cancel-btn" onClick={resetForm}>Cancel</button>
            </div>
          </form>
        </div>
      )}

      <div className="items-list">
        {publications.map((pub, i) => (
          <div key={pub._id} className="item-card">
            <div className="item-content">
              <div className="item-number">{i + 1}</div>
              <div className="item-info">
                <h4>{pub.title}</h4>
                <p>{pub.authors}</p>
                <span className="item-meta">{pub.journal} • {pub.date}</span>
              </div>
            </div>
            <div className="item-actions">
              <button className="edit-btn" onClick={() => handleEdit(pub)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(pub._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .admin-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
        .admin-header h1 { font-size: 28px; color: #e9f3de; margin: 0; }
        .admin-loading { color: #e9f3de; text-align: center; padding: 60px; }

        .add-btn { padding: 10px 20px; background: linear-gradient(135deg, #9ed203, #7ab802); border: none; border-radius: 10px; color: #004D40; font-weight: 600; cursor: pointer; transition: all 0.2s; }
        .add-btn:hover { transform: translateY(-1px); box-shadow: 0 4px 15px rgba(158, 210, 3, 0.3); }

        .form-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(158,210,3,0.15); border-radius: 16px; padding: 28px; margin-bottom: 24px; }
        .form-card h3 { color: #9ed203; margin: 0 0 20px 0; font-size: 20px; }
        .form-row { margin-bottom: 16px; }
        .form-row label { display: block; color: rgba(233,243,222,0.7); font-size: 13px; font-weight: 600; margin-bottom: 6px; }
        .form-row input, .form-row textarea { width: 100%; padding: 10px 14px; background: rgba(255,255,255,0.06); border: 1px solid rgba(158,210,3,0.2); border-radius: 8px; color: #e9f3de; font-size: 14px; outline: none; }
        .form-row input:focus, .form-row textarea:focus { border-color: #9ed203; }
        .form-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .form-actions { display: flex; gap: 10px; margin-top: 20px; }
        .save-btn { padding: 10px 24px; background: #9ed203; border: none; border-radius: 8px; color: #004D40; font-weight: 600; cursor: pointer; }
        .cancel-btn { padding: 10px 24px; background: transparent; border: 1px solid rgba(233,243,222,0.2); border-radius: 8px; color: #e9f3de; cursor: pointer; }

        .items-list { display: flex; flex-direction: column; gap: 8px; }
        .item-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(158,210,3,0.08); border-radius: 12px; padding: 16px 20px; display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; transition: all 0.2s; }
        .item-card:hover { border-color: rgba(158,210,3,0.2); }
        .item-content { display: flex; gap: 16px; flex: 1; min-width: 0; }
        .item-number { color: #9ed203; font-weight: 700; font-size: 14px; min-width: 28px; }
        .item-info h4 { color: #e9f3de; font-size: 15px; font-weight: 600; margin: 0 0 4px 0; line-height: 1.4; }
        .item-info p { color: rgba(233,243,222,0.6); font-size: 13px; margin: 0 0 4px 0; }
        .item-meta { color: #9ed203; font-size: 12px; }
        .item-actions { display: flex; gap: 6px; flex-shrink: 0; }
        .edit-btn { padding: 6px 14px; background: rgba(158,210,3,0.1); border: 1px solid rgba(158,210,3,0.2); border-radius: 6px; color: #9ed203; font-size: 12px; cursor: pointer; }
        .delete-btn { padding: 6px 14px; background: rgba(255,107,107,0.1); border: 1px solid rgba(255,107,107,0.2); border-radius: 6px; color: #ff6b6b; font-size: 12px; cursor: pointer; }
      `}</style>
    </div>
  );
}
