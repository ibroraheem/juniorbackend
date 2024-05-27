
# Departure Times Service

This is a Node.js application that provides real-time departure times for public transportation. It integrates with the Google Maps Geocoding API and the 511.org Transit API to fetch departure times based on location.

## Prerequisites

Before running this application, make sure you have the following:

- Node.js installed on your machine.
- API keys for the Google Maps Geocoding API and the 511.org Transit API.

## Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/departure-times-service.git
```

2. Navigate to the project directory:

```bash
cd departure-times-service
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory of the project and add your API keys:

```
googleAPI=YOUR_GOOGLE_MAPS_API_KEY
timeAPI=YOUR_511_API_KEY
```

## Usage

To run the application, use the following command:

```bash
npm start
```

This will start the server on port 3000 by default. You can access the API documentation using the following URL:

```
http://localhost:3000/api-docs
```

To fetch departure times, make a GET request to the `/departure-times` endpoint with either latitude and longitude or an address:

```
GET /departure-times?lat=37.7749&lon=-122.4194
```

```
GET /departure-times?address=San+Francisco%2C+CA
```
