
const requestObject = {
  method: "GET",
  "content-type": "application/json",
  redirect: "follow"
}

console.log(requestObject.method);
console.log(requestObject["content-type"]);

const urlstr = "https://dawa.aws.dk/autocomplete?caretpos=5&fuzzy=&q=havnb&startfra=adresse&type=adresse";
const dd = document.getElementById("dd");

function fillDropDown(item, index){
  console.log(index + item);
  let el = document.createElement("option");
  el.textContent = item;
  el.value = index;
  dd.appendChild(el);
}

function gotAddressData(data) {
  // console.log(data);
  // data.forEach(dd => console.log(dd));
  const addrMap = data.map(dd => dd.data);
  console.log(addrMap);
  // const vejnavne = addrMap.map(vejobj => vejobj.postnrnavn);
  // console.log(vejnavne);

}
console.log("før fetch");
fetch(urlstr, requestObject)
.then(response => response.json())
.then(data => gotAddressData(data));

console.log("after fetch");






