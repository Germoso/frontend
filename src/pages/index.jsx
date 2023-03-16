import GenrerSelect from "@/components/GenrerSelect"
import MovieList from "@/components/MovieList"
import NavNavigation from "@/components/NavNavigation"
import { getMovies } from "@/utils/movies"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { Button } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"

//ESTE ES COMO EL INDEX HTML

function App() {
    const [movies, setMovies] = useState([])
    const [selectedGenre, setSelectedGenre] = useState("all")
    const router = useRouter()

    //OBTIENE TODAS LAS PELICULAS CUANDO SE CARGA LA APLICACION
    useEffect(() => {
        getMovies().then((movies) => {
            setMovies(movies)
        })
    }, [])

    return (
        <>
            <NavNavigation />
            <Container className="mb-5">
                <header className="mt-5 mb-5">
                    <h1 className="fs-1 text-center ">Peliculas</h1>
                </header>
                <Form className="mb-5">
                    <GenrerSelect
                        onChange={(e) => {
                            setSelectedGenre(e.target.value)
                        }}
                        placeholder={"Todos los generos"}
                    />
                    <Form.Text id="descripcion" muted>
                        Selecciona un genero para filtrar
                    </Form.Text>
                </Form>
                <div className="d-flex flex-wrap gap-4 justify-content-center ">
                    {/* //LISTA DE PELICULAS */}
                    <MovieList data={movies} selectedGenre={selectedGenre} />
                </div>
                <div className="mt-4 d-flex justify-content-center">
                    <Button
                        onClick={() => {
                            router.push("/movie")
                        }}
                    >
                        Agregar Pelicula
                    </Button>
                </div>
            </Container>
        </>
    )
}

export default App
