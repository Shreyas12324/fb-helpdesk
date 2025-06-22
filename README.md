# Richpanel Facebook Helpdesk - Assignment Submission

## 📌 Overview

This is a full-stack Facebook Helpdesk POC that allows clients to:
- Register & Login
- Connect a mock Facebook Page (simulating real FB integration)
- View inbox with conversations
- Respond to messages
- See customer details (optional)

> Built as part of the Richpanel Full Stack Developer assignment.

---

## 🧱 Tech Stack

- **Frontend:** React + TailwindCSS
- **Backend:** Node.js + Express + MongoDB
- **Auth:** JWT
- **Mock Facebook Connect:** Simulated via API

---

## 🔗 Live Demo

Deployed on Vercel: https://fb-helpdesk-gules.vercel.app

---

## 🚀 Features Covered

- [x] Register/Login with JWT
- [x] Facebook Connect UI (mocked)
- [x] Inbox conversation panel
- [x] Clickable threads with messages
- [x] Basic styling matching Richpanel's reference

---

## 📸 Loom Video

Watch demo here: https://www.loom.com/share/585edc4d3a5440768ba683c99d653c70?sid=ccbdc3fe-f52b-4849-bb8f-b0e46398548b

---

## ⚠️ Note

Since Facebook advanced access needs 24+ hours, this version mocks the connection and message fetch to showcase complete flow without delay.

---

## 🛠️ To Run Locally

```bash
cd server
node server.js
and in another terminal window
cd client
npm install
npm start
