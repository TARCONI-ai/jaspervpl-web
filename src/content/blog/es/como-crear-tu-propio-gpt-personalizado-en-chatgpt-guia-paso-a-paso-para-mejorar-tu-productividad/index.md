---
title: "Los GPT personalizados desaparecen: cómo convertir el tuyo en una skill"
date: 2025-06-25
updated: 2026-11-07
lang: es
slug: "como-crear-tu-propio-gpt-personalizado-en-chatgpt-guia-paso-a-paso-para-mejorar-tu-productividad"
categories: ["noticias"]
translationKey: "como-crear-tu-propio-gpt-personalizado-en-chatgpt-guia-paso-a-paso-para-mejorar-tu-productividad"
cover: "./images/ChatGPT-Image-25-jun-2025-10_47_50.png"
coverAiGenerated: true
permalink: "/blog/noticias/como-crear-tu-propio-gpt-personalizado-en-chatgpt-guia-paso-a-paso-para-mejorar-tu-productividad/"
section: ai
description: "Los GPT personalizados dejan de funcionar el 11 de diciembre de 2026. Cómo migrar el tuyo a un plugin o convertirlo en una skill, y qué no se migra."
draft: false
---

OpenAI retira los GPT personalizados: dejan de funcionar el 11 de diciembre de 2026 y ya no se pueden crear nuevos. Desde «Mis GPT» puedes migrar cada uno a un plugin, y sus instrucciones pasan a ser una skill, un formato abierto que también funciona en Claude y en otros agentes. Si tu GPT usaba acciones personalizadas, esas tendrás que rehacerlas.

Este artículo es para ti si tienes uno o varios GPT y quieres decidir qué hacer con ellos antes de esa fecha.

*Publiqué la primera versión en junio de 2025, como guía para crear un GPT. La he reescrito en noviembre de 2026 porque los GPT desaparecen.*

## ¿Qué pasa con los GPT personalizados?

Dejan de funcionar el 11 de diciembre de 2026. Las conversaciones que ya tuviste seguirán accesibles, pero el GPT y su página desaparecen. OpenAI los sustituye por plugins, que agrupan skills, apps conectadas y archivos de referencia, y que funcionan tanto en ChatGPT como en Codex.

## ¿Qué es una skill y en qué se diferencia de un GPT?

Una skill es una carpeta con un archivo `SKILL.md`: un nombre, una descripción de cuándo usarla y las instrucciones. Puede incluir también archivos de referencia y scripts. La creó Anthropic y desde diciembre de 2025 es un estándar abierto, Agent Skills, que ya admiten decenas de agentes.

| | GPT personalizado | Skill |
| --- | --- | --- |
| Dónde funciona | Solo en ChatGPT | En cualquier agente compatible: Claude, ChatGPT, Codex… |
| Cómo se usa | Abres un chat aparte con el GPT | El agente la carga cuando la tarea encaja |
| Qué contiene | Instrucciones, archivos y acciones | Instrucciones, archivos y scripts propios |
| De quién es | Vive en tu cuenta de OpenAI | Es una carpeta: la guardas, versionas y compartes donde quieras |

## ¿Cómo migro mi GPT?

Tienes dos caminos:

1. **Migración automática en ChatGPT:** en «Mis GPT», elige el GPT y pulsa «Migrate to plugin». Las instrucciones pasan a ser una skill, los archivos de conocimiento se copian como archivos de referencia y las apps conectadas se añaden al plugin. El plugin resultante es privado: si compartías el GPT, tendrás que volver a configurarlo.
2. **Crear la skill a mano:** copia las instrucciones en un `SKILL.md`, escribe una buena descripción de cuándo debe usarse y mete los archivos en la carpeta. Así la puedes usar en Claude, en Codex o en cualquier agente compatible, no solo en ChatGPT.

## ¿Qué he hecho yo con los míos?

- **Convertí uno en una skill mejor.** Mi GPT «Redactor Moe Numental» escribía artículos con una estructura fija para AI Overviews. No me limité a copiar sus instrucciones: lo rehíce como la skill [ai-overviews-writer](/es/recursos/ai-overviews-writer/), con el método que uso ahora, y la publiqué en abierto.
- **Creé otra que un GPT no podía igualar.** Mi skill para OpoGenius genera los carruseles de Instagram de la app. Lleva su propio script, así que cada post sale con la misma tipografía, los mismos colores, el mismo logo y el mismo contador de diapositivas. Le pido «hazme un carrusel sobre X» y el resultado es coherente con todos los anteriores.
- **Dejé morir tres.** Promptólogo, GPT-GOT y F1: Cuándo y Dónde ya no los usaba. No todos los GPT merecen migrarse.

## ¿Qué no se migra bien?

- **Las acciones personalizadas:** no pasan al plugin. Si tu GPT llamaba a una API, tendrás que rehacer esa integración con un conector o con un [servidor MCP](/blog/noticias/que-es-el-model-context-protocol-mcp/).
- **Algunos archivos de conocimiento:** los plugins tienen otros límites, y hay archivos que funcionaban en un GPT que la migración rechaza.
- **El modelo elegido y las conversaciones:** no se trasladan.

## ¿Por dónde empiezo?

1. Haz una lista de tus GPT y marca los que de verdad usas.
2. Migra esos antes del 11 de diciembre y pruébalos con una tarea real.
3. Si los quieres usar fuera de ChatGPT, conviértelos en una skill a mano. Puedes partir de [mi skill de ejemplo](https://github.com/TARCONI-ai/skills).

## Fuentes

- [Visual Studio Magazine: OpenAI sustituye los GPT por plugins (septiembre de 2026)](https://visualstudiomagazine.com/articles/2026/09/28/openai-replacing-custom-gpts-with-plugins-including-for-codex-in-vs-code.aspx)
- [Beri: qué no migra de un GPT a un plugin](https://www.beri.net/article/custom-gpt-retirement-december-11-plugin-migration-custom-actions-mcp-enterprise-deferral)
- [agentskills.io: el estándar Agent Skills](https://agentskills.io/)
