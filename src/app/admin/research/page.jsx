'use client';

import React, { useState, useEffect } from 'react';
import ImageUploader from '../../../components/admin/ImageUploader';

export default function AdminResearch() {
  const [topics, setTopics] = useState([]);
  const [posters, setPosters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ title: '', description: '', image: '', order: 0 });

  const fetchData = async () => {
    const [topicsRes, postersRes] = await Promise.all([
      fetch('/api/research'), fetch('/api/posters')
    ]);
    setTopics(await topicsRes.json());
    setPosters(await postersRes.json());
    setLoading(false);
  };

  useEffect(() => { fetchData(); }, []);

  const resetForm = () => { setForm({ title: '', description: '', image: '', order: 0 }); setEditId(null); setShowForm(false); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await fetch(`/api/research/${editId}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    } else {
      await fetch('/api/research', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    }
    resetForm(); fetchData();
  };

  const handleEdit = (t) => { setForm({ title: t.title, description: t.description, image: t.image, order: t.order || 0 }); setEditId(t._id); setShowForm(true); };
  const handleDelete = async (id) => { if (!confirm('Delete?')) return; await fetch(`/api/research/${id}`, { method: 'DELETE' }); fetchData(); };

  const handleAddPoster = async (url) => {
    await fetch('/api/posters', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ image: url, order: posters.length }) });
    fetchData();
  };

  const handleDeletePoster = async (id) => { if (!confirm('Delete poster?')) return; await fetch(`/api/posters/${id}`, { method: 'DELETE' }); fetchData(); };

  if (loading) return <div style={{color:'#e9f3de',textAlign:'center',padding:60}}>Loading...</div>;

  return (
    <div>
      <div className="admin-header">
        <h1>Research Topics</h1>
        <button className="add-btn" onClick={() => { resetForm(); setShowForm(true); }}>+ Add Topic</button>
      </div>

      {showForm && (
        <div className="form-card">
          <h3>{editId ? 'Edit Topic' : 'New Topic'}</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-grid-2">
              <div className="form-row"><label>Title</label><input value={form.title} onChange={e => setForm({...form, title: e.target.value})} required /></div>
              <div className="form-row"><label>Order</label><input type="number" value={form.order} onChange={e => setForm({...form, order: parseInt(e.target.value)})} /></div>
            </div>
            <div className="form-row"><label>Image</label><ImageUploader currentImage={form.image} onUpload={url => setForm({...form, image: url})} /></div>
            <div className="form-row"><label>Description</label><textarea rows={5} value={form.description} onChange={e => setForm({...form, description: e.target.value})} required /></div>
            <div className="form-actions">
              <button type="submit" className="save-btn">{editId ? 'Update' : 'Add'}</button>
              <button type="button" className="cancel-btn" onClick={resetForm}>Cancel</button>
            </div>
          </form>
        </div>
      )}

      <div className="items-list">
        {topics.map((t, i) => (
          <div key={t._id} className="item-card">
            <img src={t.image} alt={t.title} className="topic-thumb" />
            <div className="item-info"><h4>{t.title}</h4><p>{t.description.substring(0, 100)}...</p></div>
            <div className="item-actions">
              <button className="edit-btn" onClick={() => handleEdit(t)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(t._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      <hr style={{borderColor:'rgba(158,210,3,0.15)',margin:'32px 0'}} />

      <div className="admin-header">
        <h2 style={{color:'#9ed203', margin:0}}>Posters</h2>
      </div>
      <div className="poster-upload-row">
        <ImageUploader onUpload={handleAddPoster} />
      </div>
      <div className="poster-grid">
        {posters.map(p => (
          <div key={p._id} className="poster-card">
            <img src={p.image} alt="poster" />
            <button className="delete-btn" onClick={() => handleDeletePoster(p._id)}>Remove</button>
          </div>
        ))}
      </div>

      <style jsx>{`
        .admin-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
        .admin-header h1 { font-size: 28px; color: #e9f3de; margin: 0; }
        .add-btn { padding: 10px 20px; background: linear-gradient(135deg, #9ed203, #7ab802); border: none; border-radius: 10px; color: #004D40; font-weight: 600; cursor: pointer; }
        .form-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(158,210,3,0.15); border-radius: 16px; padding: 28px; margin-bottom: 24px; }
        .form-card h3 { color: #9ed203; margin: 0 0 20px 0; }
        .form-row { margin-bottom: 16px; }
        .form-row label { display: block; color: rgba(233,243,222,0.7); font-size: 13px; font-weight: 600; margin-bottom: 6px; }
        .form-row input, .form-row textarea { width: 100%; padding: 10px 14px; background: rgba(255,255,255,0.06); border: 1px solid rgba(158,210,3,0.2); border-radius: 8px; color: #e9f3de; font-size: 14px; outline: none; resize: vertical; }
        .form-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .form-actions { display: flex; gap: 10px; margin-top: 20px; }
        .save-btn { padding: 10px 24px; background: #9ed203; border: none; border-radius: 8px; color: #004D40; font-weight: 600; cursor: pointer; }
        .cancel-btn { padding: 10px 24px; background: transparent; border: 1px solid rgba(233,243,222,0.2); border-radius: 8px; color: #e9f3de; cursor: pointer; }

        .items-list { display: flex; flex-direction: column; gap: 8px; }
        .item-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(158,210,3,0.08); border-radius: 12px; padding: 16px; display: flex; align-items: center; gap: 16px; }
        .topic-thumb { width: 80px; height: 60px; object-fit: cover; border-radius: 8px; }
        .item-info { flex: 1; }
        .item-info h4 { color: #e9f3de; font-size: 15px; margin: 0 0 4px 0; }
        .item-info p { color: rgba(233,243,222,0.5); font-size: 13px; margin: 0; }
        .item-actions { display: flex; gap: 6px; }
        .edit-btn { padding: 6px 14px; background: rgba(158,210,3,0.1); border: 1px solid rgba(158,210,3,0.2); border-radius: 6px; color: #9ed203; font-size: 12px; cursor: pointer; }
        .delete-btn { padding: 6px 14px; background: rgba(255,107,107,0.1); border: 1px solid rgba(255,107,107,0.2); border-radius: 6px; color: #ff6b6b; font-size: 12px; cursor: pointer; }

        .poster-upload-row { margin-bottom: 20px; }
        .poster-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px; }
        .poster-card { position: relative; }
        .poster-card img { width: 100%; border-radius: 8px; border: 1px solid rgba(158,210,3,0.15); }
        .poster-card .delete-btn { margin-top: 6px; width: 100%; }
      `}</style>
    </div>
  );
}
