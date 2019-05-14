# Anforderungs- und Entwurfsspezifikation ("Pflichtenheft")

* Titel, Autoren, Inhaltsverzeichnis
* Link zum Source Code Repository


# 1 Einfьhrung

## 1.1 Beschreibung

**Wetterstation**

Im Zuge dieses Projekts sollen an mehreren Standorten Wetterdaten wie Temperatur, Luftfeuchtigkeit o.ä. gemessen werden. Die erfassten Daten werden daraufhin gespeichert, ausgewertet, plattformunabhängig visualisiert und online dargestellt. Die Standorte werden hierarchisch in Gebäude, Stockwerke und Räume unterteilt oder gruppiert. Es sollen des Weiteren Grenzwerte konfigurierbar sein und bei Überschreitung dieser der Benutzer benachrichtigt werden.

## 1.2 Ziele

- keine Steuerung, nur Visualisierung und Information
- Integration unterschiedlichster Sensorik ermöglichen
- einfache und übersichtliche grafische Darstellung

# 2 Anforderungen

## 2.1 Stakeholder

| Funktion | Name | Kontakt | Verfьgbarkeit | Wissen  | Interesse & Ziele  | Relevanz  |
|---|---|---|---|---|---|---|
|  |   |   |   |   |   |   |


### Beispiel

| Funktion | Name | Kontakt | Verfьgbarkeit | Wissen  | Interesse & Ziele  | Relevanz  |
|---|---|---|---|---|---|---|
| Leiter der Bibliothek  |  Herr Bauer | Tel. 409000  | Von 9-19 Uhr telefonisch erreichbar, Mitarbeit zu 30% mцglich, Nьrnberg  | Kennt das Altsystem aus der Anwendersicht, soll mit dem System arbeiten  | Vereinfachung der Ausleihprozesse  | Fachlicher Entscheider  |
| Administrator  | Herr Heiner  | Heiner@gmx.net  | Per E-Mail, immer erreichbar, Verfьgbarkeit 50%, Nьrnberg  | Vertraut mit vergleichbarer Verwaltungssoftware   |  Stabiles System, geringer Wartungsaufwand | Informationslieferant bzgl. Wartungsanforderungen  |
| Product-Owner  | Paul Ottmer  |  po@ottmer.de | Per E-Mail und tel. tagsьber, Verfьgbarkeit 100%, Nьrnberg  | Koordinator fьr die Inputs der Stakeholder  | ROI des Systems sicherstellen  | Entscheider - als Koordinator der Stakeholderanforderungen  |

## 2.2 Funktionale Anforderungen
    - Use-Case Diagramme
    - Strukturierung der Diagramme in funktionale Gruppen

## 2.3 Nicht-funktionale Anforderungen 

### 2.3.1 Rahmenbedingungen
    - Normen, Standards, Protokolle, Hardware, externe Vorgaben

### 2.3.2 Betriebsbedingungen
    - Vorgaben des Kunden (z.B. Web Browser / Betriebssystem Versionen, Programmiersprache)

### 2.3.3 Qualitдtsmerkmale
    - Externe Qualitдtsanforderungen (z.B. Performance, Sicherheit, Zuverlдssigkeit, Benutzerfreundlichkeit)

Qualitдtsmerkmal | sehr gut | gut | normal | nicht relevant
---|---|---|---|---
**Zuverlдssigkeit** | | | | |
Fehlertoleranz |X|-|-|-|
Wiederherstellbarkeit |X|-|-|-|
Ordnungsmдяigkeit |X|-|-|-|
Richtigkeit |X|-|-|-|
Konformitдt |-|X|-|-|
**Benutzerfreundlichkeit** | | | | |
Installierbarkeit |-|-|X|-|
Verstдndlichkeit |X|-|-|-|
Erlernbarkeit |-|X|-|-|
Bedienbarkeit |-|X|-|-|
**Performance** | | | | |
Zeitverhalten |-|-|X|-|
Effizienz|-|-|-|X|
**Sicherheit** | | | | |
Analysierbarkeit |X|-|-|-|
Modifizierbarkeit |-|-|-|X|
Stabilitдt |X|-|-|-|
Prьfbarkeit |X|-|-|-|

## 2.4 Graphische Benutzerschnittstelle
    - GUI-Mockups passend zu User Stories
    - Screens mit №berschrift kennzeichnen, die im Inhaltsverzeichnis zu sehen ist
    - Unter den Screens darstellen (bzw. verlinken), welche User Stories mit dem Screen abgehandelt werden
    - Modellierung der Navigation zwischen den Screens der GUI-Mockups als Zustandsdiagramm

## 2.5 Anforderungen im Detail
    - User Stories mit Akzeptanzkritierien 
    - Optional: Name (oder ID) und Prioritдt ("Must", "Should", "Could", "Won't")
    - Strukturierung der User Stories in funktionale Gruppen

### Schablone fьr User Stories

| **Als** | **mцchte ich** | **so dass** | **Akzeptanz** |
| :------ | :----- | :------ | :-------- |
| Wer | Was | Warum | Wann akzeptiert |

### Beispiel 1

| **Als** | **mцchte ich** | **so dass** | **Akzeptanz** |
| :------ | :----- | :------ | :-------- |
| Benutzer | bei Fehleingabe die Lцsung angezeigt bekommen | ich lernen kann | Lцsung wird angezeigt |

### Beispiel 2

| **Name**| **In meiner Rolle als**...|   ...**mцchte ich**...   | ..., **so dass**... | **Erfьllt, wenn**... | **Prioritдt**   |
|:-----|:----------:|:-------------------|:-------------|:---------|:----------------|
| Lernen  |Benutzer| bei Fehleingabe die Lцsung angezeigt bekommen|ich lernen kann| Lцsung wird angezeigt | Muss |


