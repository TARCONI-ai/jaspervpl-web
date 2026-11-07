---
title: "Custom GPTs are going away: how to turn yours into a skill"
date: 2026-11-07
lang: en
slug: "custom-gpts-to-skills"
categories: ["news"]
translationKey: "como-crear-tu-propio-gpt-personalizado-en-chatgpt-guia-paso-a-paso-para-mejorar-tu-productividad"
cover: "./images/ChatGPT-Image-25-jun-2025-10_47_50.png"
coverAiGenerated: true
permalink: "/writing/custom-gpts-to-skills/"
section: ai
description: "Custom GPTs stop working on 11 December 2026. How to migrate yours to a plugin or turn it into a skill, and what doesn't migrate."
draft: false
---

OpenAI is retiring custom GPTs: they stop working on 11 December 2026, and you can no longer create new ones. From "My GPTs" you can migrate each one to a plugin, and its instructions become a skill, an open format that also works in Claude and other agents. If your GPT used custom actions, you'll have to rebuild those.

This article is for you if you have one or more GPTs and want to decide what to do with them before that date.

*I first published this article in Spanish in June 2025, as a guide to building a GPT. I rewrote it in November 2026 because GPTs are going away.*

## What happens to custom GPTs?

They stop working on 11 December 2026. Your past conversations stay accessible, but the GPT and its page disappear. OpenAI is replacing them with plugins, which bundle skills, connected apps and reference files, and work in both ChatGPT and Codex.

## What is a skill, and how is it different from a GPT?

A skill is a folder with a `SKILL.md` file: a name, a description of when to use it, and the instructions. It can also include reference files and scripts. Anthropic created the format, and since December 2025 it has been an open standard, Agent Skills, already supported by dozens of agents.

| | Custom GPT | Skill |
| --- | --- | --- |
| Where it works | Only in ChatGPT | In any compatible agent: Claude, ChatGPT, Codex… |
| How you use it | You open a separate chat with the GPT | The agent loads it when the task fits |
| What it contains | Instructions, files and actions | Instructions, files and its own scripts |
| Who owns it | It lives in your OpenAI account | It's a folder: you keep, version and share it wherever you like |

## How do I migrate my GPT?

There are two ways:

1. **Automatic migration in ChatGPT:** in "My GPTs", pick the GPT and click "Migrate to plugin". The instructions become a skill, knowledge files are copied as reference files and connected apps are added to the plugin. The resulting plugin is private: if you shared the GPT, you'll need to set up sharing again.
2. **Build the skill yourself:** copy the instructions into a `SKILL.md`, write a good description of when it should be used and put the files in the folder. That way you can use it in Claude, in Codex or in any compatible agent, not just in ChatGPT.

## What did I do with mine?

- **I turned one into a better skill.** My GPT "Redactor Moe Numental" wrote articles with a fixed structure for AI Overviews. I didn't just copy its instructions: I rebuilt it as the [ai-overviews-writer](/resources/ai-overviews-writer/) skill, with the method I use now, and published it openly.
- **I built another one a GPT couldn't match.** My skill for OpoGenius creates the app's Instagram carousels. It carries its own script, so every post gets the same typeface, colours, logo and slide counter. I ask for "a carousel about X" and the result is consistent with every previous one.
- **I let three go.** I no longer used Promptólogo, GPT-GOT or F1: Cuándo y Dónde. Not every GPT is worth migrating.

## What doesn't migrate well?

- **Custom actions:** they don't move to the plugin. If your GPT called an API, you'll have to rebuild that integration with a connector or an [MCP server](/writing/what-is-the-model-context-protocol-mcp/).
- **Some knowledge files:** plugins have different limits, and some files that worked in a GPT are rejected during migration.
- **The selected model and your conversations:** they don't carry over.

## Where do I start?

1. List your GPTs and mark the ones you actually use.
2. Migrate those before 11 December and test them with a real task.
3. If you want to use them outside ChatGPT, turn them into a skill yourself. You can start from [my example skill](https://github.com/TARCONI-ai/skills).

## Sources

- [Visual Studio Magazine: OpenAI replaces GPTs with plugins (September 2026)](https://visualstudiomagazine.com/articles/2026/09/28/openai-replacing-custom-gpts-with-plugins-including-for-codex-in-vs-code.aspx)
- [Beri: what doesn't migrate from a GPT to a plugin](https://www.beri.net/article/custom-gpt-retirement-december-11-plugin-migration-custom-actions-mcp-enterprise-deferral)
- [agentskills.io: the Agent Skills standard](https://agentskills.io/)
