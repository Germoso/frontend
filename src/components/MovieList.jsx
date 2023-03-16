import React, { useEffect, useState } from "react"
import Movie from "./Movie"

const MovieList = ({ data, selectedGenre }) => {
    const [filter, setFilter] = useState([])

    useEffect(() => {
        const newData = data.filter((el) => {
            console.log(el.genero)

            if (selectedGenre == el.genero || selectedGenre == "all") {
                return el
            }
        })

        setFilter(newData)

        console.log(selectedGenre)
    }, [selectedGenre])

    return (
        <>
            {filter.length ? (
                filter.map((el, index) => <Movie key={index} data={el} selectedGenre={selectedGenre} />)
            ) : (
                <h2>No se encontraron peliculas</h2>
            )}
        </>
    )
}

export default MovieList
