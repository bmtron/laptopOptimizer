import React, { Component } from 'react';
import SummaryOption from './SummaryOption';

export default class MainSummary extends Component {
    
    render() {
        const summary = Object.keys(this.props.summary)
          .map(key => <SummaryOption key={key} id={key} summary={this.props.summary} />);
        
        return (
            <section className="main__summary">
            <h3>NEW GREENLEAF 2018</h3>
            
                {summary}
            <div className="summary__total">
              <div className="summary__total__label">Your Price: </div>
              <div className="summary__total__value">
              { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(this.props.total) }
              </div>
            </div>
          </section>
        )
    }
}