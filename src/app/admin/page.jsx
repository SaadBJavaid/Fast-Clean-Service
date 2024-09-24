import React from 'react';
import Dashboard from '../../components/Admin/Dashboard';
import AdminLayout from '../../components/Admin/AdminLayout';

const AdminPage = () => {
    return (
        <AdminLayout>
            <Dashboard />
        </AdminLayout>
    );
};

export default AdminPage;
