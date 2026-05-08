# 🏔️ FiveM Alpine Boilerplate

A clean, minimal boilerplate for building FiveM resources with [Alpine.js](https://alpinejs.dev/) — perfect for quickly spinning up NUI (New User Interface) panels without heavy frameworks.

---

## 📦 Stack

| Layer | Technology |
|-------|-----------|
| UI Framework | [Alpine.js](https://alpinejs.dev/) |
| Markup | HTML |
| Styling | CSS |
| Scripting | JavaScript |
| Game Scripts | Lua (FiveM / GTA V) |

---

## 📁 Project Structure

```
fivem-alpine-boilerplate/
├── client/           # Client-side Lua scripts
├── server/           # Server-side Lua scripts
├── web/
│   ├── index.html    # NUI entry point
│   └── dist/         # Built/static web assets
└── fxmanifest.lua    # FiveM resource manifest
```

---

## 🚀 Getting Started

### Prerequisites

- A running [FiveM](https://fivem.net/) server
- Basic knowledge of Lua and HTML/JS

### Installation

1. Clone the repository into your server's `resources` folder:

```bash
git clone https://github.com/NoCapScripts-FiveM/fivem-alpine-boilerplate.git
```

2. Rename the folder to your resource name (e.g. `my-resource`).

3. Add it to your `server.cfg`:

```
ensure my-resource
```

4. Start your server and the resource will load automatically.

---

## 🛠️ Development

### NUI (Web UI)

The NUI entry point is `web/index.html`. All static assets served to the game client should be placed under `web/dist/` — these are included via the manifest.

Alpine.js is loaded directly in the HTML, so no build step is required for basic usage. Just write your components using `x-data`, `x-bind`, `x-on`, etc.

### Communicating with Lua

**Lua → NUI (sending data to the UI):**

```lua
SendNUIMessage({
    action = "show",
    data = { message = "Hello from Lua!" }
})
```

**NUI → Lua (sending data back from the UI):**

```javascript
fetch(`https://${GetParentResourceName()}/callback`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ key: 'value' })
});
```

**Registering a NUI callback in Lua:**

```lua
RegisterNUICallback('callback', function(data, cb)
    print(data.key)
    cb({ success = true })
end)
```

### Showing / Hiding the UI

```lua
-- Show
SetNuiFocus(true, true)
SendNUIMessage({ action = "show" })

-- Hide
SetNuiFocus(false, false)
SendNUIMessage({ action = "hide" })
```

---

## ✏️ Customisation

- **Add client logic** → `client/` directory (register commands, key binds, event handlers)
- **Add server logic** → `server/` directory (handle player data, callbacks, etc.)
- **Add scripts/events** to `fxmanifest.lua` under the relevant section:

```lua
client_script {
    'client/main.lua'
}

server_script {
    'server/main.lua'
}

shared_script {
    'shared/config.lua'
}
```

---

## 📄 Manifest Reference

```lua
fx_version 'cerulean'
author    'NoCapScripts'
game      'gta5'
lua54     'yes'
version   '1.0.0'


client_script {
    'client/main.lua'
}

server_script {
    'server/main.lua'
}

shared_script {
    'shared/config.lua'
}

ui_page 'ui/index.html'

files {
    'ui/index.html',
    'ui/assets/**',
}
```

> `lua54 'yes'` enables Lua 5.4 features including integers, bitwise operators, and to-be-closed variables.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

---

## 📝 License

This project is provided as-is for the FiveM community. See the repository for any license details.

---

*Made with ❤️ by [NoCapScripts](https://github.com/NoCapScripts-FiveM)*
