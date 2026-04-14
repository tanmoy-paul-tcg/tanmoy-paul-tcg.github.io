'use client';

import React, { useState, useEffect } from 'react';
import ImageUploader from '../../../components/admin/ImageUploader';

export default function AdminTeam() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({
    name: '', title: '', image: '',
    links: { github: '', scholar: '', linkedin: '' },
    research: { image: '', description: '' }
  });

  const fetchData = async () => {
    const res = await fetch('/api/team');
    setMembers(await res.json());
    setLoading(false);
  };

  useEffect(() => { fetchData(); }, []);

  const resetForm = () => {
    setForm({ name: '', title: '', image: '', links: { github: '', scholar: '', linkedin: '' }, research: { image: '', description: '' } });
    setEditId(null);
    setShowForm(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...form };
    if (!payload.research.description && !payload.research.image) {
      delete payload.research;
    }

    if (editId) {
      await fetch(`/api/team/${editId}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    } else {
      await fetch('/api/team', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    }
    resetForm();
    fetchData();
  };

  const handleEdit = (m) => {
    setForm({
      name: m.name, title: m.title, image: m.image,
      links: m.links || { github: '', scholar: '', linkedin: '' },
      research: m.research || { image: '', description: '' }
    });
    setEditId(m._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this team member?')) return;
    await fetch(`/api/team/${id}`, { method: 'DELETE' });
    fetchData();
  };

  if (loading) return <div style={{color:'#e9f3de',textAlign:'center',padding:60}}>Loading...</div>;

  return (
    <div>
      <div className="admin-header">
        <h1>Team Members</h1>
        <button className="add-btn" onClick={() => { resetForm(); setShowForm(true); }}>+ Add Member</button>
      </div>

      {showForm && (
        <div className="form-card">
          <h3>{editId ? 'Edit Member' : 'New Member'}</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-grid-2">
              <div className="form-row">
                <label>Name</label>
                <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
              </div>
              <div className="form-row">
                <label>Title / Role</label>
                <input value={form.title} onChange={e => setForm({...form, title: e.target.value})} required />
              </div>
            </div>
            <div className="form-row">
              <label>Profile Image</label>
              <ImageUploader currentImage={form.image} onUpload={(url) => setForm({...form, image: url})} />
            </div>
            <h4 className="section-title">Social Links</h4>
            <div className="form-grid-3">
              <div className="form-row">
                <label>GitHub</label>
                <input value={form.links.github} onChange={e => setForm({...form, links: {...form.links, github: e.target.value}})} />
              </div>
              <div className="form-row">
                <label>Google Scholar</label>
                <input value={form.links.scholar} onChange={e => setForm({...form, links: {...form.links, scholar: e.target.value}})} />
              </div>
              <div className="form-row">
                <label>LinkedIn</label>
                <input value={form.links.linkedin} onChange={e => setForm({...form, links: {...form.links, linkedin: e.target.value}})} />
              </div>
            </div>
            <h4 className="section-title">Research (Optional)</h4>
            <div className="form-row">
              <label>Research Image</label>
              <ImageUploader currentImage={form.research.image} onUpload={(url) => setForm({...form, research: {...form.research, image: url}})} />
            </div>
            <div className="form-row">
              <label>Research Description</label>
              <textarea rows={4} value={form.research.description} onChange={e => setForm({...form, research: {...form.research, description: e.target.value}})} />
            </div>
            <div className="form-actions">
              <button type="submit" className="save-btn">{editId ? 'Update' : 'Add'}</button>
              <button type="button" className="cancel-btn" onClick={resetForm}>Cancel</button>
            </div>
          </form>
        </div>
      )}

      <div className="member-grid">
        {members.map(m => (
          <div key={m._id} className="member-card">
            <img src={m.image} alt={m.name} className="member-img" />
            <div className="member-info">
              <h4>{m.name}</h4>
              <p>{m.title}</p>
            </div>
            <div className="item-actions">
              <button className="edit-btn" onClick={() => handleEdit(m)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(m._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .admin-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; }
        .admin-header h1 { font-size: 28px; color: #e9f3de; margin: 0; }
        .add-btn { padding: 10px 20px; background: linear-gradient(135deg, #9ed203, #7ab802); border: none; border-radius: 10px; color: #004D40; font-weight: 600; cursor: pointer; }
        .form-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(158,210,3,0.15); border-radius: 16px; padding: 28px; margin-bottom: 24px; }
        .form-card h3 { color: #9ed203; margin: 0 0 20px 0; }
        .section-title { color: #9ed203; font-size: 16px; margin: 20px 0 12px 0; }
        .form-row { margin-bottom: 16px; }
        .form-row label { display: block; color: rgba(233,243,222,0.7); font-size: 13px; font-weight: 600; margin-bottom: 6px; }
        .form-row input, .form-row textarea { width: 100%; padding: 10px 14px; background: rgba(255,255,255,0.06); border: 1px solid rgba(158,210,3,0.2); border-radius: 8px; color: #e9f3de; font-size: 14px; outline: none; resize: vertical; }
        .form-row input:focus, .form-row textarea:focus { border-color: #9ed203; }
        .form-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .form-grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }
        .form-actions { display: flex; gap: 10px; margin-top: 20px; }
        .save-btn { padding: 10px 24px; background: #9ed203; border: none; border-radius: 8px; color: #004D40; font-weight: 600; cursor: pointer; }
        .cancel-btn { padding: 10px 24px; background: transparent; border: 1px solid rgba(233,243,222,0.2); border-radius: 8px; color: #e9f3de; cursor: pointer; }

        .member-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }
        .member-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(158,210,3,0.1); border-radius: 14px; padding: 16px; display: flex; flex-direction: column; gap: 12px; }
        .member-img { width: 100%; height: 180px; object-fit: cover; border-radius: 10px; }
        .member-info h4 { color: #e9f3de; font-size: 16px; margin: 0; }
        .member-info p { color: #9ed203; font-size: 13px; margin: 4px 0 0 0; }
        .item-actions { display: flex; gap: 6px; }
        .edit-btn { flex:1; padding: 8px; background: rgba(158,210,3,0.1); border: 1px solid rgba(158,210,3,0.2); border-radius: 6px; color: #9ed203; font-size: 12px; cursor: pointer; }
        .delete-btn { flex:1; padding: 8px; background: rgba(255,107,107,0.1); border: 1px solid rgba(255,107,107,0.2); border-radius: 6px; color: #ff6b6b; font-size: 12px; cursor: pointer; }

        @media (max-width: 600px) { .form-grid-2, .form-grid-3 { grid-template-columns: 1fr; } }
      `}</style>
    </div>
  );
}
