const PATTERNS = [
  { name: "GitHub Token",     regex: /ghp_[a-zA-Z0-9]{36}/ },
  { name: "AWS Access Key",   regex: /AKIA[0-9A-Z]{16}/ },
  { name: "Private Key",      regex: /-----BEGIN (RSA|EC|DSA) PRIVATE KEY-----/ },
  { name: "Generic API Key",  regex: /api[_-]?key\s*=\s*['"][a-zA-Z0-9]{16,}['"]/i },
  { name: "Password in code", regex: /password\s*=\s*['"][^'"]{6,}['"]/i },
  { name: "MongoDB URI",      regex: /mongodb(\+srv)?:\/\/[^:]+:[^@]+@/ },
  { name: "Generic Secret",   regex: /secret\s*=\s*['"][a-zA-Z0-9]{8,}['"]/i },
];

module.exports = PATTERNS;