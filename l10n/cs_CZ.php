<?php
$TRANSLATIONS = array(
"Feed contains invalid XML" => "Kanál obsahuje neplatné XML",
"Feed not found: either the website does not provide a feed or blocks access. To rule out blocking, try to download the feed on your server's command line using curl: curl http://the-feed.tld" => "Kanál nenalezen: stránka buď žádný neposkytuje nebo je přístup blokován. Pro vyloučení možnosti blokování zkuste stáhnout kanál pomocí příkazové řádky na serveru za použití curl: curl http://the-feed.tld",
"Detected feed format is not supported" => "Detekovaný formát kanálu není podporován",
"SSL Certificate is invalid" => "SSL certifikát je neplatný",
"Website not found" => "Webová stránka nenalezena",
"More redirects than allowed, aborting" => "Překročen povolený počet přesměrování, ukončuji",
"Bigger than maximum allowed size" => "Větší než maximální povolená velikost",
"Request timed out" => "Požadavek vypršel",
"Required credentials for feed were either missing or incorrect" => "Přihlašovací údaje pro odběr chybí nebo nejsou správné",
"Forbidden to access feed" => "Přístup k odběru odepřen",
"Request failed, network connection unavailable!" => "Požadavek selhal, síťové připojení není dostupné!",
"Request unauthorized. Are you logged in?" => "Neautorizovaný požadavek. Jste přihlášeni?",
"Request forbidden. Are you an admin?" => "Zakázaný požadavek. Jste administrátor?",
"Token expired or app not enabled! Reload the page!" => "Token vypršel nebo aplikace není povolena! Obnovte stránku!",
"Internal server error! Please check your data/owncloud.log file for additional information!" => "Interní chyba serveru! Zkontrolujte soubor owncloud.log pro více informací!",
"Request failed, ownCloud is in currently in maintenance mode!" => "Požadavek selhal, ownCloud je právě ve stavu údržby!",
"Can not add feed: Exists already" => "Nelze přidat kanál: již existuje",
"Articles without feed" => "Články bez kanálu",
"Can not add folder: Exists already" => "Nelze přidat složku: již existuje",
"Use ownCloud cron for updates" => "Použít cron aplikace ownCloud pro aktualizace",
"Disable this if you run a custom updater such as the Python updater included in the app" => "Toto vypněte, pokud používáte vlastní aplikaci pro aktualizace jako například dostupnou aktualizační službu Python",
"Purge interval" => "Interval čištění",
"Minimum amount of seconds after deleted feeds and folders are removed from the database; values below 60 seconds are ignored" => "Minimální časový interval v sekundách, po kterém jsou z databáze smazány odstraněné kanály novinek a adresáře; hodnoty kratší než 60 sekund jsou ignorovány",
"Maximum read count per feed" => "Maximální počet přečtených novinek na kanál",
"Defines the maximum amount of articles that can be read per feed which won't be deleted by the cleanup job; if old articles reappear after being read, increase this value; negative values such as -1 will turn this feature off completely" => "Určuje nejvyšší počet článků, které jsou dostupné ke čtení z jednotlivých kanálů a nebudou smazány při čištění; pokud se staré články po přečtení znovu objevují, navyšte tuto hodnotu; negativní hodnoty jako -1 tuto funkci úplně vypnou",
"Maximum redirects" => "Nejvyšší počet přesměrování",
"How many redirects the feed fetcher should follow" => "Kolik přesměrování se může sledovat při stahování článků",
"Maximum feed page size" => "Maximální velikost stránky kanálu",
"Maximum feed size in bytes. If the RSS/Atom page is bigger than this value, the update will be aborted" => "Maximální velikost kanálu v bajtech. Pokud bude RSS/Atom stránka větší než tato hodnota, aktualizace bude ukončena",
"Feed fetcher timeout" => "Interval vypršení pro stahování článků",
"Maximum number of seconds to wait for an RSS or Atom feed to load; if it takes longer the update will be aborted" => "Maximální počet sekund pro aktualizaci RSS nebo Atom zdroje; pokud bude interval překročen, aktualizace se ukončí",
"Explore Service URL" => "URL prohledávání",
"If given, this service's URL will be queried for displaying the feeds in the explore feed section. To fall back to the built in explore service, leave this input empty" => "Pokud zadáno, bude tato URL dotazována na zobrazování kanálů v sekci prohledávání kanálu. Pro návrat k výchozí službě hledání ponechte toto pole prázdné.",
"For more information check the Wiki" => "Více informací lze nalézt v naší wiki",
"Saved" => "Uloženo",
"Download" => "Stáhnout",
"Close" => "Zavřít",
"Ajax or webcron cron mode detected! Your feeds will not be updated correctly. It is recommended to either use the operating system cron or a custom updater." => "Detekován cron mód ajax nebo webcron! Vaše kanály nebudou správně aktualizovány. Doporučuje se použít buď službu cron operačního systému nebo vlastní systém aktualizace.",
"How to set up the operating system cron" => "Jak nastavit službu cron operačního systému",
"How to set up a custom updater (faster and no possible deadlock) " => "Jak nastavit vlastní systém aktualizace (rychlejší, bez možných blokování)",
"filter" => "filtr",
"Language" => "Jazyk",
"Subscribe" => "Odebírat",
"Got more awesome feeds? Share them with us!" => "Víš o dalších úžasných kanálech? Poděl se o ně s námi!",
"Refresh" => "Obnovit",
"No articles available" => "Nejsou dostupné žádné články",
"No unread articles available" => "Nejsou dostupné žádné nepřečtené články",
"Open website" => "Otevřít webovou stránku",
"Star article" => "Ocenit článek hvězdičkou",
"Unstar article" => "Odebrat článku hvězdičku",
"Keep article unread" => "Ponechat článek jako nepřečtený",
"Remove keep article unread" => "Odstranit označení článku jako nepřečtený",
"by" => "sdílí",
"from" => "z",
"Play audio" => "Přehrát hudbu",
"Download video" => "Stáhnout video",
"Download audio" => "Stáhnout hudbu",
"Keyboard shortcut" => "Klávesová zkratka",
"Description" => "Popis",
"right" => "vpravo",
"Jump to next article" => "Jít na další článek",
"left" => "vlevo",
"Jump to previous article" => "Jít na předchozí článek",
"Toggle star article" => "Přepnout hvězdičku",
"Star article and jump to next one" => "Označit článek hvězdičkou a přejít na další",
"Toggle keep current article unread" => "Ponechat aktuální článek jako nepřečtený",
"Open article in new tab" => "Otevřít článek v nové záložce",
"Toggle expand article in compact view" => "Přepínat rozbalení článku v kompaktním náhledu",
"Load next feed" => "Načíst další kanál",
"Load previous feed" => "Načíst předchozí kanál",
"Load next folder" => "Načíst další adresář",
"Load previous folder" => "Načíst předchozí adresář",
"Scroll to active navigation entry" => "Posuňte pro aktivaci položky menu",
"Focus search field" => "Zaměři pole vyhledávání",
"Mark current article's feed/folder read" => "Označit aktuální kanál/adresář článku jako přečtený",
"Web address" => "Webová adresa",
"Feed exists already!" => "Kanál již existuje!",
"Folder" => "Složka",
"No folder" => "Žádná složka",
"New folder" => "Nová složka",
"Folder name" => "Název složky",
"Go back" => "Jít zpět",
"Folder exists already!" => "Složka již existuje!",
"Advanced settings" => "Pokročilá nastavení",
"Credentials" => "Přihlašovací údaje",
"HTTP Basic Auth credentials must be stored unencrypted! Everyone with access to the server or database will be able to access them!" => "Přihlašovací údaje pro HTTP Basic Auth musí být uloženy nezakódované! Každý s přístupem k serveru nebo databázi je bude moci přečíst!",
"Username" => "Uživatelské jméno",
"Password" => "Heslo",
"New Folder" => "Nová složka",
"Create" => "Vytvořit",
"Explore" => "Prohledat",
"Update failed more than 50 times" => "Aktualizace selhala více než 50krát",
"Deleted feed" => "Smazaný kanál",
"Undo delete feed" => "Vzít zpět smazání kanálu",
"Rename" => "Přejmenovat",
"Menu" => "Menu",
"Unpin feed from the top" => "Kanál odepnut z prvního místa",
"Pin feed to the top" => "Připnout kanál na první místo",
"No feed ordering" => "Bez řazení zdrojů",
"Reversed feed ordering" => "Opačné řazení zdrojů",
"Normal feed ordering" => "Normální řazení zdrojů",
"Enable full text feed fetching" => "Povolit stahování kompletních textů",
"Disable full text feed fetching" => "Vypnout stahování kompletních textů",
"Keep updated articles as is" => "Ponechat aktualizované články tak jak jsou",
"Mark updated articles unread" => "Označit aktualizované články jako nepřečtené",
"Rename feed" => "Přejmenovat kanál",
"Delete feed" => "Smazat kanál",
"Mark all articles read" => "Označit všechny články jako přečtené",
"Dismiss" => "Zamítnout",
"Collapse" => "Sbalit",
"Deleted folder" => "Smazaná složka",
"Undo delete folder" => "Vzít zpět smazání složky",
"Rename folder" => "Přejmenovat složku",
"Delete folder" => "Smazat složku",
"Starred" => "S hvězdičkou",
"Unread articles" => "Nepřečtené články",
"All articles" => "Všechny články",
"Settings" => "Nastavení",
"Keyboard shortcuts" => "Klávesové zkratky",
"Disable mark read through scrolling" => "Vypnout označování jako přečtené při posunu",
"Compact view" => "Kompaktní zobrazení",
"Expand articles on key navigation" => "Rozbalit články po stisknutí kláves navigace",
"Show all articles" => "Zobrazit všechny články",
"Reverse ordering (oldest on top)" => "Opačné řazení (od nejstarších)",
"Subscriptions (OPML)" => "Odběry (OPML)",
"Import" => "Importovat",
"Export" => "Exportovat",
"Error when importing: file does not contain valid OPML" => "Chyba při importu: soubor neobsahuje platná OPML data",
"Unread/Starred Articles" => "Články nepřečtené a s hvězdičkou",
"Error when importing: file does not contain valid JSON" => "Chyba při importování: soubor neobsahuje platná data JSON"
);
$PLURAL_FORMS = "nplurals=3; plural=(n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2;";
