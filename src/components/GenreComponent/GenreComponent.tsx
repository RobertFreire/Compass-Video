import React from "react";
import style from "./GenreComponent.module.css";
interface GenreProps {
  ActualPage: string;
}

function GenreComponent({ ActualPage }: GenreProps) {
  const [selectedGenre, setSelectedGenre] = React.useState("");

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(event.target.value);
  };

  return (
    <div className={style.container}>
      <h2 className={style.actualPage}>{ActualPage}</h2>
      <select
        id={style.genreSelect}
        value={selectedGenre}
        onChange={handleGenreChange}
      >
        <option value="">
          Gêneros{" "}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.88 9.29006L12 13.1701L8.11998 9.29006C7.72998 8.90006 7.09998 8.90006 6.70998 9.29006C6.31998 9.68006 6.31998 10.3101 6.70998 10.7001L11.3 15.2901C11.69 15.6801 12.32 15.6801 12.71 15.2901L17.3 10.7001C17.69 10.3101 17.69 9.68006 17.3 9.29006C16.91 8.91006 16.27 8.90006 15.88 9.29006Z"
              fill="white"
            />
          </svg>
        </option>
        <option value="Ação">Ação</option>
        <option value="Comédia">Comédia</option>
        <option value="Drama">Drama</option>
        <option value="Ficção Científica">Ficção Científica</option>
      </select>
    </div>
  );
}

export default GenreComponent;
