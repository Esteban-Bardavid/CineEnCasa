import { useState, useEffect } from "react";
import axios from "axios";

function UseHome() {
    const [movie, setmovie] = useState([]);
    const [input, setinput] = useState("harry");
    const [disabled, setdisabled] = useState(true);
    const [page, setpage] = useState(1);

    useEffect(() => {
        GetMethod();
    }, [page]);

    async function GetMethod() {
        let { data } = await axios.get(`https://www.omdbapi.com/?s=${input}&page=${page}&apikey=533b8170`);
        setmovie(data.Search);
    }

    function OnChangeInput(e) {
        let result = e.target.value
        setinput(result);
        if (input != "") {
            setdisabled(false)
        } else {
            setdisabled(true)
        }
    }

    function SearchMovie() {
        GetMethod();
        setinput("");
        if (input == "") {
            setdisabled(true)
        } else {
            setdisabled(false)
        }
    }

    return {
        SearchMovie,
        OnChangeInput,
        movie,
        setpage,
        disabled,
        useState,
        
       
    }
}
export default UseHome;