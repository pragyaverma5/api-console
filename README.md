# API Console

A minimal and clean API testing tool built with JavaScript.

Designed with a monochrome interface focused on clarity, usability, and developer experience.

---

## Live Demo
https://apiconsole-pv.netlify.app/

---

##🖥️ Preview

<img width="1919" height="1048" alt="image" src="https://github.com/user-attachments/assets/08f8095a-8571-4a42-a97f-301207260ed6" />

<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/b735dea0-6af5-4557-b1d0-45bdf801c259" />

---


## Tech Stack
- HTML
- CSS
- JavaScript (Fetch API)

---

## Features

- Send GET and POST requests
- View formatted JSON responses
- Status code and response time tracking
- Request history using localStorage
- Copy response to clipboard
- Graceful error handling (CORS-aware)

---

## The Process

This project was built to understand how APIs work beyond just consuming them.

I started with a simple UI to send requests and display responses. Then I focused on handling real-world scenarios like asynchronous operations, error handling, and response formatting.

One key challenge was dealing with APIs that block browser requests due to CORS. Instead of ignoring it, I implemented clear error messaging to reflect real-world behavior and limitations.

I gradually enhanced the tool by adding request history, improving UI clarity, and refining user interactions to make it feel like a usable developer tool rather than a basic project.

---

## What I Learned

- How the Fetch API works with async/await
- Handling API responses and parsing JSON data
- Understanding CORS and why some requests fail
- Managing state using localStorage
- Improving UI/UX with minimal design principles
- Thinking in terms of user experience, not just functionality

---

## Challenges

- Handling failed API requests gracefully
- Designing a clean UI without relying on frameworks
- Managing persistent history without a backend
- Understanding real-world API limitations (CORS)

---

## Future Improvements

- Add support for custom headers
- Add PUT and DELETE request methods
- Syntax highlighting for JSON responses
- Save named requests (like collections)
- Add backend proxy to bypass CORS limitations


