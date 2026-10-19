# MELKY / VISUAL ARCHIVE — V18

## Run locally

```sh
pnpm install
pnpm dev
```

Build the static site with `pnpm build`. The build prepares the existing local portfolio media for Vite before bundling.

## V18 art direction and ThreeUI

The portfolio keeps its original content, career history, project archive, filtering, lightbox, video feed, and three persona section. The visual system now uses a competitive broadcast-poster language inspired by the supplied Valorant reference: signal red, warm white, charcoal, and yellow; clipped panels; match-card framing; and angular separators.

ThreeUI Community components add motion in two restrained areas: `DefenseLines` behind the hero portrait and `InterfaceLines` behind Selected Work. Both effects are deferred until their sections enter view. The original portfolio media and artwork remain the primary content.

The static content is mounted through Vite and React so the ThreeUI package can be used without replacing the portfolio's existing data-driven gallery.

---

## Previous visual iterations

The People Behind Melky section now uses the three persona portraits from the previously generated portfolio concept visual:
1. Melky Y — CEO
2. Myur — Chief Creative
3. Melky Yurdiansyah — Chief Strategic

The portraits were extracted from the previously generated concept artwork and placed into the live website section so the website matches that earlier visual direction.

Run with START_V11.bat or:
python -m http.server 5521
then open http://127.0.0.1:5521/


## V12 visual adjustment
The opening Visual Practice → Selected Work area was tightened:
- reduced vertical padding
- reduced intro-to-gallery gap
- compacted gallery gaps
- constrained oversized media height
- preserved mixed aspect ratios
- designed the first visual field as a denser contact-sheet/kaleidoscope rather than large isolated cards


## V13 visual adjustment
The Selected Work gallery was rebuilt as a dense 4-column art-directed grid:
- landscape pieces span 2 columns
- portrait/square pieces span 1 column
- CSS dense packing removes the large row gaps visible in V12
- artwork keeps distinct proportions through fixed media ratios
- only subtle vertical offsets remain for a kaleidoscope/contact-sheet rhythm


## V14 visual adjustment
Selected Work now uses a true masonry/contact-sheet composition instead of CSS Grid rows. This removes the large empty row areas caused by different artwork heights while preserving varied media proportions and a compact kaleidoscope rhythm.


## V15 People Behind Melky
The People Behind Melky section now uses portrait imagery derived from the previously generated art direction:
- Melky Y — CEO: executive portrait
- Myur — Chief Creative: long-hair creative portrait
- Melky Yurdiansyah — Chief Strategic: fresh strategic portrait

The section was also rebuilt as a three-column image-first editorial layout rather than the previous oversized persona blocks.


## V16 People section
Implemented the first generated image direction as the actual People Behind Melky website section:
- three portrait panels
- image-first composition
- focus keywords overlaid on portraits
- role aligned beside each name
- concise editorial descriptor below
- same cream / black / electric-blue visual system


## V17 Instagram motion
The Instagram section now uses the supplied `IG Melky.mp4` as a native looping video inside a Mac-style window:
- autoplay
- muted
- loop
- playsinline
- local asset, no conversion required
- Mac traffic-light header and browser-like footer
