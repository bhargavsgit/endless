import React  from 'react';
import StepCard from '../common/StepCard/StepCard';
import './howitworks.css';

export default class HowItWorks extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            steps : []
        }
    }

    componentDidMount(){
        let steps = [];
        fetch('https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge')
            .then(res => res.json())
            .then(res => {
                try{
                    steps = res.sort((stepA, stepB) => {
                        if(stepA.stepNumber < stepB.stepNumber) return -1;
                        if(stepA.stepNumber > stepB.stepNumber) return 1;
                        return 0;
                    });
                    this.setState({
                        steps
                    });
                }
                catch(e){
                    console.error(e);
                }
            })
    }

    render(){
        const {steps} = this.state;
        return (<>
            <h2>How It Works</h2>
            <div className="step-cards">
                {steps.map(step => <StepCard step={step} key={step.id} />)}
            </div>
        </>);
    }
}