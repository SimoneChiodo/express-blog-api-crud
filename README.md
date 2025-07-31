# Esercizio Express Blog Routing

## Descrizione

Il progetto consiste nella realizzazione di un'applicazione backend per la gestione di un blog utilizzando **Express.js**. L'obiettivo è sviluppare un sistema completo di API RESTful per gestire i post, organizzando il codice in modo modulare con **router**, **controller**, **dati esterni** e **middleware personalizzati**.

### Funzionalità principali

- Organizzazione della logica delle rotte in controller separati
- Implementazione completa delle operazioni CRUD:
  - Visualizzazione della lista dei post
  - Visualizzazione di un singolo post
  - Creazione di un nuovo post
  - Aggiornamento di un post esistente
  - Eliminazione di un post
- Utilizzo di un array esterno per simulare un database

### Requisiti aggiuntivi e bonus

- Filtro di ricerca per tag nella lista dei post
- Gestione di errori per ID non validi o post non esistenti (404)
- Validazione del corpo della richiesta nelle rotte `store` e `update` (400)
- Middleware per gestire:
  - Endpoint non esistenti
  - Errori interni del server

Il progetto viene testato e verificato tramite **Postman**, con particolare attenzione alla struttura delle risposte in formato JSON e agli status code HTTP appropriati.
