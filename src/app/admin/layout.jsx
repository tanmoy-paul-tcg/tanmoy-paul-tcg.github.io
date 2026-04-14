'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import AdminSidebar from '../../components/admin/AdminSidebar';

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  // Don't wrap login page with admin layout
  if (pathname === '/admin/login') {
    return children;
  }

  return (
    <div className="admin-wrapper">
      <AdminSidebar />
      <main className="admin-main">
        <div className="admin-content">
          {children}
        </div>
      </main>

      <style jsx>{`
        .admin-wrapper {
          display: flex;
          min-height: 100vh;
          background: #0a0f0d;
        }

        .admin-main {
          flex: 1;
          margin-left: 260px;
          padding: 0;
        }

        .admin-content {
          padding: 32px;
          max-width: 1200px;
        }

        @media (max-width: 768px) {
          .admin-main {
            margin-left: 0;
          }
        }
      `}</style>
    </div>
  );
}
