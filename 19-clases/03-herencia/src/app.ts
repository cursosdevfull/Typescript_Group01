class RobotClasico {
  origenCafe = "Colombia";

  servirCafeAmericano() {
    console.log("Sirviendo café americano");
  }
}

class RobotModerno extends RobotClasico {
  servirCafeExpreso() {
    console.log("Sirviendo café expreso");
  }

  servirCafeCapuchino() {
    console.log("Sirviendo café capuchino");
  }

  servirCafeMocca() {
    console.log("Sirviendo café mocca");
  }
}

const robot = new RobotModerno();
robot.servirCafeAmericano();
console.log("Origen Cafe", robot.origenCafe);
