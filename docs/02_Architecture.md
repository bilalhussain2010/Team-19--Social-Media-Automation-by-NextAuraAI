## System Architecture

The system follows a modular, event-driven architecture with a dedicated scheduling and orchestration layer to support time-based execution.

### Components
- Frontend UI (user inputs)
- n8n Automation Engine
- AI Services
- Social Media APIs
- Google Drive (media storage)
- Google Sheets (logging & scheduling)
- Google Apps Script (scheduler & workflow orchestrator)

### Data Flow
1. User submits a request via the frontend UI.
2. The frontend triggers an n8n webhook to log the request.
3. Submitted data is stored in Google Sheets along with posting date and time.
4. A Google Apps Script scheduler continuously monitors Google Sheets for due posts.
5. When the scheduled posting time is reached, Google Apps Script triggers the appropriate n8n execution workflow via webhook (Content, Image, or Video).
6. n8n processes the request and invokes AI services to generate content, images, or videos.
7. Generated content/media is published to social media platforms using their respective APIs.
8. Final posting status and outputs are updated back into Google Sheets.
