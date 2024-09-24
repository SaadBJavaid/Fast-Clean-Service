import React from 'react';

const AdminLayout = ({ children }) => {
    return (
        <div>
            {children} {/* This will render the admin dashboard components */}
        </div>
    );
};

export default AdminLayout;
