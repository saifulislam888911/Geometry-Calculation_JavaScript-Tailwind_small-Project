console.log("Js File : area-calculator_Mine.js");

/* <!-- .......... 
    Card No.1 : Triangle
.......... --> */
function calculateTriangleArea() {
  const inputField_TriangleBase = document.getElementById("triangle-base");
  const triangleBaseValue = parseFloat(inputField_TriangleBase.value);
  inputField_TriangleBase.value = "";

  const inputField_TriangleHeight = document.getElementById("triangle-height");
  const triangleHeightValue = parseFloat(inputField_TriangleHeight.value);
  inputField_TriangleHeight.value = "";

  /* <!-- .......... Validate Input : base and height .......... --> */
  if (isNaN(triangleBaseValue) || isNaN(triangleHeightValue)) {
    alert("Enter a Valid Number.");

    return;
  }

  const textElement_TriangleBase = document.getElementById(
    "formula-triangle-base"
  );
  textElement_TriangleBase.innerText = triangleBaseValue;
  const textElement_TriangleHeight = document.getElementById(
    "formula-triangle-height"
  );
  textElement_TriangleHeight.innerText = triangleHeightValue;

  const areaCalculation_Triangle =
    0.5 * triangleBaseValue * triangleHeightValue;

  const triangleArea = document.getElementById("triangle-area");
  triangleArea.innerText = areaCalculation_Triangle;

  /* <!-- .......... Function : Add to Calculation Entry .......... --> */
  addToCalculationEntry("Triangle", areaCalculation_Triangle);
}

/* <!-- .......... 
    Card No.2 : Rectangle
.......... --> */
function calculateRectangleArea() {
  const inputField_RectangleWidth = document.getElementById("rectangle-width");
  const rectangleWidthValue = parseFloat(inputField_RectangleWidth.value);
  inputField_RectangleWidth.value = "";

  const inputField_RectangleLength =
    document.getElementById("rectangle-length");
  const rectangleLengthValue = parseFloat(inputField_RectangleLength.value);
  inputField_RectangleLength.value = "";

  /* <!-- .......... Validate Input : width and length .......... --> */
  if (isNaN(rectangleWidthValue) || isNaN(rectangleLengthValue)) {
    alert("Enter a Valid Number.");

    return;
  }

  const textElement_RectangleWidth = document.getElementById(
    "formula-rectangle-width"
  );
  textElement_RectangleWidth.innerText = rectangleWidthValue;
  const textElement_RectangleLength = document.getElementById(
    "formula-rectangle-length"
  );
  textElement_RectangleLength.innerText = rectangleLengthValue;

  const areaCalculation_Rectangle = rectangleWidthValue * rectangleLengthValue;

  const rectangleArea = document.getElementById("rectangle-area");
  rectangleArea.innerText = areaCalculation_Rectangle;

  /* <!-- .......... Function : Add to Calculation Entry .......... --> */
  addToCalculationEntry("Rectangle", areaCalculation_Rectangle);
}

/* <!-- .......... 
    Card No.3 : Parallelogram
.......... --> */
function calculateParallelogramArea() {
  const parallelogramBase = getInputFieldValueById("parallelogram-base");
  const parallelogramHeight = getInputFieldValueById("parallelogram-height");

  /* <!-- .......... Validate Input : base and height .......... --> */
  if (isNaN(parallelogramBase) || isNaN(parallelogramHeight)) {
    alert("Enter a Valid Number.");

    return;
  }

  const area_Parallelogram = parallelogramBase * parallelogramHeight;
  setTextElementValueById("parallelogram-area", area_Parallelogram);

  setTextElementValueById("formula-parallelogram-base", parallelogramBase);
  setTextElementValueById("formula-parallelogram-height", parallelogramHeight);

  /* <!-- .......... Function : Add to Calculation Entry .......... --> */
  addToCalculationEntry("Parallelogram", area_Parallelogram);
}

/* <!-- .......... 
    Card No.4 : Rhombus
.......... --> */
function calculateRhombusArea() {
  const rhombusDiagonal_1 = getInputFieldValueById("rhombus-diagonal-1");
  const rhombusDiagonal_2 = getInputFieldValueById("rhombus-diagonal-2");

  /* <!-- .......... Validate Input : Diagonal_1 and Diagonal_2 .......... --> */
  if (isNaN(rhombusDiagonal_1) || isNaN(rhombusDiagonal_2)) {
    alert("Enter a Valid Number.");

    return;
  }

  const area_Rhombus = 0.5 * rhombusDiagonal_1 * rhombusDiagonal_2;
  setTextElementValueById("rhombus-area", area_Rhombus);

  setTextElementValueById("formula-rhombus-diagonal-1", rhombusDiagonal_1);
  setTextElementValueById("formula-rhombus-diagonal-1", rhombusDiagonal_2);

  /* <!-- .......... Function : Add to Calculation Entry .......... --> */
  addToCalculationEntry("Rhombus", area_Rhombus);
}

