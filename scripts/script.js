let i = 0;
let ir = 1;
let flag = true;
let sum = 0;
let scrolbar=document.querySelector('#scrol')
window.addEventListener('scroll',function(){
  let scrolly=window.scrollY;
  let heighcli=this.document.body.clientHeight
  let heightr=window.innerHeight
  let priceBarScroll=Math.round((scrolly/(heighcli-heightr)*100))
  scrolbar.style.width=priceBarScroll+"%"
})
let listNames = ["index"];
let btns = document.querySelectorAll(".sabad_icon");
btns.forEach(function (e) {
  e.addEventListener("click", function (event) {
    let imgSource = e.nextSibling.nextSibling.src;
    let nameSourse =
      e.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling
        .innerHTML;
    let costSource =
      e.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling
        .nextSibling.nextSibling.childNodes[3].innerHTML;
    if (repeatKala(nameSourse)) {
      itemKalaGenerator(imgSource, nameSourse, costSource);
    }
  });
});
function itemKalaGenerator(imgSrc, name, cost) {
  i++;
  let listItems = document.querySelector(".list");
  let mainItem = document.createElement("div");
  mainItem.classList.add("items_kharid");

  let spanNumber = document.createElement("span");
  spanNumber.classList.add("kala_id");
  spanNumber.innerHTML = i;
  mainItem.appendChild(spanNumber);

  let imgKala = document.createElement("img");
  imgKala.classList.add("kala_aks");
  imgKala.src = imgSrc;
  mainItem.appendChild(imgKala);

  let spanName = document.createElement("span");
  spanName.classList.add("kala_name");
  spanName.innerHTML = name;
  mainItem.appendChild(spanName);

  let spanCost = document.createElement("span");
  spanCost.classList.add("kala_cost");
  spanCost.innerHTML = cost;
  mainItem.appendChild(spanCost);

  let inputNumer = document.createElement("input");
  inputNumer.setAttribute("type", "number");
  inputNumer.setAttribute("min", "1");
  inputNumer.setAttribute("value", "1");
  inputNumer.classList.add("kala_number");
  let kalInput = document.createElement("div");
  kalInput.classList.add("kal_t");
  kalInput.appendChild(inputNumer);
  mainItem.appendChild(kalInput);

  let kalaTotal = document.createElement("span");
  kalaTotal.classList.add("kala_total");
  kalaTotal.innerHTML = inputNumer.value * cost;
  mainItem.appendChild(kalaTotal);

  listItems.appendChild(mainItem);
  sum += +cost;
  let totalPrice = document.querySelector("#total_price");
  totalPrice.innerHTML = sum;

  inputNumer.addEventListener("change", function () {
    kalaTotal.innerHTML = inputNumer.value * cost;
    tot();
  });
  tot();
}
function repeatKala(name) {
  flag = true;
  listNames.forEach(function (e) {
    if (e == name) {
      flag = false;
    }
  });
  if (flag) {
    listNames.push(name);
  }
  return flag;
}
function tot() {
  sum=0
  let listItems = document.querySelector(".list");
  ir = listItems.lastChild.firstChild.innerHTML;
  for (var j = 1; j <= i; j++) {
    sum+=+(listItems.children[j].lastChild.innerHTML)
  }
  let totalPrice = document.querySelector("#total_price");
  totalPrice.innerHTML=sum
}
