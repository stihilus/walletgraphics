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
  print('------------- Walletgraphics -------------');

  // BACKGROUND 3. nubmer ------------------------
  // background assets
  var bgdAssets = [bgd01, bgd02, bgd03, bgd04, bgd05];
  // 3. nubmer BACKGROUND picker
  // maping 3. nubmer to pick asset from bgdAssets[] //
  var printBgd = Math.floor(map(valueMap[2], 0, 540, 0, 4));
  //printing background image
  image(bgdAssets[printBgd], 0, 0);
  print('3. Char is: ' + splitAddress[2] + ' | Background: ' + printBgd);
  
  // Body 4. nubmer ------------------------
  // Body assets
  var BodyAssets = [body01, body02, body03, body04, body05];
  // 4. nubmer BODY picker
  // maping 4. nubmer to pick asset from bgdAssets[] //
  var printBody = Math.floor(map(valueMap[3], 0, 540, 0, 4));
  //printing background image
  image(BodyAssets[printBody], 0, 0);
  print('4. Char is: ' + splitAddress[3] + ' | Body: ' + printBody);
  
  // Body 8. nubmer ------------------------
  // Body assets
  var MouthAssets = [mouth01, mouth02, mouth03, mouth04, mouth05];
  // 4. nubmer BODY picker
  // maping 4. nubmer to pick asset from bgdAssets[] //
  var printMouth = Math.floor(map(valueMap[7], 0, 540, 0, 4));
  //printing background image
  image(MouthAssets[printMouth], 0, 0);
  print('8. Char is: ' + splitAddress[7] + ' | Mouth: ' + printMouth);
  
  // Eyes 5. nubmer ------------------------
  // Eyes assets
  var EyesAssets = [eyes01, eyes02, eyes03, eyes04, eyes05];
  // 5. nubmer BODY picker
  // maping 5. nubmer to pick asset from bgdAssets[] //
  var printEyes = Math.floor(map(valueMap[4], 0, 540, 0, 4));
  //printing background image
  image(EyesAssets[printEyes], 0, 0);
  print('5. Char is: ' + splitAddress[4] + ' | Eyes: ' + printEyes);
  
  // FaceAdd 6. nubmer ------------------------
  // FaceAdd
  var faceAddAssets = [faceAdd01, faceAdd02, faceAdd03, faceAdd04, faceAdd05];
  // 6. nubmer Hair picker
  // maping 6. nubmer to pick asset from bgdAssets[] //
  var printFaceAdd = Math.floor(map(valueMap[5], 0, 540, 0, 4));
  //printing background image
  image(faceAddAssets[printFaceAdd], 0, 0);
  print('6. Char is: ' + splitAddress[5] + ' | FaceAdd: ' + printFaceAdd);

  // Hair 7. nubmer ------------------------
  // Hair assets
  var hairAssets = [hair01, hair02, hair03, hair04, hair05];
  // 7. nubmer Hair picker
  // maping 7. nubmer to pick asset from bgdAssets[] //
  var printHair = Math.floor(map(valueMap[6], 0, 540, 0, 4));
  //printing background image
  image(hairAssets[printHair], 0, 0);
  print('7. Char is: ' + splitAddress[6] + ' | Hair: ' + printHair);
  


}

function draw() {

}