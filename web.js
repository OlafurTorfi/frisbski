import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = Number(process.env.PORT || 5000)
const host = process.env.HOST || '0.0.0.0'

// Serve the Vite build output.
app.use(express.static(path.join(__dirname, 'dist'), { extensions: ['html'] }))

// SPA fallback.
app.get(/.*/, (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(port, host, () => {
  console.log(`listening on http://${host}:${port}`)
})
