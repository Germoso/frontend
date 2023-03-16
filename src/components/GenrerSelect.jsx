import React, { useState, useEffect } from "react"
import { Form } from "react-bootstrap"
import { getGenres } from "../utils/genres"

const GenrerSelect = ({ onChange, placeholder, value, defaultValue = "all" }) => {
    const [genres, setGenres] = useState([])

    useEffect(() => {
        getGenres().then((genres) => {
            setGenres(genres)
        })
    }, [])

    return (
        <Form.Select name="genero" aria-label="Genero" onChange={(e) => onChange(e)} value={value}>
            <option value={defaultValue}>{placeholder}</option>
            <>
                {genres.map((genre, index) => (
                    <option key={index} value={genre.id}>
                        {genre.genero}
                    </option>
                ))}
            </>
        </Form.Select>
    )
}

export default GenrerSelect
