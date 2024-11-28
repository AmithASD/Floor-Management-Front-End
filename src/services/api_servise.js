import axios from 'axios';

const API_URL = "http://localhost:3003/api/tables";


// Fetch all rooms
export const fetchRoomsAPI = async () => {
  try {
    const response = await fetch(`${API_URL}/rooms`);
    if (!response.ok) throw new Error("Failed to fetch rooms");
    console.log("fetchRoomsAPI =============>>>>>", response);
    
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
  }
};

// Save a room
export const saveRoom = async (room) => {
  try {
    const response = await fetch(`${API_URL}/add-room`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(room),
    });
    if (!response.ok) throw new Error("Failed to save room");
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
  }
};

//save Table
export const saveTable = async (roomId, table) => {
  console.log("roomId, ========>>>>", roomId);
  const tableData = roomId.table;
  console.log("Table data ========>>>>", tableData);

  try {
    // export const saveTable = async (roomId) => {
    const response = await fetch(`${API_URL}/add-table`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ roomId, tableData }),
    });
    if (!response.ok) throw new Error("Failed to save table");
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
  }
};

// Update a table
export const updateTableAPI = async (tableData) => {
  try {
    const response = await fetch(`${API_URL}/update-table`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tableData),
    });
    if (!response.ok) throw new Error("Failed to update table");
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
  }
};

// Delete a table
export const deleteTable = async (roomId, tableId) => {
  try {
    const response = await fetch(`${API_URL}/delete-table`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ roomId, tableId }),
    });
    if (!response.ok) throw new Error("Failed to delete table");
  } catch (error) {
    console.error('Error:', error);
  }
};
