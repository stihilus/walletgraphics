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
  background(215);

  // BACKGROUND 3. nubmer ------------------------
  // background assets
  var bgdAssets = [bgd01, bgd02, bgd03, bgd04, bgd05, bgd06, bgd07, bgd08, bgd09, bgd10];
  // 3. nubmer picker BACKGROUND
  // maping 3. nubmer to pick asset from bgdAssets[] //
  var bgdBackground = Math.floor(map(valueMap[2], 0, 540, 0, 9));
  //printing background image
  image(bgdAssets[bgdBackground], 0, 0);


  // Load assets to  ------------------------
  var Assets = [asset01, asset02, asset03, asset04, asset05, asset06, asset07, asset08, asset09, asset10, asset11, asset12, asset13, asset14, asset15];
  
  // ASSET 01 ---- 4. number choose asset - 5. loc X - 6. loc Y
  var assetPrint = Math.floor(map(valueMap[3], 0, 540, 0, 15));
  image(Assets[assetPrint], valueMap[4], valueMap[5]);

  // ASSETS 02 ---- 7. number - choose asset - 8. loc X - 9. loc Y
  var assetPrint = Math.floor(map(valueMap[6], 0, 540, 0, 15));
  image(Assets[assetPrint], valueMap[6], valueMap[7]);
  
  // ASSETS 03 ---- 10. number - choose asset - 11. loc X - 12. loc Y
  var assetPrint = Math.floor(map(valueMap[9], 0, 540, 0, 15));
  image(Assets[assetPrint], valueMap[10], valueMap[11]);
  
  // ASSETS 04 ---- 13. number - choose asset - 14. loc X - 15. loc Y
  var assetPrint = Math.floor(map(valueMap[12], 0, 540, 0, 15));
  image(Assets[assetPrint], valueMap[13], valueMap[14]);
  
  // ASSETS 05 ---- 16. number - choose asset - 17. loc X - 18. loc Y
  var assetPrint = Math.floor(map(valueMap[15], 0, 540, 0, 15));
  image(Assets[assetPrint], valueMap[16], valueMap[17]);
  
  // ASSETS 06 ---- 19. number - choose asset - 20. loc X - 21. loc Y
  var assetPrint = Math.floor(map(valueMap[18], 0, 540, 0, 15));
  image(Assets[assetPrint], valueMap[19], valueMap[20]);

}

function draw() {

}
