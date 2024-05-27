# SF Movies App

The SF Movies app allows users to explore movie filming locations in San Francisco on an interactive map. Users can search for specific filming locations and view them on the map.

## Features

- View movie filming locations on a map of San Francisco.
- Search for filming locations using autocompletion search.
- Click on map markers to view more information about each filming location.

## Prerequisites

Before using the SF Movies app, make sure you have the following:

- Node.js installed on your machine.
- An API key for the Google Maps JavaScript API (required for map functionality).
- An internet connection to fetch movie filming location data from the backend.

## Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/sf-movies-app.git
```

2. Navigate to the project directory:

```bash
cd sf-movies-app
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory of the project and add your Google Maps API key:

```
GOOGLE_MAPS_API_KEY=YOUR_API_KEY
```

## Usage

1. Start the backend server:

```bash
npm start
```

This will start the server on port 3000 by default.

2. Open your web browser and navigate to `http://localhost:5000` to access the SF Movies app.

3. Explore movie filming locations on the interactive map:
   - Use the search bar to find specific filming locations by typing in the name or address.
   - Click on map markers to view more information about each filming location.



Replace `"YOUR_API_KEY"` in the `.env` file with your actual Google Maps API key.

