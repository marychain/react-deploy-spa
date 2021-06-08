import React, { useState } from 'react';
import '../assets/css/items.css'

export function Items () {
    const [itemValue, setItemValue] = useState('');
    const [items, setItems] = useState([]);
    const [pairs, setPairs] = useState([]);

    const onChangeValue = (e) => {
        setItemValue(e.target.value.toUpperCase());
    }

    const onBtnClickHandler = (e) => { 
        setItems(items.concat([{
            item: itemValue,
            score: 0,
            winner: '',
            index: items.length+1        
        }]));
        
        let itemsValue = items.map(item => {
            return item.item
        });

        let pair = [];
        for (let i = 0; i <= itemsValue.length-1; i++ ) {
            pair.push(compare(i, itemsValue))
        };
        
        function compare(index, itemsValue) {
            let result = [];
            
            for (let i = index; i <= itemsValue.length-1; i++) {
                if (itemsValue[index] === itemsValue[i]) {
                    continue;
                }
                result.push([itemsValue[index], itemsValue[i]]);
            };
            return result;
        };
        
        pair = pair.flat()
        setPairs(pair);
    }

    // const onClickButtonItem = (e) => {
    //     setItems(items.forEach(item => {
    //         if(e.target.value === item.item) {
    //             item.score++;
    //             console.log(item.score)
    //         }
            
    //     }))
    // }
    return (
        <div className='Items'>
            <header className='header'>
                <input className='header__input input'id='clear' type="text"  name='items' onChange={onChangeValue} />
                <button className='header__button button' onClick={onBtnClickHandler}>Add</button>
            </header>
            <main className='main'>
                <table className='main__table'>
                    <thead  className='main__table__head'>
                        <tr className='main__table__head__tr'>
                            <th>Item</th>
                            <th>Score</th>
                            <th>Winner</th>   
                        </tr>
                    </thead>
                    <tbody className='main__table__body'>
                        {items.map((item, i) => (
                            <tr key={item.index}>
                                <th >{item.item}</th>
                                <td >{item.score}</td>
                                <td >{item.winner}</td>  
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='main__compare'>
                    <h3 className='main__compare__head'>Compare Items</h3>
                    { pairs.map((pair, i) => (
                        <div key={i} className='main__compare__items'>
                        <button  value={pair[0]} className='main__compare__items__button button'>{pair[0]}</button>
                        <button  value={pair[1]}className='main__compare__items__button button'>{pair[1]}</button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
};
