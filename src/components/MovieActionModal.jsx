import { deleteMovie, getMovie } from "@/utils/movies"
import React, { useState, useEffect } from "react"
import { Button, Modal } from "react-bootstrap"
import { useRouter } from "next/router"

const MovieActionModal = ({ show, handleClose, id }) => {
    const [data, setData] = useState({})
    const router = useRouter()

    useEffect(() => {
        if (id) {
            getMovie(id).then((data) => {
                setData(...data)
            })
        }
    }, [])

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{data.nombre_pelicula}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{data.descripcion}</Modal.Body>
            <Modal.Footer>
                <Button
                    variant="danger"
                    onClick={() => {
                        deleteMovie(id).then(() => {
                            handleClose()
                            router.reload()
                        })
                    }}
                >
                    Eliminar
                </Button>
                <Button
                    variant="primary"
                    onClick={() => {
                        router.push({ query: { id: data.id }, as: "movie", pathname: "/movie" })
                        handleClose()
                    }}
                >
                    Editar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default MovieActionModal
