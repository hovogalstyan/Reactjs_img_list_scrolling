import './App.css';
import Header from "./Components/Header";
import {useState} from "react";
import ImageList from "./Components/ImageList";

export const API_KEY = 'TnS6h1-CQw2aA1mn2cl6mUlG5LYscL16j48vN7ALGw0';

function App() {
    const [dataImg, setDataImg] = useState([])
    const [pageNumber, setPageNumber] = useState(1);
    const [accessScroll, setAccessScroll] = useState(false)
    return (
        <div className="App">
            <Header
                pageNumber={pageNumber}
                dataImg={dataImg}
                setDataImg={setDataImg}
                setAccessScroll={setAccessScroll}
            />
            <ImageList
                setPageNumber={setPageNumber}
                pageNumber={pageNumber}
                dataImg={dataImg}
                setDataImg={setDataImg}
                accessScroll={accessScroll}
            />
        </div>
    );
}

export default App;
