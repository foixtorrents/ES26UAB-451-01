# QueMenges – ES26UAB-451-01
Projecte QueMenges - Enginyeria del Software

**QueMenges** és una aplicació que permet als usuaris accedir a menús preparats per persones individuals, connectant clients amb cuiners particulars i repartidors.

---

## Estructura del repositori

```
ES26UAB-451-01/
│
├── app/                        # Prototip funcional
│   └── ...                     # Projecte Node.js + Docker que implementa
│                               # el cas d'ús de cerca de cuiners i plats
│
├── Diagrams/                   # Diagrames UML (casos d'ús i classes)
│   ├── *.puml                  # Codi font PlantUML dels diagrames
│   ├── DiagramesSeq/           # Diagrames de seqüència UML
│       ├── *.puml                # Codi font PlantUML de cada diagrama
│
│
├── documents/                  # Documentació formal del projecte
│   ├── SRS_v*.pdf              # Document SRS en PDF — conté els requisits
│   │                           # funcionals, no funcionals i les descripcions
│   │                           # detallades de tots els casos d'ús
│   └── SRS_v*.docx             # Versió editable del document SRS
│
├── minutes/                    # Actes de totes les reunions del projecte
│   └── meeting-YYYY-MM-DD.md   # Una acta per reunió en format Markdown
│
├── others/                     # Recursos addicionals
│   └── ES-Practica25-26-Enunciat.pdf   # PDF de l'enunciat oficial del projecte
│
├── Presentació/                # Presentacions dels 4 sprints
│   ├── Sprint_Review*.pdf
│
│
├── requirements/               # Fitxes individuals de requisits en Markdown
│   ├── RF-*.md                 # Requisits funcionals (un fitxer per requisit)
│   └── RNF-*.md                # Requisits no funcionals (un fitxer per requisit)
│
└── README.md                   # Aquest fitxer
```

---

## On trobar cada cosa

### 📋 Requisits funcionals i no funcionals
Carpeta [`/requirements`](/requirements). Cada requisit té el seu propi fitxer Markdown amb l'ID com a nom (ex: `RF-01.md`, `RNF-03.md`).

### 📄 Especificacions i descripcions dels casos d'ús
Les descripcions detallades de tots els casos d'ús (flux principal, fluxos alternatius, precondicions, postcondicions, etc.) es troben al **document SRS** dins la carpeta [`/documents`](/documents), tant en format PDF com en format Word.

### 📐 Diagrames de casos d'ús diagrama de classes i diagrames de seqüència
Carpeta [`/Diagrams`](/Diagrams). Hi ha els fitxers `.puml` editables.

### 🗓️ Actes de reunions
Carpeta [`/minutes`](/minutes). Una acta per cada reunió interna en format Markdown, amb el nom `meeting-YYYY-MM-DD.md`.

### 🖥️ Prototip funcional
Carpeta [`/app`](/app). Conté un projecte **Node.js** dockeritzat que implementa el cas d'ús de **cerca de cuiners i plats**, accessible via web. Consulta el `README.md` intern de la carpeta per instruccions d'execució.

### 📊 Presentacions
Carpeta [`/Presentació`](/Presentació). Hi ha les diapositives presentades en cada una de les quatre sessions de Sprint Review.

### 📁 Enunciat del projecte
Carpeta [`/others`](/others). Hi ha el PDF oficial de l'enunciat de les pràctiques proporcionat pel professorat.

---

## Sprints i lliuraments

| Sprint | Objectiu principal | Lliurament |
|--------|--------------------|------------|
| Sprint 1 | Definició de requisits | Fitxes de requisits + Document d'especificacions v1 |
| Sprint 2 | Document SRS + Diagrames de casos d'ús | SRS complet + Diagrames CU |
| Sprint 3 | Especificacions CU + Diagrama de classes | Descripcions CU + Diagrama de classes |
| Sprint 4 | Diagrames de seqüència | Diagrames de seqüència |

---

## Eines utilitzades

| Eina | Ús |
|------|----|
| **GitHub** | Repositori i control de versions |
| **Trello** | Gestió de tasques i burn-down chart |
| **PlantUML** | Generació de diagrames UML |
| **Node.js + Docker** | Prototip funcional de l'aplicació |
| **Markdown** | Documentació de requisits i actes |