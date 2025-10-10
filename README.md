# WhatsAppOrigV5

WhatsAppOrigV5 is an open-source project that enables you to run a local server to interact with WhatsApp Web features, send automated messages, and handle billing functionalities—all customizable right from your own environment.

<p align="center">
  <img src="https://img.shields.io/badge/node-%3E%3D22.22-brightgreen?style=flat-square" />
  <img src="https://img.shields.io/badge/npm-%3E%3D9.0.0-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/license-MIT-purple?style=flat-square" />
</p>

---

## Table of Contents

- [Features](#features)
- [Summary: Quick Start](#summary-quick-start)
- [🚀 Getting Started](#-getting-started)
- [▶ Running the Server](#-running-the-server)
- [⚡ Example Workflows](#️-example-workflows)
- [🔖 Changelog](#-changelog)
- [🤝 Contributing](#-contributing)
- [📒 License](#-license)

---

## ✨ Features

- 🟢 Rapid local setup for WhatsApp automation and billing
- 🗒️ Simple and environment-based configuration
- 📤 Reliable WhatsApp message & link sending with confirmation
- 📑 Generate PDF bills easily
- 📊 Built-in dashboard and visitor analytics (via UI)
- 🔀 Update-ready and versioned for easy tracking

---

## Summary: Quick Start

1. **Clone the repo**  
   `git clone https://github.com/keshavsoft/WhatsAppOrigV5`

2. **Install required packages**  
   `cd WhatsAppOrigV5 && npm install`  

3. **Update scripts (one-time)**  
   Remove `<--env-file=.env>` from `package.json` if present for local setup.

4. **Start the server**  
   `npm run start`  
   _Server runs at_ [`http://localhost:3000`](http://localhost:3000)

5. **[Optional] Use environment config**  
   Copy `.env.local` → `.env` and customize as needed.

6. **Node.js v22.22 or above is required!**  
   _Check your version with:_ `node --version`

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/keshavsoft/WhatsAppOrigV5
cd WhatsAppOrigV5
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Update Package Scripts

- Open `package.json`
- **Remove** `--env-file=.env` from the scripts for local development, otherwise, you may encounter unknown script errors.

---

## ▶ Running the Server

### 4. Start the Server

Start the app using:

```bash
npm start
```

- The server will be available at: [http://localhost:3000](http://localhost:3000)

### 5. (Optional) Configure Environment Variables

For custom setups:

1. Duplicate `.env.local` as `.env` (`cp .env.local .env`)
2. Edit the new `.env` file to suit your requirements (e.g., WhatsApp authentication, ports, feature toggles).
3. Restart the server:

   ```bash
   npm start
   ```

### 6. Node.js Version

- Ensure that you are using **Node.js v22.22 or above** for all functionalities to work correctly:

  ```
  node --version
  ```

---

## ⚡ Example Workflows

- Bills can be sent directly via WhatsApp, with PDF attachment generation and status feedback in the UI.
- Environment variables like `WASendMessageTF` control automation toggles.
- Billing tables, total calculations, and error handling available out of the box.
- Visitor analytics displayed in the web dashboard (`Public/WhatsApp/V7/index.html`).

---

## 🔖 Changelog

> _Key milestones and improvements tracked since v2. Major/minor releases enhance automation, billing, UI, and error handling._

<details>
  <summary>Click to expand detailed changelog</summary>

- **1.1.1** – v2 started...
- **1.1.2** – Simple billing working good
- **1.1.3** – Projects WaV3 started
- **1.1.4** – WaV3 bill sent successfully
- **1.1.5** – WA bill sent with confirmation in data
- **1.1.6** – WA tables added
- **1.1.7** – V7: only non-secure for array
- **1.1.8** – WA automatic messages (from .env: `WASendMessageTF`)
- **1.1.9** – Bill: perfect PDF creation
- **1.1.10** – WA send link in UI as well
- **1.1.11** – WA send perfect with port
- **1.1.12** – WA send: sandbox added
- **1.1.13** – Bill: total added to header; V10 added
- **1.1.14** – Bill: pending WA sent status display
- **1.1.15** – API V11 added; WA send perfect from UI
- **1.1.16** – Bill V8 started, save repeat stopped; error handling in progress
- **1.1.17** – Bill V8 fix: index error corrected
- **1.1.18** – Bill V9: advanced error handling in index.html
- **1.1.19** – Bill V9: item/rate error resolution
- **1.1.20** – New V12 features added (in development as of yesterday)

</details>

---

## 🤝 Contributing

Pull requests and feedback are always welcome. Please open issues for suggestions, bugs, or feature requests!

---

## 📒 License

© 2023 Keshav Soft. Released under the MIT license.

---
