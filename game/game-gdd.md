# Game Design Document — predloga (P16)

Izpolni med tednom 1 in dopolnjuj skozi semester.  
Tedni 01–08 (skupna baza): **Top-down Zombie Survival** (alternativa: **Dungeon Escape**).  
Projektna faza: **lastna igra** — posodobi ta GDD (ali naredi novega), da se ujema s tem, kar res oddajaš.

---

## 1. Osnovni podatki

| Polje | Vsebina |
|-------|---------|
| Naslov igre | Preživetje Vampirjev|
| Avtor / ekipa | David Ocvirk|
| Žanr | top-down survival|
| Platforma | brskalnik (HTML5 Canvas + JS) |
| Ciljna dolžina ene seje | 5–10 min |
| Datum / verzija GDD | |

## 2. Elevator pitch (2–3 stavki)

Igralec nadzoruje lik, ki mora preživeti čim dlje v areni, polni sovražnikov. Sovražniki se igralcu približujejo, igralec pa jih avtomatsko napada. Cilj igre je preživeti čim dlje in doseči čim višji rezultat.

## 3. Fantazija / tema

- Svet in ton (npr. mesto ponoči, podzemlje …): Fantazijski svet, v katerem se igralec bori proti vedno večjemu številu sovražnikov.
- Referenčne igre (2–3): Vampire Survivors, 20 Minutes Till Dawn.
- Zakaj Canvas / ta sklop mehanik ustreza temi: Preprosta 2D grafika, premikanje igralca in sovražnikov ter prikaz napadov.

## 4. Jedrne mehanike

Za vsako mehaniko: **vhod → pravilo → feedback**.

| # | Mehanika | Vhod | Pravilo | Feedback |
|---|----------|------|---------|----------|
| 1 | Premikanje | WASD | Igralec se premika po areni. | Premikanje lika|
| 2 | Streljanje | miška | Igralec napada sovražnike. |	Projektili |
| 3 | Škoda / HP | — | Ob dotiku sovražnika igralec izgubi HP. | 	Prikaz HP |
| 4 | Valovi / napredek | — | … | … |
| 5 | *(tvoja)* | | | |

## 5. Igralec

- Velikost / hitrost (začetne vrednosti): Srednja velikost, normalna hitrost.
- Zdravje: 100 HP.
- Orožje / cooldown: Osnovno avtomatsko orožje.
- Omejitve: Igralec ne sme zapustiti igralne arene.

## 6. Sovražniki / ovire

| Tip | Vedenje | HP | Hitrost | Nagrada (score) |
|-----|---------|----|--------|-----------------|
| walker | sledi | | | |
| runner | sledi hitro | | | |
| *(opcijsko)* | | | | |

Za **Dungeon Escape**: namesto valov opiši sobe, ključe, izhod.

## 7. Napredek in težavnost

- Score:
- Valovi / sobe:
- Kako se otežuje:
- Win condition (če obstaja) / lose condition:

## 8. Stanja igre

- `MENU` → `PLAYING` → `GAME_OVER` (in morebiti `PAUSE`):
- Kaj vidi igralec v vsakem stanju:

## 9. UI / HUD

- Med igro (HP, score, val …):
- Meni / game over:
- Dostopnost (kontrast, velikost besedila):

## 10. Asseti

| Asset | Opis | Vir / licenca | Status |
|-------|------|---------------|--------|
| sprite igralec | | | |
| sprite sovražnik | | | |
| SFX strel | | | |
| … | | | |

## 11. Tehnični okvir

- Datoteke: `index.html`, `style.css`, `game.js`, `assets/`
- Brez Phaser / Three.js (dogovor predmeta)
- Znane omejitve:

## 12. Lastna igra (projektna faza)

Po tednu 8: lastna igra, ne dodatni tedni polisha skupne baze kot glavni cilj. Glej `projekt/BRIEF.md`.

- Izhodišče: baza tedna 8 / nova Canvas igra:
- Ideja / pitch:
- Zakaj je doable v preostanku semestra:
- Merilo “končano” (vertical slice + demo):
- Asseti (sprite/zvok, vir, licenca):

## 13. Tveganja in plan B

- Kaj lahko odpade, če zmanjka časa:
- Minimalni igrivi rez (MVP):

## 14. Dnevnik sprememb GDD

| Datum | Spremeba |
|-------|----------|
| | Prva verzija |
| | |

---

*Oddaja: ta GDD + povezava do repozitorija. Posodobi pred demom lastne igre (`projekt/`).*
