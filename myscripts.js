const rowIter = parseInt(document.getElementById('input-row').value);
const colIter = parseInt(document.getElementById('input-col').value);
const btnGenerate = document.querySelector('.btn-generate');
const wrapper = document.querySelector('.wrapper');
//const fontSelect = document.querySelector(".fontSelect");



const  generateTable = () =>{
    wrapper.innerHTML = '';
    var table = document.createElement("table");
    table.setAttribute("id", "myTable");
    wrapper.appendChild(table);

   
  //  fontSelect.appendChild(fontFamilyOption);

    /*var option = document.createElement("option");
    option.textContent="option";
    fontclass.appendChild(option);
*/

    const  fontSelect = document.querySelector(".fontSelect").value;
    const  alignSelect = document.querySelector(".alignSelect").value;
    const  fontWeightSelect= document.querySelector(".fontWeight").value;

    var x = document.getElementById("color-table").value;
    const colorBoder = document.getElementById("color-border").value;
    const colorFont = document.getElementById("color-font").value;
    const colorHead = document.getElementById("color-head").value;

    const borderwidth = parseInt(document.getElementById('input-border-width').value);
    const widthOfTable = parseInt(document.getElementById('input-table-width').value);

    //table style
    table.style.width = widthOfTable + "%";
    table.style.border = `solid ${colorBoder} ${borderwidth}px`;
    table.style.backgroundColor = x;
    table.style.textAlign = alignSelect;
    table.style.fontWeight = fontWeightSelect ;
    
    //table.style.fontFamily= "italic,arial,serif";

    
    //const fonttype = document.querySelector(".font-type");
    //table.style.fontFamily = fonttype;
    
    
//generating row
for(let i = 1; i<=rowIter; i++){
    var tableHead = document.createElement('th');
    tableHead.textContent=`Head ${i}`
    table.appendChild(tableHead);
    tableHead.style.border = `solid ${colorBoder} ${borderwidth}px`;
    tableHead.style.backgroundColor = colorHead;
    tableHead.style.color = colorFont;
    tableHead.style.fontFamily= fontSelect ;
    //tableHead.style.textAlign = alignSelect;
    
}
//generating Column
for(let i=1;i<= colIter;i++){
    var tr = document.createElement('tr');
        for(let j = 1; j<= rowIter; j++){
            var td= document.createElement('td');
            td.textContent='value';
            tr.appendChild(td);
            table.appendChild(tr);  
            td.style.border = `solid ${colorBoder} ${borderwidth}px`; 
            td.style.color = colorFont;
            td.style.fontFamily = fontSelect;
            //td.style.textAlign = right;
        }
}



}

btnGenerate.addEventListener('click',() => {
    generateTable();

}) 