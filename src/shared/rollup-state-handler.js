const { ROLLUP_SERVER } = require("./config");
const { HttpClient } = require("@cartesi/rollups");

export class RollupStateHandler {
  constructor() {
    this.client = new HttpClient(ROLLUP_SERVER);
  }

  async sendVoucher(destination, payload) {
    try {
      const voucher = await this.client.sendVoucher({
        destination,
        payload,
      });
      return voucher;
    } catch (error) {
      console.error("Error sending voucher:", error);
      throw new Error("Failed to send voucher");
    }
  }

  async sendNotice(payload) {
    try {
      const notice = await this.client.sendNotice({ payload });
      return notice;
    } catch (error) {
      console.error("Error sending notice:", error);
      throw new Error("Failed to send notice");
    }
  }

  async getReport(reportId) {
    try {
      const report = await this.client.getReport(reportId);
      return report;
    } catch (error) {
      console.error("Error fetching report:", error);
      throw new Error("Failed to fetch report");
    }
  }
}
