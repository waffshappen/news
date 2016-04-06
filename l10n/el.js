OC.L10N.register(
    "news",
    {
    "Feed contains invalid XML" : "Η ροή περιέχει μη έγχυρο XML",
    "Feed not found: either the website does not provide a feed or blocks access. To rule out blocking, try to download the feed on your server's command line using curl: curl http://the-feed.tld" : "Η ροή δεν βρέθηκε: είτε ο ιστότοπος δε διαθέτει ροή ή εμποδίζει την πρόσβαση. Για να αποκλείσετε το ενδεχόμενο να εμποδίζεται η πρόσβαση, προσπαθήστε να κάνετε λήψη της ροής στη γραμμή εντολών του διακομιστή μας με χρήση του curl: curl http://the-feed.tld",
    "Detected feed format is not supported" : "Η μορφοποίηση ροής που ανιχνεύτηκε δεν υποστηρίζεται",
    "SSL Certificate is invalid" : "Μη έγκυρο Πιστοποιητικό SSL",
    "Website not found" : "Δεν βρέθηκε ιστοσελίδα",
    "More redirects than allowed, aborting" : "Περισσότερες ανακατευθύνσεις από όσες επιτρέπονται, ακύρωση",
    "Bigger than maximum allowed size" : "Μεγαλύτερο από το μέγιστο επιτρεπόμενο μέγεθος",
    "Request timed out" : "Το αίτημα έληξε",
    "Request failed, network connection unavailable!" : "Το αίτημα απέτυχε, η σύνδεση στο δίκτυο δεν είναι διαθέσιμη!",
    "Request unauthorized. Are you logged in?" : "Το αίτημα δεν είναι εξουσιοδοτημένο. Είστε συνδεδεμένοι;",
    "Request forbidden. Are you an admin?" : "Το αίτημα δεν επιτράπει. Είστε διαχειριστής;",
    "Token expired or app not enabled! Reload the page!" : "Η διαδικασία αναγνώρισης τερματίστηκε ή η εφαρμογή δεν είναι ενεργοποιημένη! Επαναφορτώστε τη σελίδα! ",
    "Internal server error! Please check your data/owncloud.log file for additional information!" : "Εσωτερικό σφάλμα διακομιστή! Παρακαλώ ελεγξτε τα αρχεία καταγραφής δεδομένων/owncloud για περισσότερες πληροφορίες!",
    "Request failed, ownCloud is in currently in maintenance mode!" : "Το αίτημα απέτυχε, το ownCloud είναι προς το παρόν σε κατάσταση συντήρησης!",
    "Can not add feed: Exists already" : "Αδυναμία προσθήκης ροής: Υπάρχει ήδη",
    "Articles without feed" : "Άρθρα χωρίς ροές",
    "Can not add folder: Exists already" : "Αδυναμία προσθήκης φακέλου: Υπάρχει ήδη",
    "Use ownCloud cron for updates" : "Χρήση ownCloud cron για ενημερώσεις",
    "Disable this if you run a custom updater such as the Python updater included in the app" : "Απενεργοποιήστε αυτό εάν τρέχετε μια τροποποιημένη υπηρεσία ενημέρωσης όπως την υπηρεσία ενημέρωσης Python που περιλαμβάνεται στην εφαρμογή",
    "Purge interval" : "Διάστημα καθαρισμού",
    "Minimum amount of seconds after deleted feeds and folders are removed from the database; values below 60 seconds are ignored" : "Η ελάχιστη διάρκεια σε δευτερόλεπτα μετά τη διαγραφή ροών και φακέλων οπότε θα απομακρύνονται από τη βάση δεδομένων - τιμές κάτω από 60 δευτερόλεπτα θα αγνοούνται",
    "Maximum read count per feed" : "Ο μέγιστος αριθμός διαβασμένων ανά ροή",
    "Defines the maximum amount of articles that can be read per feed which won't be deleted by the cleanup job; if old articles reappear after being read, increase this value; negative values such as -1 will turn this feature off completely" : "Καθορίζει το μέγιστο αριθμό άρθρων που μπορούν να οριστούν ως διαβασμένα ανά ροή τα οποία δεν θα διαγραφούν από την υπηρεσία καθαρισμού - εάν παλαιότερα άρθρα επανεμφανιστούν αφού διαβαστούν, αυξήστε αυτήν την τιμή. Οι αρνητικές τιμές όπως -1 θα απενεργοποιήσουν αυτήν τη δυνατότητα εντελώς",
    "Maximum redirects" : "Μέγιστος αριθμός ανακατευθύνσεων",
    "How many redirects the feed fetcher should follow" : "Πόσες ανακατευθύνσεις θα πρέπει να ακολουθεί ο δέκτης ροών",
    "Maximum feed page size" : "Μέγιστο μέγεθος σελίδας ροής",
    "Maximum feed size in bytes. If the RSS/Atom page is bigger than this value, the update will be aborted" : "Μέγιστο μέγεθος ροής σε bytes. Εάν η σελίδα RSS/Atom είναι μεγαλύτερη από αυτήν την τιμή, η ενημέρωση θα ματαιωθεί",
    "Feed fetcher timeout" : "Χρόνος λήξης δέκτη ροής",
    "Maximum number of seconds to wait for an RSS or Atom feed to load; if it takes longer the update will be aborted" : "Μέγιστος αριθμός δευτερολέπτων για αναμονή φόρτωσης μιας ροής RSS ή Atom - εάν πάρει περισσότερη ώρα η ενημέρωση θα ματαιωθεί",
    "Explore Service URL" : "URL Υπηρεσίας Εξερεύνησης",
    "If given, this service's URL will be queried for displaying the feeds in the explore feed section. To fall back to the built in explore service, leave this input empty" : "Εάν οριστεί, η URL αυτής της υπηρεσίας θα ερωτηθεί για την προβολή των ροών στο τμήμα εξερεύνησης ροών. Για να επιστρέψετε πίσω στην ενσωματωμένη υπηρεσία εξερεύνησης, αφήστε αυτή την είσοδο άδεια",
    "Saved" : "Αποθηκεύτηκαν",
    "Download" : "Λήψη",
    "Close" : "Κλείσιμο",
    "Ajax or webcron cron mode detected! Your feeds will not be updated correctly. It is recommended to either use the operating system cron or a custom updater." : "Ανιχνεύτηκε κατάσταση λειτουργίας cron του webcron ή Ajax! Οι ροές σας δεν θα ενημερωθούν σωστά. Προτείνεται είτε να χρησιμοποιήσετε το cron του λειτουργικού συστήματος ή μια προσαρμοσμένη υπηρεσία ενημέρωσης.",
    "How to set up the operating system cron" : "Πώς να ρυθμίσετε την υπηρεσία cron του λειτουργικού συστήματος",
    "How to set up a custom updater (faster and no possible deadlock) " : "Πώς να ρυθμίσετε μια προσαρμοσμένη υπηρεσία ενημέρωσης (γρηγορότερη και αποφυγή πιθανού αδιεξόδου)",
    "Language" : "Γλώσσα",
    "Subscribe" : "Συνδρομή",
    "Refresh" : "Ανανέωση ",
    "No articles available" : "Δεν υπάρχουν διαθέσιμα άρθρα",
    "No unread articles available" : "Κανένα αδιάβαστο άρθρο διαθέσιμο",
    "Open website" : "Άνοιγμα ιστοσελίδας",
    "Star article" : "Επισήμανση με αστέρι",
    "Unstar article" : "Αναίρεση επισήμανσης με αστέρι",
    "Keep article unread" : "Διατήρηση άρθρου ως μη αναγνωσμένου",
    "Remove keep article unread" : "Αφαίρεση διατήρησης άρθρου ως μη αναγνωσμένου",
    "by" : "από",
    "from" : "από",
    "Play audio" : "Αναπαραγωγή ήχου",
    "Download video" : "Κατεβάστε το βίντεο",
    "Download audio" : "Λήψη ήχου",
    "Keyboard shortcut" : "Συντόμευση πλητρολογίου",
    "Description" : "Περιγραφή",
    "right" : "δεξιά",
    "Jump to next article" : "Επόμενο άρθρο",
    "left" : "αριστερά",
    "Jump to previous article" : "Προηγούμενο άρθρο",
    "Toggle star article" : "Εναλλαγή επισήμανσης άρθρου με αστέρι",
    "Star article and jump to next one" : "Επισήμανση άρθρου και μετακίνηση στο επόμενο",
    "Toggle keep current article unread" : "Εναλλαγή διατήρισης τρέχοντος άρθρου ως μη αναγνωσμένου",
    "Open article in new tab" : "Άνοιγμα άρθρου σε νέα καρτέλα",
    "Toggle expand article in compact view" : "Εναλλαγή επέκτασης άρθρου στη συμπαγή προβολή",
    "Load next feed" : "Φόρτωση επόμενης ροής",
    "Load previous feed" : "Φόρτωση προηγούμενης ροής",
    "Load next folder" : "Φόρτωση επόμενου φακέλου",
    "Load previous folder" : "Φόρτωση προηγούμενου φακέλου",
    "Scroll to active navigation entry" : "Κύλιση στην ενεργή είσοδο πλοήγησης ",
    "Focus search field" : "Εστίαση στο πεδίο αναζήτησης",
    "Mark current article's feed/folder read" : "Σημείωση της ροής/φακέλου του τρέχοντος άρθρου ως αναγνωσμένα",
    "Web address" : "Διεύθυνση ιστοσελίδας",
    "Feed exists already!" : "Η ροή υπάρχει ήδη!",
    "Folder" : "Φάκελος",
    "No folder" : "Κανένας φάκελος",
    "New folder" : "Νέος φάκελος",
    "Folder name" : "Όνομα φακέλου",
    "Go back" : "Μετακίνηση πίσω",
    "Folder exists already!" : "Ο φάκελος υπάρχει ήδη!",
    "Advanced settings" : "Ρυθμίσεις για προχωρημένους",
    "Credentials" : "Πιστοποιητικά",
    "Username" : "Όνομα χρήστη",
    "Password" : "Κωδικός πρόσβασης",
    "New Folder" : "Νέος φάκελος",
    "Create" : "Δημιουργία",
    "Explore" : "Εξερεύνηση",
    "Deleted feed" : "Διαγραφή ροής",
    "Undo delete feed" : "Αναίρεση διαγραφής ροής",
    "Rename" : "Μετονομασία",
    "Menu" : "Μενού",
    "Unpin feed from the top" : "Απαγκίστρωση της ροής από την κορυφή",
    "Pin feed to the top" : "Αγκίστρωση της ροής στην κορυφή",
    "No feed ordering" : "Καμμία ταξινόμηση ροής",
    "Reversed feed ordering" : "Ανεστραμμένη ταξινόμηση ροής",
    "Normal feed ordering" : "Κανονική ταξινόμηση ροής",
    "Enable full text feed fetching" : "Ενεργοποίηση λήψης ροής πλήρους κειμένου",
    "Disable full text feed fetching" : "Απενεργοποίηση λήψης ροής πλήρους κειμένου",
    "Keep updated articles as is" : "Διατήρηση ενημερωμένων άρθρων ως έχουν",
    "Mark updated articles unread" : "Σημείωση των ενημερωμένων άρθρων ως μη αναγνωσμένων",
    "Rename feed" : "Μετονομασία ροής",
    "Delete feed" : "Διαγραφή ροής",
    "Mark all articles read" : "Σημείωση όλων των άρθρων ως ανεγνωσμένων",
    "Dismiss" : "Απόρριψη",
    "Collapse" : "Σύμπτυξη",
    "Deleted folder" : "Διαγραφή φακέλου",
    "Undo delete folder" : "Αναίρεση διαγραφής φακέλου",
    "Rename folder" : "Μετονομασία φακέλου",
    "Delete folder" : "Διαγραφή φακέλου",
    "Starred" : "Με αστέρι",
    "Unread articles" : "Μη αναγνωσμένα άρθρα",
    "All articles" : "Όλα τα άρθρα",
    "Settings" : "Ρυθμίσεις",
    "Keyboard shortcuts" : "Συντομεύσεις πλητρολογίου",
    "Disable mark read through scrolling" : "Απενεργοποίηση σημείωσης ως διαβασμένων κατά τη κύλιση",
    "Compact view" : "Συμπαγής προβολή",
    "Expand articles on key navigation" : "Ανάπτυξη των άρθρων κατά την πλοήγηση με πλήκτρα",
    "Show all articles" : "Εμφάνιση όλων των άρθρων",
    "Reverse ordering (oldest on top)" : "Ανεστραμμένη ταξινόμηση (παλαιότερα στην κορυφή)",
    "Subscriptions (OPML)" : "Συνδρομές (OPML)",
    "Import" : "Εισαγωγή",
    "Export" : "Εξαγωγή",
    "Error when importing: file does not contain valid OPML" : "Σφάλμα κατα την εισαγωγή: το αρχείο δεν περιέχει έγκυρο OPML",
    "Unread/Starred Articles" : "Με αστέρι/Μη αναγνωσμένα Άρθρα",
    "Error when importing: file does not contain valid JSON" : "Σφάλμα κατά την εισαγωγή: το αρχείο δεν περιέχει έγκυρο JSON"
},
"nplurals=2; plural=(n != 1);");
