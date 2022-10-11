import { Component } from "react";
import './search-box.styles.css'
import { ChangeEvent } from 'react'
// interface ISearchBoxProps{
//     className: string;
//     placeholder?: string;
// }

// interface ISearchBoxProps {
//     onChangeHandler: (a: string) => void
// }

type SearchBoxProps = {
    className: string;
    placeholder?: string;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ className, placeholder, onChangeHandler}: SearchBoxProps) => {
    return (
        <input 
        className={`search-box ${className}`}
        type={'search'} 
        placeholder={placeholder}
        onChange={onChangeHandler}
    />
    )
}


export default SearchBox;