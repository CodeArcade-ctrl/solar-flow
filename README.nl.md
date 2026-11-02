# Solar Flow

**Talen:** [English](README.md) | [Nederlands](README.nl.md)

Gebruik je zonnestroom in je Flows. Vergelijk opgewekt vermogen met teruglevering, schat het eigen verbruik en reken dagopbrengst om naar mogelijke besparingen. Koppel bestaande Homey-sensortags; de berekeningen blijven lokaal.

## Inbegrepen

- Tweetalige Homey Flow-acties, uitvoertags en voorwaarden.
- Lokale berekeningen; geen externe diensten, API-sleutels of accountkoppeling.
- Invoercontroles en tests voor randgevallen en eenheden.
- App Store-afbeeldingen, vertaalde storeteksten, MIT-licentie en CI-validatie.

## Gebruiken in een Flow

Voeg een actie toe om een waarde te berekenen en gebruik de uitvoertag daarna in een Advanced Flow-kaart. Met voorwaardekaarten vergelijk je metingen met grenswaarden. Numerieke argumenten ondersteunen tags van geschikte Homey-apparaten, zodat je bestaande sensoren en meters kunt koppelen.

## Installeren en testen

Installeer Node.js 24 of hoger en de [Homey CLI](https://apps.developer.homey.app/the-basics/getting-started). Voer `npm test` uit voor de berekeningstests en `homey app validate --level publish` om het Homey-pakket te controleren. Gebruik `homey app install` om een testversie te installeren op een Homey Pro die aan je ontwikkelaarsaccount is gekoppeld.

## Store-release

Deze repository is voorbereid voor Homey Apps SDK v3 en bevat Homey App Store-afbeeldingen, Engelse en Nederlandse storeteksten en een automatische validatieworkflow op niveau `publish`. Een ontwikkelaar moet nog het Athom-account koppelen, de app op een eigen Homey testen en bij Athom ter certificering aanbieden. Athom beslist over goedkeuring en publicatie.

## Reikwijdte en nauwkeurigheid

Deze app verwerkt waarden die je Flow aanlevert. De app ontdekt geen sensoren, bouwt geen automatische historie op, wijzigt geen apparaatinstellingen en garandeert geen veiligheid, besparing of prestaties van apparatuur. Lees de helptekst op elke kaart en controleer de eenheden van je Homey-sensortags.

## Licentie

MIT. Zie [LICENSE](LICENSE).
