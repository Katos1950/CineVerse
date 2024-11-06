import { Card } from "../components/Card"
import { useTitle } from "../hooks";
import { useFetch } from "../hooks/useFetch"

export const MovieList = ({apiPath,title}) => {
  const {data:movies} = useFetch(apiPath);

  useTitle(title);
  
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify justify-center sm:justify-start flex-wrap">
          {movies.map((movie)=>(
            <Card key={movie.id} movie={movie} /> 
          ))}
        </div>

      </section>
    </main>
  )
}