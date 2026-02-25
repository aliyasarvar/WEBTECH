# PrepTracker — Full-Stack Node.js

A placement prep tracker with a **Node.js backend** (no npm dependencies required!) and a persistent JSON database.

## 🚀 Getting Started

```bash
node server.js
```

Then open **http://localhost:3000** in your browser.

That's it — no `npm install` needed. Uses only Node.js built-in modules.

---

## 📁 Project Structure

```
preptracker/
├── server.js          ← Node.js backend (HTTP server + REST API)
├── db.json            ← Auto-created JSON database (persistent storage)
├── package.json
├── README.md
│
├── Landing.html       ← Marketing landing page
├── index.html         ← Dashboard
├── notes.html         ← Notes (connected to API)
├── goals.html         ← Daily goals (connected to API)
├── companies.html     ← Company tracker (connected to API)
├── skills.html        ← Skills & checklist (connected to API)
├── resume.html        ← Resume uploader
├── styles.css
└── app.js             ← Shared frontend JS
```

---

## 🔌 REST API Endpoints

### Notes
| Method | Endpoint           | Description         |
|--------|--------------------|---------------------|
| GET    | /api/notes         | Get all notes       |
| POST   | /api/notes         | Create a note       |
| PUT    | /api/notes/:id     | Update a note       |
| DELETE | /api/notes/:id     | Delete a note       |

### Goals
| Method | Endpoint           | Description         |
|--------|--------------------|---------------------|
| GET    | /api/goals         | Get all goals       |
| POST   | /api/goals         | Add a goal          |
| PUT    | /api/goals/:id     | Update (e.g. done)  |
| DELETE | /api/goals/:id     | Delete a goal       |

### Companies
| Method | Endpoint           | Description          |
|--------|--------------------|----------------------|
| GET    | /api/companies     | Get all companies    |
| POST   | /api/companies     | Add a company        |
| PUT    | /api/companies/:id | Update company       |
| DELETE | /api/companies/:id | Delete company       |

### Skills / Topics
| Method | Endpoint                | Description               |
|--------|-------------------------|---------------------------|
| GET    | /api/skills             | Get skill levels          |
| PUT    | /api/skills             | Update skill levels       |
| GET    | /api/skills/topics      | Get checked topics map    |
| PUT    | /api/skills/topics      | Save checked topics       |

---

## 🗄️ Database

Data is stored in `db.json` — automatically created on first run with sample data. You can back it up or edit it directly.

---

## 🔧 Optional Upgrades

To add file upload support for resumes, install:
```bash
npm install multer
```
Then update the `/api/resume/upload` route in `server.js`.

To use a real database:
```bash
npm install better-sqlite3
```
