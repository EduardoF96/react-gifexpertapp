import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    /* const categories = ['Lord of the rings','Harry Potter','Godfather']; */
    const [categories,setCategories]= useState(['Lord of the rings']);
    // const handleAdd= () =>{
    //     setCategories([...categories,'Mortal Kombat']);
    // }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>
            <ol>
                {
                    categories.map(category =>(
                        <GifGrid 
                        key={category}
                        category={category}/>
                    ))
                    // categories.map( (category,i) =>  (
                    // <li key={category}> {category} </li>
                    // ))
                }
            </ol>
        </>
      
    )
}
