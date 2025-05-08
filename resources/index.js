let experimental = false;
let deprecated = false;


const depButton = document.getElementById("depBtn");
depButton.addEventListener('click', ()=>{toggleDeprecated()});
const expButton = document.getElementById("expBtn");
expButton.addEventListener('click', ()=>{toggleExperimental()});
function toggleExperimental(){
  experimental = experimental === true ? false : true;
  const button = document.getElementById("expBtn");
  const container = document.getElementById("expContainer");
  const label = document.getElementById("expLabel");
  const column = document.querySelectorAll(".expColumn");
  
  if(!experimental){
    button.classList.remove("off");
    button.classList.add("on");
    container.classList.remove("containerOff");
    container.classList.add("containerOn");
    label.classList.remove("labelOff");
    label.classList.add("labelOn");
    column.forEach(element => {
      element.style.visibility = "visible";
    });
  } else {
    button.classList.remove("on");
    button.classList.add("off");
    container.classList.remove("containerOn");
    container.classList.add("containerOff");
    label.classList.remove("labelOn");
    label.classList.add("labelOff");
    column.forEach(element => {
      element.style.visibility = "hidden";
    });
  }  
}
function toggleDeprecated(){
  deprecated = deprecated === true ? false : true;
  const button = document.getElementById("depBtn");
  const container = document.getElementById("depContainer");
  const label = document.getElementById("depLabel");
  const column = document.querySelectorAll(".depColumn");
  if(!deprecated){
    button.classList.remove("off");
    button.classList.add("on");
    container.classList.remove("containerOff");
    container.classList.add("containerOn");
    label.classList.remove("labelOff");
    label.classList.add("labelOn");
    column.forEach(element => {
      element.style.visibility = "visible";
    });
  } else {
    button.classList.remove("on");
    button.classList.add("off");
    container.classList.remove("containerOn");
    container.classList.add("containerOff");
    label.classList.remove("labelOn");
    label.classList.add("labelOff");
    column.forEach(element => {
      element.style.visibility = "hidden";
    });
  }  
}

function mainTable(){
  const data = require('./html-elements.json');
  const table = document.getElementById('table');
  Object.entries(data).map((entry)=>{
    if(entry[1].deprecated){
    }else if(entry[1].experimental){
    } else {
      const tag = document.createElement('h5');
      tag.classList.add("tableCell");
      table.appendChild(tag);
      tag.innerText = entry[0]
      if(entry[1].attributes){
        const atts = entry[1].attributes;
        const attributesMap = Object.entries(atts).map((att)=>{return (att)});
        const div = document.createElement('ul');
        const exDiv = document.createElement('ul');
        const depDiv = document.createElement('ul');
        div.style.display = "grid";
        div.classList.add("tableCell");
        exDiv.style.display = "grid";
        exDiv.classList.add("tableCell");
        exDiv.classList.add("expColumn");
        depDiv.style.display = "grid";
        depDiv.classList.add("tableCell");
        depDiv.classList.add("depColumn");
        table.appendChild(div);
        table.appendChild(exDiv);
        table.appendChild(depDiv);
        attributesMap.map((att, i) => {
          if(att[1].deprecated){
            const span = document.createElement('li');
            span.innerText = att[0];
            depDiv.appendChild(span)
          }else if(att[1].experimental){
            const span = document.createElement('li');
            span.innerText = att[0];
            exDiv.appendChild(span)
          }else{
            const span = document.createElement('li');
            span.innerText = att[0];
            div.appendChild(span)
          }
        })
      }
    }
    // const spacer = document.createElement("div");
    // spacer.style.backgroundColor = "#aaa";
    // spacer.style.minHeight= "2px";
    // spacer.style.maxHeight= "2px";
    // spacer.style.gridColumn = "1 / span 4"
    // table.appendChild(spacer);
})
}


// function experimental(){
//   const data = require('./html-elements.json');
//   const main = document.getElementById('main');
//   const experimentalTable = document.createElement('table');
//   main.appendChild(experimentalTable);
//   const thead = document.createElement('thead');
//   experimentalTable.appendChild(thead);
//   const row = document.createElement('tr');
//   const tagh = document.createElement('th');
//   const attH = document.createElement('th');
  
//   const td = document.createElement('td');
//   thead.appendChild(row);
//   row.appendChild(tagh);
//   tagh.innerText = 'Tag';
//   tagh.scope = "col";
//   row.appendChild(attH);
//   attH.innerText = 'Attributes';
//   attH.scope = "col";

//   Object.entries(data).map((entry)=>{
//     if(entry[1].deprecated){
//       console.log(entry[0] + ' is deprecated')
//     }else {
//       if(entry[1].experimental){
//         console.log(entry[0] + ' is experimental')
//       } else {
//         const row = document.createElement('tr');
//         table.appendChild(row);
//         const tag = document.createElement('td');
//         row.appendChild(tag);
//         tag.innerText = entry[0]
//         if(entry[1].attributes){
//           const atts = entry[1].attributes;
//           Object.entries(atts).map((att,i)=>{
//             if(att[1].deprecated){
//               console.log( '!!!!!!!!!!!!!!!!!!!!!!!! ' + entry[0] + ' - ' + att[0] + ' is deprecated !!!!!!!!!!!!!!!!!!!!!!!!')
//             } else {
//               if (att[1].experimental){
//                 console.log('----------------------- ' + entry[0] + ' - ' + att[0] + ' is experimental -----------------------')
//               } else{
//                 console.log(entry[0] + ' - ' + att[0])
//               }
//             }
//           })
//         }
//       }
//     }
//   })
// }


mainTable();
// experimental();