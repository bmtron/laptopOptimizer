import React, { Component } from 'react';

export default class SummaryOption extends Component {
    render() {
        return (
            <div className="summary__option">
                <div className="summary__option__label">{this.props.id}</div>
                <div className="summary__option__value">{this.props.summary[this.props.id].name}</div>
                <div className="summary__option__cost">
                    { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                        .format(this.props.summary[this.props.id].cost) }
                </div>
            </div>
        )
    }
}