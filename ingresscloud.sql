-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 14-10-2022 a las 06:06:43
-- Versión del servidor: 5.7.33
-- Versión de PHP: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ingresscloud`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admin`
--

CREATE TABLE `admin` (
  `email` varchar(30) NOT NULL,
  `password` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `admin`
--

INSERT INTO `admin` (`email`, `password`) VALUES
('ingresscloud@gmail.com', '12345');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `invitado`
--

CREATE TABLE `invitado` (
  `idinvitado` int(5) NOT NULL,
  `nombreinv` varchar(30) NOT NULL,
  `apellidoinv` varchar(50) NOT NULL,
  `documentoinv` varchar(12) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `entradainv` varchar(20) NOT NULL,
  `salidainv` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `invitado`
--

INSERT INTO `invitado` (`idinvitado`, `nombreinv`, `apellidoinv`, `documentoinv`, `descripcion`, `entradainv`, `salidainv`) VALUES
(21, 'Carlos', 'Henao', '21351352', 'Biblioteca', '', ''),
(22, '', '', '', '', '', ''),
(23, '', '', '', '', '', ''),
(24, 'Carlos', 'Cardona', '3215132', 'bñabñabañ', '', ''),
(25, 'Manuela', 'Rivera', 'ccsacsac', 'svdsdvsd', '', ''),
(26, 'Stiven', 'Ruiz', '61323060', 'Clase', '', ''),
(27, '', '', '', '', '', ''),
(28, '', '', '', '', '', ''),
(29, '', '', '', '', '', ''),
(30, '', '', '', '', '', ''),
(31, 'jeremias', 'cac', '3563534', 'asdas', '', ''),
(32, 'jeremias', 'cac', '123', 'kkk', '', ''),
(33, '', '', '123', '', '2022-10-14T00:13', ''),
(34, '', '', '123', '', '', '2022-10-14T00:15');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `idpersona` int(5) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `apellidos` varchar(50) NOT NULL,
  `documento` varchar(12) NOT NULL,
  `email` varchar(30) NOT NULL,
  `ficha` varchar(10) NOT NULL,
  `fechaentrada` varchar(30) NOT NULL,
  `fechasalida` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`idpersona`, `nombre`, `apellidos`, `documento`, `email`, `ficha`, `fechaentrada`, `fechasalida`) VALUES
(3, 'Carlos', 'Henao', '1216724190', 'c27ahc@gmail.com', '2449516', '', ''),
(4, 'Camilo', 'Montoya', '6944513', 'camilo@gmail.com', '9555426', '', ''),
(5, 'asd', 'ppp', '1037671600', 'stiven.ruiz.991031@gmail.com', '244', '', ''),
(6, 'Stiven', 'Ruiz', '999', 'para.bellam.05@gmail.com', '12312', '', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `invitado`
--
ALTER TABLE `invitado`
  ADD PRIMARY KEY (`idinvitado`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`idpersona`),
  ADD KEY `fechaentrada` (`fechaentrada`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `invitado`
--
ALTER TABLE `invitado`
  MODIFY `idinvitado` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT de la tabla `persona`
--
ALTER TABLE `persona`
  MODIFY `idpersona` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
