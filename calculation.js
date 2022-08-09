function calculate(){
    const ratio=document.getElementById('ratio').value;
    const vectorLength=document.getElementById('vectorLen').value;
    const insertLength=document.getElementById('insertLen').value;
    const vectorConc=document.getElementById('vectorConc').value;
    const insertConc=document.getElementById('insertConc').value;
    const vectorMass=document.getElementById('vectorMass').value;

    const result=(((vectorLength/insertLength)*ratio)/insertConc)*(vectorMass/100);

    const vectorVol=document.getElementById('vectorVol');
    const insertVol=document.getElementById('insertVol');

    vectorVol.value=vectorMass/vectorConc;
    insertVol.value=result;
}