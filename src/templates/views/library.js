console.log("Library exercise");
showList();
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (element) {
    let addBookName = document.getElementById('addBookName');
    let addBookNo = document.getElementById('addBookNo');
    let addPName = document.getElementById('addPName');
    let addDate = document.getElementById('addDate');
    let available = document.getElementById('available');
    let name = localStorage.getItem("name");
    let no = localStorage.getItem("no");
    let pname = localStorage.getItem("pname");
    let date = localStorage.getItem("date");
    let ava = localStorage.getItem("ava");
    if (name == null || no == null || pname == null || date == null || ava==null) {
        nameObj = [];
        noObj = [];
        pnameObj = [];
        dateObj = [];
        avaObj = [];
    }
    else {
        nameObj = JSON.parse(name);
        noObj = JSON.parse(no);
        pnameObj = JSON.parse(pname);
        dateObj = JSON.parse(date);
        avaObj = JSON.parse(ava);
    }
    nameObj.push(addBookName.value);
    noObj.push(addBookNo.value);
    pnameObj.push("-");
    dateObj.push("-");
    avaObj.push("Yes");
    localStorage.setItem("name", JSON.stringify(nameObj));
    localStorage.setItem("no", JSON.stringify(noObj));
    localStorage.setItem("pname", JSON.stringify(pnameObj));
    localStorage.setItem("date", JSON.stringify(dateObj));
    localStorage.setItem("ava", JSON.stringify(avaObj));
    addBookName.value = "";
    addBookNo.value = "";
    addPName.value = "";
    addDate.value = "";
    available.value = "";
    showList();
});

let issueBtn = document.getElementById('issueBtn');
issueBtn.addEventListener('click', function (element) {
    let addBookName = document.getElementById('addBookName');
    let addBookNo = document.getElementById('addBookNo');
    let addPName = document.getElementById('addPName');
    let addDate = document.getElementById('addDate');
    let available = document.getElementById('available');
    let name = localStorage.getItem("name");
    let no = localStorage.getItem("no");
    let pname = localStorage.getItem("pname");
    let date = localStorage.getItem("date");
    let ava = localStorage.getItem("ava");
    if (name == null || no == null || pname == null || date == null) {
        nameObj = [];
        noObj = [];
        pnameObj = [];
        dateObj = [];
        avaObj = [];
    }
    else {
        nameObj = JSON.parse(name);
        noObj = JSON.parse(no);
        pnameObj = JSON.parse(pname);
        dateObj = JSON.parse(date);
        avaObj = JSON.parse(ava);
    }
    nameObj.push(addBookName.value);
    noObj.push(addBookNo.value);
    pnameObj.push(addPName.value);
    dateObj.push(addDate.value);
    avaObj.push("No");
    localStorage.setItem("name", JSON.stringify(nameObj));
    localStorage.setItem("no", JSON.stringify(noObj));
    localStorage.setItem("pname", JSON.stringify(pnameObj));
    localStorage.setItem("date", JSON.stringify(dateObj));
    localStorage.setItem("ava", JSON.stringify(avaObj));
    addBookName.value = "";
    addBookNo.value = "";
    addPName.value = "";
    addDate.value = "";
    available.value = "";
    showList();
});

function showList() {
    let name = localStorage.getItem("name");
    let no = localStorage.getItem("no");
    let pname = localStorage.getItem("pname");
    let date = localStorage.getItem("date");
    let ava = localStorage.getItem("ava");
    if (name == null || no == null || pname == null || date == null) {
        nameObj = [];
        noObj = [];
        pnameObj = [];
        dateObj = [];
        avaObj = [];
    }
    else {
        nameObj = JSON.parse(name);
        noObj = JSON.parse(no);
        pnameObj = JSON.parse(pname);
        dateObj = JSON.parse(date);
        avaObj = JSON.parse(ava);
    }
    let html = "";
    nameObj.forEach(function (element, index) {
        let a = JSON.parse(localStorage.getItem("no"));
        let b = JSON.parse(localStorage.getItem("pname"));
        let c = JSON.parse(localStorage.getItem("date"));
        let d = JSON.parse(localStorage.getItem("ava"));
        html += `<tbody>
        <tr class="noteCard">
        <td class="NUMBER">${a[index]}</td>
          <td>${element}</td>
          <td>${d[index]}</td>
          <td>${b[index]}</td>
          <td>${c[index]}</td>
        </tr>
      </tbody>`
    })
    let notesElm = document.getElementById("no");
    if (noObj.length == 0) {
        notesElm.innerHTML = `Start your library management journey now.`;
    }
    else {
        notesElm.innerHTML = html;
    }

}
let search1 = document.getElementById("addBookNo");
search1.addEventListener("input",function(){
    let inputval=search1.value;
    let noteCard=document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach(function(element,index){
        let BNO=document.getElementsByClassName("NUMBER")[index].innerText;
        if(BNO.includes(inputval)){
            element.style.background="white";
        }
        else{
            element.style.display="none";
        }
    });
});
let search = document.getElementById("searchTxt");
search.addEventListener("input",function(){
    let inputval=search.value;
    let noteCard=document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach(function(element,index){
        let BNO=document.getElementsByClassName("NUMBER")[index].innerText;
        if(BNO.includes(inputval)){
            element.style.background="white";
        }
        else{
            element.style.display="none";
        }
    });
});

