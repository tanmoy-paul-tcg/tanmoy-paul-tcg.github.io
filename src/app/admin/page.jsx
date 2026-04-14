'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const sections = [
  { key: 'publications', label: 'Publications', icon: '📄', api: '/api/publications' },
  { key: 'team', label: 'Team Members', icon: '👥', api: '/api/team' },
  { key: 'research', label: 'Research Topics', icon: '🔬', api: '/api/research' },
  { key: 'events', label: 'Event Sections', icon: '🎉', api: '/api/events' },
];

export default function AdminDashboard() {
  const [counts, setCounts] = useState({});

  useEffect(() => {
    sections.forEach(async (s) => {
      try {
        const res = await fetch(s.api);
        const data = await res.json();
        setCounts(prev => ({ ...prev, [s.key]: Array.isArray(data) ? data.length : 0 }));
      } catch {
        setCounts(prev => ({ ...prev, [s.key]: '—' }));
      }
    });
  }, []);

  return (
    <div>
      <h1 className="admin-title">Dashboard</h1>
      <p className="admin-subtitle">Welcome to the admin panel. Manage your website content below.</p>
      
      <div className="stats-grid">
        {sections.map(s => (
          <Link href={`/admin/${s.key}`} key={s.key} className="stat-card">
            <div className="stat-icon">{s.icon}</div>
            <div className="stat-info">
              <div className="stat-count">{counts[s.key] ?? '...'}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="action-grid">
          <Link href="/admin/advertisement" className="action-card">
            <span>📢</span> Update Advertisement
          </Link>
          <Link href="/admin/publications" className="action-card">
            <span>➕</span> Add Publication
          </Link>
          <Link href="/admin/team" className="action-card">
            <span>👤</span> Add Team Member
          </Link>
          <Link href="/admin/events" className="action-card">
            <span>📸</span> Manage Events
          </Link>
        </div>
      </div>

      <style jsx>{`
        .admin-title {
          font-size: 32px;
          font-weight: 700;
          color: #e9f3de;
          margin: 0 0 8px 0;
        }

        .admin-subtitle {
          color: rgba(233, 243, 222, 0.6);
          font-size: 16px;
          margin-bottom: 32px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(158, 210, 3, 0.12);
          border-radius: 16px;
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          text-decoration: none;
          transition: all 0.3s;
        }

        .stat-card:hover {
          background: rgba(158, 210, 3, 0.08);
          border-color: rgba(158, 210, 3, 0.3);
          transform: translateY(-2px);
        }

        .stat-icon {
          font-size: 36px;
          width: 56px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(158, 210, 3, 0.1);
          border-radius: 14px;
        }

        .stat-count {
          font-size: 28px;
          font-weight: 700;
          color: #9ed203;
        }

        .stat-label {
          font-size: 14px;
          color: rgba(233, 243, 222, 0.6);
          margin-top: 2px;
        }

        h2 {
          font-size: 22px;
          color: #e9f3de;
          margin-bottom: 16px;
        }

        .action-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 12px;
        }

        .action-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(158, 210, 3, 0.1);
          border-radius: 12px;
          padding: 16px 20px;
          color: #e9f3de;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.2s;
        }

        .action-card:hover {
          background: rgba(158, 210, 3, 0.08);
          color: #9ed203;
        }

        .action-card span {
          font-size: 20px;
        }
      `}</style>
    </div>
  );
}
