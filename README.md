# LeakWatch

> Detecta credenciales expuestas en repositorios públicos de GitHub

![Node.js](https://img.shields.io/badge/Node.js-18+-green?style=flat-square&logo=node.js)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)

LeakWatch es una herramienta de seguridad ética que escanea repositorios públicos de GitHub en busca de credenciales expuestas accidentalmente: API keys, tokens, contraseñas y más.

---

##  ¿Qué detecta?

| Tipo | Ejemplo |
|---|---|
| GitHub Tokens | `ghp_xxxxxxxxxxxx` |
| AWS Access Keys | `AKIA...` |
| Private Keys | `-----BEGIN RSA PRIVATE KEY-----` |
| API Keys genéricas | `api_key=xxxxxxxxxxxx` |
| Contraseñas en código | `password="admin123"` |
| MongoDB URIs | `mongodb://user:pass@host` |
| Secrets genéricos | `secret=xxxxxxxxxxxx` |

---

##  Instalación

### Requisitos
- Node.js 18+
- Una cuenta de GitHub
- Un [Personal Access Token](https://github.com/settings/tokens) de GitHub con permiso `public_repo`

### Pasos

```bash
# Clona el repositorio
git clone https://github.com/76vx/leakwatch.git
cd leakwatch

# Instala las dependencias
npm install

# Configura tus variables de entorno
cp .env.example .env
# Edita .env y agrega tu GITHUB_TOKEN

# Inicia el servidor
node src/server.js
```

Luego abre tu navegador en `http://localhost:3000` 🎉

---

## Uso

1. Ingresa el **usuario u organización** de GitHub
2. Ingresa el **nombre del repositorio**
3. Haz clic en **Escanear**
4. Revisa los resultados

---

## Uso Ético

LeakWatch está diseñado exclusivamente para:

- Auditar **tus propios repositorios**
- Investigación de seguridad con **permiso explícito**
- Educación en ciberseguridad

Si encuentras credenciales expuestas en repos de terceros, notifica responsablemente al dueño antes de hacer cualquier divulgación pública.

**El uso de esta herramienta para actividades maliciosas es ilegal y contrario al propósito del proyecto.**

---

##  Stack tecnológico

- **Backend:** Node.js + Express
- **Frontend:** HTML + CSS + JavaScript vanilla
- **API:** GitHub REST API v3

---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del proyecto
2. Crea una rama: `git checkout -b feature/nueva-funcionalidad`
3. Haz commit de tus cambios: `git commit -m 'feat: nueva funcionalidad'`
4. Push a la rama: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request

---

## Licencia

MIT © [76vx](https://github.com/76vx)

---

> Construido con ❤️ como proyecto open source de ciberseguridad ética