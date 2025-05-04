import React, { useState, useEffect } from 'react';
import './scrollToTopButton.css';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {isVisible && (
                <div className="scroll-to-top-container">
                    <button
                        onClick={scrollToTop}
                        className="scroll-to-top-btn"
                    >
                        <span class="material-symbols-outlined" translate='no-tranlate'>
                            keyboard_arrow_up
                        </span>
                    </button>
                </div>
            )}
        </>
    );
};

export default ScrollToTopButton;
