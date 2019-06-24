# Ablauf Projektpräsentation

Zwei Herangehensweisen: 

1. Erst alles an Spezifikation und quasi das gesamte Pflichtenheft durchgehen und dann komplett Live-Demo
2. Nur Allgemeines vom Pflichtenheft am Anfang und dann während der Live-Demo auch Diagramme, Datenmodelle etc. zeigen

## Idee

- Aufzugpitch?
- Beschreibung + Ziele
- Anwendungsgebiete, warum braucht man das?

## Spezifikation

- Funktionale Anforderungen
  - Use-Cases
  - Userstories
  - Mockups?
- Nicht-funktionale Anforderungen

## Architektur

- Systemarchitektur
- Softwarearchitektur
- Datenmodell

## Technologien

### MongoDB (Übergang von Datenmodell)

### GraphQL

- Schema
- Mutationen

### MQTT

- Topicstruktur
- Payload
- Mosquitto

### Rust

### React

### WebGL

### Raspberry

- Sensoren
- Python-Script
- Webseite, Konfiguration

## Live-Demo

### Der Weg einer Messung

1. Raspberry
   1. Website zeigen
   2. Konfigurieren
   3. (Logs zeigen?)
2. MQTT-Broker (per SSH verbunden)
   1. (Evtl. eingehende Connection zeigen?)
   2. Eingehende Publishes zeigen
3. MQTT-Client (2. SSH Sitzung)
   1. (Starten? -> eingehende Connection, Subscription beim Broker zeigen?)
   2. Eingehende Publishes zeigen (+ abgesetzte Mutation)
4. GraphQL (SSH nötig? gibt es Ausgaben? Sonst nur Weboberfläche)
   1. Device Query
   2. Measurement Query mit dem Device (Timestamps zeigen, damit man später sieht, dass etwas dazugekommen ist)
   3. Evtl Mutations?
   4. **evtl. Rapsberry umkonfigurieren und zeigen, dass ein neues Device auftaucht?** 
   5. Nochmal Measurement-Query aus 2. => Neue Messungen da
5. (Mongo-DB kurz zeigen?)
   1. (SSH-Verbindung und ein paar Abfragen auf der DB)
6. Webfrontend
   1. Auf Notebook
   2. (evtl. mobil? Aber eher nicht)
   3. Alles was halt geht, z.B.:
      1. Einstellen
      2. Filtern
      3. Aktualisierung/Neue Daten (Websocket)
      4. WebGL?
7. Mobiles Frontend (im besten Fall mit zwei Smartphones, sonst Emulator)
   1. iOS
   2. Android
   3. Alles was halt geht, z.B.:
      1. Einstellen
      2. Filtern
      3. Aktualisierung/Neue Daten (Websocket)
      4. WebGL?
8. WebGL (nur wenn es in keinem Frontend eingebunden ist)

## Probleme & Lösungen, Fazit

## Lessons learned

??

## Todo:

- Software-/Systemarchitektur nochmal durchsehen?
- Master zusammenmergen
- CI / CD?!?!
- Lessons learned
- Tests irgendwo in die Präsentation einfügen

