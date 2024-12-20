// components/CustomLink.js
'use client';

import React, { useContext } from 'react';
import Link from 'next/link';
import { ExitIntentContext } from '../contexts/ExitIntentContext';

const CustomLink = ({ href, children, ...props }) => {
    const { openModal } = useContext(ExitIntentContext);

    const handleClick = (e) => {
        e.preventDefault();

        openModal(() => {
            // Navigate to the desired route after confirmation
            // Use window.location.href for both internal and external links
            window.location.href = href;
        });
    };

    return (
        <a href={href} onClick={handleClick} {...props}>
            {children}
        </a>
    );
};

export default CustomLink;
