'use client';

import React, { useState, useRef } from 'react';

export default function ImageUploader({ onUpload, currentImage }) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(currentImage || '');
  const fileRef = useRef(null);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Show local preview immediately
    const localUrl = URL.createObjectURL(file);
    setPreview(localUrl);
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        setPreview(data.url);
        onUpload(data.url);
      } else {
        alert('Upload failed: ' + (data.error || 'Unknown error'));
        setPreview(currentImage || '');
      }
    } catch (err) {
      alert('Upload failed: ' + err.message);
      setPreview(currentImage || '');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="img-uploader">
      {preview && (
        <img src={preview} alt="Preview" className="img-preview" />
      )}
      <button
        type="button"
        className="upload-btn"
        onClick={() => fileRef.current?.click()}
        disabled={uploading}
      >
        {uploading ? 'Uploading...' : preview ? 'Change Image' : 'Upload Image'}
      </button>
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        onChange={handleUpload}
        style={{ display: 'none' }}
      />

      <style jsx>{`
        .img-uploader {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .img-preview {
          width: 100%;
          max-width: 200px;
          height: 120px;
          object-fit: cover;
          border-radius: 8px;
          border: 1px solid rgba(158, 210, 3, 0.2);
        }

        .upload-btn {
          padding: 8px 16px;
          background: rgba(158, 210, 3, 0.15);
          border: 1px solid rgba(158, 210, 3, 0.3);
          border-radius: 8px;
          color: #9ed203;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.2s;
          width: fit-content;
        }

        .upload-btn:hover:not(:disabled) {
          background: rgba(158, 210, 3, 0.25);
        }

        .upload-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}
