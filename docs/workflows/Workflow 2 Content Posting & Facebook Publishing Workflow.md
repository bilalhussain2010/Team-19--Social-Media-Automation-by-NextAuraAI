Content Posting & Facebook Publishing Workflow

### 4.1 Overview

This workflow is responsible for executing scheduled content-only social media posts.  
It retrieves posting requests already logged in Google Sheets, generates optimized Facebook content using AI, publishes the post via the Facebook Graph API, and finally updates the post status in Google Sheets.

This workflow represents the execution layer of the content posting pipeline.

---

### 4.2 Purpose

- Generate high-quality Facebook post content using AI
- Automatically publish posts to a Facebook page
- Update posting status from Processed → Posted
- Maintain accurate execution tracking in Google Sheets

---

### 4.3 Trigger

- Node Type Webhook  
- Method POST  
- Endpoint

This webhook is typically triggered by
- A scheduler
- A cron job
- A downstream automation once posting time is reached

---

### 4.4 Input Data

The webhook receives a JSON payload containing
- `id` (unique post identifier from Google Sheets)
- `productName`
- `description`

These values correspond to a row already present in the Content Posting sheet.

---

### 4.5 Workflow Steps

#### Step 1 Webhook – Receive Posting Request
- The workflow is initiated when the webhook receives a POST request.
- The request contains product details and the unique post ID.

---

#### Step 2 Set Search Fields – Data Normalization
- Extracts and assigns
- `productName`
- `description`
- Prepares clean input variables for AI content generation.

---

#### Step 3 AI Content Generation (Facebook Content Agent)
- Uses OpenAI Chat Model via LangChain agent.
- Applies a custom system prompt designed for
- Ecommerce-friendly tone
- Facebook feed optimization
- Engagement-driven copywriting
- Generates
- Persuasive Facebook post text
- Emojis, call-to-action, and hashtags
- Output is returned as plain text only.

---

#### Step 4 Facebook Graph API – Post Publishing
- Publishes the AI-generated content to the Facebook page feed.
- Uses
- Graph API version `v23.0`
- `feed` edge
- Message body is populated dynamically from AI output.

---

#### Step 5 Update Row in Google Sheets – Status Tracking
- Locates the correct row using the ID column.
- Updates
- `Status` → `Posted`
- Confirms successful publishing and prevents duplicate posting.

---

### 4.6 Output

- Facebook post published successfully
- Google Sheets updated with
- Accurate posting status
- Execution traceability

---

### 4.7 Error Handling & Data Integrity

- Status is updated only after successful Facebook API execution
- ID-based matching ensures
- Correct row updates
- No accidental overwrites
- Centralized logging allows quick troubleshooting

### 4.8 Summary

This workflow completes the content posting lifecycle by transforming stored post requests into live Facebook posts using AI-generated copy. By combining intelligent content generation, automated publishing, and reliable status tracking, the workflow demonstrates a production-ready automation pattern suitable for real-world social media operations.

