import { IQueue } from "./abstractions.js";
import {
  Kafka,
  NotificationNewCampaing,
  NotificationUpdateCampaing,
  RabbitMQ,
} from "./implementations.js";

const kafkaRepository: IQueue = new Kafka();
const notificationNewCampaign: NotificationNewCampaing =
  new NotificationNewCampaing(kafkaRepository);

const message = {
  campaign_year: 202318,
  country_iso: "PE",
  campaing_name: "Campaña navideña",
};

notificationNewCampaign.sentMessage(JSON.stringify(message));

const rabbitMQRepository: IQueue = new RabbitMQ();
const notificationUpdateCampaign: NotificationUpdateCampaing =
  new NotificationUpdateCampaing(rabbitMQRepository);

const messageUpdate = {
  campaign_year: 202318,
  country_iso: "PE",
  description: "Fixing campaign",
};

notificationUpdateCampaign.sentMessage(JSON.stringify(messageUpdate));
