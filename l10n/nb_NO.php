<?php
$TRANSLATIONS = array(
"Feed contains invalid XML" => "Nyhetskilden inneholder ugyldig XML",
"Feed not found: either the website does not provide a feed or blocks access. To rule out blocking, try to download the feed on your server's command line using curl: curl http://the-feed.tld" => "Nyhetskilde ikke funnet: Enten tilbyr ikke websiden en kilde eller den blokkerer tilgang. For å utelukke blokkering, prøv å laste ned kilden på kommandolinjen på serveren med curl: curl http://the-feed.tld",
"Detected feed format is not supported" => "Påvist nyhetskilde-format støttes ikke",
"SSL Certificate is invalid" => "Ugylidg SSL-sertifikat",
"Website not found" => "Nettsted ikke funnet",
"More redirects than allowed, aborting" => "Flere omdirigeringer enn tillatt. Avbryter",
"Bigger than maximum allowed size" => "Større enn maksimalt tillatt størrelse",
"Request timed out" => "Forespørsel ga tidsavbrudd",
"Request failed, network connection unavailable!" => "Forespørsel feilet, nettverksforbindelse utilgjengelig!",
"Request unauthorized. Are you logged in?" => "Forespørsel uautorisert. Er du logget inn?",
"Request forbidden. Are you an admin?" => "Forespørsel forbudt. Er du en administrator?",
"Token expired or app not enabled! Reload the page!" => "Nøkkel utløpt eller app ikke aktivert! Last siden på nytt!",
"Internal server error! Please check your data/owncloud.log file for additional information!" => "Intern serverfeil! Sjekk loggfilen data/owncloud.log for mer informasjon!",
"Request failed, ownCloud is in currently in maintenance mode!" => "Forespørsel feilet, ownCloud er for øyeblikket i vedlikeholdsmodus!",
"Can not add feed: Exists already" => "Kan ikke legge til nyhetskilde: Finnes allerede",
"Articles without feed" => "Artikler uten nyhetskilde",
"Can not add folder: Exists already" => "Kan ikke legge til mappe: Finnes allerede",
"Use ownCloud cron for updates" => "Bruk ownCloud cron for oppdateringer",
"Disable this if you run a custom updater such as the Python updater included in the app" => "Deaktiver dette hvis du kjører en tilpasset oppdaterer, som f.eks. Python-opdatereren som er inkludert i appen",
"Purge interval" => "Opprenskingsinterval",
"Minimum amount of seconds after deleted feeds and folders are removed from the database; values below 60 seconds are ignored" => "Minste antall sekunder etter at slettede nyhetskilder og mapper er fjernet fra databasen; verdier under 60 sekunder ignoreres",
"Maximum read count per feed" => "Maksimalt antall lest pr. nyhetskilde",
"Defines the maximum amount of articles that can be read per feed which won't be deleted by the cleanup job; if old articles reappear after being read, increase this value; negative values such as -1 will turn this feature off completely" => "Definerer maksimalt antall artikler som kan leses pr. nyhetskilde som ikke vil bli slettet av opprenskingsjobben. Hvis gamle artikler dukker opp igjen etter at de er lest, øk denne verdien. Negative verdier, som -1, vil slå av denne funksjonen fullstendig",
"Maximum redirects" => "Maksimalt antall omdirigeringer",
"How many redirects the feed fetcher should follow" => "Hvor mange omdirigeringer som skal følges ved henting av nyhetskilde",
"Maximum feed page size" => "Maksimal størrelse på nyhetskilde-side",
"Maximum feed size in bytes. If the RSS/Atom page is bigger than this value, the update will be aborted" => "Maksimal nyhetskilde-størrelse i bytes. Hvis RSS/Atom-siden er større enn dette, avbrytes oppdateringen",
"Feed fetcher timeout" => "Tidsavbrudd for henting av nyhetskilde",
"Maximum number of seconds to wait for an RSS or Atom feed to load; if it takes longer the update will be aborted" => "Maksimalt antall sekunder venting på at en RSS- eller Atom-nyhetskilde skal bli lastet. Hvis det tar lenger tid, avbrytes oppdateringen",
"Explore Service URL" => "URL for utforskertjeneste",
"If given, this service's URL will be queried for displaying the feeds in the explore feed section. To fall back to the built in explore service, leave this input empty" => "Hvis oppgitt, vil denne tjenestens URL bli forespurt for vising av nyhetskilder i seksjonen for utforsking av nyhetskilder. La stå tomt for å falle tilbake på den innebygde utforsker-tjenesten.",
"For more information check the Wiki" => "Sjekk Wiki-en for mer informasjon",
"Saved" => "Lagret",
"Download" => "Last ned",
"Close" => "Lukk",
"Ajax or webcron cron mode detected! Your feeds will not be updated correctly. It is recommended to either use the operating system cron or a custom updater." => "Ajax eller webcron cron-modus oppdaget! Nyhetskildene dine vil ikke bli oppdatert på rett måte. Det anbefales å enten bruke operativsystemets cron eller en tilpasset oppdaterer.",
"How to set up the operating system cron" => "Hvordan sette opp operativsystemets cron",
"How to set up a custom updater (faster and no possible deadlock) " => "Hvordan sette opp en tilpasset opdaterer (raskere og uten risiko for vranglås)",
"filter" => "filter",
"Language" => "Språk",
"Subscribe" => "Abonnér",
"Got more awesome feeds? Share them with us!" => "Har du flere fantastiske nyhetskilder? Del dem med oss!",
"Refresh" => "Oppdater",
"No articles available" => "Ingen artikler tilgjengelig",
"No unread articles available" => "Inen uleste artikler tilgjengelig",
"Open website" => "Åpne webside",
"Star article" => "Merk artikkelen",
"Unstar article" => "Fjern merking av artikkelen",
"Keep article unread" => "Behold artikkelen ulest",
"Remove keep article unread" => "Fjern behold artikkelen ulest",
"by" => "av",
"from" => "fra",
"Play audio" => "Spill lyd",
"Download video" => "Last ned video",
"Download audio" => "Last ned lyd",
"Keyboard shortcut" => "Hurtigtast",
"Description" => "Beskrivelse",
"right" => "høyre",
"Jump to next article" => "Gå til neste artikkel",
"left" => "venstre",
"Jump to previous article" => "Gå til forrige artikkel",
"Toggle star article" => "Veksle stjernemerking av artikkel",
"Star article and jump to next one" => "Stjernemerk artikkel og gå til neste",
"Toggle keep current article unread" => "Veksle å beholde denne artikkelen ulest",
"Open article in new tab" => "Åpne artikkel i ny fane",
"Toggle expand article in compact view" => "Veksle ekspandering av artikkel i kompakt visning",
"Load next feed" => "Last neste nyhetskilde",
"Load previous feed" => "Last forrige nyhetskilde",
"Load next folder" => "Last neste mappe",
"Load previous folder" => "Last forrige mappe",
"Scroll to active navigation entry" => "Bla til aktiv navigeringspost",
"Focus search field" => "Gi fokus til søkefeltet",
"Mark current article's feed/folder read" => "Merk denne artikkelens kilde/mappe som lest",
"Web address" => "Internettadresse",
"Feed exists already!" => "Nyhetskilden eksisterer allerede!",
"Folder" => "Mappe",
"No folder" => "Ingen mappe",
"New folder" => "Ny mappe",
"Folder name" => "Mappenavn",
"Go back" => "Gå tilbake",
"Folder exists already!" => "Mappe finnes allerede!",
"Advanced settings" => "Avanserte innstillinger",
"Credentials" => "Påloggingsdetaljer",
"Username" => "Brukernavn",
"Password" => "Passord",
"New Folder" => "Ny mappe",
"Create" => "Opprett",
"Explore" => "Utforsk",
"Update failed more than 50 times" => "Oppdatering feilet mer enn 50 ganger",
"Deleted feed" => "Slettet nyhetskilde",
"Undo delete feed" => "Angre sletting av nyhetskilde",
"Rename" => "Gi nytt navn",
"Menu" => "Meny",
"Unpin feed from the top" => "Løsne nyhetskilden fra toppen",
"Pin feed to the top" => "Fest nyhetskilden til toppen",
"No feed ordering" => "Ingen sortering av nyhetskilder",
"Reversed feed ordering" => "Omvendt sortering av nyhetskilder",
"Normal feed ordering" => "Normal sortering av nyhetskilder",
"Enable full text feed fetching" => "Aktiver fulltekst-henting av nyhetskilder",
"Disable full text feed fetching" => "Deaktiver fulltekst-henting av nyhetskilder",
"Keep updated articles as is" => "Behold oppdaterte artikler som de er",
"Mark updated articles unread" => "Merk oppdaterte artikler som ulest",
"Rename feed" => "Omdøp nyhetskilde",
"Delete feed" => "Slett nyhetskilden",
"Mark all articles read" => "Merk alle artikler som lest",
"Dismiss" => "Forkast",
"Collapse" => "Skjul",
"Deleted folder" => "Slettet mappe",
"Undo delete folder" => "Angre sletting av mappe",
"Rename folder" => "Gi mappen nytt navn",
"Delete folder" => "Slett mappe",
"Starred" => "Merket",
"Unread articles" => "Uleste artikler",
"All articles" => "Alle artikler",
"Settings" => "Innstillinger",
"Keyboard shortcuts" => "Tastatur snarveier",
"Disable mark read through scrolling" => "Slå av merk som lest ved blading",
"Compact view" => "Kompakt visning",
"Expand articles on key navigation" => "Ekspander artikler ved tastaturnavigering",
"Show all articles" => "Vis alle artikler",
"Reverse ordering (oldest on top)" => "Omvendt sortering (elste øverst)",
"Subscriptions (OPML)" => "Abonnement (OPML)",
"Import" => "Importer",
"Export" => "Eksporter",
"Error when importing: file does not contain valid OPML" => "Feil under importering: Filen inneholder ikke gyldig OPML",
"Unread/Starred Articles" => "Uleste/merkede artikler",
"Error when importing: file does not contain valid JSON" => "Feil under importering: Filen inneholder ikke gyldig JSON"
);
$PLURAL_FORMS = "nplurals=2; plural=(n != 1);";
