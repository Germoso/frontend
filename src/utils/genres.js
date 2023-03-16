const URL = "http://localhost:4000/api/genres/"

export const getGenres = async () => {
    const res = await fetch(URL)
    const genres = await res.json()
    return genres
}
