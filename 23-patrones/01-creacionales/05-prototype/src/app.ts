import { Schedule, ScheduleProperties } from "./clone.js";

const scheduleProperties: ScheduleProperties = {
  courseId: 1,
  teacherId: 1,
  dateStart: new Date(),
  duration: 1,
  slogan: "slogan",
  description: "description",
  price: 1,
  requirements: ["requirements"],
  topics: ["topics"],
  enabled: true,
};

const schedule: Schedule = new Schedule(scheduleProperties);
console.log(schedule);
const newSchedule: Schedule = schedule.clone();
newSchedule.update({ dateStart: new Date("2024-08-10") });
console.log(newSchedule);
