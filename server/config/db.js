const mongoose = require("mongoose");

const connectDB = async () => {
  const uri = process.env.MONGO_URI || "";

  console.log("URI length:", uri.length);
  console.log("Mongoose version:", mongoose.version);

  const match = uri.match(
    /^mongodb\+srv:\/\/([^/?#]+)(?:\/([^?#]*))?(?:\?([^#]*))?$/,
  );

  console.log("Basic URI structure valid:", Boolean(match));
  console.log(
    "Credentials section present:",
    Boolean(match && match[1].includes("@")),
  );
  console.log("Database path present:", Boolean(match && match[2]));

  try {
    if (!uri) {
      throw new Error("MONGO_URI is missing");
    }

    const match = uri.match(
      /^mongodb\+srv:\/\/([^/?#]+)(?:\/([^?#]*))?(?:\?([^#]*))?$/,
    );

    console.log("Basic URI structure valid:", Boolean(match));
    console.log(
      "Credentials section present:",
      Boolean(match && match[1].includes("@")),
    );
    console.log("Database path present:", Boolean(match && match[2]));
    console.log("Mongoose version:", mongoose.version);

    await mongoose.connect(uri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error name:", error.name);
    console.error("Error code:", error.code || "none");
    console.error("Error message:", error.message);
    throw error;
  }
};

module.exports = connectDB;
