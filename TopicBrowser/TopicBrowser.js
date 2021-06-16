import React, { Component } from 'react';

import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterSrtring from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'

export default class TopicBrowser extends Component {
    render() {
        return (
            <div>
                <EvenAndOdd />
                <FilterObject />
                <FilterSrtring />
                <Palindrome />
                <Sum />
            </div>
        )
    }
}
