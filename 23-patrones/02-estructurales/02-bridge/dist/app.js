import { Kafka, NotificationNewCampaing, NotificationUpdateCampaing, RabbitMQ, } from "./implementations.js";
const kafkaRepository = new Kafka();
const notificationNewCampaign = new NotificationNewCampaing(kafkaRepository);
const message = {
    campaign_year: 202318,
    country_iso: "PE",
    campaing_name: "Campaña navideña",
};
notificationNewCampaign.sentMessage(JSON.stringify(message));
const rabbitMQRepository = new RabbitMQ();
const notificationUpdateCampaign = new NotificationUpdateCampaing(rabbitMQRepository);
const messageUpdate = {
    campaign_year: 202318,
    country_iso: "PE",
    description: "Fixing campaign",
};
notificationUpdateCampaign.sentMessage(JSON.stringify(messageUpdate));
