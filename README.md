# Medication Tracker

A full-stack application for tracking medication intake with a Flask backend and React frontend.

![Status](https://img.shields.io/badge/Status-In%20Development-yellow)
![License](https://img.shields.io/badge/License-MIT-blue)

## Features

- Log medication intake with timestamps
- View medication history with user-friendly time formatting
- Backend API for storing and retrieving medication data
- Responsive UI built with Material UI components

## Project Structure

```
med_logs/
├── backend/                  # Flask backend
│   ├── backend.py            # Main Flask application
│   └── populate_db.py        # Sample data generation script
├── frontend/                 # React frontend
│   ├── public/               # Static files
│   ├── src/                  # React source code
│   │   ├── components/       # React components
│   │   ├── App.tsx           # Main application component
│   │   └── index.tsx         # Application entry point
│   ├── package.json          # Frontend dependencies
│   └── tsconfig.json         # TypeScript configuration
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16+)
- Python (v3.8+)
- pip (Python package manager)

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install Python dependencies:

   ```bash
   pip install flask
   ```

3. Run the Flask backend:

   ```bash
   python3 backend.py
   ```

4. (Optional) Generate sample data:
   ```bash
   python3 populate_db.py
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Access the application:
   Open your browser and go to `http://localhost:3000`

## API Endpoints

| Endpoint       | Method | Description             | Request Body                             | Response                    |
| -------------- | ------ | ----------------------- | ---------------------------------------- | --------------------------- |
| `/`            | GET    | API health check        | None                                     | Text confirmation           |
| `/log`         | POST   | Log a medication        | `{medication, timestamp, source, notes}` | Success/error message       |
| `/medications` | GET    | Get all medication logs | None                                     | Array of medication entries |

## Future Improvements

- User authentication system
- Medication scheduling and reminders
- Medication database integration
- Data visualization for adherence tracking
- Mobile app version with offline capabilities

## License

This project is licensed under the MIT License - see the LICENSE file for details.
