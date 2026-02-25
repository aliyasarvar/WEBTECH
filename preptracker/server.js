const http = require('http');
const fs = require('fs');
const path = require('path');
const { EventEmitter } = require('events');

// ─── DB (JSON file) ───────────────────────────────────────────────
const DB_PATH = path.join(__dirname, 'db.json');

function loadDB() {
  if (!fs.existsSync(DB_PATH)) {
    const initial = {
      notes: [],
      goals: [],
      companies: [],
      checkedTopics: {},
      skills: {
        dsa: [
          { name: 'Arrays & Strings', pct: 90, color: '#ff6b35' },
          { name: 'Trees & Graphs', pct: 75, color: '#ff6b35' },
          { name: 'DP', pct: 60, color: '#ff6b35' },
          { name: 'Backtracking', pct: 65, color: '#ff6b35' },
          { name: 'Linked Lists', pct: 85, color: '#ff6b35' }
        ],
        sd: [
          { name: 'Load Balancing', pct: 55, color: '#a855f7' },
          { name: 'Caching', pct: 65, color: '#a855f7' },
          { name: 'Databases', pct: 70, color: '#a855f7' },
          { name: 'Microservices', pct: 45, color: '#a855f7' },
          { name: 'Message Queues', pct: 40, color: '#a855f7' }
        ],
        cs: [
          { name: 'Operating Systems', pct: 80, color: '#3b82f6' },
          { name: 'DBMS', pct: 85, color: '#3b82f6' },
          { name: 'Computer Networks', pct: 70, color: '#3b82f6' },
          { name: 'OOP Concepts', pct: 88, color: '#3b82f6' },
          { name: 'Compiler Design', pct: 55, color: '#3b82f6' }
        ],
        apt: [
          { name: 'Quantitative', pct: 70, color: '#f59e0b' },
          { name: 'Logical Reasoning', pct: 72, color: '#f59e0b' },
          { name: 'Verbal Ability', pct: 68, color: '#f59e0b' },
          { name: 'Data Interpretation', pct: 55, color: '#f59e0b' }
        ],
        soft: [
          { name: 'Communication', pct: 78, color: '#10b981' },
          { name: 'Problem Solving', pct: 82, color: '#10b981' },
          { name: 'Teamwork', pct: 85, color: '#10b981' }
        ]
      }
    };
    fs.writeFileSync(DB_PATH, JSON.stringify(initial, null, 2));
  }
  return JSON.parse(fs.readFileSync(DB_PATH, 'utf8'));
}

function saveDB(db) {
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
}

// ─── MIME types ───────────────────────────────────────────────────
const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf'
};

// ─── Helpers ──────────────────────────────────────────────────────
function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => data += chunk);
    req.on('end', () => {
      try { resolve(data ? JSON.parse(data) : {}); }
      catch (e) { reject(e); }
    });
    req.on('error', reject);
  });
}

function sendJSON(res, status, data) {
  const body = JSON.stringify(data);
  res.writeHead(status, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
  res.end(body);
}

function serveStatic(res, filePath) {
  const ext = path.extname(filePath);
  const mime = MIME[ext] || 'application/octet-stream';
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': mime });
    res.end(data);
  });
}

