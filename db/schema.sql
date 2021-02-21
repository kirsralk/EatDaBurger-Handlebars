ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
DROP DATABASE IF EXISTS burgers_DB;

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);