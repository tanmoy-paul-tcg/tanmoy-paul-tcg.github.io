'use client';

import React, { useState, useEffect } from 'react';
import ImageUploader from '../../../components/admin/ImageUploader';

export default function AdminEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', images: [], order: 0 });
  const [editId, setEditId] = useState(null);

  const fetchData = async () => {
    const res = await fetch('/api/events');
    setEvents(await res.json());
    setLoading(false);
  };

  useEffect(() => { fetchData(); }, []);

  const resetForm = () => { setForm({ name: '', images: [], order: 0 }); setEditId(null); setShowForm(false); };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await fetch(`/api/events/${editId}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    } else {
      await fetch('/api/events', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    }
    resetForm(); fetchData();
  };

  const handleEdit = (ev) => {
    setForm({ name: ev.name, images: ev.images || [], order: ev.order || 0 });
    setEditId(ev._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this event section?')) return;
    await fetch(`/api/events/${id}`, { method: 'DELETE' });
    fetchData();
  };

  const addImage = (url) => {
    setForm(prev => ({ ...prev, images: [...prev.images, url] }));
  };

  const removeImage = (idx) => {
    setForm(prev => ({ ...prev, images: prev.images.filter((_, i) => i !== idx) }));
  };

  if (loading) return <div style={{color:'#e9f3de',textAlign:'center',padding:60}}>Loading...</div>;

  return (
    <div>
      <div className="admin-header">
        <h1>Events</h1>
        <button className="add-btn" onClick={() => { resetForm(); setShowForm(true); }}>+ Add Event Section</button>
      </div>

      {showForm && (
        <div className="form-card">
          <h3>{editId ? 'Edit Event Section' : 'New Event Section'}</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-grid-2">
              <div className="form-row"><label>Section Name</label><input value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="e.g., Science Outreach Program 2024" required /></div>
              <div className="form-row"><label>Order</label><input type="number" value={form.order} onChange={e => setForm({...form, order: parseInt(e.target.value)})} /></div>
            </div>

            <h4 className="section-title">Images ({form.images.length})</h4>
            <div className="image-uploader-row">
              <ImageUploader onUpload={addImage} />
            </div>

            <div className="image-grid">
              {form.images.map((img, idx) => (
                <div key={idx} className="image-item">
                  <img src={img} alt={`Event ${idx + 1}`} />
                  <button type="button" className="remove-img-btn" onClick={() => removeImage(idx)}>✕</button>
                </div>
              ))}
            </div>

            <div className="form-actions">
              <button type="submit" className="save-btn">{editId ? 'Update' : 'Create'}</button>
              <button type="button" className="cancel-btn" onClick={resetForm}>Cancel</button>
            </div>
          </form>
        </div>
      )}

      <div className="events-list">
        {events.map(ev => (
          <div key={ev._id} className="event-card">
            <div className="event-header">
              <h3>{ev.name}</h3>
              <div className="item-actions">
                <button className="edit-btn" onClick={() => handleEdit(ev)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(ev._id)}>Delete</button>
              </div>
            </div>
            <div className="event-images">
              {(ev.images || []).slice(0, 6).map((img, i) => (
                <img key={i} src={img} alt={`${ev.name} ${i+1}`} className="event-thumb" />
              ))}
              {(ev.images || []).length > 6 && (
                <div className="more-badge">+{ev.images.length - 6} more</div>
              )}
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
        .form-row input { width: 100%; padding: 10px 14px; background: rgba(255,255,255,0.06); border: 1px solid rgba(158,210,3,0.2); border-radius: 8px; color: #e9f3de; font-size: 14px; outline: none; }
        .form-row input:focus { border-color: #9ed203; }
        .form-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .form-actions { display: flex; gap: 10px; margin-top: 20px; }
        .save-btn { padding: 10px 24px; background: #9ed203; border: none; border-radius: 8px; color: #004D40; font-weight: 600; cursor: pointer; }
        .cancel-btn { padding: 10px 24px; background: transparent; border: 1px solid rgba(233,243,222,0.2); border-radius: 8px; color: #e9f3de; cursor: pointer; }

        .image-uploader-row { margin-bottom: 16px; }
        .image-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 8px; margin-bottom: 16px; }
        .image-item { position: relative; }
        .image-item img { width: 100%; height: 80px; object-fit: cover; border-radius: 6px; }
        .remove-img-btn { position: absolute; top: 4px; right: 4px; width: 22px; height: 22px; border-radius: 50%; background: rgba(255,59,48,0.9); border: none; color: white; font-size: 12px; cursor: pointer; display: flex; align-items: center; justify-content: center; line-height: 1; }

        .events-list { display: flex; flex-direction: column; gap: 16px; }
        .event-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(158,210,3,0.1); border-radius: 14px; padding: 20px; }
        .event-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
        .event-header h3 { color: #e9f3de; font-size: 18px; margin: 0; }
        .event-images { display: flex; gap: 8px; flex-wrap: wrap; }
        .event-thumb { width: 80px; height: 60px; object-fit: cover; border-radius: 6px; border: 1px solid rgba(158,210,3,0.15); }
        .more-badge { width: 80px; height: 60px; display: flex; align-items: center; justify-content: center; background: rgba(158,210,3,0.1); border-radius: 6px; color: #9ed203; font-size: 13px; font-weight: 600; }
        .item-actions { display: flex; gap: 6px; }
        .edit-btn { padding: 6px 14px; background: rgba(158,210,3,0.1); border: 1px solid rgba(158,210,3,0.2); border-radius: 6px; color: #9ed203; font-size: 12px; cursor: pointer; }
        .delete-btn { padding: 6px 14px; background: rgba(255,107,107,0.1); border: 1px solid rgba(255,107,107,0.2); border-radius: 6px; color: #ff6b6b; font-size: 12px; cursor: pointer; }
      `}</style>
    </div>
  );
}
