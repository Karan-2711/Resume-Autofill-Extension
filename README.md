  Resume Autofill Extension

A smart job application autofill extension built using Vite + React. This extension allows users to enter their details once and **automatically fills job application forms,** detecting relevant fields dynamically.

## ✨ Features

- **One-Time Data Entry :** Users input details once and reuse them across multiple job applications.
- **Auto-Fill Functionality :** Smart detection of form fields like name, email, phone, CGPA, etc.
- **Keyword-Based Matching :**Recognizes variations like "Email" & "Email Address," "Phone" & "Mobile Number."
- **Intelligent Name Handling :** If a single "Name" field is found, it fills it as "FirstName LastName."
- **Editable Anytime :**Users can update details whenever needed.
- **Lightweight & Fast :**Built with Vite + React for better performance.

## 🎯 Use Cases

- **Job Applications :** Auto-fill job portals like LinkedIn, Indeed, and company websites.
- **Sign-up Forms :** Quickly enter personal information on websites.
- **Repeated Form Filling :** Save time by avoiding manual input every time.


## 📁 Folder Structure

```
chrome-autofill-extension/
            │── dist/              # Final extension files after build
            │── node_modules/      # Dependencies
            │── public/            # Static files (manifest, icons)
            │── src/               # Source code
            │   ├── popup.jsx      # React popup UI
            │   ├── popup.css      # Styles for popup
            │   ├── main.jsx       # Entry point for React
            │   ├── background.js  # Background script for persistent tasks
            │   ├── content.js     # Autofill logic injected into webpages
            │── manifest.json      # Chrome extension config
            │── package.json       # Dependencies & scripts
            │── vite.config.js     # Vite configuration
            │── README.md          # Documentation
```

## ⚙️ Getting Started

### 1. Clone the repo
```bash
git clone "https://github.com/Karan-2711/Resume-Autofill-Extension.git"
cd chrome-autofill-extension
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Build the Project
```bash
npm run build
This creates a dist/ folder containing the final extension files.

```
### 4. Load the Extension in chrome

- Open Google Chrome.
- Navigate to chrome://extensions/.
- Enable Developer Mode (toggle in the top right).
- Click "Load Unpacked" and select the dist/ folder.
- The extension is now installed! 🎉