/* <!-- .......... 
    Card No.5 : Pentagon
.......... --> */
function calculatePentagonArea() {
  const pentagonPerimeter = getInputFieldValueById("pentagon-perimeter");
  const pentagonApothem = getInputFieldValueById("pentagon-apothem");

  /* <!-- .......... Validate Input : Perimeter and Apothem .......... --> */
  if (isNaN(pentagonPerimeter) || isNaN(pentagonApothem)) {
    alert("Enter a Valid Number.");

    return;
  }

  const area_Pentagon = 0.5 * pentagonPerimeter * pentagonApothem;
  setTextElementValueById("pentagon-area", area_Pentagon);

  setTextElementValueById("formula-pentagon-perimeter", pentagonPerimeter);
  setTextElementValueById("formula-pentagon-apothem", pentagonApothem);

  /* <!-- .......... Function : Add to Calculation Entry .......... --> */
  addToCalculationEntry("Pentagon", area_Pentagon);
}

/* <!-- .......... 
    Card No.6 : Ellipse
.......... --> */
function calculateEllipseArea() {
  const ellipseSemiMajorAxis_a = getInputFieldValueById(
    "ellipse-semiMajorAxis-a"
  );
  const ellipseSemiMinorAxis_b = getInputFieldValueById(
    "ellipse-semiMinorAxis-b"
  );

  /* <!-- .......... Validate Input : Semi-Major-Axis-a and Semi-Minor-Axis-b .......... --> */
  if (isNaN(ellipseSemiMajorAxis_a) || isNaN(ellipseSemiMinorAxis_b)) {
    alert("Enter a Valid Number.");

    return;
  }

  const area_Ellipse = (
    3.1416 *
    ellipseSemiMajorAxis_a *
    ellipseSemiMinorAxis_b
  ).toFixed(1);
  setTextElementValueById("ellipse-area", area_Ellipse);

  setTextElementValueById(
    "formula-ellipse-semiMajorAxis-a",
    ellipseSemiMajorAxis_a
  );
  setTextElementValueById(
    "formula-ellipse-semiMinorAxis-b",
    ellipseSemiMinorAxis_b
  );

  /* <!-- .......... Function : Add to Calculation Entry .......... --> */
  addToCalculationEntry("Ellipse", area_Ellipse);
}

function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValue = parseFloat(inputField.value);

  inputField.value = "";

  return inputFieldValue;
}

function getTextElementValueById(textElementId) {
  const textElement = document.getElementById(textElementId);
  const textElementValue = parseFloat(textElement.innerText);

  return textElementValue;
}

function setTextElementValueById(textElementId, newValue) {
  const textElement = document.getElementById(textElementId);

  textElement.innerText = newValue;
}

/* <!-- .......... Function : Add to Calculation Entry .......... --> */
function addToCalculationEntry(areaType, area) {
  const calculationEntry = document.getElementById("calculation-entry");
  const countEntry = calculationEntry.childElementCount;
  const uniqId = countEntry + 1;

  const entryData = document.createElement("p");
  entryData.classList.add("my-4");
  entryData.setAttribute("id", "dataId_" + uniqId);
  /* <!-- .......... Creating Html using Dynamic Template String .......... --> */
  entryData.innerHTML = `
                            ${countEntry + 1}. ${areaType}
                            <span id="areaValue_${uniqId}">${area}</span>
                            <span id="unitName_${uniqId}">cm</span><sup>2</sup> 
                            <button onclick="meter_converter('areaValue_${uniqId}', 'unitName_${uniqId}')" class="btn btn-sm text-white bg-violet-400">
                                Convert to m<sup>2</sup>
                            </button>
                        `;

  calculationEntry.appendChild(entryData);
}

/* ..........
    Function : Calculation : Conversion : Cm to M
.......... */
function meter_converter(areaValue, unitName) {
  const area_Value = getTextElementValueById(areaValue);
  const meter_converted_value = area_Value / 100;
  setTextElementValueById(areaValue, meter_converted_value);

  setTextElementValueById(unitName, "m");
}
