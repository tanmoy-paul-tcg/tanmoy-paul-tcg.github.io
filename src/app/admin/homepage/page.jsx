'use client';

import React, { useState, useEffect } from 'react';
import ImageUploader from '../../../components/admin/ImageUploader';

export default function AdminHomepage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch('/api/homepage')
      .then(res => res.json())
      .then(d => {
        if (Object.keys(d).length === 0) {
          // Fallback if empty
          setData({
            bio: { name: '', title: '', description: '', profileImage: '' },
            typewriter: [],
            catchText: '',
            machines: [],
            carousel: [],
            gallery: []
          });
        } else {
          setData(d);
        }
        setLoading(false);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setSaved(false);

    try {
      const res = await fetch('/api/homepage', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      } else {
        alert('Failed to save homepage data');
      }
    } catch (err) {
      console.error(err);
      alert('Error saving data');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="admin-loading">Loading homepage data...</div>;

  return (
    <div>
      <h1 className="admin-title">Homepage Editor</h1>
      <p className="admin-subtitle">Update the content, descriptions, and images displayed on the main homepage.</p>

      <form onSubmit={handleSubmit}>
        
        {/* =============== BIO SECTION =============== */}
        <div className="form-card my-4">
          <h3>Lead Profile & Bio</h3>
          <div className="form-row">
            <label>Name</label>
            <input 
              type="text" 
              value={data.bio?.name || ''} 
              onChange={e => setData({...data, bio: {...data.bio, name: e.target.value}})} 
            />
          </div>
          <div className="form-row">
            <label>Title</label>
            <input 
              type="text" 
              value={data.bio?.title || ''} 
              onChange={e => setData({...data, bio: {...data.bio, title: e.target.value}})} 
            />
          </div>
          <div className="form-row">
            <label>Profile Image</label>
            {data.bio?.profileImage && (
              <div className="mb-2">
                <img src={data.bio.profileImage} alt="Profile" style={{width: 100, borderRadius: 50}} />
              </div>
            )}
            <ImageUploader onUpload={(url) => setData({...data, bio: {...data.bio, profileImage: url}})} />
          </div>
          <div className="form-row" style={{ display: 'block' }}>
            <label style={{ display: 'block', marginBottom: '8px' }}>Biography Details (Supports HTML)</label>
            <textarea 
              rows={12}
              style={{ width: '100%', maxWidth: '100%', resize: 'vertical' }}
              value={data.bio?.description || ''} 
              onChange={e => setData({...data, bio: {...data.bio, description: e.target.value}})} 
            />
          </div>
        </div>

        {/* =============== TYPEWRITER / GROUP DESCRIPTION =============== */}
        <div className="form-card my-4">
          <h3>Group Description (Typewriter Animation)</h3>
          <p className="text-muted text-sm mb-3">Each line will be animated typing one after the other.</p>
          {data.typewriter?.map((text, idx) => (
            <div key={idx} className="d-flex mb-2 align-items-center">
              <input 
                type="text" 
                className="flex-grow-1 mr-2"
                value={text} 
                onChange={e => {
                  const newArr = [...data.typewriter];
                  newArr[idx] = e.target.value;
                  setData({...data, typewriter: newArr});
                }} 
              />
              <button 
                type="button" 
                className="delete-btn btn-sm"
                onClick={() => {
                  const newArr = data.typewriter.filter((_, i) => i !== idx);
                  setData({...data, typewriter: newArr});
                }}
              >
                ✖
              </button>
            </div>
          ))}
          <button 
            type="button" 
            className="add-btn mt-2" 
            onClick={() => setData({...data, typewriter: [...(data.typewriter||[]), 'New text']})}
          >
            + Add Line
          </button>
        </div>

        {/* =============== CATCH TEXT =============== */}
        <div className="form-card my-4">
          <h3>Main Catch Paragraph</h3>
          <div className="form-row">
            <textarea 
              rows={6}
              style={{ width: '100%', maxWidth: '100%', resize: 'vertical' }}
              value={data.catchText || ''} 
              onChange={e => setData({...data, catchText: e.target.value})} 
            />
          </div>
        </div>

        {/* =============== MACHINES SECTION =============== */}
        <div className="form-card my-4">
          <h3>Hardware / Machines</h3>
          {data.machines?.map((m, idx) => (
            <div key={idx} className="p-3 mb-3" style={{ border: '1px solid #333', borderRadius: '8px' }}>
              <div className="form-row mb-2">
                <label>Machine Name</label>
                <input 
                  type="text" 
                  value={m.name} 
                  onChange={e => {
                    const newArr = [...data.machines];
                    newArr[idx].name = e.target.value;
                    setData({...data, machines: newArr});
                  }} 
                />
              </div>
              <div className="form-row mb-2">
                <label>Specifications</label>
                <input 
                  type="text" 
                  value={m.specs} 
                  onChange={e => {
                    const newArr = [...data.machines];
                    newArr[idx].specs = e.target.value;
                    setData({...data, machines: newArr});
                  }} 
                />
              </div>
              <button 
                type="button" 
                className="delete-btn btn-sm"
                onClick={() => {
                  const newArr = data.machines.filter((_, i) => i !== idx);
                  setData({...data, machines: newArr});
                }}
              >
                Remove Machine
              </button>
            </div>
          ))}
          <button 
            type="button" 
            className="add-btn mt-3" 
            onClick={() => setData({...data, machines: [...(data.machines||[]), {name:'New Machine', specs:''}]})}
          >
            + Add Machine
          </button>
        </div>

        {/* =============== CAROUSEL =============== */}
        <div className="form-card my-4">
          <h3>Carousel Images</h3>
          {data.carousel?.map((item, idx) => (
            <div key={idx} className="d-flex mb-3 p-3 align-items-center" style={{ border: '1px solid #333', borderRadius: '8px' }}>
              {item.pic ? (
                <img src={item.pic} alt="carousel" style={{width: 150, height: 80, objectFit: 'cover', borderRadius: 4, marginRight: 15}} />
              ) : (
                <div style={{width: 150, marginRight: 15}}>
                  <ImageUploader onUpload={(url) => {
                    const newArr = [...data.carousel];
                    newArr[idx].pic = url;
                    setData({...data, carousel: newArr});
                  }} />
                </div>
              )}
              <div className="flex-grow-1 mr-3">
                <label>Caption</label>
                <input 
                  type="text" 
                  value={item.caption} 
                  onChange={e => {
                    const newArr = [...data.carousel];
                    newArr[idx].caption = e.target.value;
                    setData({...data, carousel: newArr});
                  }} 
                />
              </div>
              <button 
                type="button" 
                className="delete-btn btn-sm"
                onClick={() => {
                  const newArr = data.carousel.filter((_, i) => i !== idx);
                  setData({...data, carousel: newArr});
                }}
              >
                ✖
              </button>
            </div>
          ))}
          <button 
            type="button" 
            className="add-btn mt-3" 
            onClick={() => setData({...data, carousel: [...(data.carousel||[]), {pic:'', caption:''}]})}
          >
            + Add Slide
          </button>
        </div>

        {/* =============== GALLERY =============== */}
        <div className="form-card my-4">
          <h3>Gallery Images</h3>
          <div className="d-flex flex-wrap" style={{gap: '10px'}}>
            {data.gallery?.map((gUrl, idx) => (
              <div key={idx} style={{position: 'relative'}}>
                <img src={gUrl} alt="gallery" style={{width: 120, height: 120, objectFit: 'cover', borderRadius: '8px', border: '1px solid #9ed203'}} />
                <button 
                  type="button" 
                  style={{position: 'absolute', top: -5, right: -5, background: 'red', color: 'white', borderRadius: '50%', border: 'none', width: 24, height: 24, cursor: 'pointer'}}
                  onClick={() => {
                    const newArr = data.gallery.filter((_, i) => i !== idx);
                    setData({...data, gallery: newArr});
                  }}
                >
                  ✖
                </button>
              </div>
            ))}
          </div>
          <div className="mt-3" style={{maxWidth: '300px'}}>
            <label>Upload New Gallery Image</label>
            <ImageUploader onUpload={(url) => setData({...data, gallery: [...(data.gallery||[]), url]})} />
          </div>
        </div>

        <div className="form-actions" style={{position: 'sticky', bottom: 20}}>
          <button type="submit" className="save-btn" disabled={saving}>
            {saving ? 'Saving...' : saved ? '✓ Saved!' : 'Publish Homepage'}
          </button>
        </div>
      </form>
      <style>{`
        .add-btn { padding: 10px 20px; background: linear-gradient(135deg, #9ed203, #7ab802); border: none; border-radius: 10px; color: #004D40; font-weight: 600; cursor: pointer; transition: all 0.2s; }
        .add-btn:hover { transform: translateY(-1px); box-shadow: 0 4px 15px rgba(158, 210, 3, 0.3); }
        .delete-btn { padding: 6px 14px; background: rgba(255,107,107,0.1); border: 1px solid rgba(255,107,107,0.2); border-radius: 6px; color: #ff6b6b; font-size: 12px; cursor: pointer; }
        .save-btn { padding: 12px 28px; background: linear-gradient(135deg, #9ed203, #7ab802); border: none; border-radius: 10px; color: #004D40; font-weight: 600; font-size: 15px; cursor: pointer; transition: all 0.2s; }
        .save-btn:hover { transform: translateY(-1px); box-shadow: 0 4px 15px rgba(158,210,3,0.3); }
        .save-btn:disabled { opacity: 0.7; cursor: not-allowed; }
      `}</style>
    </div>
  );
}
