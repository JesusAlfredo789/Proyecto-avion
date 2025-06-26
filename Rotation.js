//Rotación de terreno
AFRAME.registerComponent("terrain-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 },
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
          if (this.data.speedOfRotation < 0.1) {
            this.data.speedOfRotation += 0.01;
          }
        }
        if (e.key === "ArrowLeft") {
          if (this.data.speedOfRotation > -0.1) {
            this.data.speedOfRotation -= 0.01;
          }
        }
      });
    },
    tick: function () {
      var mapRotation = this.el.getAttribute("rotation");
  
      mapRotation.y += this.data.speedOfRotation;
  
      this.el.setAttribute("rotation", {
        x: mapRotation.x,
        y: mapRotation.y,
        z: mapRotation.z,
      });
    },
  });
  
  //Componente de rotación del avión
  AFRAME.registerComponent("airplane-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 },
      speedOfAscent: { type: "number", default: 0 }
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
  
        //obtener la información de los atributos
        this.data.speedOfRotation = this.el.getAttribute("rotation");      
        this.data.speedOfAscent = this.el.getAttribute("position");
  
        var airplaneRotation = this.data.speedOfRotation;      
        var airplanePosition = this.data.speedOfAscent;
  
        //controlar los atributos con las flechas del teclado
        if (e.key === "ArrowRight") {
          if (airplaneRotation.x > -10) {
            airplaneRotation.x -= 0.5;
            this.el.setAttribute("rotation", airplaneRotation);
          }
        }
        if (e.key === "ArrowLeft") {
          if (airplaneRotation.x < 10) {
            airplaneRotation.x += 0.5;
            this.el.setAttribute("rotation", airplaneRotation);
          }
        }
        if (e.key === "ArrowUp") {
          if (airplaneRotation.z > -10) {
            airplaneRotation.z -= 0.5;
            this.el.setAttribute("rotation", airplaneRotation);
          }
          if (airplanePosition.y < 2) {
            airplanePosition.y += 0.01;
            this.el.setAttribute("position", airplanePosition);
          }
        }
        if (e.key === "ArrowDown") {
          if (airplaneRotation.z < 20) {
            airplaneRotation.z += 0.5;
            this.el.setAttribute("rotation", airplaneRotation);
          }
          if (airplanePosition.y > -15) {
            airplanePosition.y -= 0.01;
            this.el.setAttribute("position", airplanePosition);
          }
        }
      });
    }
  });
  
  
