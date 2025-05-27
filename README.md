# PROJEKT - Programmering i TypeScript (DT208G)

## Översikt
Detta är ett Angular-baserat projekt som utgör en webbplats för det fiktiva lärosätet "Ralugna Universitet". Webbplatsen presenterar universitetet och låter användare utforska och spara tillgängliga kurser.
<br><br>
Länk till publicerad webbsida: [Ralugna Universitet](https://dt208gprojectjg.netlify.app/home)

## Funktionalitet
* **Startsida:** Hero-bild med en kort introduktionstext och knapp till kurssidan.
* **Kurssida** där användare kan:
    * Bläddra bland tillgängliga kurser. 
    * Filtrera kurser efter kurskod och kursnamn via en sökbar. 
    * Sortera på ämne via en dropdown. 
    * Sortera på kurskod, kursnamn, poäng och ämne via en dropdown. 
    * Lägga till kurser i ramschemat.
    * Ta bort en redan tillagd kurs från ramschemat. 
    * Se antal kurser för den aktuella sökningen.
* **Ramschema** där användare kan:
    * Se sparade kurser i en tabell (lagrat i localStorage). 
    * Se totalt antal högskolepoäng för sparade kurser. 
    * Ta bort kurser från ramschemat.
* **Responsiv design** som fungerar på både mobil och desktop.  
* **Routing** mellan sidor med hjälp av Angular Router. 

## 

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.8.



## Implementerad valfri funktionalitet
* Startsida med bilder och information. 
* Kurssida: Sidpaginering med navigering. 
* Kurssida: Knapptext baserad på om en kurs är tillagd eller inte ("Lägg till kurs"/"Redan tillagd").
* Kurssida: Möjlighet att ta bort sparade kurser redan i kurslistan. 