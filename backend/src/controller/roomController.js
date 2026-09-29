import pool from '../config/db.js'

const getAllRooms = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM rooms ORDER BY id ASC"
    );

    res.status(200).json({
      success: true,
      rooms: result.rows,
    });
  } catch (error) {
    console.error("Error fetching rooms:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch rooms",
    });
  }
};

export {getAllRooms}