import express from "express";
import session from "express-session";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";
import axios from "axios";
import { Teacher, LessonAssessment, Lesson, Payment, Subject } from "./classes.js";

import categories from "./category_setup.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8081;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  res.status(200).render("select_page.ejs");
});
app.get("/new_teacher_setup", async (req, res) => {
  res.status(200).render("new_teacher_setup.ejs", { categories });
});

function validateTeacherData(data) {
  // Regular expression to validate email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Regular expression to validate name (alphanumeric and spaces)
  const namePattern = /^[a-zA-Z0-9\s\-()]+$/;
  // Max length for info
  const maxInfoLength = 500;

  let errors = [];

  // Validate name
  if (!namePattern.test(data.name)) {
    errors.push(
      "Invalid name. It should only contain alphanumeric characters, spaces, hyphens, and parentheses."
    );
  }

  // Validate email
  if (!emailPattern.test(data.email)) {
    errors.push("Invalid email format.");
  }

  // Validate info
  if (typeof data.info !== "string" || data.info.trim() === "") {
    errors.push("Info should be a non-empty string.");
  } else if (data.info.length > maxInfoLength) {
    errors.push(
      `Info is too long. It should be less than ${maxInfoLength} characters.`
    );
  }

  // Return validation results
  if (errors.length > 0) {
    return { isValid: false, errors: errors };
  } else {
    return { isValid: true, errors: [] };
  }
}

function convertToSubjects(inputArray) {
    return inputArray.map(item => {
        // Split the input string into category and the rest
        let [category, rest] = item.split(':');

        // Split the rest into subject and level
        let [subject, level] = rest.split(' - ');

        // Trim whitespace from category, subject, and level
        category = category.trim();
        subject = subject.trim();
        level = level.trim();

        // Create a new Subject object
        return new Subject(category, subject, level);
    });
}

app.post("/teacher", async (req, res) => {
  console.log("......teacher....\n", req.body);
  const teacherData = req.body
  const {name, email, password, info, organization, startHour, startMin, endHour, endMin, subjects}=req.body;
  const teacher = new Teacher(name, email, password, info, convertToSubjects(subjects), organization, startHour, startMin, endHour, endMin,  )
  console.log("........teacher....\n", teacher)
  let validationResult = validateTeacherData(teacherData);
  if (validationResult.isValid) {
    console.log("Validation successful!");
    res.status(200).render("teacher.ejs",{teacher})
  } else {
    console.log("Validation errors:", validationResult.errors);
  }

});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("Proxy server is running on port: ", PORT);
});
