module.exports = async (client) => {

    require(`${process.cwd()}/modules/refresh-embed-databasing`)(client);
    require(`${process.cwd()}/modules/verify`)(client);
    
    client.logger(`・Loaded All Modules`.brightGreen);
}