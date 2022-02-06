const tekstElement = document.querySelector("p");
const input = document.querySelector("input");

input.addEventListener("input", () => {
    let tekst = input.value.toLowerCase();
    let index = tekst.length;
    const  samoglasnici = ['a', 'e', 'i', 'o', 'u' ];
    samoglasnici.forEach( (samoglasnik)=> {
        prviIndex = tekst.indexOf(samoglasnik);
        if(prviIndex<index && prviIndex != -1){
            index =  prviIndex;
        }
    });
    let puckovski = tekst.slice(index);
    let prefiks = "puć";
    puckovski = prefiks + puckovski;
    tekstElement.textContent = puckovski;
    if(tekst.length == 0){
        tekstElement.textContent = "";   
    }
});