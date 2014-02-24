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
  `awayId` int(11) NOT NULL,
  `time` varchar(15) NOT NULL,
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
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('3', '2', '201308212300', '1', '1', '1', '4', '1', '33842');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('4', '17', '201308252100', '1', '0', '1', '1', '2', '33863');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('5', '1', '201308282300', '2', '0', '0', '4', '2', '33877');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('6', '7', '201309012100', '1', '2', '3', '1', '3', '33904');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('7', '1', '201309142000', '9', '3', '2', '1', '4', '33946');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('8', '1', '201309182045', '22', '4', '0', '2', '1', '33964');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('9', '19', '201309212000', '1', '0', '4', '1', '5', '33991');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('10', '1', '201309242000', '6', '4', '1', '1', '6', '33998');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('11', '15', '201309281800', '1', '0', '2', '1', '7', '34018');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('12', '24', '201310012045', '1', '0', '1', '2', '2', '34039');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('13', '1', '201310052200', '18', '4', '1', '1', '8', '34064');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('14', '13', '201310192000', '1', '0', '0', '1', '9', '34136');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('15', '23', '201310222045', '1', '1', '1', '2', '3', '34138');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('16', '1', '201310261800', '3', '2', '1', '1', '10', '34171');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('17', '11', '201310292200', '1', '0', '3', '1', '11', '34185');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('18', '1', '201311012100', '10', '1', '0', '1', '12', '34208');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('19', '1', '201311062045', '23', '3', '1', '2', '4', '34252');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('20', '20', '201311102100', '1', '1', '4', '1', '13', '34278');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('21', '1', '201311231600', '12', '4', '0', '1', '14', '34330');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('22', '22', '201311262045', '1', '2', '1', '2', '5', '34339');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('23', '4', '201312012100', '1', '1', '0', '1', '15', '34358');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('24', '26', '201312062200', '1', '1', '4', '3', '1', '34371');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('25', '1', '201312112045', '24', '6', '1', '2', '6', '34381');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('26', '1', '201312142000', '5', '2', '1', '1', '16', '34394');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('27', '1', '201317172200', '26', '3', '0', '3', '2', '34403');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('28', '16', '201312221700', '1', '2', '5', '1', '17', '34421');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('29', '1', '201401051600', '14', '4', '0', '1', '18', '34466');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('30', '1', '201401082200', '16', '4', '0', '3', '3', '34475');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('31', '2', '201401112000', '1', '0', '0', '1', '19', '34486');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('32', '16', '201401162200', '1', '0', '2', '3', '4', '34509');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('33', '8', '201401191900', '1', '1', '1', '1', '20', '34519');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('34', '8', '201401222200', '1', '1', '4', '3', '5', '34530');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('35', '1', '201401262100', '17', '3', '0', '1', '21', '34560');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('36', '1', '201401292200', '8', '5', '1', '3', '6', '34579');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('37', '1', '201402011600', '7', '2', '3', '1', '22', '34599');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('38', '1', '201402052200', '6', '2', '0', '3', '7', '34617');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('39', '9', '201402092100', '1', '1', '4', '1', '23', '34636');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('40', '6', '201402122200', '1', '1', '1', '3', '8', '34643');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('41', '1', '201402152000', '19', '6', '0', '1', '24', '34655');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('42', '25', '201402182045', '1', '0', '2', '2', '7', '34665');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`id`, `homeId`, `time`, `awayId`, `homeScore`, `awayScore`, `competition`, `round`, `reportId`) VALUES ('43', '6', '201402222000', '1', '3', '1', '1', '25', '34680');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`homeId`, `awayId`, `time`, `competition`, `round`) VALUES ('1', '15', '201403022100', '1', '26');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`homeId`, `awayId`, `time`, `competition`, `round`) VALUES ('18', '1', '201403081600', '1', '27');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`homeId`, `awayId`, `time`, `competition`, `round`) VALUES ('1', '25', '201403122045', '2', '8');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`homeId`, `awayId`, `time`, `competition`, `round`) VALUES ('1', '13', '201403161700', '1', '28');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`homeId`, `awayId`, `time`, `competition`, `round`) VALUES ('3', '1', '201403232100', '1', '29');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`homeId`, `awayId`, `time`, `competition`, `round`) VALUES ('1', '11', '201403262000', '1', '30');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`homeId`, `awayId`, `time`, `competition`, `round`) VALUES ('10', '1', '201403302000', '1', '31');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`homeId`, `awayId`, `time`, `competition`, `round`) VALUES ('1', '20', '201404062000', '1', '32');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`homeId`, `awayId`, `time`, `competition`, `round`) VALUES ('12', '1', '201404132000', '1', '33');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`homeId`, `awayId`, `time`, `competition`, `round`) VALUES ('1', '3', '201404162130', '3', '9');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`homeId`, `awayId`, `time`, `competition`, `round`) VALUES ('1', '4', '201404202000', '1', '34');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`homeId`, `awayId`, `time`, `competition`, `round`) VALUES ('5', '1', '201404272000', '1', '35');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`homeId`, `awayId`, `time`, `competition`, `round`) VALUES ('1', '16', '201405042000', '1', '36');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`homeId`, `awayId`, `time`, `competition`, `round`) VALUES ('14', '1', '201405112000', '1', '37');
INSERT INTO `zhutou4`.`fcb1899_schedule` (`homeId`, `awayId`, `time`, `competition`, `round`) VALUES ('1', '2', '201405182000', '1', '38');

ALTER TABLE `zhutou4`.`fcb1899_schedule` 
ADD COLUMN `ground` VARCHAR(45) NOT NULL DEFAULT 'HOME' AFTER `reportId`;
UPDATE `zhutou4`.`fcb1899_schedule` SET `ground`='Mestella' WHERE `id`='54';

