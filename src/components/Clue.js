import React, { Component } from 'react';
import styles from './Clue.css';

class Clue extends Component {
    constructor ( props ) {
        super( props );

        this.state = {
            revealed: false,
        };
    }
    render () {
        const { answer, question, value } = this.props.clue;
        return (
            <div className={ styles.clue } onClick={ () => this.setState( { revealed: true } ) }>
                <h4>{ value || 'unknown'}</h4>
                <hr />
                <h5>{ question }</h5>
                <hr />
                <h5 className={ this.state.revealed ? 'text-revealed' : 'text-hidden' }>{ answer }</h5>
            </div>
        );
    }
}

export default Clue;
