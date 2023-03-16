import React, { useState, useEffect } from "react"
import { Button, Container, Form } from "react-bootstrap"
import GenrerSelect from "@/components/GenrerSelect"
import NavNavigation from "@/components/NavNavigation"
import { createMovie, getMovie, updateMovie } from "@/utils/movies"
import { movieScheme } from "@/utils/movieScheme"
import { useRouter } from "next/router"

const Movie = ({ id }) => {
    const [data, setData] = useState(movieScheme)
    const [isEdit, setIsEdit] = useState(false)
    const router = useRouter()

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        if (id) {
            getMovie(id).then((data) => {
                if (data.length) {
                    setData(...data)
                    setIsEdit(true)
                }
            })
        }
    }, [])

    return (
        <>
            <NavNavigation />
            <Container className="mt-5 mb-5">
                <Form>
                    <Form.Group className="mb-3" controlId="nombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            name="nombre_pelicula"
                            aria-describedby="nombreHelp"
                            onChange={handleChange}
                            value={data.nombre_pelicula}
                        />
                        <Form.Text id="nombre" muted>
                            Introduce el nombre de la pelicula
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="descripcion">
                        <Form.Label>Descripcion</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={5}
                            name="descripcion"
                            onChange={handleChange}
                            value={data.descripcion}
                        />
                        <Form.Text id="descripcion" muted>
                            Introduce la descripcion de la pelicula
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="descripcion">
                        <Form.Label>Genero</Form.Label>
                        <GenrerSelect placeholder="" onChange={handleChange} value={data.genero} />
                        <Form.Text muted>Selecciona el genero de la pelicula</Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="descripcion">
                        <Form.Check
                            name="activo"
                            type="switch"
                            label="Activa"
                            onChange={(e) => setData({ ...data, [e.target.name]: e.target.checked })}
                            value={data.activo}
                            checked={data.activo}
                        />
                        <Form.Text muted>Estado de la pelicula</Form.Text>
                    </Form.Group>
                    {isEdit ? (
                        <Button
                            onClick={() => {
                                updateMovie(id, data).then(() => router.push("/"))
                            }}
                        >
                            Actualizar
                        </Button>
                    ) : (
                        <Button
                            onClick={() => {
                                createMovie(data).then(() => router.push("/"))
                            }}
                        >
                            Crear
                        </Button>
                    )}
                </Form>
            </Container>
        </>
    )
}

export const getServerSideProps = async (context) => {
    const { id } = context.query

    return {
        props: {
            id: id || null,
        },
    }
}

export default Movie
