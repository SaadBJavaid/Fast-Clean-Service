// contexts/ExitIntentContext.js
'use client';

import React, { createContext, useState, useCallback, useEffect, useRef } from 'react';
import ExitIntentModal from '../components/ExitIntentModal';

export const ExitIntentContext = createContext();

export const ExitIntentProvider = ({ children }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [navigationCallback, setNavigationCallback] = useState(null);
    const isNavigatingRef = useRef(false); // Flag to indicate intentional navigation

    // Handle mouse exit intent
    const handleMouseLeave = useCallback((e) => {
        if (e.clientY < 50) { // Threshold for exit intent
            setModalOpen(true);
        }
    }, []);

    useEffect(() => {
        document.addEventListener('mouseout', handleMouseLeave);
        return () => {
            document.removeEventListener('mouseout', handleMouseLeave);
        };
    }, [handleMouseLeave]);

    // Handle beforeunload for tab/window close
    useEffect(() => {
        const handleBeforeUnload = (e) => {
            if (modalOpen && !isNavigatingRef.current) {
                e.preventDefault();
                e.returnValue = ''; // Required for Chrome to show the confirmation dialog
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [modalOpen]);

    // Function to open the modal with a callback
    const openModal = (callback) => {
        setNavigationCallback(() => callback);
        setModalOpen(true);
    };

    // Handle user confirming to leave
    const handleLeave = () => {
        setModalOpen(false);
        if (navigationCallback) {
            isNavigatingRef.current = true; // Set the flag before navigating
            navigationCallback();
            setNavigationCallback(null);
        }
    };

    // Handle user choosing to stay
    const handleStay = () => {
        setModalOpen(false);
        setNavigationCallback(null);
    };

    return (
        <ExitIntentContext.Provider value={{ openModal }}>
            {children}
            {modalOpen && (
                <ExitIntentModal onLeave={handleLeave} onStay={handleStay} />
            )}
        </ExitIntentContext.Provider>
    );
};
