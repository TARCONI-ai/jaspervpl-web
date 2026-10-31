---
title: "Wat is het Model Context Protocol (MCP) en wanneer is het de moeite waard?"
date: 2026-10-31
lang: nl
slug: "wat-is-het-model-context-protocol-mcp"
categories: ["nieuws"]
translationKey: "que-es-el-model-context-protocol-mcp"
cover: "./images/20250707_1616_Robot-futuriste-MCP_simple_compose_01jzjkvtymfg6txzckh10gy0pk.png"
coverAiGenerated: true
permalink: "/nl/blog/nieuws/wat-is-het-model-context-protocol-mcp/"
section: ai
description: "Wat het Model Context Protocol (MCP) is, hoe het werkt, hoe het verschilt van een API en wanneer je het niet nodig hebt, met voorbeelden uit de praktijk."
draft: false
---

Het Model Context Protocol (MCP) is een open standaard die bepaalt hoe een AI-applicatie, zoals Claude of ChatGPT, verbinding maakt met externe tools en data: je mail, je agenda, een repository of een database. Anthropic publiceerde het in november 2024 en sinds december 2025 valt het onder de Agentic AI Foundation, onderdeel van de Linux Foundation. Heb je Gmail of Google Drive aan Claude gekoppeld? Dan gebruik je het al.

Dit artikel is voor jou als je met LLM's werkt en twijfelt tussen je tools koppelen via MCP of de integratie zelf programmeren. Aan het eind weet je welke optie in welk geval past.

*De eerste versie publiceerde ik in juli 2025, in het Spaans. In oktober 2026 heb ik hem volledig herschreven, met wat ik heb geleerd door het te gebruiken.*

## Welk probleem lost MCP op?

Het lost op dat elke AI-applicatie een eigen integratie nodig had voor elke tool. Wilde je dat drie assistenten je agenda konden lezen, dan moest iemand drie verschillende koppelingen bouwen. Met MCP publiceert een tool één keer een server, en elke compatibele applicatie kan die gebruiken.

De specificatie zelf is geïnspireerd op het Language Server Protocol, de standaard die hetzelfde deed voor programmeertalen in code-editors.

## Hoe werkt het?

Het werkt met drie onderdelen die communiceren via JSON-RPC 2.0-berichten:

| Onderdeel | Wat het is | Voorbeeld |
| --- | --- | --- |
| Host | De AI-applicatie die je gebruikt | Claude, ChatGPT, een code-editor |
| Client | De connector in de host, één per server | De Gmail-connector in Claude |
| Server | De dienst die toegang geeft tot een tool of data | De MCP-server van Google Calendar |

Een server kan drie dingen aanbieden:

- **Tools:** acties die het model kan uitvoeren, zoals een afspraak aanmaken of een ontwerp versturen.
- **Resources:** data die het model kan lezen, zoals een document of je agenda.
- **Prompts:** sjablonen met instructies die jij kunt starten.

Het model bepaalt wanneer het een tool gebruikt, en de applicatie vraagt je toestemming voordat die wordt uitgevoerd.

## Hoe gebruik ik het in mijn dagelijks werk?

Vooral via de connectors van Claude: Gmail, Google Calendar, Google Drive, Canva en Framer. Twee voorbeelden:

- **Presentaties:** ik maak de presentatie in Claude Design en stuur hem via MCP naar Canva om hem daar af te maken. Niemand heeft een integratie tussen die twee hoeven te bouwen: Canva publiceert zijn server en Claude gebruikt hem.
- **Agenda:** Claude leest mijn agenda en zet herinneringen klaar op basis van wat ik die week heb. Ik hoef niets te kopiëren, want de context komt via de connector binnen.

Wat ik het meest waardeer, is dat de context vanzelf binnenkomt. Vroeger plakte ik de mail, de agenda of het document in de chat. Nu raadpleegt het model het als het nodig is, met de rechten die ik heb gegeven.

## Hoe verschilt het van een API of function calling?

Het verschil zit in wie de integratie bouwt en hoe vaak. Een API verbindt je code met een dienst. Met *function calling* gebruikt een model functies die jij in je eigen applicatie definieert. MCP standaardiseert die functies, zodat elke compatibele applicatie ze kan vinden en gebruiken zonder nieuwe code.

| | Directe API | Function calling | MCP |
| --- | --- | --- | --- |
| Wie gebruikt het | Jouw code | Een model, binnen jouw app | Elke compatibele app |
| Integratie | Op maat | Op maat, per app | Eén keer per tool |
| Wanneer het past | Je app heeft één specifieke dienst nodig | Een agent met een paar eigen tools | Tools die je vanuit meerdere assistenten wilt gebruiken |

## Wanneer heb je MCP niet nodig?

Je hebt het niet nodig als je applicatie alleen een model hoeft te gebruiken, zonder het tools of externe data te geven.

Dat zie ik bij Silbo, een dicteerapp voor de Mac die ik heb gebouwd. Silbo zet mijn stem op de Mac zelf om in tekst, en een lokaal model in Ollama haalt stopwoorden en herhalingen weg voordat de tekst wordt geplakt. Silbo roept de lokale API van Ollama direct aan. Omdat het model niets hoeft te lezen of ergens actie hoeft te ondernemen, zou MCP alleen een extra laag toevoegen.

**De regel die ik gebruik:** moet het model jouw tools gebruiken, denk dan aan MCP. Gebruikt jouw code het model, dan is een API-aanroep genoeg.

## Welke risico's zijn er?

Het grootste risico is dat een MCP-server je data kan lezen en namens jou kan handelen. De specificatie behandelt tools als het uitvoeren van code en eist dat de applicatie je om toestemming vraagt voordat ze worden gebruikt. Ook waarschuwt de specificatie dat beschrijvingen van tools niet te vertrouwen zijn als de server niet betrouwbaar is: een kwaadwillende server kan een tool misleidend beschrijven, zodat het model hem verkeerd gebruikt.

Daarom heb ik een regel, op het werk en in mijn eigen projecten: ik installeer geen MCP-server van een ontwikkelaar die ik niet ken. In de praktijk betekent dat officiële connectors van de dienst zelf, zoals die van Google, Canva of Framer.

## Waar begin ik?

- **Gebruik je Claude of ChatGPT:** zet de officiële connector aan van een tool die je dagelijks gebruikt, zoals je agenda of je mail, en vraag om een taak die je nu met de hand doet.
- **Ben je ontwikkelaar:** lees de specificatie en probeer een server uit de officiële SDK's voordat je er zelf een schrijft.

Wil je zien hoe ik AI naar productie breng? [Vertel me over je project](/nl/#contact).

## Bronnen

- [Officiële MCP-specificatie](https://modelcontextprotocol.io/specification/latest) (versie 2026-07-28)
- [Aankondiging van Anthropic (november 2024)](https://www.anthropic.com/news/model-context-protocol)
- [MCP sluit zich aan bij de Agentic AI Foundation (9 december 2025)](https://blog.modelcontextprotocol.io/posts/2025-12-09-mcp-joins-agentic-ai-foundation/)
