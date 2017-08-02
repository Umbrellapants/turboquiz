-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Vært: 127.0.0.1
-- Genereringstid: 02. 08 2017 kl. 22:52:25
-- Serverversion: 10.1.19-MariaDB
-- PHP-version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `turboquiz`
--

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `qq`
--

CREATE TABLE `qq` (
  `qqId` int(10) UNSIGNED NOT NULL,
  `quizFK` int(10) UNSIGNED NOT NULL,
  `questFK` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_danish_ci;

--
-- Data dump for tabellen `qq`
--

INSERT INTO `qq` (`qqId`, `quizFK`, `questFK`) VALUES
(1, 1, 1);

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `quest`
--

CREATE TABLE `quest` (
  `questId` int(10) UNSIGNED NOT NULL,
  `quest` text COLLATE utf8_danish_ci NOT NULL,
  `a1` text COLLATE utf8_danish_ci NOT NULL,
  `a2` text COLLATE utf8_danish_ci NOT NULL,
  `a3` text COLLATE utf8_danish_ci NOT NULL,
  `a4` text COLLATE utf8_danish_ci NOT NULL,
  `a` text COLLATE utf8_danish_ci NOT NULL,
  `qImg` text COLLATE utf8_danish_ci NOT NULL,
  `qGroup` int(11) UNSIGNED NOT NULL,
  `branch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_danish_ci;

--
-- Data dump for tabellen `quest`
--

INSERT INTO `quest` (`questId`, `quest`, `a1`, `a2`, `a3`, `a4`, `a`, `qImg`, `qGroup`, `branch`) VALUES
(1, 'Who?', 'Tom Cruise', 'Tom Hanks', 'Brad Pitt', 'Sean Penn', 'Tom Cruise', 'https://s-media-cache-ak0.pinimg.com/originals/8b/ca/e7/8bcae7270d1b5a89eab4ef43eaf4651c.jpg', 1, 1),
(2, 'Name in "Mission Impossible"?', 'Brad Willis', 'Todd Jenkins', 'Ethan Hunt', 'Mel Nolan', 'Ethan Hunt', '', 1, 1),
(3, 'Name in "Top Gun"?', '"Goose"', '"Maverick"', '"Moose"', '"Gavin"', '"Maverick"', '', 1, 1),
(4, 'Name in "Cocktail"?', 'Snow Ogden', 'Damian Flack', 'Danny McGormon', 'Brian Flanagan', 'Brian Flanagan', '', 1, 1),
(5, 'Name in "Interview with the Vampire"?', 'Lestat', 'Slater', 'Starren', 'Brand', 'Lestat', '', 1, 1),
(6, 'Name in "Vanilla Sky"?', 'Danny James', 'Gordon Lamar', 'David Aames', 'Steven Mack', 'David Aames', '', 1, 1),
(7, 'Name in "Rain Man"?', 'James McShaw', 'Charlie Babbitt', 'Dean Lowitt', 'Seamus Layton', 'Charlie Babbitt', '', 1, 1),
(8, 'Name in "Knight and Day"?', 'Roy Miller', 'Jason Smile', 'Jay Callum', 'Roy Banning', 'Roy Miller', '', 1, 1),
(9, 'Name in "Magnolia"?', 'Gary Duxx', 'Dan Staleman', 'Frank T.J. Mackey', 'Abraham(abe) F. Jones', 'Frank T.J. Mackey', '', 1, 1),
(10, 'Name in "Minority Report"?', 'Jesse Loveless', 'John Anderton', 'Darren Unford', 'Ryan Oxdone', 'John Anderton', '', 1, 1),
(11, 'Who?', 'Bruce Willis', 'Brad Pitt', 'Johnny Depp', 'Ryan Gosling', 'Brad Pitt', 'http://i.vipnews.dk/img/brad_pitt_300_400.jpg', 1, 2),
(12, 'Name in ''Inglourious Basterds''?', 'Sgt. Dan Martins', 'Lt. Jim Maxon', 'Lt. Aldo Raine', 'Sgt. Mad Ashton', 'Lt. Aldo Raine', '', 1, 2),
(13, 'Name in ''Mr. & Mrs. Smith''?', 'John Smith', 'Jim Smith', 'Tim Smith', 'Bob Smith', 'John Smith', '', 1, 2),
(14, 'Name in ''Troy''?', 'Triopas', 'Nestor', 'Hector', 'Achilles', 'Achilles', '', 1, 2),
(15, 'Name in ''Snatch''?', 'Franky Four Fingers', 'Mickey O''Neil', 'Brick Top', 'Vinny', 'Mickey O''Neil', '', 1, 2),
(16, 'Name in ''Seven Years''?', 'Wolfgang Barr', 'Shweer Jahn', 'Heinrich Harrer', 'Heine Host', 'Heinrich Harrer', '', 1, 2),
(17, 'Name in ''Fight Club''?', 'Tyler Durden', 'Shane Smith', 'Paul Baker', 'Toby', 'Tyler Durden', '', 1, 2),
(18, 'Name in ''Interview with the Vampire: The Vampire Chronicles''?', 'Louis', 'Malloy', 'Lestat', 'Chad', 'Louis', '', 1, 2),
(19, 'Name in ''Twelve Monkeys''?', 'Jeffrey Goines', 'James Cole', 'Tiny', 'Detective Franki', 'Jeffrey Goines', '', 1, 2),
(20, 'Name in ''Ocean''s Eleven''?', 'Danny Ocean', 'Reuben Tishkoff', 'Frank Catton', 'Rusty Ryan', 'Rusty Ryan', '', 1, 2),
(21, 'Who?', 'Sandra Bullock', 'Jessica Alba', 'Meg Ryan', 'Julia Roberts', 'Julia Roberts', 'http://img.usmagazine.com/article-leads-vertical-300/1251226976_julia_roberts_290x402.jpg', 1, 3),
(22, 'Name in ''Pretty Woman''?', '''Fae''', 'Vivian ''Viv'' Ward', 'Emily ''Em'' Maid', 'Susan ''Sus'' LeWard', 'Vivian ''Viv'' Ward', '', 1, 3),
(23, 'Name in ''Hook''?', 'Tinkerbell', 'Sniffles', 'Flowerbell', 'Twinkles', 'Tinkerbell', '', 1, 3),
(24, 'Name in ''My Best Friend''s Wedding''?', 'Jean Dark', 'Julianne Potter', 'Laura Twaine', 'Samantha Day', 'Julianne Potter', '', 1, 3),
(25, 'Name in Stepmom''?', 'Tasha Miles', 'Joy Mason', 'Eliza Tabs', 'Isabel Kelly', 'Isabel Kelly', '', 1, 3),
(26, 'Name in ''Notting Hill''?', 'Anna Scott', 'Maya Mann', 'Lindsay Samon', 'Tabitha Lyndon', 'Anna Scott', '', 1, 3),
(27, 'Name in ''Runaway Bride''?', 'Maggie Carpenter', 'Kat Burden', 'Tessie Owens', 'Lisa Watson', 'Maggie Carpenter', '', 1, 3),
(28, 'Name in ''Ocean''s Eleven''', 'Charlotte Gilbert', 'Anne Hanson', 'Rachel York', 'Tess Ocean', 'Tess Ocean', '', 1, 3),
(29, 'Name in ''Mary Reilly''', 'Mary Reilly', 'Jill Gerb', 'Sabrina Furb', 'Claire steiner', 'Mary Reilly', '', 1, 3),
(30, 'Name in ''Farlige teorier''?', 'Alice Sutton', 'Lisa Porter', '''Patty''', 'Julia Herring', 'Alice Sutton', '', 1, 3);

-- --------------------------------------------------------

--
-- Struktur-dump for tabellen `quiz`
--

CREATE TABLE `quiz` (
  `quizId` int(10) UNSIGNED NOT NULL,
  `quizName` text CHARACTER SET utf8mb4 COLLATE utf8mb4_danish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_danish_ci;

--
-- Data dump for tabellen `quiz`
--

INSERT INTO `quiz` (`quizId`, `quizName`) VALUES
(1, 'Actors');

--
-- Begrænsninger for dumpede tabeller
--

--
-- Indeks for tabel `qq`
--
ALTER TABLE `qq`
  ADD PRIMARY KEY (`qqId`),
  ADD KEY `quizFK` (`quizFK`),
  ADD KEY `questFK` (`questFK`);

--
-- Indeks for tabel `quest`
--
ALTER TABLE `quest`
  ADD PRIMARY KEY (`questId`),
  ADD KEY `qGroup` (`qGroup`);

--
-- Indeks for tabel `quiz`
--
ALTER TABLE `quiz`
  ADD PRIMARY KEY (`quizId`);

--
-- Brug ikke AUTO_INCREMENT for slettede tabeller
--

--
-- Tilføj AUTO_INCREMENT i tabel `qq`
--
ALTER TABLE `qq`
  MODIFY `qqId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Tilføj AUTO_INCREMENT i tabel `quest`
--
ALTER TABLE `quest`
  MODIFY `questId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
--
-- Tilføj AUTO_INCREMENT i tabel `quiz`
--
ALTER TABLE `quiz`
  MODIFY `quizId` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Begrænsninger for dumpede tabeller
--

--
-- Begrænsninger for tabel `qq`
--
ALTER TABLE `qq`
  ADD CONSTRAINT `qq_ibfk_1` FOREIGN KEY (`quizFK`) REFERENCES `quiz` (`quizId`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `qq_ibfk_2` FOREIGN KEY (`questFK`) REFERENCES `quest` (`qGroup`) ON DELETE NO ACTION ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
