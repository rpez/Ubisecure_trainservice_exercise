# Ubisecure_trainservice_exercise
Ubisecure coding exercise

Käytöstä:

HUOM! Jotta tietokantaan saa yhteyden, backend-kansion juuressa tulee olla oikeanlainen .env tiedosto.

Frontend käynnistyy oletusarvoisesti osoitteeseen localhost:3000 ja backend localhost:3001.
Helpoin tapa käynnistää ne on 'npm start'. Jos jokin ei toimi voin olla unohtanut portiksi 3002,
koska se on development portti.

Backendin alta löytyy request-kansio jonka sisällä ovat tarvittavat REST-kutsut.
Uuden käyttäjän ja junan luominen/päivittäminen tapahtuu niiden mukaisella tavalla.

Voit myös käyttää valmiita käyttäjiä:

username: 'ubisecure', password: 'ubisecure'
username: 'ubisecure2', password: 'ubisecure2'

Sovellus käyttää mongoDB-tietokantaa, jonka sisältöä voi katsoa:
http://localhost:3001/api/users (kryptattu salasana ei näkyvissä)
http://localhost:3001/api/trains

Testit voi ajaa helpoiten komennolla 'CI=true npm test'.