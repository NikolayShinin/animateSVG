$(function(){
  initSvgAnimate();
})




function initSvgAnimate(){
  let wrapper = $('.wrapper');
  let arrPaths = [];
  let svgs = wrapper.find('svg');
  let items = []
  svgs.each(function(idx){
    items[idx] = [];
    $(this).find('path').each(function(index){ 
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
  
  $(svgs[0]).find('path').each(function(index){
    let str = '<animate attributeName="d" values="'
    str += arStrResult[index]
    str += `" dur="1s" keyTimes="0; 0.8; 1" repeatCount="indefinite"/>`
    this.innerHTML = str;
  })
}


