function runScheduledPosts() {
  const sheetNames = ["Content Posting", "Image", "Video"];

  sheetNames.forEach(name => {
    Logger.log("===== PROCESSING " + name + " =====");
    processSheet(name);
  });
}

function processSheet(sheetName) {

  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  if (!sheet) {
    Logger.log("Sheet not found: " + sheetName);
    return;
  }

  const data = sheet.getRange(1, 1, sheet.getLastRow(), sheet.getLastColumn()).getValues();
  const now = new Date();

  const webhookMap = {
    "Content Posting": "https://n8n.digiacademichub.com/webhook/041f34f3-15cc-4378-b4a1-fa6a7849e7b8",
    "Image": "https://n8n.digiacademichub.com/webhook/df357e75-8905-4c8d-aa9c-dea45285ec56",
    "Video": "https://n8n.digiacademichub.com/webhook/fca7a632-c158-4e42-a15f-1bd89e058056"
  };

  const webhookUrl = webhookMap[sheetName];

  function toBool(val) {
    if (!val) return false;
    return String(val).trim().toLowerCase() === "yes";
  }

  function formatDate(d) {
    return Utilities.formatDate(d, Session.getScriptTimeZone(), "yyyy-MM-dd");
  }

  function formatTime(d) {
    return Utilities.formatDate(d, Session.getScriptTimeZone(), "HH:mm:ss");
  }

  for (let i = 1; i < data.length; i++) {

    const row = data[i];
    let payload = {};
    let status;

    /* ================= CONTENT POSTING ================= */
    if (sheetName === "Content Posting") {
      payload = {
        sheetName,
        id: row[0],                  // ID
        productName: row[1],         // Product Name
        description: row[2],         // Brief Description / Keywords
        postingDate: row[3] instanceof Date ? formatDate(row[3]) : row[3],
        postingTime: row[4] instanceof Date ? formatTime(row[4]) : row[4],
        facebook: toBool(row[5])
      };
      status = row[7]; // Status column
    }

    /* ================= IMAGE ================= */
    else if (sheetName === "Image") {
      payload = {
        sheetName,
        id: row[0],                  // ID
        productName: row[1],
        description: row[2],
        productImage: row[3],
        postingDate: row[4] instanceof Date ? formatDate(row[4]) : row[4],
        postingTime: row[5] instanceof Date ? formatTime(row[5]) : row[5],
        facebook: toBool(row[6]),
        instagram: toBool(row[7])
      };
      status = row[10];
    }

    /* ================= VIDEO ================= */
    else if (sheetName === "Video") {
      payload = {
        sheetName,
        id: row[0],                  // ID
        productName: row[1],
        videoScript: row[2],
        productImage: row[3],
        postingDate: row[4] instanceof Date ? formatDate(row[4]) : row[4],
        postingTime: row[5] instanceof Date ? formatTime(row[5]) : row[5],
        facebook: toBool(row[6]),
        instagram: toBool(row[7]),
        youtube: toBool(row[8])
      };
      status = row[11];
    }

    // Skip processed or incomplete rows
    if (status === "Processed") continue;
    if (!payload.postingDate || !payload.postingTime) continue;

    // Scheduling check
    const t = new Date("1970-01-01T" + payload.postingTime);
    const scheduled = new Date(payload.postingDate);
    scheduled.setHours(t.getHours(), t.getMinutes(), t.getSeconds());

    if (scheduled > now) continue;

    Logger.log("Sending payload → " + JSON.stringify(payload));

    try {
      UrlFetchApp.fetch(webhookUrl, {
        method: "post",
        contentType: "application/json",
        payload: JSON.stringify(payload)
      });

      // Mark as processed
      sheet.getRange(i + 1, getStatusColumn(sheetName)).setValue("Processed");

    } catch (err) {
      Logger.log("ERROR: " + err);
    }
  }
}

function getStatusColumn(sheetName) {
  if (sheetName === "Content Posting") return 8; // Column H
  if (sheetName === "Image") return 11;          // Column K
  if (sheetName === "Video") return 12;          // Column L
}
