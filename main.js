
let arrFiles = [];
let elementSvgs = [];

document.addEventListener('DOMContentLoaded', () => {
  initSvgAnimate();
  drugInit();
  btnsInit();
})

function btnsInit() {

}


function drugInit() {
  const uploadBox = document.querySelector('.upload'),
    topTitle = document.querySelector('.top__title')

  uploadBox.addEventListener('dragenter', function (e) {
    e.preventDefault();
    this.classList.add('upload--active');
  })
  uploadBox.addEventListener('dragleave', function (e) {
    e.preventDefault();
    this.classList.remove('upload--active');
  })
  uploadBox.addEventListener('dragover', function (e) {
    e.preventDefault();
  })
  uploadBox.addEventListener('drop', function (e) {
    e.preventDefault();
    let files = e.dataTransfer.files;
    uploadBox.classList.remove('upload--active');
    dropHandler(files);
  })
}


function dropHandler(files) {
  const fileList = document.querySelector('.file-list');

  for (const key in files) {
    if (files[key].type != 'image/svg+xml') {
      continue;
    }
    arrFiles.push(files[key]);
  }

  if (arrFiles.length > 0) {
    fileList.innerHTML = '';
    arrFiles.forEach(file => {
      let objectURL = URL.createObjectURL(file);
      fileList.innerHTML += `<div class="file-item"><img src="${objectURL}" alt="" /></div>`;
      var reader = new FileReader();
      reader.onload = function (e) {
        var elementSvg = new DOMParser().parseFromString(e.target.result, "text/html").getElementsByTagName("svg")[0];
        console.log(elementSvg);
      };

      reader.readAsText(file);
    })
  }
}

function initSvgAnimate() {
  let wrapper = $('.wrapper');
  let arrPaths = [];
  let svgs = wrapper.find('svg');
  let items = []
  svgs.each(function (idx) {
    items[idx] = [];
    $(this).find('path').each(function (index) {
      items[idx].push($(this).attr('d'))
    })
  })

  let contPathLenght = items[0].length; // 17
  let contSvgLenght = items.length // 3
  let arStrResult = [];


  for (let i = 0; i < contPathLenght; i++) {
    let str = '';
    for (let j = 0; j < contSvgLenght; j++) {
      str += items[j][i];
      str += '; ';
    }

    arStrResult.push(str);
  }

  $(svgs[0]).find('path').each(function (index) {
    let str = '<animate attributeName="d" values="'
    str += arStrResult[index]
    str += `" dur="1s" keyTimes="0; 0.8; 1" repeatCount="indefinite"/>`
    this.innerHTML = str;
  })
}


