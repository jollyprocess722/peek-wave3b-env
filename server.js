const http = require("http");
const PORT = process.env.PORT || 3000;
const val = process.env.PEEK_E2E_PROOF;
const canary = process.env.PEEK_E2E_CANARY;
const page = `<!doctype html><html><head><title>peek wave3b env proof</title><style>body{font-family:monospace;background:#0b0e14;color:#e6edf3;padding:40px}div{margin:12px 0;padding:12px;border:1px solid #30363d;border-radius:8px;max-width:640px}</style></head><body><h1>peek wave3b boot-env proof</h1><div id="proof">PEEK_E2E_PROOF: ${val === undefined ? "UNSET" : "SET, prefix=" + val.slice(0, 8) + "..., length=" + val.length}</div><div id="canary">PEEK_E2E_CANARY: ${canary === undefined ? "UNSET (expected)" : "SET (unexpected)"}</div></body></html>`;
http.createServer((req, res) => { res.writeHead(200, { "content-type": "text/html" }); res.end(page); }).listen(PORT, () => console.log("listening on", PORT));
