// get value function 
function getValue(id){
    const Value= document.getElementById(id);
    const valueText= Value.value;
    Value.value='';
    return valueText;
}
// create element function
function createElement(si,kg,gm,pis){
    const tr=document.createElement('tr');
    tr.innerHTML=`
    <td scope="row" class="fw-bold">${si}</td>
    <td class="kg fw-bold">${kg}</td>
    <td class="gm fw-bold">${gm}</td>
    <td class="pis fw-bold">${pis}</td>
    `
    //append child
    const tbody = document.getElementById('tbody');
    tbody.appendChild(tr); 
}
//total function
function total(id){
    const units = document.getElementsByClassName(id);
    let total= 0;
    for(const unit of units){
        const unitValue=unit.innerText;
        const unitValuenum=parseFloat(unitValue);
        total+=unitValuenum;
    }
    return total;
}
//convert and update 
function convert(kg,gm,pis){
    //gm into kg
    const newKgValue=Math.floor(gm/1000);
    const newGm = gm%1000;
    const updateKG= kg+newKgValue;
    // update value part
    const update= document.getElementById('update-value');
    update.innerText= updateKG+'Kg '+newGm+'gm '+pis+'pis';
}
//add button handle
let count = 0;
document.getElementById('add-btn').addEventListener('click',function(){
    count++;
    //get all value
    const kiloValue= getValue('kilo');
    const gramValue= getValue('gram');
    const piceValue= getValue('pices');
    //create element
    if(kiloValue==''||gramValue==''||piceValue==''){
        alert('please fill all input field');
    }else{
        createElement(count,kiloValue,gramValue,piceValue); 
    }
})

// calculate btn handle
document.getElementById('calculate').addEventListener('click',function(){
    // total kg 
    let totalKg=  total('kg');
    //total gram
    let totalGm =  total('gm');
    //total pis
    let totalPis =  total('pis');
    //calculate and update 
    convert(totalKg,totalGm,totalPis);
})

//background image set
const main=document.getElementById('main');
main.style.backgroundImage= "url('img/broiler.jpg')";
main.style.backgroundRepeat='no-repeat'
main.style.backgroundSize= 'cover'