var pantalla = document.querySelector('canvas');
    var pincel = pantalla.getContext('2d');

    pincel.fillStyle = 'grey';
    pincel.fillRect(0, 0, 1400, 575);

    pincel.fillStyle = 'red';
    pincel.fillRect(0, 0, 50, 50);
    pincel.fillStyle = 'green';
    pincel.fillRect(50, 0, 50, 50);
    pincel.fillStyle = 'blue';
    pincel.fillRect(100, 0, 50, 50);

    var puedoDibujar = false;

    function dibujarCirculo(evento) {
        if (puedoDibujar) {
            var x = evento.pageX - pantalla.offsetLeft;
            var y = evento.pageY - pantalla.offsetTop;
            pincel.fillStyle = color;
            pincel.beginPath();
            pincel.arc(x, y, 5, 0, 2 * 3.14);
            pincel.fill();
        }
    }

    pantalla.onmousemove = dibujarCirculo;

    function habilitarDibujar() {
        puedoDibujar = true;
    }

    function deshabilitarDibujar() {
        puedoDibujar = false;
    }


    var color;

    function cambiarColor(evento) {
        var x = evento.pageX - pantalla.offsetLeft;
        var y = evento.pageY - pantalla.offsetTop;


        if ((x > 0) && (x < 50) && (y > 0) && (y < 50)) {
            pincel.fillStyle = 'red';
            pincel.fillRect(0, 0, 50, 50);

            color = 'red';
        } else if ((x > 50) && (x < 100) && (y > 0) && (y < 50)) {
            pincel.fillStyle = 'green';
            pincel.fillRect(50, 0, 50, 50);

            color = 'green';
        } else if ((x > 100) && (x < 150) && (y > 0) && (y < 50)) {
            pincel.fillStyle = 'blue';
            pincel.fillRect(100, 0, 50, 50);

            color = 'blue';
        }
    }

    pantalla.onclick = cambiarColor;

    pantalla.onmousedown = habilitarDibujar;
    pantalla.onmouseup = deshabilitarDibujar;