# PROJEKT - Programmering i TypeScript (DT208G)

## Översikt
Detta är ett Angular-baserat projekt som utgör en webbplats för det fiktiva lärosätet "Ralugna Universitet". Webbplatsen presenterar universitetet och låter användare utforska och spara tillgängliga kurser.
<br><br>
Länk till publicerad webbplats: [Ralugna Universitet](https://ralugnauniversitet.netlify.app)

## Funktionalitet
* **Startsida** med en hero-bild, en kort introduktionstext och en knapp till kurssidan.
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

## Tekniker som använts
* **Angular version 19** med separata components och services för att skapa webbplatsens innehåll och funktionalitet. 
* **Angular Router** för smidig navigering utan sidomladdning.
* **TypeScript:** Strikt typning för att skapa webbplatsen funktionalitet.
* **HTML:** För grundläggande uppbyggnad och struktur.
* **CSS:** För styling.
* **localStorage:** För att spara kurser till ramschemat.

## Struktur
Projektet är organiserat enligt följande struktur i src/app:
* pages/ - Innehåller följande sidkomponenter:
    * home/ - Startsida.
    * courses/ - Kursöversikt.
    * schedule/ - Ramschema.
* navbar/ - Navigationskomponent (tillgänglig på alla sidor). 
* footer/ - Sidfotskomponent (tillgänglig på alla sidor). 
* services/ - Innehåller: 
    * CourseService som hämtar data från en lokal JSON-fil. 
    * ScheduleService som hämtar sparade kurser från localStorage. 
* models/ - Innehåller Interface för kurser. 

Utöver detta finns en global stilmall i src/styles.css och bildresurser i public/images/. 

## Installation
Följ stegen nedan för att installera och köra projektet lokalt: 
1. Klona projektet: git clone https://github.com/gustafsson96/projectdt208g.git
2. Navigera till projektmappen: cd ralugna-universitet
3. Installera paket: npm install
4. Starta utvecklingsservern: ng serve

## Publicering 
Webbplatsen har publicerats via [Netlify](https://www.netlify.com) med hjälp av följande steg: 
1. Logga in/skapa användare
2. Klicka på "Add new project" och välj "Import an existing project". 
3. Koppla till GitHub och välj projektets GitHub-repository.
4. Säkerställ att följande fält är ifyllda: 
    * Projektnamn (valfritt)
    * Branch to deploy: main
    * Build command: ng build
    * Publish directory: dist/projectdt208g/browser
5. Klicka "Deploy". 

## Implementerad valfri funktionalitet
Utöver grundkraven för projektet har jag implementerat följande funktionalitet: 

* Startsida med bilder och information. 
* Kurssida: Sidpaginering med navigering. 
* Kurssida: Knapptext baserad på om en kurs är tillagd eller inte ("Lägg till kurs"/"Redan tillagd").
* Kurssida: Möjlighet att ta bort sparade kurser redan i kurslistan. 
* Ramschema: Möjlighet att rensa hela kursschemat via en knapp. 