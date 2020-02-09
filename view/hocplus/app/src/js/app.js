const wrapper = document.querySelector('.canvas .wrapper');

const widthWrapper = wrapper.offsetWidth;
const heightWrapper = wrapper.offsetHeight;

const drawingCanvas = document.querySelector('.canvas-drawing canvas');
const pdfCanvas = document.querySelector('.canvas-pdf canvas');

drawingCanvas.width = widthWrapper;
drawingCanvas.height = heightWrapper;

pdfCanvas.width = widthWrapper;
pdfCanvas.height = heightWrapper;

const canvasDrawing = document.querySelector('.canvas-drawing canvas');
const color = document.querySelector('.drawing-color');
const lineWidth = document.querySelector('.drawing-line-width');
const imageLoader = document.querySelector('.imageLoader');
const btnBrush = $('.btn-brush');
const btnMove = $('.btn-move');
const btnClear = $('.btn-clear');
const btnUndo = $('.btn-undo');
const btnRedo = $('.btn-redo');
const btnAddText = $('.btn-addtext');
const setTextColor = $('.text-color');
const setTextBackgroundColor = $('.text-bg-color');
const setFontSize = $('.text-font-size');

const canvas = new fabric.Canvas(canvasDrawing);



canvas.isDrawingMode = true;
fabric.Object.prototype.transparentCorners = false;

// zoom
canvas.on('mouse:wheel', function (opt) {
  var delta = opt.e.deltaY;
  var zoom = canvas.getZoom();
  zoom = zoom + delta / 2000;
  if (zoom > 20) zoom = 20;
  if (zoom < 0.01) zoom = 0.01;
  canvas.setZoom(zoom);
  opt.e.preventDefault();
  opt.e.stopPropagation();
});

// Draw end move
btnBrush.on('click', function () {
  canvas.isDrawingMode = true;
});
btnMove.on('click', function () {
  canvas.isDrawingMode = false;
});

// Clear
btnClear.on('click', function () {
  canvas.clear();
});

// undo and redo
canvas.on('object:added', function () {
  if (!isRedoing) {
    h = [];
  }
  isRedoing = false;
});
let isRedoing = false;
let h = [];

const undo = () => {
  if (canvas._objects.length > 0) {
    h.push(canvas._objects.pop());
    canvas.renderAll();
  }
};

const redo = () => {
  if (h.length > 0) {
    isRedoing = true;
    canvas.add(h.pop());
  }
};

btnUndo.on('click', function () {
  undo();
});
btnRedo.on('click', function () {
  redo();
});

// setting drawing
color.onchange = function () {
  canvas.freeDrawingBrush.color = this.value;
};
lineWidth.onchange = function () {
  canvas.freeDrawingBrush.width = parseInt(this.value, 10) || 1;
  this.previousSibling.innerHTML = this.value;
};
if (canvas.freeDrawingBrush) {
  canvas.freeDrawingBrush.color = color.value;
  canvas.freeDrawingBrush.width = parseInt(lineWidth.value, 10) || 1;
  canvas.freeDrawingBrush.shadow = new fabric.Shadow({
    offsetX: 0,
    offsetY: 0,
    affectStroke: true,
  });
}





const overlay = $('.canvas .overlay');
const getInputTest = $('.get-input-test');
const btnAgree = $('.get-input-test .btn-agree');
const btnExit = $('.get-input-test .btn-exit');
let content = document.getElementById('value-text');

btnAddText.on('click', function () {

  canvas.isDrawingMode = false;
  overlay.addClass('active');
  overlay.one('click', function (event) {

    const pointer = canvas.getPointer();
    let posX = pointer.x;
    let posY = pointer.y;
    getInputTest.addClass('active');

    btnAgree.one('click', function () {
      overlay.removeClass('active');
      getInputTest.removeClass('active');
      Addtext(
        posX,
        posY,
        content.value
      );
      content.value = '';
    });

  });
});

btnExit.on('click', function () {
  getInputTest.removeClass('active');
  overlay.removeClass('active');
  content.value = '';
});

// add text
const Addtext = (x, y, content) => {

  const addText = new fabric.IText(content, {
    left: x,
    top: y,
    fontFamily: 'arial',
    fill: setTextColor.val(),
    fontSize: setFontSize.val(),
  });

  addText.setControlsVisibility({
    bl: false,
    br: false,
    tl: false,
    tr: true,
    mb: false,
    ml: false,
    mr: false,
    mt: false,
    mtr: false,
  });

  canvas.add(addText).setActiveObject(addText);
};


