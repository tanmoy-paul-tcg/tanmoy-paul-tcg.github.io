'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: '📊' },
  { href: '/admin/publications', label: 'Publications', icon: '📄' },
  { href: '/admin/team', label: 'Team', icon: '👥' },
  { href: '/admin/research', label: 'Research', icon: '🔬' },
  { href: '/admin/advertisement', label: 'Advertisement', icon: '📢' },
  { href: '/admin/events', label: 'Events', icon: '🎉' },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src="/images/logo.svg" alt="Logo" className="sidebar-logo" />
        <h2>Admin</h2>
      </div>
      
      <nav className="sidebar-nav">
        {navItems.map(item => (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-item ${pathname === item.href ? 'active' : ''}`}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="sidebar-footer">
        <Link href="/" className="nav-item back-link">
          <span className="nav-icon">🌐</span>
          <span className="nav-label">View Site</span>
        </Link>
        <button onClick={handleLogout} className="logout-btn">
          <span className="nav-icon">🚪</span>
          <span className="nav-label">Logout</span>
        </button>
      </div>

      <style jsx>{`
        .sidebar {
          position: fixed;
          left: 0;
          top: 0;
          bottom: 0;
          width: 260px;
          background: linear-gradient(180deg, #004D40 0%, #002e27 100%);
          display: flex;
          flex-direction: column;
          z-index: 100;
          border-right: 1px solid rgba(158, 210, 3, 0.15);
        }

        .sidebar-header {
          padding: 24px 20px;
          border-bottom: 1px solid rgba(158, 210, 3, 0.15);
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .sidebar-logo {
          height: 40px;
        }

        .sidebar-header h2 {
          color: #9ed203;
          font-size: 20px;
          margin: 0;
          font-weight: 700;
        }

        .sidebar-nav {
          flex: 1;
          padding: 16px 12px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .sidebar-footer {
          padding: 12px;
          border-top: 1px solid rgba(158, 210, 3, 0.15);
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .nav-item, .logout-btn, .back-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 10px;
          color: #e9f3de;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          transition: all 0.2s;
          border: none;
          background: none;
          cursor: pointer;
          width: 100%;
          text-align: left;
        }

        .nav-item:hover, .logout-btn:hover, .back-link:hover {
          background: rgba(158, 210, 3, 0.1);
          color: #9ed203;
        }

        .nav-item.active {
          background: rgba(158, 210, 3, 0.15);
          color: #9ed203;
          font-weight: 600;
        }

        .nav-icon {
          font-size: 18px;
          width: 24px;
          text-align: center;
        }

        .logout-btn {
          color: #ff6b6b;
        }

        .logout-btn:hover {
          background: rgba(255, 107, 107, 0.1);
          color: #ff6b6b;
        }

        @media (max-width: 768px) {
          .sidebar {
            display: none;
          }
        }
      `}</style>
    </aside>
  );
}
