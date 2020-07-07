-- SELECT last_name FROM actors
-- Ejercitación consigna 1- Gunn;

-- SELECT title, awards FROM movies
-- Ejercitación consigna 2- Parque;

-- SELECT length FROM movies WHERE title = "Titanic"
-- Ejercitación consigna 3- 320;

-- SELECT * FROM series WHERE title = "Person of Interest"
-- Ejercitación consigna 4- 4;

-- SELECT season_id FROM episodes WHERE number = 2
-- Ejercitación consigna 5- 46;

-- DESAFIO 2;

-- SELECT title FROM movies WHERE release_date BETWEEN "1999-09-01" AND "2004-12-01"
-- Ejercitación consigna 1- rey

-- SELECT * FROM movies WHERE title LIKE "%a"
-- Ejercitación consigna 2- Hotel

-- SELECT COUNT(*) FROM actors WHERE first_name = "Jim"
-- Ejercitación consigna 3- 3

-- SELECT SUM(awards) FROM movies WHERE title LIKE "%La Guerra de las galaxias%"
-- Ejercitación consigna 4 - 13

-- SELECT * FROM actors INNER JOIN movies ON movies.id = actors.favorite_movie_id WHERE actors.last_name = "Di Caprio"
-- Ejercitación consigna 5 - de

-- DESAFIO 3;

-- SELECT * FROM actors INNER JOIN movies ON movies.id = actors.favorite_movie_id WHERE actors.rating = 2.3
-- Ejercitación consigna 1 - Titanic

-- SELECT * FROM series INNER JOIN genres ON genres.id = series.genre_id
-- Ejercitación consigna 2 - Fantasia

-- SELECT * FROM movies INNER JOIN genres ON genres.id = movies.genre_id AND genres.name = "Animacion"
-- Ejercitación consigna 3 - Intensamente

-- SELECT * FROM actors INNER JOIN actor_movie ON actors.id = actor_movie.actor_id INNER JOIN movies ON actor_movie.movie_id = movies.id WHERE movies.title = "Parque Jurasico"
-- Ejercitación consigna 4 - Dern

-- SELECT * FROM movies INNER JOIN genres ON genres.id = movies.genre_id WHERE movies.rating BETWEEN 1 AND 4
-- Ejercitación consigna 5 - Mi

-- DESAFIO 4;

-- SELECT genres.name, AVG(length) FROM movies INNER JOIN genres ON genres.id = movies.genre_id GROUP BY genres.name 
-- Ejercitación consigna 1 - Infantiles

-- SELECT first_name, COUNT(actor_movie.id) FROM actors INNER JOIN actor_movie ON actors.id = actor_movie.actor_id INNER JOIN movies ON actor_movie.movie_id = movies.id GROUP BY actors.id ORDER BY movie_id
-- Ejercitación consigna 2 - Emma

-- SELECT COUNT(*), name FROM movies INNER JOIN genres ON movies.genre_id = genres.id GROUP BY genres.name
-- Ejercitación consigna 3 - 4 (Animación)

