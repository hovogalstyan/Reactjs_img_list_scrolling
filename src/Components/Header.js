import React, {useCallback, useEffect, useState} from 'react';
import styles from '../Styles/header.module.css'
import axios from "axios";
import {API_KEY} from "../App";

const Header = ({setDataImg, dataImg, setAccessScroll}) => {
    const [search, setSearch] = useState('')
    const change = useCallback((text) => {
        setSearch(text.target.value)
    }, [search]);
    const handleSearch = useCallback((e) => {
        e.preventDefault()
        if (search !== '') {
            axios.get(`https://api.unsplash.com/search/photos?query=${search}"&client_id=${API_KEY}&per_page=100`).then((res) => {
                if (res.data.results) {
                    setDataImg([...res.data.results])
                    setAccessScroll(true)
                } else {
                    setDataImg([])
                }
            })
        }
    }, [search])
    useEffect(() => {
        console.log(dataImg)
    }, [dataImg])
    return (
        <div className={styles.header}>
            <form onSubmit={handleSearch}>
                <input placeholder={'Search...'} value={search} onChange={change} type="text"/>
                <button>Search</button>
            </form>
        </div>
    );
};

export default Header;