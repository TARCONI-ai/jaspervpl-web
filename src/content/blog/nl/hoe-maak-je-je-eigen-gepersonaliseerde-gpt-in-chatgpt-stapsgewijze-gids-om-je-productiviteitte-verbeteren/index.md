---
title: "Custom GPT's verdwijnen: zo zet je de jouwe om in een skill"
date: 2025-08-29
updated: 2026-11-07
lang: nl
slug: "hoe-maak-je-je-eigen-gepersonaliseerde-gpt-in-chatgpt-stapsgewijze-gids-om-je-productiviteitte-verbeteren"
categories: ["nieuws"]
translationKey: "como-crear-tu-propio-gpt-personalizado-en-chatgpt-guia-paso-a-paso-para-mejorar-tu-productividad"
cover: "./images/ChatGPT-Image-25-jun-2025-10_47_50.png"
coverAiGenerated: true
permalink: "/nl/blog/nieuws/hoe-maak-je-je-eigen-gepersonaliseerde-gpt-in-chatgpt-stapsgewijze-gids-om-je-productiviteitte-verbeteren/"
section: ai
description: "Custom GPT's werken vanaf 11 december 2026 niet meer. Zo migreer je de jouwe naar een plugin of zet je hem om in een skill, en dit gaat niet mee."
draft: false
---

OpenAI stopt met custom GPT's: ze werken vanaf 11 december 2026 niet meer en je kunt geen nieuwe meer maken. Via 'Mijn GPT's' kun je elke GPT naar een plugin migreren. De instructies worden dan een skill, een open formaat dat ook in Claude en andere agents werkt. Gebruikte je GPT eigen acties, dan moet je die opnieuw bouwen.

Dit artikel is voor jou als je een of meer GPT's hebt en voor die datum wilt beslissen wat je ermee doet.

*De eerste versie publiceerde ik in 2025, als handleiding om een GPT te maken. In november 2026 heb ik hem herschreven, omdat GPT's verdwijnen.*

## Wat gebeurt er met custom GPT's?

Ze werken vanaf 11 december 2026 niet meer. Je eerdere gesprekken blijven bereikbaar, maar de GPT en zijn pagina verdwijnen. OpenAI vervangt ze door plugins, die skills, gekoppelde apps en referentiebestanden bundelen en zowel in ChatGPT als in Codex werken.

## Wat is een skill en hoe verschilt die van een GPT?

Een skill is een map met een bestand `SKILL.md`: een naam, een beschrijving van wanneer je hem gebruikt en de instructies. Er kunnen ook referentiebestanden en scripts in zitten. Anthropic bedacht het formaat, en sinds december 2025 is het een open standaard, Agent Skills, die al tientallen agents ondersteunen.

| | Custom GPT | Skill |
| --- | --- | --- |
| Waar het werkt | Alleen in ChatGPT | In elke compatibele agent: Claude, ChatGPT, Codex… |
| Hoe je het gebruikt | Je opent een aparte chat met de GPT | De agent laadt hem als de taak past |
| Wat erin zit | Instructies, bestanden en acties | Instructies, bestanden en eigen scripts |
| Van wie het is | Het staat in je OpenAI-account | Het is een map: je bewaart, versioneert en deelt hem waar je wilt |

## Hoe migreer ik mijn GPT?

Er zijn twee manieren:

1. **Automatische migratie in ChatGPT:** kies in 'Mijn GPT's' de GPT en klik op 'Migrate to plugin'. De instructies worden een skill, kennisbestanden worden als referentiebestanden gekopieerd en gekoppelde apps komen in de plugin. De plugin is privé: deelde je de GPT, dan moet je het delen opnieuw instellen.
2. **Zelf een skill maken:** kopieer de instructies naar een `SKILL.md`, schrijf een goede beschrijving van wanneer hij gebruikt moet worden en zet de bestanden in de map. Dan kun je hem in Claude, in Codex of in elke compatibele agent gebruiken, niet alleen in ChatGPT.

## Wat heb ik met de mijne gedaan?

- **Eén heb ik omgezet in een betere skill.** Mijn GPT 'Redactor Moe Numental' schreef artikelen met een vaste structuur voor AI Overviews. Ik heb de instructies niet alleen gekopieerd: ik heb hem opnieuw gebouwd als de skill [ai-overviews-writer](/nl/resources/ai-overviews-writer/), met de methode die ik nu gebruik, en hem openbaar gepubliceerd.
- **Ik heb er een gemaakt die een GPT niet kon evenaren.** Mijn skill voor OpoGenius maakt de Instagram-carrousels van de app. Hij heeft een eigen script, dus elke post krijgt hetzelfde lettertype, dezelfde kleuren, hetzelfde logo en dezelfde dia-teller. Ik vraag 'maak een carrousel over X' en het resultaat past bij alle vorige.
- **Drie heb ik laten gaan.** Promptólogo, GPT-GOT en F1: Cuándo y Dónde gebruikte ik niet meer. Niet elke GPT is het migreren waard.

## Wat gaat er niet goed mee?

- **Eigen acties:** die gaan niet mee naar de plugin. Riep je GPT een API aan, dan moet je die koppeling opnieuw bouwen met een connector of een [MCP-server](/nl/blog/nieuws/wat-is-het-model-context-protocol-mcp/).
- **Sommige kennisbestanden:** plugins hebben andere limieten, en sommige bestanden die in een GPT werkten, worden bij de migratie geweigerd.
- **Het gekozen model en de gesprekken:** die gaan niet mee.

## Waar begin ik?

1. Maak een lijst van je GPT's en markeer de GPT's die je echt gebruikt.
2. Migreer die voor 11 december en test ze met een echte taak.
3. Wil je ze buiten ChatGPT gebruiken, zet ze dan zelf om in een skill. Je kunt beginnen met [mijn voorbeeldskill](https://github.com/TARCONI-ai/skills).

## Bronnen

- [Visual Studio Magazine: OpenAI vervangt GPT's door plugins (september 2026)](https://visualstudiomagazine.com/articles/2026/09/28/openai-replacing-custom-gpts-with-plugins-including-for-codex-in-vs-code.aspx)
- [Beri: wat niet meegaat van een GPT naar een plugin](https://www.beri.net/article/custom-gpt-retirement-december-11-plugin-migration-custom-actions-mcp-enterprise-deferral)
- [agentskills.io: de standaard Agent Skills](https://agentskills.io/)
