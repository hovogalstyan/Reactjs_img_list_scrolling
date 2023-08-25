import React, {useEffect, useState} from 'react';
import styles from '../Styles/images.module.css';
import axios from "axios";
import {API_KEY} from "../App";
import useOnScreen from "./Hooks/useOnScreen";
import Loading from "./Loading";

const ImageList = ({dataImg, setDataImg, pageNumber, setPageNumber, accessScroll}) => {
    const [isLoading, setIsLoading] = useState(false)
    const {isIntersecting, measureRef} = useOnScreen();
    const fetchImages = async (page) => {
        setIsLoading(true)
        try {
            const {data} = await axios.get(`https://api.unsplash.com/photos/?client_id=${API_KEY}&page=${page}`)
            setTimeout(() => {
                setDataImg([...dataImg, ...data])
            }, 500)
        } catch (e) {
            console.log(e)
        } finally {
            setTimeout(() => {
                setIsLoading(false)
            }, 500)
        }
    }
    useEffect(() => {
        fetchImages(pageNumber)
    }, [pageNumber])
    useEffect(() => {
        if (isIntersecting && !accessScroll) {
            setPageNumber(page => page + 1)
        }
    }, [measureRef, isIntersecting, accessScroll])
    return (
        <div className={styles.images_list}>
            <div className={styles.row}>
                {
                    dataImg.length > 0 && dataImg.map(item => (
                        <div key={item.id} className={styles.item}>
                            <img src={item.urls.small_s3} alt=""/>
                        </div>
                    ))
                }
                {isLoading && <Loading/>}
                <div style={{
                    width: '100%',
                    height: '100px'
                }} ref={measureRef}/>
            </div>

        </div>
    );
};

export default ImageList;