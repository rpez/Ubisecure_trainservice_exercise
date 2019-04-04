# Ubisecure_trainservice_exercise
Ubisecure coding exercise

Käytöstä:

HUOM! Jotta tietokantaan saa yhteyden, backend-kansion juuressa tulee olla oikeanlainen .env tiedosto.
Testauksenne takia olen poistanut sen .gitignoresta, vaikka näin ei yleensä tulisi tehdä.

Frontend käynnistyy oletusarvoisesti osoitteeseen localhost:3000 ja backend localhost:3001.
'npm install' tulee ajaa sekä trainservice_backend- että trainservice_frontend-kansiossa.
Helpoin tapa käynnistää ne on 'npm start' (sekin molemmissa kansioissa).

Backendin alta löytyy request-kansio jonka sisällä ovat tarvittavat REST-kutsut.
Uuden käyttäjän ja junan luominen/päivittäminen tapahtuu niiden mukaisella tavalla.

Voit myös käyttää valmiita käyttäjiä:

username: 'ubisecure', password: 'ubisecure'
username: 'ubisecure2', password: 'ubisecure2'

Sovellus käyttää mongoDB-tietokantaa, jonka sisältöä voi katsoa:
http://localhost:3001/api/users (kryptattu salasana ei näkyvissä)
http://localhost:3001/api/trains

Upotettu Google maps on development moodissa, mutta pitäisi silti toimia.
Junien paikat päivittyvät 5 sekunnin välein.

Testit voi ajaa helpoiten komennolla 'CI=true npm test'. En tosin kerennyt saada niitä toimimaan kunnolla.