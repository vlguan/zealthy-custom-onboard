// /pages/admin.tsx
import React from 'react';
import AdminPage from '../components/adminPage'; 
import '../styles/admin.css'
const Admin: React.FC = () => {
    return (
        <div>
            <h1 className="header">Admin Panel</h1>
            <AdminPage />
        </div>
    );
};

export default Admin;
