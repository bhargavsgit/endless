import React  from 'react';
import './stepCard.css';

export default function StepCard(props){
    const {step} = props;
    const content = step.versionContent.sort((contentA, contentB) => {
        if(contentA.effectiveDate < contentB.effectiveDate) return -1;
        if(contentA.effectiveDate > contentB.effectiveDate) return 1;
        return 0;
    })[0];
    const stepNumber = step.stepNumber > step.stepNumber || `0${step.stepNumber}`;
    return(<div className="step-card-container">
        <div className="step-card-number">
            {stepNumber}
        </div>
        <div className="step-card-title">
            {content.title}
        </div>
        <div className="step-card-body">
            {content.body}
        </div>
    </div>);
}