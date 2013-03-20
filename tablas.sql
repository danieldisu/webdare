--
-- MySQL 5.5.28
-- Sat, 26 Jan 2013 22:52:24 +0000
--

CREATE TABLE `lugar` (
   `idLugar` mediumint(9) not null auto_increment,
   `localizacion` mediumtext,
   `descripcion` longtext,
   `nombreCiudad` mediumtext,
   `tipo` mediumtext,
   PRIMARY KEY (`idLugar`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=11;

INSERT INTO `lugar` (`idLugar`, `localizacion`, `descripcion`, `nombreCiudad`, `tipo`) VALUES ('1', '(40.35910267579199, -3.6749267578125)', 'adsasdasdasd', 'Madrid', 'restaurante');
INSERT INTO `lugar` (`idLugar`, `localizacion`, `descripcion`, `nombreCiudad`, `tipo`) VALUES ('10', '(40.53050177574321, -3.570556640625)', 'adssdfgdghdfgsdfhsdfghsfghsfgh', 'Madrid', 'romantico');