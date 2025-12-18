# Workflow Details – Social Media Posting Automation

## 1. Overview

This automation consists of **three independent workflows**, each designed to handle a specific social media posting scenario:

1. **Content Posting Workflow** – text-only posts  
2. **Image Posting Workflow** – posts with images  
3. **Video Posting Workflow** – posts with videos  

Each workflow is triggered through a dedicated webhook endpoint and processes data according to its content type. The workflows operate independently but follow a consistent architectural pattern for data ingestion, storage, and logging.

This design ensures **modularity, scalability, and clarity**, allowing each posting scenario to evolve without affecting the others.

---

## 2. Workflow 1: Content Posting Workflow

### 2.1 Purpose
The Content Posting Workflow handles **text-based social media post requests**. It captures user-provided content and scheduling details and logs them into Google Sheets for tracking and downstream publishing automation.

### 2.2 Trigger
- **Node:** Webhook  
- **Method:** POST  
- **Endpoint:**  


### 2.3 Input Data
The frontend sends a JSON payload containing:
- `productName`
- `description`
- `date` (ISO format: `YYYY-MM-DDTHH:mm`)
- `platforms`
- `id`

### 2.4 Workflow Steps
1. The webhook receives content posting data from the frontend.
2. The `date` field is split into posting date and posting time.
3. Platform selection flags (e.g., Facebook) are evaluated from the `platforms` string.
4. All relevant metadata is appended to the **Content Posting** sheet in Google Sheets.

### 2.5 Output
- No media files are stored.
- Posting metadata is recorded for scheduling and audit purposes.

---

## 3. Workflow 2: Image Posting Workflow

### 3.1 Purpose
The Image Posting Workflow processes **image-based social media post requests**. It stores uploaded images in Google Drive and logs post metadata along with the image URL.

### 3.2 Trigger
- **Node:** Webhook  
- **Method:** POST  
- **Endpoint:**  


### 3.3 Input Data
The frontend sends:
- `productName`
- `description` (visual description or keywords)
- `date`
- `platforms`
- `id`

### 3.4 Workflow Steps
1. The webhook receives metadata 
2. Data is saved in google sheets 
4. Posting date and time are extracted 
5. Platform flags (Facebook, Instagram) are evaluated.
6. Metadata and the image URL are logged in the **Image** sheet in Google Sheets.

### 3.5 Output
post metadata stored  in Google Sheets.

---

## 4. Workflow 3: Video Posting Workflow

### 4.1 Purpose
The Video Posting Workflow manages **video-based social media post requests**, ensuring video storage and complete metadata logging for multi-platform publishing.

### 4.2 Trigger
- **Node:** Webhook  
- **Method:** POST  
- **Endpoint:**  

### 4.3 Input Data
The frontend sends:
- `productName`
- `description` (used as video script)
- `date`
- `platforms`
- `id`
- 

### 4.4 Workflow Steps
1. The webhook receives  data from front end 
2.Posting date and time are parsed from the timestamp.
3. Platform flags (Facebook, Instagram, YouTube) are evaluated.
4. Metadata, script are logged into the **Video** sheet in Google Sheets.

### 4.5 Output
- Video metadata and scheduling details recorded in Google Sheets.

---

## 5. Common Node Responsibilities

### Webhook Nodes
- Serve as secure entry points for frontend submissions.
- Validate and forward incoming data to appropriate workflows.

### Google Drive Nodes
- Handle media storage for image and video workflows.
- Generate shareable URLs for downstream usage.

### Google Sheets Nodes
- Maintain structured logs for all posting requests.
- Enable scheduling, auditing, and analytics integration.

---

## 6. Design Considerations

- **Modular architecture** allows independent scaling of workflows.
- **Separation of concerns** ensures content, image, and video logic remain isolated.
- **Consistent data structure** across workflows simplifies future extensions.
- **Traceability** is ensured through unique IDs across all sheets.

---

## 7. Summary

This workflow-based design reflects real-world automation architecture, where each posting scenario is treated as a dedicated pipeline. The approach improves maintainability, readability, and extensibility while ensuring reliable ingestion, storage, and tracking of social media posting requests.

