const myImage = new Image()
myImage.src = 'data:image/jpeg;base64,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';

myImage.addEventListener('load', function() {
    const canvas = document.getElementById('canvas');
    const c = canvas.getContext('2d');
    canvas.width = 620;
    canvas.height = 645;

    c.drawImage(myImage, 0, 0, canvas.width, canvas.height);
    const pixels = c.getImageData(0,0, canvas.width, canvas.height);
    console.log(pixels);
    c.clearRect(0,0, canvas.width, canvas.height);

    let particlesArray = [];
    const numberOfParticles = 5000;


    //brightness of each pixel with x and y coordinates
    let mappedImage = [];
    for (let y = 0; y < canvas.height; y++){
        let row = [];
        for (let x = 0; x < canvas.width; x++){
            const red = pixels.data[(y * 4 * pixels.width) + (x * 4)];
            const green = pixels.data[(y * 4 * pixels.width) + (x * 4 + 1)];
            const blue = pixels.data[(y * 4 * pixels.width) + (x * 4 + 2)];
            const brightness = calculateRelativeBrightness(red, green, blue);
            const cell = [
                cellBrightness = brightness, 
            ];
            row.push(cell);
        }
        mappedImage.push(row);
    }
    console.log(mappedImage)

    // human brightness perception handle
    function calculateRelativeBrightness(red,green,blue) {
        return Math.sqrt(
            (red * red) * 0.299 + 
            (green * green) * 0.587 +
            (blue * blue) * 0.114
        )/100;
    }
    

    class Particle {
        constructor(){
             // splash from top
            this.x =  Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.speed = 0;
            // speed calculated based on brightness of bgr
            this.velocity = Math.random() * 3.5;
            this.size = Math.random() * 10 + 1;
            // navigate based on brightness, 
            // positions need to be int
            this.position1 = Math.floor(this.y);
            this.position2 = Math.floor(this.x);
        }
        update(){
            this.position1 = Math.floor(this.y);
            this.position2 = Math.floor(this.x);
            //[rowarr][cellarr][cellbrightness only 1 item = 0]
            this.speed = mappedImage[this.position1][this.position2][0];
            let movement = (3.5 - this.speed) + this.velocity;

            //this.y += movement;
            this.x += movement;
            
            //this.y++;
            //this.y += this.velocity;
            if (this.x >= canvas.width){
                this.x = 0;
                // speed faster on dark bgr et vice versa
                this.y = Math.random() * canvas.height;
            }
        }
        draw(){

            c.beginPath();
            c.fillStyle = 'white';
           // c.fillStyle = `rgb(${red},${green},${blue})`;
            console.log(c.fillStyle)
            c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            c.fill();
        }
        
    }
    function init(){
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle);
        }
    }
    init();
    function animate() {
        //c.drawImage(myImage, 0, 0, canvas.width, canvas.height);
        // transparency canvas method
        c.globalAlpha = 0.7;
        c.fillStyle = 'rgb(0,0,0)';
        c.fillRect(0,0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            c.globalAlpha = particlesArray[i].speed * 0.8;
            particlesArray[i].draw();
        }
        requestAnimationFrame(animate);
    }
    animate();
});




