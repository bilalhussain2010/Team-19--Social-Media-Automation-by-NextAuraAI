Cost & Execution Calculations
(Based on n8n Workflow JSON)

1. OpenAI API (Text & Prompt Generation)
Used for:
Facebook content generation


Image prompt generation


Video script generation


Cost Calculation
Text generation (post): $0.002


Image prompt generation: $0.005


Video script generation: $0.01


Average Cost per Execution
≈ $0.005

2. Image Generation API (Krea / Flux)
Used for:
Generating promotional images (1024 × 576)


Cost Calculation
Image generation per execution: $0.04


Average Cost per Image
≈ $0.04

3. Video Generation API (VEO 3)
Used for:
Promotional videos (5–8 seconds)


Cost Calculation
Average duration: 6 seconds


Cost per second: $0.20


6 × $0.20 = $1.20

Additional Costs(Loop/Error proofing)


Processing & Retry & buffer margin: $0.50


Total Cost per Video
≈ $1.70

4. Facebook Graph API
Used for:
Text post publishing


Image post publishing


Video post publishing


Cost
Meta does not charge per API request


Cost per execution: $0.00

5. Instagram Graph API
Used for:
Media container creation


Media publishing


Cost
Free within the Meta platform limits


Cost per execution: $0.00

6. YouTube Data API
Used for:
Video uploads


Cost
Free within quota limits


Cost per execution: $0.00

7. Google Drive API
Used for:
Image uploads


Video uploads


Cost Calculation
Storage & bandwidth estimate per file: $0.01


Cost per upload: ≈ $0.01

8. Google Sheets API
Used for:
Append row


Update status


Cost
Free within quota limits


Cost per execution: $0.00

9. Webhooks & n8n Processing
Used for:
Workflow triggers


Data routing


Execution handling


Estimated Server Cost
Average per execution: $0.005



🔢 FINAL COST SUMMARY (PER EXECUTION)
Workflow Type
Approximate Cost
Text Post
$0.01
Image Post
$0.06
Video Post (VEO 3)
$1.70


Notes
Costs are based on API pricing estimates


Failed executions are not included


Values are used as the base for credit-based pricing logic
