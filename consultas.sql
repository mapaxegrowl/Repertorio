DATABASE repertorio; 
CREATE TABLE canciones(
    id SERIAL,
 titulo VARCHAR(50), 
 artista VARCHAR(50), 
 tono VARCHAR(10));


 SELECT* FROM  canciones;
drop table canciones;
DELETE FROM canciones
WHERE id > 1;

ALTER TABLE canciones RENAME COLUMN tono TO genero;


