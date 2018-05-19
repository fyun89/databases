CREATE DATABASE chat;

USE chat;

CREATE TABLE Users (
  Id int auto_increment primary key,
  User_Name varchar(100) unique
);

CREATE TABLE Rooms (
  Id int primary key,
  Room_Name varchar(100)
);

CREATE TABLE Messages (
  Id int auto_increment primary key,
  Message varchar(500), 
  User int,
  Room int,
  foreign key(User) references Users(Id), 
  foreign key(Room) references Rooms(Id)
  /* Describe your table here.*/
);

/* Create other tables and define schemas for them here! */

CREATE TABLE Users_Rooms (
  UserId int,
  RoomId int,
  foreign key(UserId) references Users(Id),
  foreign key(RoomId) references Rooms(Id)
);




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

