import express from "express";

import { single, multiple } from "./middlewares/upload.middleware";
import { handleUpload } from "./utils/cloudinary";

const router = express.Router();

// router.get("/upload/single", single, (req, res) => {
// });
// router.get("/upload/multiple", multiple, (req, res) => {});

router.post("/upload/single", single, async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  try {
    const result = await handleUpload(
      `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`
    );
    res.status(200).json({ message: "File uploaded successfully", result });
  } catch (error) {
    res.status(500).json({ message: "File upload failed", error });
  }
});

router.post("/upload/multiple", multiple, async (req, res) => {
  if (!req.files || !Array.isArray(req.files)) {
    return res.status(400).json({ message: "No files uploaded" });
  }

  try {
    const uploadPromises = req.files.map((file) =>
      handleUpload(
        `data:${file.mimetype};base64,${file.buffer.toString("base64")}`
      )
    );
    const results = await Promise.all(uploadPromises);
    res.status(200).json({ message: "Files uploaded successfully", results });
  } catch (error) {
    res.status(500).json({ message: "Files upload failed", error });
  }
});

export default router;