// ─── Router ───────────────────────────────────────────────────────
async function handleRequest(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;
  const method = req.method;

  // CORS preflight
  if (method === 'OPTIONS') {
    res.writeHead(204, { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE', 'Access-Control-Allow-Headers': 'Content-Type' });
    res.end(); return;
  }

  // ── API routes ──────────────────────────────────────────────────

  // NOTES
  if (pathname === '/api/notes' && method === 'GET') {
    const db = loadDB();
    return sendJSON(res, 200, db.notes);
  }
  if (pathname === '/api/notes' && method === 'POST') {
    const body = await readBody(req);
    const db = loadDB();
    const note = { id: Date.now(), title: body.title || 'Untitled', tag: body.tag || 'General', body: body.body || '', date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) };
    db.notes.unshift(note);
    saveDB(db);
    return sendJSON(res, 201, note);
  }
  if (pathname.startsWith('/api/notes/') && method === 'PUT') {
    const id = parseInt(pathname.split('/')[3]);
    const body = await readBody(req);
    const db = loadDB();
    const idx = db.notes.findIndex(n => n.id === id);
    if (idx === -1) return sendJSON(res, 404, { error: 'Not found' });
    db.notes[idx] = { ...db.notes[idx], ...body, id };
    saveDB(db);
    return sendJSON(res, 200, db.notes[idx]);
  }
  if (pathname.startsWith('/api/notes/') && method === 'DELETE') {
    const id = parseInt(pathname.split('/')[3]);
    const db = loadDB();
    db.notes = db.notes.filter(n => n.id !== id);
    saveDB(db);
    return sendJSON(res, 200, { deleted: id });
  }

  // GOALS
  if (pathname === '/api/goals' && method === 'GET') {
    const db = loadDB();
    return sendJSON(res, 200, db.goals);
  }
  if (pathname === '/api/goals' && method === 'POST') {
    const body = await readBody(req);
    const db = loadDB();
    const goal = { id: Date.now(), title: body.title, cat: body.cat, status: 'pending' };
    db.goals.push(goal);
    saveDB(db);
    return sendJSON(res, 201, goal);
  }
  if (pathname.startsWith('/api/goals/') && method === 'PUT') {
    const id = parseInt(pathname.split('/')[3]);
    const body = await readBody(req);
    const db = loadDB();
    const idx = db.goals.findIndex(g => g.id === id);
    if (idx === -1) return sendJSON(res, 404, { error: 'Not found' });
    db.goals[idx] = { ...db.goals[idx], ...body, id };
    saveDB(db);
    return sendJSON(res, 200, db.goals[idx]);
  }
  if (pathname.startsWith('/api/goals/') && method === 'DELETE') {
    const id = parseInt(pathname.split('/')[3]);
    const db = loadDB();
    db.goals = db.goals.filter(g => g.id !== id);
    saveDB(db);
    return sendJSON(res, 200, { deleted: id });
  }

  // COMPANIES
  if (pathname === '/api/companies' && method === 'GET') {
    const db = loadDB();
    return sendJSON(res, 200, db.companies);
  }
  if (pathname === '/api/companies' && method === 'POST') {
    const body = await readBody(req);
    const db = loadDB();
    const co = { id: Date.now(), name: body.name, role: body.role, status: body.status || 'Shortlisted', prep: 10, color: body.color || '#ff6b35', emoji: (body.name || 'C')[0].toUpperCase(), topics: [], notes: '' };
    db.companies.push(co);
    saveDB(db);
    return sendJSON(res, 201, co);
  }
  if (pathname.startsWith('/api/companies/') && method === 'PUT') {
    const id = parseInt(pathname.split('/')[3]);
    const body = await readBody(req);
    const db = loadDB();
    const idx = db.companies.findIndex(c => c.id === id);
    if (idx === -1) return sendJSON(res, 404, { error: 'Not found' });
    db.companies[idx] = { ...db.companies[idx], ...body, id };
    saveDB(db);
    return sendJSON(res, 200, db.companies[idx]);
  }
  if (pathname.startsWith('/api/companies/') && method === 'DELETE') {
    const id = parseInt(pathname.split('/')[3]);
    const db = loadDB();
    db.companies = db.companies.filter(c => c.id !== id);
    saveDB(db);
    return sendJSON(res, 200, { deleted: id });
  }

  // SKILLS (checklist topics)
  if (pathname === '/api/skills/topics' && method === 'GET') {
    const db = loadDB();
    return sendJSON(res, 200, db.checkedTopics || {});
  }
  if (pathname === '/api/skills/topics' && method === 'PUT') {
    const body = await readBody(req);
    const db = loadDB();
    db.checkedTopics = body;
    saveDB(db);
    return sendJSON(res, 200, db.checkedTopics);
  }

  // SKILLS levels
  if (pathname === '/api/skills' && method === 'GET') {
    const db = loadDB();
    return sendJSON(res, 200, db.skills);
  }
  if (pathname === '/api/skills' && method === 'PUT') {
    const body = await readBody(req);
    const db = loadDB();
    db.skills = body;
    saveDB(db);
    return sendJSON(res, 200, db.skills);
  }

  // RESUME upload (multipart - simple handler)
  if (pathname === '/api/resume/upload' && method === 'POST') {
    // Just acknowledge - no npm multer available
    return sendJSON(res, 200, { message: 'Resume upload endpoint ready. Install multer for full file handling.' });
  }

  // ── Static files ─────────────────────────────────────────────────
  let filePath = pathname === '/' ? '/Landing.html' : pathname;
  const fullPath = path.join(__dirname, filePath);

  // Security: prevent directory traversal
  if (!fullPath.startsWith(__dirname)) {
    res.writeHead(403); res.end('Forbidden'); return;
  }

  serveStatic(res, fullPath);
}

// ─── Start server ─────────────────────────────────────────────────
const PORT = 3000;
const server = http.createServer((req, res) => {
  handleRequest(req, res).catch(err => {
    console.error('Error:', err);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Internal Server Error' }));
  });
});

server.listen(PORT, () => {
  console.log(`\n✅ PrepTracker backend running at http://localhost:${PORT}`);
  console.log('   Pages: /index.html  /notes.html  /goals.html  /companies.html  /skills.html  /resume.html');
  console.log('   API:   /api/notes   /api/goals   /api/companies   /api/skills\n');
});
