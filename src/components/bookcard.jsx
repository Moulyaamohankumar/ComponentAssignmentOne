import react from 'react'
export const bookCard = ({books})=>{
return(
    <div>
        <h1>{books.name}</h1>
        <h2>{books.genre}</h2>
        <h3>{books.id}</h3>
        <h4>{books.author}</h4>
    </div>
)
}
