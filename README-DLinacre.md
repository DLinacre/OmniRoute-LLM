# DLinacre / OmniRoute Android Build — LLM.apk

**Forked from:** [diegosouzapw/OmniRoute v3.8.48](https://github.com/diegosouzapw/OmniRoute)  
**GitHub Account:** `DLinacre`  
**Target APK:** `LLM.apk` (debug build, auto-renamed from `debug.apk`)  
**License:** MIT (inherited from upstream)

---

## What is this?

This repository prepares the [OmniRoute](https://github.com/diegosouzapw/OmniRoute) open-source AI gateway (v3.8.48) for Android via a **Capacitor/Ionic native wrapper**. The output is a native Android APK named exactly **`LLM.apk`**.

- **Includes the full upstream README** (`README.md` — original 93KB readme preserved unchanged)
- **Auto-build & deploy** via GitHub Actions (`.github/workflows/build-llm-apk.yml`)
- **Debug APK output** renamed to `LLM.apk` on every release tag (`v*`) and on manual workflow triggers

---

## Project Structure (DLinacre modifications)

| File / Folder | Purpose |
|---|---|
| `README.md` | Original OmniRoute readme (included as requested) |
| `README-DLinacre.md` | This file — fork notes, APK build info |
| `capacitor.config.json` | Capacitor Android wrapper config (`appName: LLM`, `appId: com.dlinacre.llm`) |
| `.github/workflows/build-llm-apk.yml` | Auto-build workflow (Node 24, Java 17, Android SDK 35) |
| `scripts/build-android.sh` | Local build script (`bash scripts/build-android.sh`) |
| `package.json` | Added `build:android`, `build:android:apk`, `build:llm-apk` scripts |

---

## Quick Start (Local Build)

```bash
# 1. Clone / use this repo
# 2. Install dependencies
npm ci

# 3. Build web bundle + sync Capacitor
npm run build:android

# 4. Build the APK (outputs LLM.apk)
npm run build:llm-apk

# Or run the script directly:
bash scripts/build-android.sh
```

The final `LLM.apk` will appear in the repo root (`/LLM.apk`).

---

## Auto Build & Deploy (GitHub Actions)

The workflow `.github/workflows/build-llm-apk.yml` runs on:

- Every push to `main` / `master` / `release/*`
- Every tag starting with `v*`
- Every Pull Request
- Manual trigger (`workflow_dispatch`) with build profile selection (`full` / `minimal` / `backend`)

**Outputs:**
- `LLM.apk` uploaded as a workflow artifact (retention: 30 days)
- On tag pushes (`v*`), `LLM.apk` is attached to the GitHub Release automatically

---

## APK Details

| Property | Value |
|---|---|
| **File name** | `LLM.apk` |
| **App name** | `LLM` |
| **Package ID** | `com.dlinacre.llm` |
| **Build type** | `debug` |
| **Min SDK** | 24 (Android 7.0) |
| **Target SDK** | 35 (Android 15) |
| **Wrapper** | Capacitor 7 / Android 8 |
| **Web runtime** | Next.js standalone server loaded via Capacitor's local server (`localhost:20128`) |

> **Note:** Because OmniRoute is a full Next.js server application (not a pure static site), the APK uses Capacitor's **server mode** to load the application. The server starts locally inside the Android container. Full native conversion (offline static export) would require removing server-side APIs, which is not feasible without heavy refactoring of the upstream codebase.

---

## Original README Included

The upstream `README.md` (v3.8.48) is preserved in full. It includes:

- 248 AI providers / 90+ free tiers documentation
- Quick start (`npm install -g omniroute` / `omniroute`)
- Docker, Electron, Termux, PWA guides
- Routing strategies, compression guides, security docs
- Full feature list, screenshots, and community links

See `README.md` for complete upstream documentation.

---

## Upstream Source

- **Repo:** `https://github.com/diegosouzapw/OmniRoute`
- **Tag used:** `v3.8.48`
- **Release page:** `https://github.com/diegosouzapw/OmniRoute/releases/tag/v3.8.48`

---

## License

MIT — same as upstream OmniRoute.
