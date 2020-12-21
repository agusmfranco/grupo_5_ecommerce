-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: biblo_db
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `autors`
--

DROP TABLE IF EXISTS `autors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `autors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `bio` mediumtext,
  `autor_photo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `autors`
--

LOCK TABLES `autors` WRITE;
/*!40000 ALTER TABLE `autors` DISABLE KEYS */;
INSERT INTO `autors` VALUES (1,'Ray Bradbury','(Waukegan, Illinois, 22 de agosto de 1920-Los Ángeles, California, 5 de junio de 2012)1​2​ fue un escritor estadounidense de misterio del género fantástico, terror y ciencia ficción. Principalmente conocido por su obra Crónicas marcianas (1950) y la novela distópica Fahrenheit 451 (1953).','bradbury-photo.png'),(2,'Philip K. Dick','(Chicago, 1928-Santa Ana, California, 1982) residió la mayor parte de su vida en California. Asistió a la universidad pero no llegó a finalizar sus estudios. Creador precoz, empezó a escribir profesionalmente en 1952, y llegó a publicar un total de treinta y seis novelas y cinco colecciones de relatos a lo largo de su vida. Murió en 1982 sin llegar a ver la primera adaptación cinematográfica de su obra, Blade Runner.','dick-photo.png'),(3,'Ursula K. Le Guin','Ursula Kroeber Le Guin, nacida en Berkeley (California) en 1929 y fallecida en Portland (Oregón) en 2018, cultivó tanto la narrativa, en forma de novela y cuento, como la poesía y la crítica. Su amplia obra ha merecido múltiples galardones, entre los que destacan el National Book Award, el American Book Award y numerosos premios Hugo, Nebula, Jupiter y Locus.','leguin-photo.png'),(4,'H. G. Wells','Herbert George Wells (Gran Bretaña, 1866-1946). Periodista, ensayista y novelista mundialmente conocido por sus obras de ciencia ficción. Una figura fundamental del pensamiento occidental del siglo XX.','hgwells-photo.png'),(5,'Haruki Murakami','(Kioto, 1949) es uno de los pocos autores japoneses que han dado el salto de escritor de prestigio a autor con grandes ventas en todo el mundo. Ha recibido numerosos premios, entre ellos el Noma, el Tanizaki, el Yomiuri, el Franz Kafka, el Jerusalem Prize y el Hans Christian Andersen, y su nombre suena reiteradamente como candidato al Nobel de Literatura.','murakami-photo.png'),(6,'Osvaldo Soriano','(1943-1997) Comenzó a trabajar en periodismo (Primera Plana, Panorama, La Opinión) a mediados de los años sesenta, y se dio a conocer como escritor en 1973 con su originalísima novela Triste, solitario y final. Si bien publicaría sus dos libros siguientes (No habrá más penas ni olvido y Cuarteles de invierno) durante su exilio en Europa, la aparición de ambos en la Argentina en 1982 lo convertirían in absentia en el autor vivo más leído del país.','soriano-photo.png'),(7,'Luis Sepúlveda','Nació en Ovalle (Chile, 1949 - España, 2020). En 1993 Tusquets Editores empezó la publicación de su obra con su célebre novela Un viejo que leía novelas de amor, traducida a numerosos idiomas, con ventas millonarias y llevada al cine con guión del propio Sepúlveda, bajo la dirección de Rolf de Heer.','sepulveda-photo.png'),(8,'Abelardo Castillo','(1935-2017) nació y murió en Buenos Aires. Practicó todos los géneros literarios con igual brillantez: es sin duda uno de los maestros del cuento latinoamericano, sus novelas son deslumbrantes, sus obras de teatro revitalizaron la escena argentina en los años 60 y lo mismo puede decirse de las tres revistas que dirigió: El Grillo de Papel, El Escarabajo de Oro y El Ornitorrinco. Escribió los siguientes libros: Las otras puertas (cuentos, 1961), El otro Judas (teatro, 1961), Israfel (teatro, 1964), Cuentos crueles (cuentos, 1966), La casa de ceniza (novela, 1968), Sobre las piedras de Jericó (teatro, 1968), Las panteras y el templo (cuentos, 1976), El señor Brecht en el Salón Dorado (teatro, 1982), El que tiene sed (novela, 1985), Las palabras y los días (ensayos, 1989), Crónica de un iniciado (novela, 1991), Las maquinarias de la noche (cuentos, 1992), Ser escritor (ensayo, 1997), El oficio de mentir (entrevista, 1998), El Evangelio según Van Hutten (novela, 1999), El espejo que tiembla (cuentos, 2005), Desconsideraciones (ensayos, 2010) y los monumentales dos tomos de sus Diarios (2014 y 2019). Sus libros han sido traducidos a catorce idiomas.','castillo-photo.png'),(9,'Mario Benedetti','Nació en Paso de los Toros, Departamento de Tacuarembó, Uruguay, el 14 de septiembre de 1920. Se educó en un colegio alemán y se ganó la vida como taquígrafo, cajero, vendedor, contable, funcionario público, traductor y periodista, profesión que ejerció durante cuatro décadas en el semanario Marcha, hasta que fue clausurado por la dictadura. Luego de abandonar su país en 1973 por razones políticas, vivió diez años de exilio en la Argentina, Perú, Cuba y España.','benedetti-photo.png'),(10,'Fabián Casas','Nació en el barrio de Boedo en 1965. Publicó Horla City y otros. Toda la poesía,1990-2010 (Emecé, 2010), La supremacía Tolstoi (ensayos, Emecé, 2013), Ensayos bonsai (Emecé, 2007), y los libros de ficción Ocio (2006) Los Lemmings y otros (2005) y Titanes del coco (2015). Fue guionista del film Jauja (2014), dirigido por Lisandro Alonso y protagonizado por Viggo Mortensen, que se presentó con gran éxito de crítica y público en el Festival de Cannes. En 2007 obtuvo en Alemania el prestigioso premio Anna Seghers y en 2011 fue elegido por la Feria Internacional del Libro de Guadalajara como uno de los autores que garantizan el relevo de los grandes escritores latinoamericanos del siglo XX.','casas-photo.png'),(11,'Nach','(Albacete,1974), licenciado en Sociología por la Universidad de Alicante, es uno de los máximos exponentes del género del hip hop en letra castellana y uno de los mejores representantes de la vertiente más poética del género. Con nueve discos publicados, entre los que destacan Mejor que el silencio, Poesía difusa, Un día en Suburbia o A través de mí, ha llegado a ser número uno de la lista general de ventas de música en España y cuenta con dos discos de oro en su haber. Es requerido por los festivales de música más importantes de España y Latinoamérica y ha sido nominado como mejor artista español en los premios MTV EMA (European Music Awards), al Goya en la categoría de mejor canción original por Verbo y también en los premios Grammy Latinos al mejor videoclip. Además, es un apasionado del baloncesto. Su último disco es Almanauta.','nach-photo.png'),(12,'Arthur Miller','Arthur Miller (Nueva York, 1915-2005) escribió algunas de las obras maestras del teatro del siglo xx. Entre sus galardones se cuentan el Premio Pulitzer 1949, el de la crítica teatral neoyorquina y el Premio Príncipe de Asturias de las Letras 2002. Hombre público por su compromiso social, nadie como Miller ha sabido reflejar las frustraciones y los desengaños de la sociedad estadounidense.','miller-photo.png'),(13,'V.E. Schwab','V.E. Schwab es la autora de The Near Witch, novela escalofriante de horror; de la saga El Archivo, título que recibe el primer volumen, y de la continuación de este, El Vacío, así como también de muchas otras novelas por publicarse en español. Victoria sufre de un brutal caso de espíritu viajero y, cuando no anda al acecho de algún callejón parisino o recorriendo laderas inglesas, es posible encontrarla agazapada en la esquina de alguna cafetería de Nashville, tomando el té y soñando con criaturas monstruosas.','schwab-photo.png'),(14,'Liz Kessler','Liz Kessler estudió Literatura en Loughborough University, trabajó como profesora y periodista y se recibió de magíster en Escritura Creativa en Manchester Metropolitan University. Liz vive ahora en Cornwall.','kessler-photo.png'),(15,'Tomas Lifschitz','Nació el 20 de abril de 1995 y es licenciado en Psicología (UBA). Escribió su tesis de licenciatura en relación con la psicología del deporte y la actividad física y la tituló: “Influencia de las redes sociales en los deportistas de alto rendimiento”. Luego se especializó en habilidades psicológicas en el alto rendimiento deportivo y en el deporte amateur. En la actualidad trabaja con equipos de diferentes deportes tradicionales y de eSports y también atiende pacientes en su consultorio particular. Este es su primer libro y surge de todo el material relacionado con los deportes electrónicos que pudo recopilar a lo largo de su experiencia.','lifschitz-photo.png'),(17,'Fabián Sevilla','Nació en 1970, en Mendoza, Argentina, donde vive actualmente. Es escritor de libros de cuentos, novelas, obras de teatro y guiones de historietas.','sevilla-photo.png');
/*!40000 ALTER TABLE `autors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `isbn` bigint DEFAULT NULL,
  `sinopsis` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `price` int DEFAULT NULL,
  `amount` int DEFAULT NULL,
  `autor_id` int DEFAULT NULL,
  `genre_id` int DEFAULT NULL,
  `house_id` int DEFAULT NULL,
  `state_id` int DEFAULT NULL,
  `book_cover` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `autor_id_idx` (`autor_id`),
  KEY `genre_id_idx` (`genre_id`),
  KEY `house_id` (`house_id`),
  KEY `state_id` (`state_id`),
  CONSTRAINT `autor_id` FOREIGN KEY (`autor_id`) REFERENCES `autors` (`id`),
  CONSTRAINT `genre_id` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`),
  CONSTRAINT `house_id` FOREIGN KEY (`house_id`) REFERENCES `houses` (`id`),
  CONSTRAINT `state_id` FOREIGN KEY (`state_id`) REFERENCES `states` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (3,'¿Sueñan los androides con ovejas eléctricas?',9789876284455,'En el año 2021 la guerra mundial ha exterminado a millones de personas. Los supervivientes codician cualquier criatura viva, y aquellos que no pueden permitirse pagar por ellas se ven obligados a adquirir réplicas increíblemente realistas. Las empresas fabrican incluso seres humanos. Rick Deckard es un cazarrecompensas cuyo trabajo es encontrar androides rebeldes y retirarlos, pero la tarea no será tan sencilla cuando tenga que enfrentarse a los nuevos modelos Nexus-6, prácticamente indistinguibles de los seres humanos.',1100,0,2,2,2,2,'sueanlosandroidesconovejaselctricas.jpg'),(4,'Crónicas Marcianas',9788445076538,'Esta colección de relatos recoge la crónica de la colonización de Marte por parte de una humanidad que huye de un mundo al borde de la destrucción. Los colonos llevan consigo sus deseos más íntimos y el sueño de reproducir en el Planeta Rojo una civilización de perritos calientes, cómodos sofás y limonada en el porche al atardecer. Pero su equipaje incluye también los miedos ancestrales, que se traducen en odio a lo diferente, y las enfermedades que diezmarán a los marcianos. Conforme a su concepción de lo que debe ser la ciencia ficción, Bradbury se traslada al futuro para iluminar el presente y explorar la naturaleza humana. Escritas en la década de los cuarenta, estas deslumbrantes e intensas historias constituyen un canto contra el racismo, la guerra y la censura, destilando nostalgia e idealismo. Ray Bradbury se consolidó como escritor con esta obra, ahora un clásico de las letras norteamericanas, con su estilo rico, inmediato y conmovedor, que le ha valido el apelativo de poeta de la ciencia ficción',990,50,1,2,2,1,'crnicasmarcianas.jpg'),(5,'Cuentos de Terramar',9788445001806,'Los cinco cuentos reunidos en este libro, que fueron ganadores de los Premios Locus y Endeavour en 2002, exploran y extienden el mundo creado en las Historias de Terramar.El volumen también contiene un ensayo sobre los habitantes, las lenguas, la historia y la magia de Terramar. Esta aclamada continuación del reino mágico de Terramar confirma a Ursula K. Le Guin como una de las más brillantes escritoras de nuestro tiempo.',1100,0,3,2,2,3,'cuentosdeterramar.jpg'),(7,'La guerra de los mundos',9788408210061,'La guerra de los mundos es una de las obras de ciencia ficción más influyentes de la historia. Publicada en 1898, ha sido adaptada para diferentes medios, como la televisión, el cine, los videojuegos… e incluso la radio. Especialmente famosa es la retransmisión radiofónica de Orson Wells en 1938 por desatar el pánico real entre la audiencia.',1220,20,4,2,3,1,'laguerradelosmundos.jpg'),(8,'Tokio Blues',9788483103074,'Mientras aterriza en un aeropuerto europeo, Toru Watanabe escucha una vieja canción de los Beatles que le hace retroceder a su juventud, al turbulento Tokio de los años sesenta. Recuerda entonces con melancolía a la misteriosa Naoko, la novia de su mejor amigo de la adolescencia. El suicidio de éste les distanció durante un año, hasta que se reencontraron e iniciaron una relación íntima. Sin embargo, la aparición de otra mujer en su vida lleva a Toru a experimentar el deslumbramiento y el desengaño allí donde todo debería cobrar sentido: el sexo, el amor y la muerte.',990,10,5,1,4,1,'tokioblues.jpg'),(9,'Triste, solitario y final',9788483835043,'Stan Laurel, el actor que protagonizó junto a Oliver Hardy la serie “El Gordo y el Flaco”, cree, a sus setenta y cinco años, que el fin de su carrera ha llegado: no hay quien le ofrezca trabajo. ¿Qué hacer? La única salida es ir a ver a Philip Marlowe, el detective creado por el escritor Raymond Chandler.',1500,5,6,1,1,1,'tristesolitarioyfinal.jpg'),(10,'Historia de una ballena blanca',9788490667019,'De una concha que un niño recoge en una playa chilena, al sur, muy al sur del mundo, una voz se eleva, cargada de recuerdos y sabiduría. Es la voz de la ballena blanca, el animal mítico que durante décadas ha custodiado las aguas que separan la costa de una isla sagrada para las personas nativas de ese lugar, la Gente del Mar. El cachalote, la criatura más grande de todo el océano, ha conocido la inmensa soledad y la enorme profundidad del abismo, y ha dedicado su vida a cumplir fielmente la tarea que le confió otro cachalote anciano: una tarea misteriosa y crucial, el resultado de un pacto que ha atado a las ballenas y la Gente del Mar. Para honrarlo, la gran ballena blanca tenía que proteger esa parte del mar de otros hombres, los extraños que con sus barcos vienen a llevárselo todo, sin respeto alguno por el entorno natural. Fueron ellos, los balleneros, quienes contaron la historia de la temida ballena blanca hasta ahora, pero ha llegado el momento de que ella hable por sí misma y deje que su antigua voz nos llegue como el lenguaje del mar.',750,2,7,1,4,1,'historiadeunaballenablanca.jpg'),(11,'Las otras puertas',9789878319063,'Para quienes vivimos la proscripción del peronismo y la del deseo –hablo de mi generación– no nos quedaba otra que desear con culpa a la madre de Ernesto. Todo machista desea a esa mujer prohibida: la puta y la madre. La desea de un modo inconfesable, término tan Castillo. Deseo y vergüenza tiemblan en ese cuento, como el cuerpo entrevisto a través de un deshabillé. Cuando leí esa ejemplar colección de cuentos que es Las otras puertas, aprendí que escribir era nombrar lo que no se puede, lo que no se debe, decir. No digás porquerías, querés, dice uno de los personajes. Castillo las dice. Y enseña cómo decirlas.',800,1,8,1,1,1,'lasotraspuertas.jpg'),(12,'La vida, ese paréntesis',9789681904463,'Este libro de Mario Benedetti se abre como un luminoso paréntesis dentro de su obra: pequeñas prosas y poemas en los que el autor aparece más cercano que nunca, pronunciando en voz alta preguntas para las que acaso no hay respuesta. Los textos hablan de memorias y olvidos, de crímenes visibles e invisibles, de máscaras y adioses, de la vida y de la muerte, de hombres y mujeres que se sueñan inmortales.',800,0,9,3,1,3,'lavidaeseparntesis.jpg'),(14,'Hambriento',9788408160441,'Hambriento es una travesía poética de ida y vuelta, repleta de reflexiones, aprendizajes y sensibilidad. Un río a contracorriente que fluye a borbotones hacia las cimas más altas. Nach escribe urgido por una voracidad de emociones y experiencias que parecen saciar un íntimo vacío. Así emprende, a dentelladas, un viaje por sí mismo con una sensación de hambre que sirve de combustible para la vida, porque el hambre nos mueve, nos vuelve osados y nos alimenta.',690,2,11,3,1,1,'hambriento.jpg'),(15,'Muerte de un viajante',9788490661581,'Se estrenó en 1949 en Nueva York y obtuvo de inmediato tal éxito que catapultó a la fama a Arthur Miller. Esta pieza teatral se ha convertido en un símbolo de la tragedia del hombre corriente en una sociedad que lo aniquila. El protagonista, Willy Loman, casado y padre de dos hijos, ha trabajado toda su vida como viajante de comercio. Tiene sesenta años y está extenuado: le niegan un aumento de sueldo y acaba siendo despedido «por su propio bien». Entonces todo a su alrededor se derrumba: ¿qué error ha cometido? «El que siga habiendo tantos Willy en el mundo –afirmó Miller– se debe a que el hombre se supedita a las imperiosas necesidades de la sociedad o de la tecnología se aniquila como individuo',1800,1,12,3,4,1,'muertedeunviajante.jpg'),(17,'Read me like a book',9781780622118,'Ashleigh Walker está enamorada. La invade ese sentimiento conocido, esa emoción intensa que da palpitaciones, que consume y que solo genera el amor. Así, ya no le preocupan las malas notas en el colegio. Así, logra distraerse de los problemas matrimoniales de sus padres.Una sola cosa la inquieta… ¿Acaso no debería sentirse así por su novio, Dylan, y no por la señorita Murray, su profesora de Literatura?',990,4,14,4,8,1,'readmelikeabook.jpg'),(18,'Game on',9789504969525,'El psicólogo Tomás Lifschitz reúne en este libro todo lo que un jugador de videojuegos, ya sea amateur o profesional, y los profesionales (especialmente los psicólogos) que se dedican a los eSports necesitan saber para trabajar sobre diversos factores psicológicos individuales de los deportistas, como la concentración, la comunicación y el control de la ansiedad, así como también aptitudes grupales en los juegos por equipos, con el objetivo de alcanzar el máximo rendimiento a la hora de competir.',990,2,15,1,1,1,'gameon.jpg'),(19,'Los zombies también comen corazones',9789877671445,'Natalio recibe un beso, como esos de las películas que tanto se confunden con su vida real. Ramiro, el bravucón del curso y quien lo besó, pretendía ganar una apuesta a sus amigos pero la escena se viraliza en las redes. Ahora, ambos chicos deberán enfrentar las consecuencias: Ramiro, el descrédito y la vergüenza; Natalio, la confusión de creer que alguien se ha enamordado de él. Eso los llevará a conocer al otro, pero por sobre todo a descubrirse a sí mismos...',990,2,17,1,1,2,'loszombiestambincomencorazones.jpg');
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `books_purchase`
--

DROP TABLE IF EXISTS `books_purchase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `books_purchase` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_id` int DEFAULT NULL,
  `purchase_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `purchase_id_idx` (`purchase_id`),
  KEY `book_id_idx` (`book_id`),
  CONSTRAINT `book_id` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`),
  CONSTRAINT `purchase_id` FOREIGN KEY (`purchase_id`) REFERENCES `purchase` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books_purchase`
