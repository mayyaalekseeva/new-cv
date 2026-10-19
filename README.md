# maiia-alexeeva.space

Personal site and CV of Maiia Alekseeva, product engineer in Lisbon.

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com) v4. Static output, no UI framework, a few small scripts for the interactive bits. Deployed on Vercel.

## Development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in ./dist
npm run preview  # serve the build locally
```

## Where things live

| Path | What |
| :--- | :--- |
| `src/data/cv.ts` | All the content: profile, experience, coffee years, projects, skills |
| `src/pages/index.astro` | The page layout |
| `src/components/` | Nav (with theme toggle), CV download menu, copy-email, social links, cursor glow |
| `src/styles/global.css` | Colour palette and roles for both themes, shared component styles |
| `src/lib/duration.ts` | Job lengths and the overall total, calculated from start/end months |
| `public/` | CV PDFs (EN, RU) and favicon |

## Updating

- **Content:** edit `src/data/cv.ts`. When changing jobs, give the current one an `end: 'YYYY-MM'` and add the new one with its `start`; durations update automatically.
- **CV files:** replace `public/Maiia_Alekseeva_CV.pdf` and `public/Maiia_Alekseeva_CV_RU.pdf`, keeping the names so the links keep working.
- **Colours:** change the palette in the `@theme` block of `global.css`. Components use role tokens (`ink`, `accent`, `brand`, `surface`, `feature`, ...), so both themes follow.
- **"Open to new roles" badge:** `profile.openToWork` in `src/data/cv.ts`.
