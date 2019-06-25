# Ablauf Projektpräsentation

## Idee

- Aufzugpitch -> Andre
- Überblick -> Jonas
- Einsatzgebiete -> Andre

## Live-Demo

1. Raspberry -> Daniel
   1. Website zeigen
   2. Konfigurieren
2. Mobiles Frontend -> Simon
   1. iOS
   2. Android
3. Webfrontend -> Dejan
4. WebGL -> Daniel

## Ausblick -> Simon

## Architektur

- Systemarchitektur -> Daniel

## Backend

### Der Weg einer Messung

1. (Raspberry)
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
5. (Mongo-DB kurz zeigen?)
   1. (SSH-Verbindung und ein paar Abfragen auf der DB)

## Lessons learned -> Dejan