--

LOCK TABLES `books_purchase` WRITE;
/*!40000 ALTER TABLE `books_purchase` DISABLE KEYS */;
/*!40000 ALTER TABLE `books_purchase` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `checkouts`
--

DROP TABLE IF EXISTS `checkouts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `checkouts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `book_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `state` int DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `book_id` (`book_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `checkouts_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`),
  CONSTRAINT `checkouts_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `checkouts`
--

LOCK TABLES `checkouts` WRITE;
/*!40000 ALTER TABLE `checkouts` DISABLE KEYS */;
INSERT INTO `checkouts` VALUES (45,3,21,1,1),(46,4,21,1,1);
/*!40000 ALTER TABLE `checkouts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genres` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (1,'Novela'),(2,'Ciencia Ficción'),(3,'Poesía'),(4,'Juvenil');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `houses`
--

DROP TABLE IF EXISTS `houses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `houses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `houses`
--

LOCK TABLES `houses` WRITE;
/*!40000 ALTER TABLE `houses` DISABLE KEYS */;
INSERT INTO `houses` VALUES (1,'Planeta'),(2,'Minotauro'),(3,'Austral'),(4,'Tusquets'),(5,'Seix Barral'),(6,'Booket'),(7,'Emecé Editores'),(8,'Ediciones Destino');
/*!40000 ALTER TABLE `houses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchase`
--

DROP TABLE IF EXISTS `purchase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purchase` (
  `id` int NOT NULL AUTO_INCREMENT,
  `total` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id_idx` (`user_id`),
  KEY `product_id_idx` (`product_id`),
  CONSTRAINT `product_id` FOREIGN KEY (`product_id`) REFERENCES `books_purchase` (`id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase`
--

LOCK TABLES `purchase` WRITE;
/*!40000 ALTER TABLE `purchase` DISABLE KEYS */;
/*!40000 ALTER TABLE `purchase` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `states`
--

DROP TABLE IF EXISTS `states`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `states` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `states`
--

LOCK TABLES `states` WRITE;
/*!40000 ALTER TABLE `states` DISABLE KEYS */;
INSERT INTO `states` VALUES (1,'Disponible'),(2,'Agotado'),(3,'Fuera de catálogo');
/*!40000 ALTER TABLE `states` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  `first_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `dni` int NOT NULL,
  `address` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` mediumtext NOT NULL,
  `birth` date NOT NULL,
  `user_type_id` int DEFAULT NULL,
  `last_name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `cp` varchar(45) DEFAULT NULL,
  `user_photo` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_type_id` (`user_type_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`user_type_id`) REFERENCES `userstypes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (7,'gbithany0@alibaba.com','Gibby',43021576,'306 Old Gate Parkway','SwppbU66ubnF','1991-02-06',2,'Bithany','03184',NULL),(8,'gsanpere1@comcast.net','Gayleen',36450343,'41001 Bultman Trail','GIKa8Qad9c','2020-06-17',2,'Sanpere','8047',NULL),(9,'igoodread2@360.cn','Inesita',19559016,'63 Norway Maple Point','5E5Y1NqhpNhW','1972-06-13',2,'Goodread','68-113',NULL),(10,'j.pasetti@gmail.com','Julieta',32843807,'33 1397','123456','1987-01-10',2,'Pasetti','1900',NULL),(13,'elteclafarias@gmail.com','Ernesto',30895462,'Calle 1 y 54','123456','1980-05-29',2,'Farias','1900',NULL),(14,'agustinmfranco@hotmail.com','Agustin',36683229,'23 575','$2b$10$YRdnP8zj.rYcLzsDSfHj2OmBIJFm5kH9/TttR9Ej5j7iqGesuNdlu','1991-11-30',1,'Franco','1900',NULL),(20,'pedropicapiedra@grock.com','Pedro',10555888,'Roca 1687','123456','1940-12-12',2,'Picapiedra','19818RR','pedropicapiedra.png'),(21,'hernanponcetta@gmail.com','Hernan',31899546,'Calle 13 n1397','$2b$10$GqVH1aIePpquLjkhLzLNz.H9UxqQaQok0iKpZNarOdu7kqYiNKAtK','1985-09-26',1,'Poncetta','1900','hernanponcetta.jpg');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userstypes`
--

DROP TABLE IF EXISTS `userstypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userstypes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userstypes`
--

LOCK TABLES `userstypes` WRITE;
/*!40000 ALTER TABLE `userstypes` DISABLE KEYS */;
INSERT INTO `userstypes` VALUES (1,'administrador'),(2,'cliente');
/*!40000 ALTER TABLE `userstypes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'biblo_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-18 12:43:18