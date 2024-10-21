import React from 'react';

interface ParkingHistory {
  date: string;
  location: string; // Mumbai 1, Mumbai 2, etc.
  spot: string; // Row and column like A3, A4, etc.
  price: number;
}

interface UserData {
  name: string;
  loyaltyPoints: number;
  currentParking: {
    location: string;
    spot: string;
  };
  parkingHistory: ParkingHistory[];
}

const UserDashboard: React.FC = () => {
  // Sample data to simulate user data
  const userData: UserData = {
    name: 'John Doe',
    loyaltyPoints: 120,
    currentParking: {
      location: 'Mumbai 1',
      spot: 'A3',
    },
    parkingHistory: [
      { date: '2024-10-05', location: 'Mumbai 2', spot: 'B4', price: 10 },
      { date: '2024-10-04', location: 'Mumbai 1', spot: 'A1', price: 12 },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome, {userData.name}</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-2">Loyalty Points</h2>
        <p className="text-lg">{userData.loyaltyPoints} points</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-2">Current Parking</h2>
        <p className="text-lg">Location: {userData.currentParking.location}</p>
        <p className="text-lg">Spot: {userData.currentParking.spot}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Parking History</h2>
        <ul>
          {userData.parkingHistory.map((entry, index) => (
            <li key={index} className="mb-2">
              <strong>{entry.date}</strong> - {entry.location}, Spot: {entry.spot}, ${entry.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserDashboard;
