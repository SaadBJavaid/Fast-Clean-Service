"use client";
import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Sidebar and Navbar to ensure they're only loaded client-side
const Sidebar = dynamic(() => import('../../../components//Admin/Sidebar'), { ssr: false });
const Navbar = dynamic(() => import('../../../components/Admin/Navbar'), { ssr: false });

const SchedulingPage = () => {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ marginLeft: '240px', width: '100%' }}> {/* Sidebar takes 240px */}
                <Navbar />
                <div style={{ padding: '20px' }}>
                    <h1>Scheduling Page</h1>
                    <p>This is where the scheduling details will be displayed.</p>
                </div>
            </div>
        </div>
    );
};

export default SchedulingPage;
