# Game Design Document — Preživetje vampirjev

## 1. Osnovni podatki

| Polje | Vsebina |
|-------|---------|
| Naslov igre | Preživetje vampirjev |
| Avtor / ekipa | David Ocvirk |
| Žanr | Top-down survival |
| Platforma | Spletni brskalnik (HTML5 Canvas in JavaScript) |
| Ciljna dolžina ene seje | 5–10 minut |
| Datum / verzija GDD | 3. 11. 2026 / 1.0 |

## 2. Kratek opis

Igralec nadzoruje lik, ki mora preživeti čim dlje v areni, polni sovražnikov. Sovražniki se igralcu približujejo, igralec pa jih avtomatsko napada. Cilj je preživeti čim dlje in doseči čim višji rezultat.

## 3. Tema

- Svet in ton: fantazijski svet, v katerem se igralec bori proti vedno večjemu številu sovražnikov.
- Referenčne igre: Vampire Survivors, 20 Minutes Till Dawn.
- Preprosta 2D-grafika na platnu ustreza prikazu igralca, sovražnikov in napadov.

## 4. Jedrne mehanike

| Mehanika | Vhod | Pravilo | Povratna informacija |
|----------|------|---------|----------------------|
| Premikanje | WASD ali puščične tipke | Igralec se premika po areni; diagonalna hitrost je normalizirana. | Lik se premika po platnu. |
| Sprint | Shift | Začasno poveča hitrost igralca. | Lik se premika hitreje. |
| Napad | Samodejno | Igralec samodejno napada bližnje sovražnike. | Projektili in učinki zadetkov. |
| Škoda in zdravje | Dotik sovražnika | Sovražniki ob stiku povzročijo škodo; pri 0 HP je igre konec. | Prikaz zdravja in zaslon za konec igre. |
| Napredovanje | Čas in premagani sovražniki | Sčasoma se pojavijo težji valovi in rezultat narašča. | Prikaz rezultata in vala. |

## 5. Igralec

- Velikost: 32 × 32 pikslov; začetni položaj je na sredini platna.
- Hitrost: 220 pikslov na sekundo; Shift jo pomnoži z 1,6.
- Zdravje: ciljna začetna vrednost 100 HP; še ni implementirano.
- Orožje: osnovni samodejni napad; še ni implementiran.
- Omejitve: igralec ostane znotraj arene in se ne more premikati skozi zidove.

## 6. Sovražniki in ovire

- Sovražniki naj zasledujejo igralca; različni tipi se razlikujejo po hitrosti in zdravju.
- Prototip trenutno prikazuje sovražnika in obravnava trke z njim.
- Zidovi so ovire, skozi katere igralec ne more.
- Valovi, različni tipi sovražnikov in nagrade še niso implementirani.

## 7. Napredek in težavnost

- Rezultat naj nagrajuje preživetje in premagane sovražnike.
- Igra naj postopoma povečuje težavnost z novimi valovi.
- Zmaga: ni predvidena; cilj je doseči čim višji rezultat.
- Poraz: zdravje igralca pade na 0; sistem zdravja še ni implementiran.

## 8. Stanja igre

- `PLAYING`: igralec igra; to je trenutno začetno stanje prototipa.
- `PAUSED`: igralna zanka ustavi posodabljanje; stanje se preklaplja s tipko P.
- `MENU` in `GAME_OVER`: predvideni stanji, ki še nimata uporabniškega vmesnika.

## 9. Uporabniški vmesnik

- Med igro: temno platno z igralcem, sovražniki in zidovi.
- Kontrole: WASD ali puščice za premikanje, Shift za sprint in P za premor.
- Prikaz zdravja, rezultata, valov in zaslon za konec igre še niso implementirani.

## 10. Asseti

Zunanji asseti niso uporabljeni. Prototip igralca, sovražnike, zidove in ozadje riše z HTML Canvasom. Zvočni učinki in dodatni grafični asseti še niso vključeni.

## 11. Tehnični okvir

- Datoteke: `index.html`, `style.css` in moduli v `js/` (`config.js`, `collision.js`, `enemies.js`, `world.js`, `input.js`, `player.js`, `render.js`, `game.js`).
- Uporabljena sta HTML Canvas in osnovni JavaScript; zunanje knjižnice niso vključene.
- Igralna zanka uporablja `requestAnimationFrame` in delta time.

## 12. Nadaljnji razvoj

1. Dodati zdravje igralca in sovražnikov ter povratne informacije ob zadetku.
2. Implementirati samodejno orožje in projektile.
3. Dodati zasledovanje igralca, valove in točkovanje.
4. Izdelati meni, HUD in zaslon za konec igre.

## 13. Tveganja in plan B

- Tveganje: več sistemov (napadi, valovi in zdravje) lahko oteži uravnoteženje igre.
- Minimalna različica: ohraniti delujoče premikanje, zidove, sovražnika in trke; napade in valove dodajati postopoma.

## 14. Dnevnik sprememb

| Datum | Sprememba |
|-------|-----------|
| 21. 10. 2026 | Zabeležen začetni prototip premikanja igralca. |
| 3. 11. 2026 | Dodana zasnova igre Preživetje vampirjev. |
