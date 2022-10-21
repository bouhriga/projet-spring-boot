-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : ven. 02 sep. 2022 à 22:44
-- Version du serveur :  10.4.11-MariaDB
-- Version de PHP : 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `bib`
--

-- --------------------------------------------------------

--
-- Structure de la table `adherent`
--

CREATE TABLE `adherent` (
  `cin` varchar(255) NOT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `datenaissance` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `adherent`
--

INSERT INTO `adherent` (`cin`, `adresse`, `datenaissance`, `nom`, `prenom`) VALUES
('sh1990', 'agadir', '2000-02-01', 'Bouhriga', 'fatima'),
('sh2901', 'agadir', '2001-02-10', 'idichou', 'anas'),
('sh6745', 'agadir', '1987-02-01', 'loubna', 'loubna'),
('sh7845', 'agadir', '1999-02-01', 'bouhriga', 'wijdane');

-- --------------------------------------------------------

--
-- Structure de la table `dictionnaire`
--

CREATE TABLE `dictionnaire` (
  `id` int(11) NOT NULL,
  `disponible` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prix_vente` double NOT NULL,
  `langue` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `dictionnaire`
--

INSERT INTO `dictionnaire` (`id`, `disponible`, `nom`, `prix_vente`, `langue`) VALUES
(15, 1, 'lexicographe', 30, 'francais');

-- --------------------------------------------------------

--
-- Structure de la table `emprunt`
--

CREATE TABLE `emprunt` (
  `id_emprunt` int(11) NOT NULL,
  `date_emp` varchar(255) DEFAULT NULL,
  `date_ret` varchar(255) DEFAULT NULL,
  `id_document` int(11) DEFAULT NULL,
  `cin` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `emprunt`
--

INSERT INTO `emprunt` (`id_emprunt`, `date_emp`, `date_ret`, `id_document`, `cin`) VALUES
(26, 'Fri Sep 02 19:09:23 WEST 2022', 'Wed Sep 07 19:09:23 WEST 2022', 10, 'sh1990'),
(28, 'Fri Sep 02 19:10:15 WEST 2022', 'Wed Sep 07 19:10:15 WEST 2022', 8, 'sh2901');

-- --------------------------------------------------------

--
-- Structure de la table `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(33);

-- --------------------------------------------------------

--
-- Structure de la table `livre`
--

CREATE TABLE `livre` (
  `id` int(11) NOT NULL,
  `disponible` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prix_vente` double NOT NULL,
  `numpage` int(11) NOT NULL,
  `auteur` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `livre`
--

INSERT INTO `livre` (`id`, `disponible`, `nom`, `prix_vente`, `numpage`, `auteur`) VALUES
(9, 1, 'voyage de gulliver', 190, 110, 'jonathan swift');

-- --------------------------------------------------------

--
-- Structure de la table `revue`
--

CREATE TABLE `revue` (
  `id` int(11) NOT NULL,
  `disponible` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prix_vente` double NOT NULL,
  `reference` varchar(255) DEFAULT NULL,
  `annee_pub` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `revue`
--

INSERT INTO `revue` (`id`, `disponible`, `nom`, `prix_vente`, `reference`, `annee_pub`) VALUES
(10, 1, 'le journal La Presse', 200, 'Falagasa', '1978'),
(11, 0, 'The agony', 99, 'Communication ', '2021'),
(12, 0, 'scientific publishing', 70, 'cite', '2000'),
(13, 0, 'the ecstasy', 80, ' The role', '2007');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `adherent`
--
ALTER TABLE `adherent`
  ADD PRIMARY KEY (`cin`);

--
-- Index pour la table `dictionnaire`
--
ALTER TABLE `dictionnaire`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `emprunt`
--
ALTER TABLE `emprunt`
  ADD PRIMARY KEY (`id_emprunt`),
  ADD KEY `FK7qe2rq3kgbi50fs2uimsaqx6o` (`cin`);

--
-- Index pour la table `livre`
--
ALTER TABLE `livre`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `revue`
--
ALTER TABLE `revue`
  ADD PRIMARY KEY (`id`);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `emprunt`
--
ALTER TABLE `emprunt`
  ADD CONSTRAINT `FK7qe2rq3kgbi50fs2uimsaqx6o` FOREIGN KEY (`cin`) REFERENCES `adherent` (`cin`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
