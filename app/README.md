# ES26UAB-451-01
Cas d'ús de busqueda de cuiners i plats

## Requisits
- Tindre instal·lat Docker

## Com executar el projecte

1. Construir la imatge Docker:
```bash
docker build -t use-case-quemenges .
```

2. Executar el contenidor
```bash
docker run -p 3000:3000 use-case-quemenges
