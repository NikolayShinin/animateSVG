window.wrapper = $('.wrapper');


let arrPaths = [];

// let svgs = wrapper.find('svg');

// let svgResult = $(svgs[0]).find('path');

// svgResult.each(function(indx){
//   if(!arrPaths[indx]){
//     arrPaths[indx] = '';
//   }
  
//   arrPaths[indx] += $(this).attr('d');
// });

// console.log(arrPaths);



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



/* <animate attributeName="d" values="M103.81 27.2058C103.753 27.2685 89.6278 42.6914 75.4959 68.9795C61.3671 95.2675 47.2207 132.438 47.2174 175.977C47.2158 205.095 53.5567 237.05 70.4395 270.416C87.3207 303.784 114.731 338.552 156.825 373.362L158.659 371.145C116.816 336.54 89.6841 302.08 73.0071 269.117C56.3301 236.153 50.0969 204.679 50.0953 175.977C50.0937 133.072 64.0536 96.3431 78.0313 70.3429C85.0185 57.3427 92.0073 47.0291 97.2421 39.9727C99.8595 36.4454 102.04 33.7315 103.56 31.9036C104.321 30.9904 104.917 30.2975 105.321 29.836C105.524 29.6045 105.678 29.4309 105.781 29.3167L105.932 29.1495L103.81 27.2058Z; M169.752 24.1506C169.659 24.2063 146.561 37.8972 123.452 61.2331C100.349 84.569 77.2162 117.565 77.2108 156.215C77.2082 182.063 87.577 210.429 115.184 240.048C142.789 269.669 187.61 300.533 256.443 331.434L259.442 329.466C191.02 298.747 146.653 268.157 119.383 238.895C92.1121 209.633 81.9195 181.694 81.9168 156.215C81.9142 118.128 104.742 85.5238 127.598 62.4434C139.024 50.9032 150.452 41.7478 159.012 35.4838C163.292 32.3526 166.858 29.9435 169.343 28.3208C170.588 27.5102 171.562 26.8951 172.223 26.4854C172.555 26.2799 172.807 26.1258 172.975 26.0245L173.222 25.876L169.752 24.1506Z; M103.81 27.2058C103.753 27.2685 89.6278 42.6914 75.4959 68.9795C61.3671 95.2675 47.2207 132.438 47.2174 175.977C47.2158 205.095 53.5567 237.05 70.4395 270.416C87.3207 303.784 114.731 338.552 156.825 373.362L158.659 371.145C116.816 336.54 89.6841 302.08 73.0071 269.117C56.3301 236.153 50.0969 204.679 50.0953 175.977C50.0937 133.072 64.0536 96.3431 78.0313 70.3429C85.0185 57.3427 92.0073 47.0291 97.2421 39.9727C99.8595 36.4454 102.04 33.7315 103.56 31.9036C104.321 30.9904 104.917 30.2975 105.321 29.836C105.524 29.6045 105.678 29.4309 105.781 29.3167L105.932 29.1495L103.81 27.2058Z" dur="1s" keyTimes="0; 0.8; 1" repeatCount="indefinite"/> */



// let svgs = $('.wrapper svg')
// console.log(svgs);