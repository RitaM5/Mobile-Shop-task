import React, { createContext, useEffect, useState } from 'react';
export const ProductContext = createContext(null);

const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
 
    useEffect(() => {
        fetchData(6);
  
    }, []);

    const fetchData = async (dataLimit) => {
        try {
            const response = await fetch('products.json');
            const data = await response.json();
            displayData(data, dataLimit);

        } catch (error) {
            console.error('Error fetching data:', error);
        }

    };

    const displayData = (data, dataLimit) => {
        const showAllButton = document.getElementById("see-more");
        if (dataLimit && data.length > 6) {
            data = data.slice(0, 6);
            showAllButton.classList.remove('hidden');
        } else {
            showAllButton.classList.add('hidden');
        }
        setProducts(data);
    }

    const callData = () => {
        fetchData(6)
    }

    // show all data
    const showAllData = () => {
        fetchData()
    }

                  
    return (
    <ProductContext.Provider value={{products, showAllData}}>
        {children}
    </ProductContext.Provider>)
};

export default ProductProvider;