# NextGenAI – AI-Powered Social Media Automation Platform

## Overview
NextGenAI is an AI-driven social media automation platform that enables automated content creation, media generation, scheduling, and publishing across multiple social media platforms including Facebook, Instagram, and YouTube. The system is built using n8n workflows, Google Apps Script–based scheduling, and integrates AI models and social media APIs to reduce manual effort and improve consistency in digital marketing operations.

## Key Features
- AI-generated text content for social media posts
- AI-based image and video generation
- Automated scheduling and publishing
- Multi-platform posting support
- Modular workflows for content, image, and video posting
- Google Sheets–based scheduling and execution tracking
- Google Drive media storage
- Secure credential and OAuth-based authentication

## Technology Stack
- n8n (workflow automation and execution engine)
- Google Apps Script (time-based scheduler and workflow orchestrator)
- AI models (OpenAI / Gemini / Krea / video generation APIs)
- Social Media APIs (Facebook Graph API, Instagram API, YouTube API)
- Google Drive & Google Sheets
- REST APIs & Webhooks

## Workflow Overview
User input is collected through a frontend interface and passed to n8n via webhooks for initial logging. Posting requests are stored in Google Sheets along with scheduled date and time. A Google Apps Script scheduler continuously
