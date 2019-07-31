import React, { Component } from 'react';
import locStyles from './Number.module.scss'

class Number extends Component {
    state = {
        num: 5
    }

    decrementer = () => {
        const _num = this.state.num
        this.setState({ num: _num - 1 })
        if (this.state.num < 1) {
            clearInterval(this.intervalId)

        }
    }
    componentDidUpdate() {
        if (this.props.selectStatus)
            this.intervalId = setInterval(this.decrementer, 1000)
        if (this.state.num === 0) {
            clearInterval(this.intervalId);
            setTimeout(() => {
                this.props.doneTosting()
            }, 1000);
        }

    }
    componentWillUpdate() {
        clearInterval(this.intervalId);
    }

    render() {
        return (

            <span className={`${locStyles.Number} 
            ${this.props.selectStatus && !this.props.tostingStatus ? locStyles.NumberActive : null}`}>
                {this.state.num}</span>
        );
    }

}

export default Number;