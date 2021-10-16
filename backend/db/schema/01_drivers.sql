DROP TABLE IF EXISTS drivers CASCADE;
CREATE TABLE drivers (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  licence VARCHAR(50) NOT NULL,
  insurance VARCHAR(50) not NULL,
  availability BOOLEAN
);