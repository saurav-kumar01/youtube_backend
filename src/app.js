import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// app.use me use method middleware and configuration ke liye kam me ata hai
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// json format me limited data send krna hota nhi to server crash ho sakta hai
app.use(express.json({ limit: "16kb" }));

// url me jb bhi data jata hai to some url data +data and %20data etc. me add kr deta hai
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// ydi koi file/pdf/image/favicon ya any public file ate hai to usse static me rakhte hai isse "public assests bhi kahte hai"
app.use(express.static("public"));

// cookieParser ka use itna hai ki hum server per cookie set and remove bhi kr sakta pau mean that crud operation perfom ho jaye
// iske duvara hum user ki cookie ko secure kr paye and server hi read kr paye and server remove kr
app.use(cookieParser());

// routes import
import userRouter from "./routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRouter);

export { app };
