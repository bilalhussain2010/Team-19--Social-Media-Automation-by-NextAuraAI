Video Generation & Posting
## Workflow 4: Video Generation & Multi-Platform Publishing Workflow. This workflow is in testing phase and some issue have been identified in video creration node in production.

### 4.1 Overview

This workflow is responsible for **generating short promotional videos using AI (Veo 3)** based on product details, **publishing the video to Facebook, Instagram, and YouTube**, and **updating the publishing status** in Google Sheets.

It represents the **execution layer for video-based posts**, completing the end-to-end lifecycle that begins with video post request logging.

---

### 4.2 Purpose

- Generate cinematic, ad-ready short videos using AI
- Support video publishing on Facebook, Instagram, and YouTube
- Handle asynchronous video generation workflows
- Maintain accurate publishing status across platforms

---

### 4.3 Trigger

- **Node Type:** Webhook  
- **Method:** POST  
- **Endpoint:**

This webhook is triggered when a scheduled video post is ready for execution.

---

### 4.4 Input Data

The webhook receives a JSON payload containing:
- `id` (unique video post identifier)
- `productName`
- `videoScript`
- `postingDate`
- `postingTime`
- `facebook` (boolean)
- `instagram` (boolean)
- `youtube` (boolean)

These values correspond to a previously logged row in the **Video** Google Sheet.

---

### 4.5 Workflow Steps

#### Step 1: Webhook – Execution Trigger
- Receives the execution request for a video post.
- Acts as the entry point for the video generation and publishing pipeline.

---

#### Step 2: Edit Fields – Input Preparation
- Extracts and normalizes:
- Product name
- Video script
- Prepares structured input for AI prompt generation.

---

#### Step 3: AI Video Prompt Generation
- Uses an **AI Agent powered by OpenAI Chat Model**.
- Converts structured inputs into a **single cinematic video prompt**.
- Ensures:
- Commercial tone
- Realistic visuals
- Short ad-friendly duration
- Output is returned as **one plain-text paragraph**, optimized for Veo models.

---

#### Step 4: AI Video Generation (Veo 3 API)
- Sends the generated prompt and reference image to the Veo video generation API.
- Video generation runs asynchronously.
- A task ID is returned to track generation progress.

---

#### Step 5: Wait & Fetch Generated Video
- Introduces a wait period to allow video generation to complete.
- Fetches video generation status using the task ID.
- Extracts the final video URL once generation is completed.

---

#### Step 6: Platform Selection Logic
- Conditional routing determines publishing targets:
- **Facebook** if Facebook flag is true
- **Instagram** if Instagram flag is true
- **YouTube** if YouTube flag is true
- Enables flexible multi-platform publishing from a single workflow.

---

#### Step 7a: Facebook Video Publishing
- Publishes the generated video to the Facebook page.
- Includes caption text derived from the video script.
- Confirms successful posting before status update.

---

#### Step 7b: Instagram Video Publishing
- Creates an Instagram media container using the video URL.
- Publishes the container to Instagram using Graph API.
- Follows official Instagram publishing flow.

---

#### Step 7c: YouTube Video Upload
- Uploads the generated video to YouTube using the YouTube Data API.
- Supports automated publishing for short promotional videos.

---

#### Step 8: Google Sheets Status Update
- Matches the correct row using the unique `ID`.
- Updates the **Status** column to
- Confirms successful video publishing across platforms.

---

### 4.6 Output

- AI-generated promotional video
- Video published to selected platforms
- Google Sheets updated with final publishing status

---

### 4.7 Error Handling & Reliability

- Video status is checked before publishing
- Platform-specific posting occurs only if enabled
- Status is updated only after successful publishing
- ID-based matching prevents duplicate or incorrect updates

---

### 4.8 Design Rationale

- **Asynchronous video handling** ensures reliable AI generation
- **Single prompt → multi-platform output** improves efficiency
- **Workflow isolation** simplifies debugging and scaling
- **Status-driven execution** supports retries and analytics

---

### 4.9 Summary

This workflow completes the video-posting lifecycle by combining AI-powered video generation, intelligent platform routing, and reliable execution tracking. It demonstrates a production-ready automation pattern for short-form video marketing across major social media platforms.

