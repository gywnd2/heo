function calculate(){
    const ratio=document.getElementById('ratio').value;
    const vectorLength=document.getElementById('vectorLen').value;
    const insertLength=document.getElementById('insertLen').value;
    const vectorConc=document.getElementById('vectorConc').value;
    const insertConc=document.getElementById('insertConc').value;
    const vectorMass=document.getElementById('vectorMass').value;

    alert("계산 시작! 목표비율 : "+ratio+"벡터길이 : "+vectorLength+"인서트길이 : "+insertLength+"벡터 농도 : "+vectorConc+" 인서트농도 : "+insertConc+"벡터 매스 : "+vectorMass)
    const result=(((vectorLength/insertLength)*ratio)/insertConc)*(vectorMass/100);

    const vectorVol=document.getElementById('vectorVol');
    const insertVol=document.getElementById('insertVol');

    vectorVol.value=vectorMass/vectorConc;
    insertVol.value=result;
}