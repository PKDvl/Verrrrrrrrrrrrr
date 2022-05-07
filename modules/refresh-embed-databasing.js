const cron = require('node-cron')

module.exports = async (client) => {
    cron.schedule("*/3600 * * * * *", async () => {
        client.embedSettings.clear()
    });
}