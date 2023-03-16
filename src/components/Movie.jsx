import React, { useState } from "react"
import { Card } from "react-bootstrap"
import MovieActionModal from "./MovieActionModal"

const Movie = ({ data, selectedGenre }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {selectedGenre == data.genero || selectedGenre === "all" ? (
                <>
                    <Card
                        onClick={() => {
                            setIsOpen(true)
                        }}
                        style={{ width: "18rem" }}
                        className={` ${!data.activo ? "opacity-50" : " "} cursor-pointer`}
                    >
                        <Card.Header className={`${data.activo && ""}`}>Activa</Card.Header>
                        <Card.Body>
                            <Card.Title>{data.nombre_pelicula}</Card.Title>
                            <Card.Text>{data.descripcion}</Card.Text>
                        </Card.Body>
                    </Card>
                    <MovieActionModal show={isOpen} handleClose={() => setIsOpen(!isOpen)} id={data.id} />
                </>
            ) : null}
        </>
    )
}

export default Movie
