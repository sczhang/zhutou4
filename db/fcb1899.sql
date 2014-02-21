CREATE DATABASE zhutou4;

CREATE TABLE IF NOT EXISTS `zhutou4`.`fcb1899_team` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `fullname` VARCHAR(45) NOT NULL,
  `abbr` VARCHAR(3) NULL DEFAULT NULL,
  `homeground` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE IF NOT EXISTS `zhutou4`.`fcb1899_schedule` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `homeId` int(11) NOT NULL,
  `time` varchar(15) NOT NULL,
  `awayId` int(11) NOT NULL,
  `homeScore` int(11) NOT NULL DEFAULT '-1',
  `awayScore` int(11) NOT NULL DEFAULT '-1',
  `competition` int(11) NOT NULL,
  `round` int(11) NOT NULL,
  `reportId` int(11) NOT NULL DEFAULT '0',
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

INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `awayId`, `time`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES (1, 1, 21, '201308022130', 8, 0, 7, 1, 33754);
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `awayId`, `time`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES (2, 1, 8, '201308181900', 7, 0, 1, 1, 33831);

