const URL = "http://localhost:4000/api/movies/"

export const getMovies = async () => {
    const res = await fetch(URL)
    const movies = await res.json()
    return movies
}

export const createMovie = async (data) => {
    try {
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
    } catch (e) {
        console.log(e)
    }
}

export const getMovie = async (id) => {
    const res = await fetch(`${URL}${id}`)
    const data = await res.json()
    return data
}

export const updateMovie = async (id, data) => {
    console.log(id)
    await fetch(`${URL}${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
}

export const deleteMovie = async (id) => {
    await fetch(`${URL}${id}`, {
        method: "DELETE",
    })
}
