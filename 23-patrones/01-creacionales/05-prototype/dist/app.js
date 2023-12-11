import { Schedule } from "./clone.js";
const scheduleProperties = {
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
const schedule = new Schedule(scheduleProperties);
console.log(schedule);
const newSchedule = schedule.clone();
newSchedule.update({ dateStart: new Date("2024-08-10") });
console.log(newSchedule);
