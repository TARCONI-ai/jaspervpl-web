---
title: "¿Qué es el Model Context Protocol (MCP) y cuándo merece la pena usarlo?"
date: 2025-07-07
updated: 2026-10-31
lang: es
slug: "que-es-el-model-context-protocol-mcp"
categories: ["noticias"]
translationKey: "que-es-el-model-context-protocol-mcp"
cover: "./images/20250707_1616_Robot-futuriste-MCP_simple_compose_01jzjkvtymfg6txzckh10gy0pk.png"
coverAiGenerated: true
permalink: "/blog/noticias/que-es-el-model-context-protocol-mcp/"
section: ai
description: "Qué es el Model Context Protocol (MCP), cómo funciona, en qué se diferencia de una API y cuándo no hace falta, con ejemplos reales de uso."
draft: false
---

El Model Context Protocol (MCP) es un estándar abierto que define cómo una aplicación de IA, como Claude o ChatGPT, se conecta con herramientas y datos externos: tu correo, tu calendario, un repositorio o una base de datos. Lo publicó Anthropic en noviembre de 2024 y desde diciembre de 2025 lo gestiona la Agentic AI Foundation, dentro de la Linux Foundation. Si has conectado Gmail o Google Drive a Claude, ya lo usas.

Este artículo es para ti si trabajas con LLM y dudas entre conectar tus herramientas por MCP o programar la integración a mano. Al terminar sabrás qué opción te conviene en cada caso.

*Publiqué la primera versión en julio de 2025. La he reescrito por completo en octubre de 2026, con lo que he aprendido al usarlo.*

## ¿Qué problema resuelve el MCP?

Resuelve que cada aplicación de IA necesitaba una integración propia para cada herramienta. Si querías que tres asistentes leyeran tu calendario, alguien tenía que programar tres conectores distintos. Con el MCP, una herramienta publica un servidor una sola vez y cualquier aplicación compatible puede usarlo.

La propia especificación se inspira en el Language Server Protocol, el estándar que hizo lo mismo con los lenguajes de programación en los editores de código.

## ¿Cómo funciona?

Funciona con tres piezas que se comunican con mensajes JSON-RPC 2.0:

| Pieza | Qué es | Ejemplo |
| --- | --- | --- |
| Host | La aplicación de IA que usas | Claude, ChatGPT, un editor de código |
| Cliente | El conector dentro del host, uno por servidor | El conector de Gmail en Claude |
| Servidor | El servicio que da acceso a una herramienta o a unos datos | El servidor MCP de Google Calendar |

El servidor puede ofrecer tres cosas:

- **Herramientas (tools):** acciones que el modelo puede ejecutar, como crear un evento o enviar un diseño.
- **Recursos (resources):** datos que el modelo puede leer, como un documento o tu agenda.
- **Prompts:** plantillas de instrucciones que tú puedes lanzar.

El modelo decide cuándo usar una herramienta, y la aplicación te pide permiso antes de ejecutarla.

## ¿Cómo lo uso en mi día a día?

Lo uso sobre todo a través de los conectores de Claude: Gmail, Google Calendar, Google Drive, Canva y Framer. Dos ejemplos:

- **Presentaciones:** preparo la presentación con Claude Design y la envío a Canva por MCP para terminarla allí. Nadie ha tenido que programar una integración entre los dos: Canva publica su servidor y Claude lo usa.
- **Agenda:** Claude lee mi calendario y me prepara recordatorios a partir de lo que tengo esa semana. No tengo que copiarle nada, porque el contexto le llega por el conector.

Lo que más valoro es que el contexto llega solo. Antes pegaba en el chat el correo, la agenda o el documento. Ahora el modelo lo consulta cuando lo necesita, con los permisos que le he dado.

## ¿En qué se diferencia de una API o del function calling?

Se diferencia en quién hace la integración y cuántas veces. Una API conecta tu código con un servicio. El *function calling* deja que un modelo use funciones que tú defines dentro de tu aplicación. El MCP estandariza esas funciones para que cualquier aplicación compatible las encuentre y las use sin código nuevo.

| | API directa | Function calling | MCP |
| --- | --- | --- | --- |
| Quién la usa | Tu código | Un modelo, dentro de tu app | Cualquier app compatible |
| Integración | A medida | A medida, en cada app | Una vez por herramienta |
| Cuándo encaja | Tu app necesita un servicio concreto | Un agente con pocas herramientas propias | Herramientas que quieres usar desde varios asistentes |

## ¿Cuándo no hace falta el MCP?

No hace falta cuando tu aplicación solo necesita usar un modelo, sin darle herramientas ni datos externos.

Me pasa con Silbo, una app de dictado para Mac que he construido. Silbo transcribe mi voz en el propio Mac, y un modelo local en Ollama limpia las muletillas y repeticiones antes de pegar el texto. Silbo llama directamente a la API local de Ollama. Como el modelo no tiene que leer nada ni actuar en ningún sitio, el MCP solo añadiría una capa más.

**La regla que uso:** si el modelo tiene que usar tus herramientas, piensa en MCP. Si es tu código el que usa el modelo, basta con una llamada a la API.

## ¿Qué riesgos tiene?

El riesgo principal es que un servidor MCP puede leer tus datos y actuar en tu nombre. La especificación trata las herramientas como ejecución de código y exige que la aplicación te pida permiso antes de usarlas. También advierte que las descripciones de las herramientas no son fiables si el servidor no es de confianza: un servidor malicioso puede describir una herramienta de forma engañosa para que el modelo la use mal.

Por eso tengo una regla, tanto en el trabajo como en mis proyectos personales: no instalo ningún servidor MCP de un desarrollador que no conozco. En la práctica, eso significa conectores oficiales del propio servicio, como los de Google, Canva o Framer.

## ¿Por dónde empiezo?

- **Si usas Claude o ChatGPT:** activa el conector oficial de una herramienta que uses a diario, como el calendario o el correo, y pídele una tarea que hoy haces a mano.
- **Si desarrollas:** lee la especificación y prueba un servidor de los SDK oficiales antes de escribir el tuyo.

Si quieres ver cómo llevo la IA a producción, [cuéntame tu proyecto](/es/#contact).

## Fuentes

- [Especificación oficial del MCP](https://modelcontextprotocol.io/specification/latest) (versión 2026-07-28)
- [Anuncio de Anthropic (noviembre de 2024)](https://www.anthropic.com/news/model-context-protocol)
- [El MCP se une a la Agentic AI Foundation (9 de diciembre de 2025)](https://blog.modelcontextprotocol.io/posts/2025-12-09-mcp-joins-agentic-ai-foundation/)
