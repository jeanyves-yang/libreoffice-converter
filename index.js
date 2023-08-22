const express = require("express");
const libre = require("libreoffice-convert");
libre.convertAsync = require("util").promisify(libre.convert);

const app = express();
const port = 3693;

app.use(express.json({ limit: "10mb" }));

// Define a route for document conversion
app.post("/convert", async (req, res) => {
  try {
    const { data } = req.body;
    const docxBuffer = Buffer.from(data, "base64"); // Convert Base64 string to buffer

    const pdfBuffer = await libre.convertAsync(docxBuffer, ".pdf", undefined);

    res.set("Content-Disposition", 'attachment; filename="converted.pdf"');
    res.set("Content-Type", "application/pdf");
    res.send(pdfBuffer);
  } catch (error) {
    console.error("Error converting document:", error);
    res.status(500).send("An error occurred during conversion.");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
