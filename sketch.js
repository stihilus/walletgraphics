function setup() {
  var canvasWidth = 1080;
  var canvasHeight = 1080;
  var canvas = createCanvas(canvasWidth, canvasHeight);
  var address = ('waiting');
  canvas.parent('sketch-holder');
  background(255);

}

function showData() {
  // get from input when is btn pressed
  addressFromInput = select("#addressFromInput").value();

  var addressLenght = 41;
  var address = addressFromInput;

  // split address
  let splitAddress = split(address, '');

  let value = [];
  let valueUnchar = [];
  let valueMap = [];

  for (i = 0; i < addressLenght; i++) {
    value[i] = splitAddress[i];
    valueUnchar[i] = unchar(value[i]);
    valueMap[i] = map(valueUnchar[i], 48, 122, 0, 540);
  }

  // clear canvas
  background(255);
  print('------------- Walletgraphics -------------');
  
  // 7. nubmer ------------------------
  // background assets
  var bgdAssets = [img21, img22, img23, img24, img25];
  // 7. nubmer BACKGROUND picker
  // maping 7. nubmer to pick asset from bgdAssets[] //
  var printBgd = Math.floor(map(valueMap[6], 0, 540, 0, 4));
  //printing background image
  image(bgdAssets[printBgd], 0, 0);
  print('7. Char is: ' + splitAddress[6] + ' | Background: ' + printBgd);

  // 3. nubmer ------------------------
  // background assets
  var bgdAssets = [img01, img02, img03, img04, img05];
  // 3. nubmer BACKGROUND picker
  // maping 3. nubmer to pick asset from bgdAssets[] //
  var printBgd = Math.floor(map(valueMap[2], 0, 540, 0, 4));
  //printing background image
  image(bgdAssets[printBgd], 0, 0);
  print('3. Char is: ' + splitAddress[2] + ' | Background: ' + printBgd);

  // 4. nubmer ------------------------
  // background assets
  var bgdAssets = [img06, img07, img08, img09, img10];
  // 4. nubmer BACKGROUND picker
  // maping 4. nubmer to pick asset from bgdAssets[] //
  var printBgd = Math.floor(map(valueMap[3], 0, 540, 0, 4));
  //printing background image
  image(bgdAssets[printBgd], 0, 0);
  print('4. Char is: ' + splitAddress[3] + ' | Background: ' + printBgd);
  
  // 5. nubmer ------------------------
  // background assets
  var bgdAssets = [img11, img12, img13, img14, img15];
  // 5. nubmer BACKGROUND picker
  // maping 5. nubmer to pick asset from bgdAssets[] //
  var printBgd = Math.floor(map(valueMap[4], 0, 540, 0, 4));
  //printing background image
  image(bgdAssets[printBgd], 0, 0);
  print('5. Char is: ' + splitAddress[4] + ' | Background: ' + printBgd);
  
  // 6. nubmer ------------------------
  // background assets
  var bgdAssets = [img16, img17, img18, img19, img20];
  // 6. nubmer BACKGROUND picker
  // maping 6. nubmer to pick asset from bgdAssets[] //
  var printBgd = Math.floor(map(valueMap[5], 0, 540, 0, 4));
  //printing background image
  image(bgdAssets[printBgd], 0, 0);
  print('6. Char is: ' + splitAddress[5] + ' | Background: ' + printBgd);
  
  // Frame
  image(img26, 0, 0);
  // Print Address
  textSize(20);
  text(addressFromInput,43,1035)
  fill(30);
  

}

function draw() {

}