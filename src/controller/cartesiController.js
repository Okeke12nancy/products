const axios = require("axios");

require("dotenv").config();

const CARTESI_API_URL = process.env.CARTESI_API_URL;

const processVoucher = async (req, res) => {
  try {
    const { payload } = req.body;

    const response = await axios.post(`${CARTESI_API_URL}/voucher`, {
      payload,
    });

    if (response.status === 200) {
      return res.status(200).json({
        message: "Voucher processed successfully",
        data: response.data,
      });
    } else {
      return res
        .status(response.status)
        .json({ message: "Failed to process voucher" });
    }
  } catch (error) {
    console.error("Error processing voucher:", error.message);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

const generateReport = async (req, res) => {
  try {
    const response = await axios.get(`${CARTESI_API_URL}/reports`);

    if (response.status === 200) {
      return res.status(200).json({ report: response.data });
    } else {
      return res
        .status(response.status)
        .json({ message: "Failed to generate report" });
    }
  } catch (error) {
    console.error("Error generating report:", error.message);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

module.exports = { processVoucher, generateReport };
