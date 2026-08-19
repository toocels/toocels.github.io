# toocels.github.io

The published copy of my personal website, served by GitHub Pages at
<https://toocels.github.io>.

**This repository is generated — don't edit it by hand.** The source lives in a
separate repo, and publishing runs `make website` there, which copies the site
into this one, commits and pushes. GitHub Pages then rebuilds on its own. Any
change made directly here is lost the next time the site is published.

## What's here

| Path | |
|---|---|
| `index.html`, `styles.css` | the landing page |
| `bps/` | shared bits — navbar, footer, base CSS and helper scripts |
| `projects/` | the projects page (`script.js` holds the list of projects) |
| `resume/` | the resume page |
| `404/` | the not-found page |
| `restricted/` | pages that aren't linked from the site |
| `why-blogs/` | blog pages |
| `images/`, `fonts/` | assets |

## Publishing

From the source repo:

```bash
make website
```

One detail worth knowing: on the way out, `resume/index.html` has its ten-digit
numbers replaced with `**********`, so contact details in the resume stay out of
the public copy. Edit the source, never this repo.
