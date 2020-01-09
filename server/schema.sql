CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
);

/* Create other tables and define schemas for them here! */


CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT(10) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  text VARCHAR(255) DEFAULT '',
  room_id INT(10),
  INDEX room_idx (room_id),
  FOREIGN KEY (room_id) REFERENCES rooms(id),
  user_id INT(10),
  INDEX user_idx (user_id),
  FOREIGN KEY (user_id) REFERENCES users(id)
) ENGINE=INNODB;

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
  id INT(10) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  username VARCHAR(50)
) ENGINE=INNODB;

CREATE TABLE rooms (
  id INT(10) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  roomname VARCHAR(50)
) ENGINE=INNODB;


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

