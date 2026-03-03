
const createElements = (arr)=> {
    const htmlelements = arr.map(el => `<span class ="btn" ${el}</span>`);
    console.log(htmlelements.join(" "))
}
const synonyms = ["hello","hi", "bye"];
createElements(synonyms);