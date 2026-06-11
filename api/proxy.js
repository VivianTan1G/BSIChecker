export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') { res.status(200).end(); return; }
 
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx2Cox_EL7EXoTfFJtu8bVfU4i-mgzyVGsm8zt095p1pZOHWiLyMJo1aB7F1JyTQZcNXQ/exec';
  try {
    const params = new URLSearchParams(req.query).toString();
    const url = SCRIPT_URL + (params ? '?' + params : '');
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ status: 'error', msg: err.message });
  }
}
