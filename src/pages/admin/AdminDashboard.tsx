import React from 'react';

interface ParkingArea {
  city: string;
  areaName: string; // e.g., Mumbai 1, Mumbai 2, etc.
  capacity: number;
  occupied: number;
  hourlyRate: number;
}

const AdminDashboard: React.FC = () => {
  // Sample data to simulate parking area details
  const parkingAreas: ParkingArea[] = [
    { city: 'Mumbai', areaName: 'Mumbai 1', capacity: 50, occupied: 35, hourlyRate: 5 },
    { city: 'Mumbai', areaName: 'Mumbai 2', capacity: 40, occupied: 30, hourlyRate: 4 },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-2">Parking Areas</h2>
        {parkingAreas.map((area, index) => (
          <div key={index} className="mb-4 p-4 border border-gray-300 rounded">
            <h3 className="text-lg font-semibold">
              {area.city} - {area.areaName}
            </h3>
            <p>Capacity: {area.capacity}</p>
            <p>Occupied: {area.occupied}</p>
            <p>Hourly Rate: ${area.hourlyRate}</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Predicted Occupancy for Busy Days</h2>
        <p>
          Simulate predictions for how parking occupancy will look on busy days, such as weekends or holidays.
        </p>
        <button className="px-4 py-2 bg-green-500 text-white rounded">Run Simulation</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
    