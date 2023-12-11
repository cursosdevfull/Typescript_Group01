export class Schedule {
    constructor(props) {
        this.id = new Date().getTime();
        this.courseId = props.courseId;
        this.teacherId = props.teacherId;
        this.dateStart = props.dateStart;
        this.duration = props.duration;
        this.slogan = props.slogan;
        this.description = props.description;
        this.price = props.price;
        this.requirements = props.requirements;
        this.topics = props.topics;
        this.enabled = props.enabled;
    }
    update(props) {
        Object.assign(this, props);
    }
    delete() {
        this.enabled = false;
    }
    clone() {
        const clone = Object.create(this);
        Object.assign(clone, this);
        Object.assign(clone, { id: new Date().getTime() });
        return clone;
    }
}
