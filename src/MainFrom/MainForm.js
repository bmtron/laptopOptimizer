import React, { Component } from 'react';
import Features from './Features';

export default class MainForm extends Component {
    
    render() {
      

      
        return (
            <section className="main__form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                {Object.keys(this.props.features)
                  .map(key => {
                    return <Features selected={this.props.selected} onHandleSelect={this.props.onHandleSelect} key={key} id={key} features={this.props.features}/>
                      })}
            </section>
        )
    }
}