var config = {}

config.host = process.env.HOST || "https://addys.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "QpkhBVI9257YVvciIfbu3pFrjNVNZPl79Tvsoaa29wYwUNgaSqOdGbWFjArShwcAMXH59P7TEzI1Yxn+5NC1NQ==";
config.databaseId = "mmsa";
config.collectionId = "mmsa-model";

module.exports = config;