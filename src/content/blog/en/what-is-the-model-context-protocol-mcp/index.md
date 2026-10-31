---
title: "What is the Model Context Protocol (MCP) and when is it worth using?"
date: 2026-10-31
lang: en
slug: "what-is-the-model-context-protocol-mcp"
categories: ["news"]
translationKey: "que-es-el-model-context-protocol-mcp"
cover: "./images/20250707_1616_Robot-futuriste-MCP_simple_compose_01jzjkvtymfg6txzckh10gy0pk.png"
coverAiGenerated: true
permalink: "/writing/what-is-the-model-context-protocol-mcp/"
section: ai
description: "What the Model Context Protocol (MCP) is, how it works, how it differs from an API and when you don't need it, with real examples of use."
draft: false
---

The Model Context Protocol (MCP) is an open standard that defines how an AI application, such as Claude or ChatGPT, connects to external tools and data: your email, your calendar, a repository or a database. Anthropic published it in November 2024, and since December 2025 it has been run by the Agentic AI Foundation, part of the Linux Foundation. If you have connected Gmail or Google Drive to Claude, you already use it.

This article is for you if you work with LLMs and are deciding between connecting your tools through MCP or building the integration yourself. By the end, you'll know which option fits each case.

*I first published this article in Spanish in July 2025. I rewrote it completely in October 2026, with what I've learned from using MCP.*

## What problem does MCP solve?

It solves the fact that every AI application needed its own integration for every tool. If you wanted three assistants to read your calendar, someone had to build three different connectors. With MCP, a tool publishes a server once, and any compatible application can use it.

The specification itself takes its inspiration from the Language Server Protocol, the standard that did the same for programming languages in code editors.

## How does it work?

It works with three parts that talk to each other with JSON-RPC 2.0 messages:

| Part | What it is | Example |
| --- | --- | --- |
| Host | The AI application you use | Claude, ChatGPT, a code editor |
| Client | The connector inside the host, one per server | The Gmail connector in Claude |
| Server | The service that gives access to a tool or data | The Google Calendar MCP server |

A server can offer three things:

- **Tools:** actions the model can run, such as creating an event or sending a design.
- **Resources:** data the model can read, such as a document or your calendar.
- **Prompts:** instruction templates that you can start.

The model decides when to use a tool, and the application asks for your permission before running it.

## How do I use it day to day?

Mostly through Claude's connectors: Gmail, Google Calendar, Google Drive, Canva and Framer. Two examples:

- **Presentations:** I build the presentation in Claude Design and send it to Canva over MCP to finish it there. Nobody had to build an integration between the two: Canva publishes its server and Claude uses it.
- **Calendar:** Claude reads my calendar and sets up reminders based on what I have that week. I don't need to copy anything, because the context reaches it through the connector.

What I value most is that the context arrives on its own. I used to paste the email, the calendar or the document into the chat. Now the model looks it up when it needs it, with the permissions I've given it.

## How is it different from an API or function calling?

The difference is who builds the integration and how many times. An API connects your code to a service. Function calling lets a model use functions you define inside your own application. MCP standardises those functions so that any compatible application can find and use them without new code.

| | Direct API | Function calling | MCP |
| --- | --- | --- | --- |
| Who uses it | Your code | A model, inside your app | Any compatible app |
| Integration | Custom | Custom, per app | Once per tool |
| When it fits | Your app needs one specific service | An agent with a few tools of its own | Tools you want to use from several assistants |

## When don't you need MCP?

You don't need it when your application only has to use a model, without giving it tools or external data.

I see this with Silbo, a dictation app for the Mac that I built. Silbo transcribes my voice on the Mac itself, and a local model in Ollama removes filler words and repetitions before pasting the text. Silbo calls Ollama's local API directly. Since the model doesn't need to read anything or act anywhere, MCP would only add another layer.

**The rule I use:** if the model has to use your tools, think MCP. If your code is the one using the model, an API call is enough.

## What are the risks?

The main risk is that an MCP server can read your data and act on your behalf. The specification treats tools as code execution and requires the application to ask for your permission before using them. It also warns that tool descriptions can't be trusted unless the server is trusted: a malicious server can describe a tool misleadingly so that the model misuses it.

That's why I have a rule, at work and in my own projects: I don't install any MCP server from a developer I don't know. In practice, that means official connectors from the service itself, such as those from Google, Canva or Framer.

## Where do I start?

- **If you use Claude or ChatGPT:** turn on the official connector for a tool you use every day, such as your calendar or email, and ask it for a task you currently do by hand.
- **If you're a developer:** read the specification and try a server from the official SDKs before writing your own.

If you want to see how I bring AI to production, [tell me about your project](/#contact).

## Sources

- [Official MCP specification](https://modelcontextprotocol.io/specification/latest) (version 2026-07-28)
- [Anthropic's announcement (November 2024)](https://www.anthropic.com/news/model-context-protocol)
- [MCP joins the Agentic AI Foundation (9 December 2025)](https://blog.modelcontextprotocol.io/posts/2025-12-09-mcp-joins-agentic-ai-foundation/)
