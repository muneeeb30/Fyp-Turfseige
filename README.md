# Turf Siege: AI-Powered Matchmaking & Booking for Turf Fields 

**Turf Siege** is a cutting-edge, AI-powered mobile application designed to streamline the management of turf fields, enable competitive matchmaking, and provide comprehensive performance analytics for amateur and semi-professional sports enthusiasts. This platform bridges critical gaps in the amateur sports sector—such as inefficient booking systems, imbalanced team formations, and a lack of structured player performance tracking.

---

##  Key Features

###  1. Smart Turf Booking System
* **Location-Based Discovery:** Integrates Google Maps API to allow users to search and discover available turf fields nearby.
* **Real-time Scheduling:** Allows turf owners to seamlessly list their fields, manage slot bookings, and efficiently update pricing.

###  2. AI-Powered Matchmaking & Team Formation
* **Balanced Matchmaking:** Utilizes custom heuristics and AI-driven scoring algorithms to suggest fair and competitive matches based on individual skill levels and opponent ratings.
* **Optimal Role Suggestion:** Analyzes historical player performance metrics to recommend optimal playing positions on the field.

###  3. Post-Match Performance Analytics
* **Actionable Insights:** Provides players with detailed analytical dashboards highlighting their technical strengths, weaknesses, and key areas for future improvement after every match.
* **Player Scouting:** Enables local club owners and talent scouts to search and track top-rated amateur players based on data-driven performance analytics.

###  4. Real-Time Communication & 360° Ratings
* **Firebase-Powered Chat:** Includes direct messaging and group chat features, ensuring smooth coordination and team communication before and after matches.
* **Comprehensive Feedback Loop:** Features a robust rating system where opposing teams, captains, and coaches can evaluate player and team dynamics to continuously refine the precision of the AI matchmaking engine.

---

##  Tech Stack

* **Frontend:** React Native (Engineered for cross-platform Android & iOS support)
* **Backend:** Flask (Lightweight, robust web framework optimized for flexible API routing and rapid data processing) *(Note: Transitioned from the initially proposed Node.js/Express.js backend to Flask as outlined in "F24-192-( FYP-FINAL_REPORT ).docx")*.
* **Databases:** 
    * **Firebase:** Used for real-time data synchronization, instant chat routing, push notifications, and secure user authentication.
    * **MongoDB:** Employed for long-term data persistence, including user profiles, comprehensive match histories, and analytical evaluation records.
* **Core APIs & Modules:** Google Maps API (Geolocation routing), Python SMTP (Streamlined system email notifications).
* **AI Engine:** TensorFlow / Custom Heuristic-Based Scoring Algorithms.

---

## 📐 System Architecture

The software structure adheres to a modular client-server framework to maximize scalability:
1. **Client Interface:** Built using React Native to provide a unified, highly responsive UI across varying mobile screen resolutions.
2. **Backend Engine:** A Flask-driven server network running core API services, business logic execution, and predictive matchmaking algorithms.
3. **Hybrid Database Layer:** Utilizes Firebase for volatile, instant microservices (authentication/chat) paired with MongoDB for heavy data analytics storage.

---

##  Getting Started

### Prerequisites
* Node.js & npm/yarn (For Frontend development)
* Python 3.x (For Backend development)
* Active MongoDB Instance
* Active Firebase Project Credentials
* Google Maps API Key

### Backend Deployment (Flask)
```bash
# Clone the repository
git clone [https://github.com/your-username/turf-siege.git](https://github.com/your-username/turf-siege.git)
cd turf-siege/backend

# Initialize and activate the virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install Required Dependencies
pip install -r requirements.txt

# Configure your environment parameters (.env file)
MONGO_URI=your_mongodb_connection_string
FIREBASE_KEY=your_firebase_config_path
GOOGLE_MAPS_KEY=your_google_maps_api_key

# Run the Flask development server
flask run
```
### Frontend Development (React Native)
```bash
cd ../frontend

# Install node dependencies
npm install

# Start the application on your desired simulator or target test device
npm run android   # or npm run ios
