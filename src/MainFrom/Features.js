import React, { Component } from 'react';

export default class Features extends Component {
    
    render() {
        return (
            <div className="feature" key={this.props.id}>
            <div className="feature__name">{this.props.id}</div>
            <ul className="feature__list">

            {this.props.features[this.props.id].map((item, index) => {
              const selectedClass = item.name === this.props.selected[this.props.id].name ? 'feature__selected' : '';
              const featureClass = 'feature__option ' + selectedClass;
              return <li key={index} className="feature__item">
                <div className={featureClass}
    
                  onClick={() => this.props.onHandleSelect(this.props.id, item)}>
                    { item.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(item.cost) })
                </div>
              </li>
            })}

            </ul>
          </div>
        )
    }
}