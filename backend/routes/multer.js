const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const serverpath = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./resumes");
  },
  filename: (req, file, cb) => {
    const newFilename = `${uuidv4()}${file.originalname.substring(file.originalname.lastIndexOf('.'))}`
      cb(null, newFilename);
  },  
});

const fileFilter= (req, file, cb) => {
    if (file.mimetype === "application/pdf" || file.mimetype === "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
    {
      return cb(null, true);
    } else {
      return cb(new Error("Only PDF and Docs files are allowed"));
    }
  }

const upload = multer({ storage: serverpath, fileFilter });

module.exports = upload;