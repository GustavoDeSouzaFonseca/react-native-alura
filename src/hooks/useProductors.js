import { useState, useEffect } from "react";

import { loadingProducter } from '../service/loadingData';


export default function useProducters() {

    const [title, setTitle] = useState('');
    const [listProducter, setListProducter] = useState([]);

    useEffect(() => {
        const comeBackProducter = loadingProducter();
        setTitle(comeBackProducter.title);
        setListProducter(comeBackProducter.listProducter)
    }, []);

    return [title, listProducter];

}