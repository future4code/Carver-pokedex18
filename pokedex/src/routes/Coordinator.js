export const goToHome = (history) => {
    history.push("/")
}

export const goToPokedex = (history) => {
    history.push("/pokedex")
}

export const goToDetail = (history, id) => {
    history.push(`/detail/${id}`)
}