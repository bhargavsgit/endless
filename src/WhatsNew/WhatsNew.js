import React  from 'react';
import './whatsnew.css';

export default function WhatsNew(){
    return(<div className="whats-new-container">
        <div className="whats-new-block">
            <div className="whats-new-title">
                New Game & Accessories
            </div>
            <div className="whats-new-subtitle-block">
                <div className="whats-new-subtitle">Monthly Packages.</div>
                <div className="whats-new-subtitle">Excitement delivered daily.</div>
            </div>
            <div className="whats-new-text">
                What's the best way to shop for the latest video games and peripherals? How about never shopping at all? You'll get new stuff on your doorstep - every month.
            </div>
            <div className="whats-new-footer">
                <button className="btn-primary">
                    GET STARTED
                </button>
            </div>
        </div>
    </div>);
}