# 3 Technische Beschreibung

## 3.1 Systemьbersicht
    - Systemarchitekturdiagramm ("Box-And-Arrow" Diagramm)
    - Kommunikationsprotokolle, Datenformate

## 3.2 Softwarearchitektur
    - Darstellung von Softwarebausteinen (Module, Schichten, Komponenten)

## 3.3 Schnittstellen
    - Schnittstellenbeschreibung
    - Auflistung der nach auяen sichtbaren Schnittstelle der Softwarebausteine

## 3.4 Datenmodell 
    - Konzeptionelles Analyseklassendiagramm (logische Darstellung der Konzepte der Anwendungsdomдne)
    - Modellierung des physikalischen Datenmodells 
      - RDBMS: ER-Diagramm bzw. Dokumentenorientiert: JSON-Schema

## 3.5 Ablдufe
    - Aktivitдtsdiagramme fьr relevante Use Cases
    - Aktivitдtsdiagramm fьr den Ablauf sдmtlicher Use Cases

## 3.6 Entwurf
    - Detaillierte UML-Diagramme fьr relevante Softwarebausteine

# 4 Projektorganisation

## 4.1 Annahmen
    - Nicht durch den Kunden definierte spezifische Annahmen, Anforderungen und Abhдngigkeiten
    - Verwendete Technologien (Programmiersprache, Frameworks, etc.)
    - Aufteilung in Git-Repositories gemдя Software- und Systemarchitektur und Softwarebbausteinen 
    - Einschrдnkungen, Betriebsbedingungen und Faktoren, die die Entwicklung beeinflussen (Betriebssysteme, Entwicklungsumgebung)
    - Interne Qualitдtsanforderungen (z.B. Softwarequalitдtsmerkmale wie z.B. Erweiterbarkeit)

## 4.2 Verantwortlichkeiten
    - Zuordnung von Personen zu Softwarebausteinen aus Kapitel 3.1 und 3.2
    - Rollendefinition und Zuordnung

| Softwarebaustein | Person(en) |
|----------|-----------|
| Komponente A | Thomas Mustermann |

### Rollen

#### Softwarearchitekt
Entwirft den Aufbau von Softwaresystemen und trifft Entscheidungen ьber das Zusammenspiel der Softwarebausteine.

#### Frontend-Entwickler
Entwickelt graphische oder andere Benutzerschnittstellen, insbesondere das Layout einer Anwendung.

#### Backend-Entwickler
Implementiert die funktionale Logik der Anwendung. Hierbei werden zudem diverse Datenquellen und externe Dienste integriert und fьr die Anwendung bereitgestellt.

### Rollenzuordnung

| Name     | Rolle     |
|----------|-----------|
| Thomas Mustermann | Softwarearchitekt |


## 4.3 Grober Projektplan
    - Meilensteine

### Meilensteine
* KW 43 (21.10)
  * Abgabe Pflichtenheft
* KW 44 (28.10) / Projekt aufsetzen
  * Repository Struktur
* KW 45 (4.11) / Implementierung
  * Implementierung #3 (Final)
* KW 48 (18.12) / Abnahmetests
  * manuelle Abnahmetestss
  * Prдsentation / Software-Demo

# 5 Anhдnge

## 5.1 Glossar 

### MQQT
Message Queuing Telemetry Transport (kurz MQTT) ist ein einfach aufgebautes Publish-Subscribe-Protokoll zum Nachrichtenaustausch im Netzwerk. Es benötigt sehr wenig Bandbreite und Funktion auf den Clients, bietet aber trotzdem eine hohe Zuverlässigkeit bei der Nachrichtenübermittlung. Nachrichten werden in sog. Topics, die man sich wie eine Ordnerstruktur vorstellen kann, einsortiert.

### I2C
I²C, für englisch Inter-Integrated Circuit, im Deutschen gesprochen als I-Quadrat-C oder englisch I-Squared-C , ist ein 1982 von Philips Semiconductors (heute NXP Semiconductors) entwickelter serieller Datenbus.Er wird hauptsächlich geräteintern für die Kommunikation zwischen verschiedenen Schaltungsteilen benutzt, z. B. zwischen einem Controller und Peripherie-ICs.

### RS-485
EIA-485, auch als RS-485 bezeichnet, ist ein Industriestandard für eine physische Schnittstelle für die asynchrone serielle Datenübertragung.

### SPI
Das Serial Peripheral Interface (kurz SPI) ist ein im Jahr 1987 von Susan C. Hill Et al., damals bei dem Halbleiterhersteller Motorola (heute NXP Semiconductors), entwickeltes Bus-System und stellt einen „lockeren“ Standard für einen synchronen seriellen Datenbus (Synchronous Serial Port) dar, mit dem digitale Schaltungen nach dem Master-Slave-Prinzip miteinander verbunden werden können.

### GraphQL
GraphQL ist eine, von Facebook entwickelte, opensource Abfragesprache, dessen Fokus auf einfache und flexible Benutzung liegt.

### WebGL
WebGL ist eine 3D Grafik API basierend auf OpenGL (genauer, OpenGL ES, für Embedded Systems). Die API ist für Verwendung in Javascript/ECMAScript in HTML5 gedacht und somit für alle Platformen die HTML5 unterstützen verfügbar.Mit WebGL gerenderte Elemente werden im HTML Canvas Element dargestellt, mit Hilfe eines eigens definierten RenderingContext, WebGLRenderingContext, welcher den standardmäßigen CanvasRenderingContext2D ersetzt.

## 5.2 Referenzen
    - Handbьcher, Gesetze

## 5.3 Index



