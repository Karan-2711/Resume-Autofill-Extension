                                        Chrome Autofill Extension (Vite + React)


A smart job application autofill extension built using Vite + React. This extension allows users to enter their details once and automatically fills job application forms, detecting relevant fields dynamically.

🚀 Features
✅ One-Time Data Entry – Users input details once and reuse them across multiple job applications.
✅ Auto-Fill Functionality – Smart detection of form fields like name, email, phone, CGPA, etc.
✅ Keyword-Based Matching – Recognizes variations like "Email" & "Email Address," "Phone" & "Mobile Number."
✅ Intelligent Name Handling – If a single "Name" field is found, it fills it as "FirstName LastName."
✅ Editable Anytime – Users can update details whenever needed.
✅ Lightweight & Fast – Built with Vite + React for better performance.


🎯 Use Cases
Job Applications – Auto-fill job portals like LinkedIn, Indeed, and company websites.
Sign-up Forms – Quickly enter personal information on websites.
Repeated Form Filling – Save time by avoiding manual input every time.


⚙️ How the Code Works

        User Enters Data in Popup
        A React-based popup lets users input personal details.
        Data is saved in Chrome Storage for persistence.
        Content Script Detects Form Fields
        content.js scans the webpage for form fields.
        It matches field labels using predefined keywords (e.g., "Email," "Phone Number").

        Autofill Mechanism

            If a matching field is found, data is inserted automatically.
            If only "Name" is detected, it inserts "FirstName LastName."
            User Can Edit Data Anytime

        Users can update details via the popup (popup.jsx).


🔧 Setup Instructions
        
        1️⃣ Clone the Repository
                git clone https://github.com/your-repo/chrome-autofill-extension.git
                cd chrome-autofill-extension

        2️⃣ Install Dependencies
                npm install

        3️⃣ Build the Project
                npm run build
                This creates a dist/ folder containing the final extension files.

        4️⃣ Load the Extension in Chrome
                Open Google Chrome.
                Navigate to chrome://extensions/.
                Enable Developer Mode (toggle in the top right).
                Click "Load Unpacked" and select the dist/ folder.
                The extension is now installed! 🎉


🛠 Project Structure

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


This README.md covers features, use cases, setup, and code functionality in a structured way. Let me know if you need further modifications! 🚀
