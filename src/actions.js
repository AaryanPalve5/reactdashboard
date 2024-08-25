// Action Types
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// Fallback Data
const fallbackData =  [
  {
    "id": 1,
    "user": "William Penn",
    "category": "Malware",
    "details": "Malware Found on windows machine",
    "timeStamp": "2024-03-09",
    "ipAddress": "192.168.0.7"
  },
  {
    "id": 2,
    "user": "Jane Smith",
    "category": "Phishing",
    "details": "Phishing email received",
    "timeStamp": "2024-04-15",
    "ipAddress": "192.168.0.3"
  },
  {
    "id": 3,
    "user": "Jane Smith",
    "category": "Data Breach",
    "details": "PII data leak from server",
    "timeStamp": "2024-06-15",
    "ipAddress": "192.168.0.5"
  },
  {
    "id": 4,
    "user": "John Doe",
    "category": "Phishing",
    "details": "Suspicious link clicked",
    "timeStamp": "2024-02-10",
    "ipAddress": "192.168.0.7"
  },
  {
    "id": 5,
    "user": "Jane Smith",
    "category": "Data Breach",
    "details": "Data breach detected",
    "timeStamp": "2024-08-05",
    "ipAddress": "192.168.0.5"
  },
  {
    "id": 6,
    "user": "William Penn",
    "category": "Malware",
    "details": "Malware Found on mobile",
    "timeStamp": "2024-05-05",
    "ipAddress": "192.168.0.6"
  },
  {
    "id": 7,
    "user": "Jane Smith",
    "category": "Malware",
    "details": "Malware Found on mobile",
    "timeStamp": "2024-07-12",
    "ipAddress": "192.168.0.6"
  },
  {
    "id": 8,
    "user": "Jane Smith",
    "category": "Ransomware",
    "details": "Ransomware attack attempted",
    "timeStamp": "2024-04-30",
    "ipAddress": "192.168.0.1"
  },
  {
    "id": 9,
    "user": "William Penn",
    "category": "Malware",
    "details": "Malware Found on mobile",
    "timeStamp": "2024-06-08",
    "ipAddress": "192.168.0.1"
  },
  {
    "id": 10,
    "user": "Michael Brown",
    "category": "Data Breach",
    "details": " Unauthorized access detected",
    "timeStamp": "2024-02-04",
    "ipAddress": "192.168.0.6"
  },
  {
    "id": 11,
    "user": "Sarah Johnson",
    "category": "Ransomware",
    "details": "Ransomware encrypted files",
    "timeStamp": "2024-04-01",
    "ipAddress": "192.168.0.3"
  },
  {
    "id": 12,
    "user": "Helsing",
    "category": "Ransomware",
    "details": "Ransomware attack attempted",
    "timeStamp": "2024-06-07",
    "ipAddress": "192.168.0.6"
  },
  {
    "id": 13,
    "user": "Emily Davis",
    "category": "Ransomware",
    "details": "Ransomware attack attempted",
    "timeStamp": "2024-05-09",
    "ipAddress": "192.168.0.1"
  },
  {
    "id": 14,
    "user": "John Doe",
    "category": "Data Breach",
    "details": " Unauthorized access detected",
    "timeStamp": "2024-06-08",
    "ipAddress": "192.168.0.7"
  },
  {
    "id": 15,
    "user": "Helsing",
    "category": "Data Breach",
    "details": "Data breach detected",
    "timeStamp": "2024-02-24",
    "ipAddress": "192.168.0.5"
  },
  {
    "id": 16,
    "user": "Jane Smith",
    "category": "Phishing",
    "details": "Phishing attempt on social media",
    "timeStamp": "2024-08-07",
    "ipAddress": "192.168.0.2"
  },
  {
    "id": 17,
    "user": "Michael Brown",
    "category": "Ransomware",
    "details": "Ransomware encrypted files",
    "timeStamp": "2024-02-04",
    "ipAddress": "192.168.0.3"
  },
  {
    "id": 18,
    "user": "Emily Davis",
    "category": "Phishing",
    "details": "Suspicious link clicked",
    "timeStamp": "2024-02-18",
    "ipAddress": "192.168.0.4"
  },
  {
    "id": 19,
    "user": "William Penn",
    "category": "Phishing",
    "details": "Phishing email received",
    "timeStamp": "2024-03-17",
    "ipAddress": "192.168.0.4"
  },
  {
    "id": 20,
    "user": "Sarah Johnson",
    "category": "Data Breach",
    "details": "PII data leak from mobile",
    "timeStamp": "2024-02-18",
    "ipAddress": "192.168.0.5"
  },
  {
    "id": 21,
    "user": "Emily Davis",
    "category": "Malware",
    "details": " Malware Found in Email",
    "timeStamp": "2024-05-20",
    "ipAddress": "192.168.0.4"
  },
  {
    "id": 22,
    "user": "Emily Davis",
    "category": "Phishing",
    "details": "Suspicious link clicked",
    "timeStamp": "2024-05-07",
    "ipAddress": "192.168.0.3"
  },
  {
    "id": 23,
    "user": "William Penn",
    "category": "Data Breach",
    "details": "PII data leak from mobile",
    "timeStamp": "2024-07-28",
    "ipAddress": "192.168.0.2"
  },
  {
    "id": 24,
    "user": "Helsing",
    "category": "Phishing",
    "details": "Suspicious link clicked",
    "timeStamp": "2024-04-20",
    "ipAddress": "192.168.0.7"
  },
  {
    "id": 25,
    "user": "William Penn",
    "category": "Phishing",
    "details": "Suspicious link clicked",
    "timeStamp": "2024-03-07",
    "ipAddress": "192.168.0.6"
  },
  {
    "id": 26,
    "user": "Sarah Johnson",
    "category": "Malware",
    "details": "Malware Found on mobile",
    "timeStamp": "2024-08-10",
    "ipAddress": "192.168.0.5"
  },
  {
    "id": 27,
    "user": "William Penn",
    "category": "Ransomware",
    "details": "Ransomware attack attempted",
    "timeStamp": "2024-07-24",
    "ipAddress": "192.168.0.5"
  },
  {
    "id": 28,
    "user": "Helsing",
    "category": "Ransomware",
    "details": "Ransomware encrypted files",
    "timeStamp": "2024-07-24",
    "ipAddress": "192.168.0.7"
  },
  {
    "id": 29,
    "user": "Emily Davis",
    "category": "Malware",
    "details": " Malware Found in Email",
    "timeStamp": "2024-06-16",
    "ipAddress": "192.168.0.4"
  },
  {
    "id": 30,
    "user": "Sarah Johnson",
    "category": "Phishing",
    "details": "Phishing email received",
    "timeStamp": "2024-07-02",
    "ipAddress": "192.168.0.7"
  },
  {
    "id": 31,
    "user": "William Penn",
    "category": "Phishing",
    "details": "Phishing email received",
    "timeStamp": "2024-04-13",
    "ipAddress": "192.168.0.2"
  },
  {
    "id": 32,
    "user": "Michael Brown",
    "category": "Malware",
    "details": "Malware Found on mac machine",
    "timeStamp": "2024-06-14",
    "ipAddress": "192.168.0.7"
  },
  {
    "id": 33,
    "user": "Helsing",
    "category": "Malware",
    "details": "Malware Found on windows machine",
    "timeStamp": "2024-02-26",
    "ipAddress": "192.168.0.2"
  },
  {
    "id": 34,
    "user": "William Penn",
    "category": "Malware",
    "details": " Malware Found in Email",
    "timeStamp": "2024-04-04",
    "ipAddress": "192.168.0.2"
  },
  {
    "id": 35,
    "user": "Michael Brown",
    "category": "Ransomware",
    "details": "Ransomware encrypted files",
    "timeStamp": "2024-05-07",
    "ipAddress": "192.168.0.2"
  },
  {
    "id": 36,
    "user": "William Penn",
    "category": "Malware",
    "details": "Malware Detected on Server",
    "timeStamp": "2024-05-11",
    "ipAddress": "192.168.0.6"
  },
  {
    "id": 37,
    "user": "Sarah Johnson",
    "category": "Data Breach",
    "details": "PII data leak from mobile",
    "timeStamp": "2024-07-18",
    "ipAddress": "192.168.0.2"
  },
  {
    "id": 38,
    "user": "Helsing",
    "category": "Data Breach",
    "details": "PII data leak from mobile",
    "timeStamp": "2024-07-04",
    "ipAddress": "192.168.0.6"
  },
  {
    "id": 39,
    "user": "John Doe",
    "category": "Data Breach",
    "details": "PII data leak from server",
    "timeStamp": "2024-05-22",
    "ipAddress": "192.168.0.2"
  },
  {
    "id": 40,
    "user": "Jane Smith",
    "category": "Ransomware",
    "details": "Ransomware attack attempted",
    "timeStamp": "2024-06-16",
    "ipAddress": "192.168.0.6"
  },
  {
    "id": 41,
    "user": "Michael Brown",
    "category": "Ransomware",
    "details": "Ransomware encrypted files",
    "timeStamp": "2024-01-20",
    "ipAddress": "192.168.0.2"
  },
  {
    "id": 42,
    "user": "Jane Smith",
    "category": "Malware",
    "details": "Malware Detected on Server",
    "timeStamp": "2024-07-25",
    "ipAddress": "192.168.0.4"
  },
  {
    "id": 43,
    "user": "Emily Davis",
    "category": "Malware",
    "details": "Malware Detected on Server",
    "timeStamp": "2024-07-10",
    "ipAddress": "192.168.0.4"
  },
  {
    "id": 44,
    "user": "Helsing",
    "category": "Malware",
    "details": "Malware Found on mac machine",
    "timeStamp": "2024-05-23",
    "ipAddress": "192.168.0.1"
  },
  {
    "id": 45,
    "user": "Helsing",
    "category": "Phishing",
    "details": "Phishing attempt on social media",
    "timeStamp": "2024-07-15",
    "ipAddress": "192.168.0.7"
  },
  {
    "id": 46,
    "user": "John Doe",
    "category": "Phishing",
    "details": "Phishing email received",
    "timeStamp": "2024-02-20",
    "ipAddress": "192.168.0.5"
  },
  {
    "id": 47,
    "user": "Helsing",
    "category": "Malware",
    "details": "Malware Found on mobile",
    "timeStamp": "2024-01-11",
    "ipAddress": "192.168.0.7"
  },
  {
    "id": 48,
    "user": "Jane Smith",
    "category": "Phishing",
    "details": "Suspicious link clicked",
    "timeStamp": "2024-06-17",
    "ipAddress": "192.168.0.1"
  },
  {
    "id": 49,
    "user": "Jane Smith",
    "category": "Ransomware",
    "details": "Ransomware encrypted files",
    "timeStamp": "2024-04-12",
    "ipAddress": "192.168.0.3"
  },
  {
    "id": 50,
    "user": "Jane Smith",
    "category": "Phishing",
    "details": "Suspicious link clicked",
    "timeStamp": "2024-03-02",
    "ipAddress": "192.168.0.4"
  },
  {
    "id": 51,
    "user": "John Doe",
    "category": "Data Breach",
    "details": "PII data leak from server",
    "timeStamp": "2024-03-14",
    "ipAddress": "192.168.0.7"
  },
  {
    "id": 52,
    "user": "Michael Brown",
    "category": "Malware",
    "details": "Malware Found on mobile",
    "timeStamp": "2024-07-09",
    "ipAddress": "192.168.0.1"
  },
  {
    "id": 53,
    "user": "Sarah Johnson",
    "category": "Ransomware",
    "details": "Ransomware attack attempted",
    "timeStamp": "2024-03-22",
    "ipAddress": "192.168.0.2"
  },
  {
    "id": 54,
    "user": "Helsing",
    "category": "Ransomware",
    "details": "Ransomware attack attempted",
    "timeStamp": "2024-01-20",
    "ipAddress": "192.168.0.3"
  },
  {
    "id": 55,
    "user": "Jane Smith",
    "category": "Phishing",
    "details": "Suspicious link clicked",
    "timeStamp": "2024-03-29",
    "ipAddress": "192.168.0.7"
  },
  {
    "id": 56,
    "user": "Michael Brown",
    "category": "Data Breach",
    "details": "Data breach detected",
    "timeStamp": "2024-04-04",
    "ipAddress": "192.168.0.6"
  },
  {
    "id": 57,
    "user": "Sarah Johnson",
    "category": "Phishing",
    "details": "Phishing email received",
    "timeStamp": "2024-02-07",
    "ipAddress": "192.168.0.5"
  },
  {
    "id": 58,
    "user": "Emily Davis",
    "category": "Ransomware",
    "details": "Ransomware attack attempted",
    "timeStamp": "2024-03-24",
    "ipAddress": "192.168.0.2"
  },
  {
    "id": 59,
    "user": "William Penn",
    "category": "Ransomware",
    "details": "Ransomware attack attempted",
    "timeStamp": "2024-02-27",
    "ipAddress": "192.168.0.1"
  },
  {
    "id": 60,
    "user": "Michael Brown",
    "category": "Data Breach",
    "details": " Unauthorized access detected",
    "timeStamp": "2024-04-05",
    "ipAddress": "192.168.0.6"
  },
  {
    "id": 61,
    "user": "Emily Davis",
    "category": "Phishing",
    "details": "Phishing email received",
    "timeStamp": "2024-07-10",
    "ipAddress": "192.168.0.2"
  },
  {
    "id": 62,
    "user": "William Penn",
    "category": "Malware",
    "details": " Malware Found in Email",
    "timeStamp": "2024-02-08",
    "ipAddress": "192.168.0.4"
  },
  {
    "id": 63,
    "user": "William Penn",
    "category": "Malware",
    "details": "Malware Detected on Server",
    "timeStamp": "2024-01-17",
    "ipAddress": "192.168.0.7"
  },
  {
    "id": 64,
    "user": "Helsing",
    "category": "Data Breach",
    "details": "Data breach detected",
    "timeStamp": "2024-04-05",
    "ipAddress": "192.168.0.5"
  },
  {
    "id": 65,
    "user": "Jane Smith",
    "category": "Ransomware",
    "details": "Ransomware attack attempted",
    "timeStamp": "2024-03-17",
    "ipAddress": "192.168.0.2"
  },
  {
    "id": 66,
    "user": "Jane Smith",
    "category": "Data Breach",
    "details": " Unauthorized access detected",
    "timeStamp": "2024-07-14",
    "ipAddress": "192.168.0.2"
  },
  {
    "id": 67,
    "user": "Emily Davis",
    "category": "Ransomware",
    "details": "Ransomware attack attempted",
    "timeStamp": "2024-05-06",
    "ipAddress": "192.168.0.4"
  },
  {
    "id": 68,
    "user": "Helsing",
    "category": "Data Breach",
    "details": " Unauthorized access detected",
    "timeStamp": "2024-05-22",
    "ipAddress": "192.168.0.4"
  },
  {
    "id": 69,
    "user": "Emily Davis",
    "category": "Ransomware",
    "details": "Ransomware encrypted files",
    "timeStamp": "2024-01-07",
    "ipAddress": "192.168.0.5"
  },
  {
    "id": 70,
    "user": "Helsing",
    "category": "Ransomware",
    "details": "Ransomware encrypted files",
    "timeStamp": "2024-07-05",
    "ipAddress": "192.168.0.3"
  },
  {
    "id": 71,
    "user": "Michael Brown",
    "category": "Ransomware",
    "details": "Ransomware encrypted files",
    "timeStamp": "2024-06-11",
    "ipAddress": "192.168.0.6"
  },
  {
    "id": 72,
    "user": "John Doe",
    "category": "Data Breach",
    "details": "PII data leak from server",
    "timeStamp": "2024-03-07",
    "ipAddress": "192.168.0.2"
  },
  {
    "id": 73,
    "user": "Michael Brown",
    "category": "Malware",
    "details": "Malware Found on mobile",
    "timeStamp": "2024-03-14",
    "ipAddress": "192.168.0.3"
  },
  {
    "id": 74,
    "user": "Jane Smith",
    "category": "Ransomware",
    "details": "Ransomware encrypted files",
    "timeStamp": "2024-01-06",
    "ipAddress": "192.168.0.5"
  },
  {
    "id": 75,
    "user": "Michael Brown",
    "category": "Data Breach",
    "details": "Data breach detected",
    "timeStamp": "2024-05-29",
    "ipAddress": "192.168.0.3"
  },
  {
    "id": 76,
    "user": "Jane Smith",
    "category": "Data Breach",
    "details": "PII data leak from mobile",
    "timeStamp": "2024-02-21",
    "ipAddress": "192.168.0.4"
  },
  {
    "id": 77,
    "user": "Michael Brown",
    "category": "Phishing",
    "details": "Phishing email received",
    "timeStamp": "2024-03-11",
    "ipAddress": "192.168.0.5"
  },
  {
    "id": 78,
    "user": "Helsing",
    "category": "Data Breach",
    "details": "Data breach detected",
    "timeStamp": "2024-02-07",
    "ipAddress": "192.168.0.6"
  },
  {
    "id": 79,
    "user": "Sarah Johnson",
    "category": "Phishing",
    "details": "Phishing email received",
    "timeStamp": "2024-01-30",
    "ipAddress": "192.168.0.7"
  },
  {
    "id": 80,
    "user": "Michael Brown",
    "category": "Phishing",
    "details": "Phishing email received",
    "timeStamp": "2024-08-11",
    "ipAddress": "192.168.0.4"
  },
  {
    "id": 81,
    "user": "Helsing",
    "category": "Data Breach",
    "details": "PII data leak from server",
    "timeStamp": "2024-05-04",
    "ipAddress": "192.168.0.1"
  },
  {
    "id": 82,
    "user": "Jane Smith",
    "category": "Data Breach",
    "details": " Unauthorized access detected",
    "timeStamp": "2024-08-06",
    "ipAddress": "192.168.0.3"
  },
  {
    "id": 83,
    "user": "Sarah Johnson",
    "category": "Ransomware",
    "details": "Ransomware attack attempted",
    "timeStamp": "2024-04-16",
    "ipAddress": "192.168.0.4"
  },
  {
    "id": 84,
    "user": "Michael Brown",
    "category": "Ransomware",
    "details": "Ransomware attack attempted",
    "timeStamp": "2024-02-26",
    "ipAddress": "192.168.0.4"
  },
  {
    "id": 85,
    "user": "Sarah Johnson",
    "category": "Data Breach",
    "details": "Data breach detected",
    "timeStamp": "2024-06-29",
    "ipAddress": "192.168.0.6"
  },
  {
    "id": 86,
    "user": "John Doe",
    "category": "Malware",
    "details": "Malware Detected on Server",
    "timeStamp": "2024-01-08",
    "ipAddress": "192.168.0.7"
  },
  {
    "id": 87,
    "user": "Michael Brown",
    "category": "Phishing",
    "details": "Suspicious link clicked",
    "timeStamp": "2024-04-16",
    "ipAddress": "192.168.0.5"
  },
  {
    "id": 88,
    "user": "Jane Smith",
    "category": "Data Breach",
    "details": "PII data leak from server",
    "timeStamp": "2024-06-03",
    "ipAddress": "192.168.0.3"
  },
  {
    "id": 89,
    "user": "Michael Brown",
    "category": "Malware",
    "details": "Malware Found on windows machine",
    "timeStamp": "2024-04-22",
    "ipAddress": "192.168.0.2"
  },
  {
    "id": 90,
    "user": "Emily Davis",
    "category": "Ransomware",
    "details": "Ransomware encrypted files",
    "timeStamp": "2024-02-17",
    "ipAddress": "192.168.0.6"
  },
  {
    "id": 91,
    "user": "Michael Brown",
    "category": "Phishing",
    "details": "Suspicious link clicked",
    "timeStamp": "2024-06-17",
    "ipAddress": "192.168.0.2"
  },
  {
    "id": 92,
    "user": "Helsing",
    "category": "Data Breach",
    "details": "PII data leak from mobile",
    "timeStamp": "2024-01-15",
    "ipAddress": "192.168.0.5"
  },
  {
    "id": 93,
    "user": "Helsing",
    "category": "Phishing",
    "details": "Phishing attempt on social media",
    "timeStamp": "2024-07-15",
    "ipAddress": "192.168.0.2"
  },
  {
    "id": 94,
    "user": "Helsing",
    "category": "Ransomware",
    "details": "Ransomware attack attempted",
    "timeStamp": "2024-02-28",
    "ipAddress": "192.168.0.3"
  },
  {
    "id": 95,
    "user": "Helsing",
    "category": "Malware",
    "details": "Malware Detected on Server",
    "timeStamp": "2024-07-10",
    "ipAddress": "192.168.0.7"
  },
  {
    "id": 96,
    "user": "Helsing",
    "category": "Ransomware",
    "details": "Ransomware encrypted files",
    "timeStamp": "2024-03-30",
    "ipAddress": "192.168.0.7"
  },
  {
    "id": 97,
    "user": "Helsing",
    "category": "Ransomware",
    "details": "Ransomware encrypted files",
    "timeStamp": "2024-05-07",
    "ipAddress": "192.168.0.2"
  },
  {
    "id": 98,
    "user": "Jane Smith",
    "category": "Phishing",
    "details": "Suspicious link clicked",
    "timeStamp": "2024-03-28",
    "ipAddress": "192.168.0.1"
  },
  {
    "id": 99,
    "user": "John Doe",
    "category": "Malware",
    "details": "Malware Found on mobile",
    "timeStamp": "2024-01-26",
    "ipAddress": "192.168.0.2"
  },
  {
    "id": 100,
    "user": "John Doe",
    "category": "Phishing",
    "details": "Phishing attempt on social media",
    "timeStamp": "2024-03-23",
    "ipAddress": "192.168.0.2"
  }
];


// Action Creators
export const fetchDataRequest = () => {
  return async dispatch => {
    dispatch({ type: FETCH_DATA_REQUEST });
    try {
      const response = await fetch('https://api.allorigins.win/raw?url=http://52.168.1.54:8080/api/v1/userActivities');

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
    } catch (error) {
      console.error('API fetch failed:', error);
      dispatch({ type: FETCH_DATA_SUCCESS, payload: fallbackData }); // Use fallback data on failure
    }
  };
};

// Other action creators
export const setFilter = filter => ({
  type: 'SET_FILTER',
  payload: filter
});
