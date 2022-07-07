import React, { useEffect, useState } from "react"
import { Header } from "./Header"
import { Product } from "./Product"
import "./styles.css"

export function App() {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("")
    const [productID, setProductID] = useState(0)
    const [deleteProduct, setDeleteProduct] = useState(false)

    //Get all products & get all availavle categories
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((res) => setProducts(res))

        fetch("https://fakestoreapi.com/products/categories")
            .then((res) => res.json())
            .then((res) => setCategories(res))
    }, [])

    //Get products in a specific category
    useEffect(() => {
        //bouncer
        if (!selectedCategory) return
        fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
            .then((res) => res.json())
            .then((res) => setProducts(res)) //if category selected now set the showing product to this res
    }, [selectedCategory])

    //see the product detail:
    useEffect(() => {
        //bouncer
        if (!productID || deleteProduct) return
        fetch(`https://fakestoreapi.com/products/${productID}`)
            .then((res) => res.json())
            .then((res) =>
                console.log("see the details of the product = ", res)
            )
    }, [productID])

    //Delete a Product
    useEffect(() => {
        //bouncer
        if (!productID || !deleteProduct) return
        fetch(`https://fakestoreapi.com/products/${productID}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((res) => console.log("deleted product = ", res))
    }, [productID, deleteProduct])
    // The product will not be deleted on the database. but if you sent data successfully it will return you the fake deleted product.

    return (
        <React.Fragment>
            <div className="Header">
                <Header
                    categories={categories}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
            </div>
            <div className="ProductGrid">
                {products.map((product) => {
                    return (
                        <Product
                            key={product.id}
                            {...product}
                            setProductID={setProductID}
                            uniqueProductId={product.id}
                            setDeleteProduct={setDeleteProduct}
                        />
                    )
                    //if you dont pass any product as props and if not design Product props it would be only repeating product based on array length
                })}
            </div>
        </React.Fragment>
    )
}

//if you put product inisde the array! the content of product changes and that cause re-rendeing the page
//meaning an infinite loop in fetching!
//becuase of React.StrictMode it always start with two!! it keeps re render the react so 4 console log
// (two with empty array and each of every time changes twoxtwo in totall 6 console.log)
//you need to enter the map inside the return (the next return its just map return)
//dont forget seesaw for the map since its insidethe return and has to be readable for bable
