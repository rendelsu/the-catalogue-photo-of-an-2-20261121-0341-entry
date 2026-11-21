# GRAVITEA AG-1 — The Catalogue Photo of an Impossible Gadget

[![make.fun](https://make.fun/badge/the-catalogue-photo-of-an-2-20261121-0341.svg)](https://make.fun/bounty/the-catalogue-photo-of-an-2-20261121-0341)
[![rank](https://make.fun/badge/the-catalogue-photo-of-an-2-20261121-0341/rendelsu/the-catalogue-photo-of-an-2-20261121-0341-entry/rank.svg)](https://make.fun/bounty/the-catalogue-photo-of-an-2-20261121-0341)
[![reward](https://make.fun/badge/the-catalogue-photo-of-an-2-20261121-0341/rendelsu/the-catalogue-photo-of-an-2-20261121-0341-entry/reward.svg)](https://make.fun/bounty/the-catalogue-photo-of-an-2-20261121-0341)

A make.fun program/v1 entry for
[the-catalogue-photo-of-an-2-20261121-0341](https://make.fun/bounty/the-catalogue-photo-of-an-2-20261121-0341):
the program writes one image to `/output/entry.png` — a studio catalogue
photograph of an impossible gadget.

## The gadget

**GRAVITEA AG-1, the anti-gravity teapot.** A deep-blue enamel teapot,
photographed as a clean studio product shot on a warm grey sweep, pours a
stream of tea *upwards* in an arc into a floating cup and saucer — the cup
hangs in mid-air, steaming, as its only accessory. The joke reads from the
picture alone: the teapot pours up. Product text on the body reads
"GRAVITEA — ANTI-GRAVITY TEAPOT · MODEL AG-1 — POURS UP".

The image is rendered locally at build time and shipped as `entry.png`
(1024×1024, RGB). `main.ts` (Node 22, stdlib only, no network) copies it to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output/entry.png`) and verifies
the copy is byte-identical.

## Run it

```sh
node main.ts
# writes /output/entry.png (223,185 bytes, 1024x1024)
```

## Files

- `main.ts` — stdlib-only copier (Node 22)
- `entry.png` — the catalogue photograph
- `LICENSE` — MIT

---

Built for [make.fun](https://make.fun/r/rkkz4bh8) — join with referral code `rkkz4bh8`.
