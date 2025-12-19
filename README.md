# NextAuraAI – AI-Powered Social Media Automation Engine 
This repository contains a complete AI-powered social media automation system built using n8n, Google Apps Script, and AI models. The project includes full documentation, exported workflow JSON files, and scheduling logic implemented via Google Sheets and Apps Script. The system supports automated content, image, and video generation with time-based posting across multiple social media platforms.

## Overview
NextAuraAI is an AI-driven social media automation platform that enables automated content creation, media generation, scheduling, and publishing across multiple social media platforms including Facebook, Instagram, and YouTube. The system is built using n8n workflows, Google Apps Script–based scheduling, and integrates AI models and social media APIs to reduce manual effort and improve consistency in digital marketing operations.

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
User input is collected through a frontend interface and sent to n8n via webhooks for initial request logging. Each posting request is stored in Google Sheets along with its scheduled date and time, which acts as the central scheduling and tracking system.

A Google Apps Script runs on a time-based trigger and continuously monitors the Google Sheets. When the scheduled posting time is reached, the script automatically sends the request to the appropriate n8n execution workflow (content, image, or video).

The corresponding n8n workflow then generates AI-based content or media, publishes the post to the selected social media platforms (Facebook, Instagram, and/or YouTube), and updates the posting status back in Google Sheets.

This separation of scheduling (Google Sheets + Apps Script) and execution (n8n workflows) ensures reliable time-based automation, modular design, and easy extensibility.
## Deployment

The system is deployed using a cloud-based, production-ready setup:

- **Frontend Application**  
  The user-facing frontend is deployed and accessible at:  
  👉 https://nextauraai.com/  
  It provides interfaces for content, image, and video posting requests and communicates with n8n workflows via secure webhooks.

- **Automation Engine (n8n)**  
  The n8n automation platform is hosted on **AWS**, where all execution workflows (content, image, and video posting) are deployed and managed.

- **Scheduling Layer**  
  Google Sheets and Google Apps Script are used for time-based scheduling. A time-driven Apps Script trigger monitors scheduled entries and dispatches requests to the appropriate n8n workflows at execution time.

This deployment model separates user interaction, scheduling, and execution layers, ensuring scalability, reliability, and modular system design.

## Limitations

- **Video Generation in Production**  
  The video generation workflow currently faces stability challenges in the production environment due to external video generation API constraints. Active improvements and optimizations are in progress.

- **Analytics Dashboard**  
  Analytics and reporting features are under development. Once completed, the dashboard will provide detailed insights into post performance, scheduling metrics, and execution status across platforms.

These limitations are part of ongoing enhancements and do not affect the core automation and scheduling functionality of the system.

## Video Demnonstration
Demonstration video is available on following google drive link
https://drive.google.com/file/d/1Os-fa9hJ1X7GnAxF0LomDJWcA0vOGbct/view?usp=drive_link






