CREATE DATABASE zhutou4;

CREATE TABLE IF NOT EXISTS `zhutou4`.`fcb1899_team` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `fullname` VARCHAR(45) NOT NULL,
  `abbr` VARCHAR(3) NULL DEFAULT NULL,
  `homeground` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
  
  
CREATE TABLE IF NOT EXISTS `zhutou4`.`fcb1899_match` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `competition` INT NOT NULL,
  `round` INT NOT NULL,
  `ground` VARCHAR(45) NULL DEFAULT 'HOME',
  PRIMARY KEY (`id`));

CREATE TABLE IF NOT EXISTS `zhutou4`.`fcb1899_schedule` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `homeId` INT(11) NOT NULL,
  `time` VARCHAR(15) NOT NULL,
  `matchId` INT(11) NOT NULL,
  `awayId` INT(11) NOT NULL,
  `homeScore` INT(11) NOT NULL,
  `awayScore` INT(11) NOT NULL,
  PRIMARY KEY (`id`));
  
INSERT INTO `zhutou4`.`fcb1899_team` (`id`, `fullname`, `abbr`, `homeground`) VALUES ('1', 'FC Barcelona', 'FCB', 'Camp Nou');
INSERT INTO `zhutou4`.`fcb1899_team` (`id`, `fullname`, `abbr`, `homeground`) VALUES ('2', 'Atletico Madrid', 'ATM', 'Calderon');
INSERT INTO `zhutou4`.`fcb1899_team` (`id`, `fullname`, `abbr`, `homeground`) VALUES ('3', 'Real Madrid', 'RM', 'Berbabeu');
INSERT INTO `zhutou4`.`fcb1899_team` (`id`, `fullname`, `abbr`, `homeground`) VALUES ('4', 'Athletic Bilbao', 'ATH', 'San Mames');
INSERT INTO `zhutou4`.`fcb1899_team` (`id`, `fullname`, `abbr`, `homeground`) VALUES ('5', 'Villarreal', 'VLR', 'Madrigal');
INSERT INTO `zhutou4`.`fcb1899_team` (`id`, `fullname`, `abbr`, `homeground`) VALUES ('6', 'Real Sociedad', 'RS', 'Anoeta');
INSERT INTO `zhutou4`.`fcb1899_team` (`id`, `fullname`, `abbr`, `homeground`) VALUES ('7', 'Valencia', 'VCF', 'Mestalla');
INSERT INTO `zhutou4`.`fcb1899_team` (`id`, `fullname`, `abbr`, `homeground`) VALUES ('8', 'Levante', 'LVT', 'Ciutat de Valencia');
INSERT INTO `zhutou4`.`fcb1899_team` (`id`, `fullname`, `abbr`, `homeground`) VALUES ('9', 'Sevilla', 'SVL', 'Pizjuan');
INSERT INTO `zhutou4`.`fcb1899_team` (`id`, `fullname`, `abbr`, `homeground`) VALUES ('10', 'Real Espanyol', 'ESP', 'Cornella');
INSERT INTO `zhutou4`.`fcb1899_team` (`id`, `fullname`, `abbr`, `homeground`) VALUES ('11', 'Celta de Vigo', 'CDV', 'Balaidos');
INSERT INTO `zhutou4`.`fcb1899_team` (`id`, `fullname`, `abbr`, `homeground`) VALUES ('12', 'Granada', 'GRA', 'Los Carmenes');
INSERT INTO `zhutou4`.`fcb1899_team` (`id`, `fullname`, `abbr`, `homeground`) VALUES ('13', 'Osasuna', 'OSA', 'El Sadar');
INSERT INTO `zhutou4`.`fcb1899_team` (`id`, `fullname`, `abbr`, `homeground`) VALUES ('14', 'Elche', 'ELC', 'Martinez Valero');
INSERT INTO `zhutou4`.`fcb1899_team` (`id`, `fullname`, `abbr`, `homeground`) VALUES ('15', 'Almeria', 'ALM', 'Juegos Mediterraneos');
INSERT INTO `zhutou4`.`fcb1899_team` (`id`, `fullname`, `abbr`, `homeground`) VALUES ('16', 'Getafe', 'GET', 'Alfonso Perez');
INSERT INTO `zhutou4`.`fcb1899_team` (`id`, `fullname`, `abbr`, `homeground`) VALUES ('17', 'Malaga', 'MAL', 'La Rosaleda');
INSERT INTO `zhutou4`.`fcb1899_team` (`id`, `fullname`, `abbr`, `homeground`) VALUES ('18', 'Real Valladolid', 'VLD', 'Zorrilla');
INSERT INTO `zhutou4`.`fcb1899_team` (`id`, `fullname`, `abbr`, `homeground`) VALUES ('19', 'Rayo Vallecano', 'RAV', 'Vallecas');
INSERT INTO `zhutou4`.`fcb1899_team` (`id`, `fullname`, `abbr`, `homeground`) VALUES ('20', 'Real Betis', 'RB', 'Benito Villamarin');
INSERT INTO `zhutou4`.`fcb1899_team` (`id`, `fullname`, `abbr`, `homeground`) VALUES ('21', 'Santos', 'SAN', 'Vila Belmiro');
INSERT INTO `zhutou4`.`fcb1899_team` (`id`, `fullname`, `abbr`, `homeground`) VALUES ('22', 'Ajax', 'AJX', 'Amsterdam ArenA');
INSERT INTO `zhutou4`.`fcb1899_team` (`id`, `fullname`, `abbr`, `homeground`) VALUES ('23', 'Milan', 'ACM', 'San Siro');
INSERT INTO `zhutou4`.`fcb1899_team` (`id`, `fullname`, `abbr`, `homeground`) VALUES ('24', 'Celtic', 'CEL', 'Celtic Park');
INSERT INTO `zhutou4`.`fcb1899_team` (`id`, `fullname`, `abbr`, `homeground`) VALUES ('25', 'Manchester City', 'MC', 'Etihad Stadium');
INSERT INTO `zhutou4`.`fcb1899_team` (`id`, `fullname`, `abbr`, `homeground`) VALUES ('26', 'Cartegena', 'CTG', 'Cartagonova');
