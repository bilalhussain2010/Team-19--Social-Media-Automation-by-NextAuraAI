## Workflow 3: Image Generation & Social Media Posting Workflow

### 3.1 Overview

This workflow is responsible for **generating high-quality promotional images using AI**, publishing them to **Facebook and/or Instagram**, and **updating the publishing status** in Google Sheets.

It represents the **execution layer for image-based posts**, completing the lifecycle that starts with image-post request logging.

---

### 3.2 Purpose

- Generate professional, ad-ready images using AI
- Support image posting to Facebook and Instagram
- Handle asynchronous image generation
- Update publishing status in Google Sheets for tracking and audit

---

### 3.3 Trigger

- **Node Type:** Webhook  
- **Method:** POST  
- **Endpoint:**

This webhook is triggered when an image post is ready for execution (typically after scheduling conditions are met).

---

### 3.4 Input Data

The webhook receives a JSON payload containing:
- `id` (unique image post identifier)
- `productName`
- `description`
- `facebook` (boolean)
- `instagram` (boolean)

These values correspond to a previously logged row in the **Image** Google Sheet.

---

### 3.5 Workflow Steps

#### Step 1: Webhook – Execution Trigger
- Receives the execution request for an image post.
- Acts as the entry point for the image generation and posting pipeline.

---

#### Step 2: Edit Fields – Input Preparation
- Normalizes and prepares:
- Product name
- Product description
- Unique ID
- Ensures clean input structure for AI processing.

---

#### Step 3: AI Prompt Generation (Image Prompt Engineering)
- Uses an **AI Agent powered by OpenAI Chat Model**.
- Generates a **high-quality image-generation prompt** based on:
- Product details
- Advertising best practices
- Ensures:
- Visual accuracy
- Commercial appeal
- Platform suitability (Facebook & Instagram)

---

#### Step 4: AI Image Generation (Krea API)
- Sends the generated prompt to the Krea image generation API.
- Image generation runs asynchronously.
- A job ID is returned for tracking generation status.

---

#### Step 5: Wait & Fetch Image
- Introduces a controlled wait period to allow image generation to complete.
- Fetches the generated image using the job ID.
- Extracts the final image URL once generation is completed.

---

#### Step 6: Platform Selection Logic
- Conditional logic determines publishing destinations:
- **Facebook posting** if Facebook flag is true
- **Instagram posting** if Instagram flag is true
- Allows flexible multi-platform posting from a single workflow.

---

#### Step 7a: Facebook Image Posting
- Publishes the generated image to the Facebook page feed.
- Includes:
- Image URL
- Caption text derived from product description

---

#### Step 7b: Instagram Image Posting
- Creates an Instagram media container using the image URL and caption.
- Publishes the container to the Instagram account.
- Follows the official Instagram Graph API publishing flow.

---

#### Step 8: Google Sheets Status Update
- Matches the correct row using the unique `ID`.
- Updates the **Status** column to:
- Confirms successful image publishing.

---

### 3.6 Output

- AI-generated promotional image
- Image published to selected platforms
- Google Sheets updated with final publishing status

---

### 3.7 Error Handling & Reliability

- Image is fetched only after generation completes
- Platform-specific posting is conditionally executed
- Status is updated only after successful publishing
- ID-based matching prevents incorrect row updates


### 3.8 Summary

This workflow completes the image-posting lifecycle by combining AI-driven image generation, intelligent platform routing, and reliable status tracking. It demonstrates a production-ready approach to automated visual content publishing suitable for real-world social media marketing operations.

