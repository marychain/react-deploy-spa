import React, { Component } from 'react';
let items = [];

export class GetItems extends Component {

    state = {
        item: ''
    };

    onChangeValue = (e) => {
        e.preventDefault();
        this.setState({item: [e.target.value]});
        
    }

    onBtnClickHandler = (e) => {
        items.push(e.target.value);
    }
    
    render () {
        console.log(items)
        console.log(this.state)
        return(
            <form className='GetItems'>
                <input type="text" name='item' value={this.state.item} onChange={this.onChangeValue} />
                <button onClick={this.onBtnClickHandler}>Add</button>
            </form>
        )
    }
};