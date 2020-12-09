let angle = 0;
let w;
let ma;
let maxD;
let slider;


function setup() {
  createCanvas(800, 800, WEBGL);
  ma = atan(1/ sqrt(2));
  maxD = dist(0,0,200,200);
  slider = createSlider(10, 60,12, 1 );
  



}


function draw() {
  w = slider.value();
  background(0);
  ortho(-600, 600, 600, -600, 0, 1000);
  

  rotateY(ma );
  rotateX(PI/4);
  
  
  
  let offset = 0;
  
  for(let z = 0; z< height;  z+=w) {
  for( x = 0; x< width; x+=w){
    
    push();
    
    let d = dist(x,z, width/2, height/2);
    let offset = map(d,0, maxD, -PI, PI);
    let a = angle+ offset;
    let h =floor( map(sin(a), -1, 1, 100, 300 ));
    normalMaterial(2175);
    translate(x-width/2,  0, z - height/ 2 );
    box(w-4, h, w-4 );
    
    

    pop();
  }
  }
angle += 0.1;

}