if (content.value == '') {} else {

  setTextColor.on('change', function () {
    canvas.getActiveObject().setFill(this.value);
    canvas.renderAll();
  });

  setTextBackgroundColor.on('change', function () {
    canvas.getActiveObject().setBackgroundColor(this.value);
    canvas.renderAll();
  });

  setFontSize.on('change', function () {
    canvas.getActiveObject().setFontSize(this.value);
    canvas.renderAll();
  });

}

// upload image
imageLoader.addEventListener('change', function handleImage(e) {
  let reader = new FileReader();
  reader.onload = function (event) {
    let img = new Image();
    img.onload = function () {
      let imgInstance = new fabric.Image(img, {
        scaleX: 1,
        scaleY: 1
      });
      canvas.add(imgInstance);
    };

    img.src = event.target.result;
    canvas.isDrawingMode = false;
  };
  reader.readAsDataURL(e.target.files[0]);
}, false);



const pdfDrawing = document.querySelector('.canvas-pdf canvas');
const pdfLoaderButton = document.querySelector('.pdfLoader');

pdfLoaderButton.addEventListener("change", function (e) {

  var file = e.target.files[0];
  if (file.type != "application/pdf") {
    console.error(file.name, "is not a pdf file.");
    return;
  }

  var fileReader = new FileReader();

  fileReader.onload = function () {
    var typedarray = new Uint8Array(this.result);


    var pdfDoc = null,
      pageNum = 1,
      pageRendering = false,
      pageNumPending = null,
      // scale = 1.5,
      canvas = pdfDrawing,
      ctx = canvas.getContext('2d');

    var pdfScale = 1;



    // active tool
    $('.tool-pdf').addClass('active');



    /**
     * Get page info from document, resize canvas accordingly, and render page.
     * @param num Page number.
     */
    function renderPage(num) {
      pageRendering = true;
      // Using promise to fetch the page
      pdfDoc.getPage(num).then(function (page) {
        // var viewport = page.getViewport(scale);

        var scale = pdfScale;
        var viewport = page.getViewport(scale);
        canvas.height = viewport.height;
        canvas.width = viewport.width;


        // Render PDF page into canvas context
        var renderContext = {
          canvasContext: ctx,
          viewport: viewport
        };
        var renderTask = page.render(renderContext);

        // Wait for rendering to finish
        renderTask.promise.then(function () {
          pageRendering = false;
          if (pageNumPending !== null) {
            // New page rendering is pending
            renderPage(pageNumPending);
            pageNumPending = null;
          }
        });
      });

      // Update page counters
      document.getElementById('page_num').textContent = num;
    }


    /**
     * If another page rendering in progress, waits until the rendering is
     * finised. Otherwise, executes rendering immediately.
     */
    function queueRenderPage(num) {
      if (pageRendering) {
        pageNumPending = num;
      } else {
        renderPage(num);
      }
    }

    /**
     * Displays previous page.
     */
    function onPrevPage() {
      if (pageNum <= 1) {
        return;
      }
      pageNum--;
      queueRenderPage(pageNum);
    }
    document.getElementById('prev').addEventListener('click', onPrevPage);

    /**
     * Displays next page.
     */
    function onNextPage() {
      if (pageNum >= pdfDoc.numPages) {
        return;
      }
      pageNum++;
      queueRenderPage(pageNum);
    }
    document.getElementById('next').addEventListener('click', onNextPage);

    /**
     * Asynchronously downloads PDF.
     */
    pdfjsLib.getDocument(typedarray).then(function (pdfDoc_) {
      pdfDoc = pdfDoc_;
      document.getElementById('page_count').textContent = pdfDoc.numPages;

      // Initial/first page rendering
      renderPage(pageNum);
    });

    var zoominbutton = document.getElementById("zoominbutton");
    zoominbutton.onclick = function () {
      pdfScale = pdfScale + 0.25;
      renderPage(pageNum);
    };



    var zoomoutbutton = document.getElementById("zoomoutbutton");
    zoomoutbutton.onclick = function () {
      if (pdfScale <= 0.25) {
        return;
      }
      pdfScale = pdfScale - 0.25;
      renderPage(pageNum);
    };

  };

  fileReader.readAsArrayBuffer(file);
});

CanvasRenderingContext2D.prototype.clear =
  CanvasRenderingContext2D.prototype.clear || function (preserveTransform) {
    if (preserveTransform) {
      this.save();
      this.setTransform(1, 0, 0, 1, 0, 0);
    }

    this.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (preserveTransform) {
      this.restore();
    }
  };

btnClear.on('click', function () {

  const context = pdfDrawing.getContext('2d');

  context.clear();

  context.setTransform(-1, 0, 0, 1, 200, 200);

  context.clear(true);

});