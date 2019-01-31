DROP DATABASE Heroes_DB;

CREATE DATABASE Heroes_DB;

USE Heroes_DB;

CREATE TABLE HeroesDetails(
heroId INT(4) PRIMARY KEY AUTO_INCREMENT,
heroName VARCHAR (20) NOT NULL,
universe VARCHAR(20) NOT NULL,
description  VARCHAR(200) NOT NULL,
specialPower VARCHAR(50)NOT NULL,
intId INT(4) KEY AUTO_INCREMENT
);

insert into HeroesDetails(heroId,heroName,universe,specialPower,description) values('0001','Spiderman','Marvel','Web','Student');
insert into HeroesDetails(heroId,heroName,universe,specialPower,description) values('0002','Ironman','Marvel','Hulk-Buster',' Scientist');
insert into HeroesDetails(heroId,heroName,universe,specialPower,description) values('0003','Captain America','Marvel','Shield','Soldier');
insert into HeroesDetails(heroId,heroName,universe,specialPower,description) values('0004','Wolverine','Marvel','Blades','');
insert into HeroesDetails(heroId,heroName,universe,specialPower,description) values('0005','Hulk','Marvel','Smash','Scientist');
insert into HeroesDetails(heroId,heroName,universe,specialPower,description) values('0006','Thor','Marvel','Thunder','God of Thunder');
insert into HeroesDetails(heroId,heroName,universe,specialPower,description) values('0007','Deadpool','Marvel','Guns','Ninja');
insert into HeroesDetails(heroId,heroName,universe,specialPower,description) values('0008','Hawkeye','Marvel','Bow & Arrow','Shield Agent');
insert into HeroesDetails(heroId,heroName,universe,specialPower,description) values('0009','Black Widow','Marvel','Spy','Shield Agent');
insert into HeroesDetails(heroId,heroName,universe,specialPower,description) values('0010','Black Panther','Marvel','Panther attack','Minister');

insert into HeroesDetails(heroId,heroName,universe,specialPower,description) values('0011','Batman','DC','Bat','Billionaire Industrialist');
insert into HeroesDetails(heroId,heroName,universe,specialPower,description) values('0012','Superman','DC','Super punch',' God');
insert into HeroesDetails(heroId,heroName,universe,specialPower,description) values('0013','Wonderwoman','DC','Rope','Goddess');
insert into HeroesDetails(heroId,heroName,universe,specialPower,description) values('0014','Aquaman','DC','Water splash','King of the sea');
insert into HeroesDetails(heroId,heroName,universe,specialPower,description) values('0015','Supergirl','DC','Super kick','Goddess');
insert into HeroesDetails(heroId,heroName,universe,specialPower,description) values('0016','Flash','DC','Speed','Speedster');
insert into HeroesDetails(heroId,heroName,universe,specialPower,description) values('0017','Green Lantern','DC','Ring','Guardian of the universe');
insert into HeroesDetails(heroId,heroName,universe,specialPower,description) values('0018','Green Arrow','DC','Bow & Arrow','Billionaire Industrialist ');
insert into HeroesDetails(heroId,heroName,universe,specialPower,description) values('0019','Cyborg','DC','Spy','Football Player');
insert into HeroesDetails(heroId,heroName,universe,specialPower,description) values('0020','Martian Manhunter','DC','Invisible','Alien');
insert into HeroesDetails(heroId,heroName,universe,specialPower,description) values();

select * from HeroesDetails;

CREATE TABLE UsersDetails(
firstName varchar(15)not null, 
lastName varchar (10)not null,
email varchar (20) not null,
username VARCHAR (20) NOT NULL,
password VARCHAR (20) not null,
userID  int (4) primary key auto_increment
);

insert into UsersDetails(firstName,lastName, email, username,password,userID) values();
select * from usersDetails;

