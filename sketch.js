function setup() {
  var canvasWidth = 500;
  var canvasHeight = 500;
  var canvas = createCanvas(canvasWidth, canvasHeight);
  var address = ('waiting');
  canvas.parent('sketch-holder');
  background(215);
}

function showData() {
  // get from input when is btn pressed
  addressFromInput = select("#addressFromInput").value();

  var addressLenght = 41;
  var address = addressFromInput;

  //split address
  let splitAddress = split(address, '');

  let value = [];
  let valueUnchar = [];
  let valueMap = [];

  for (i = 0; i < addressLenght; i++) {
    value[i] = splitAddress[i];
    valueUnchar[i] = unchar(value[i]);
    valueMap[i] = map(valueUnchar[i], 48, 122, 0, 450);
  }
  //background
  background(215);

  //drawing rectangles
  for (i = 0; i < addressLenght; i++) {
    
    rect(valueMap[i], valueMap[i + 1], 55, 55);
  }

}

function draw() {}