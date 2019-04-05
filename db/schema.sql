-- Drops the cupcake_db if it exists currently
DROP DATABASE IF EXISTS cupcake_db;
-- Creates the "cupcake_db" database
CREATE DATABASE cupcake_db;
-- specify that all of the following code will affect cupcake_db
USE cupcake_db;

CREATE TABLE cupcakes (
    id int NOT NULL AUTO_INCREMENT,
    cupcake_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);
