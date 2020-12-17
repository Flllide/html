

document.querySelector('body').innerHTML += `
  <div class="logger"></div> 
  <style>
    .logger span {
      font-size: 90%;
      font-weight: 900;
      color:#fff;
    }
    .logger {
      position: fixed;
      bottom:0px;
      font-size: 70%;
      font-weight: 100;
      color: #00ff00;
      overflow:auto;
      height: 10%;
      border: solid 1px #415851; 
    }
  </style>
  `;
var strNumber = 0;
this.Log = function(Message) { 
  var LogDiv = document.querySelector('.logger');
  var StorageLogDiv = LogDiv.innerHTML;
  LogDiv.innerHTML= "<span>"+strNumber+"</span>"+" "+Message +'<br/>' + StorageLogDiv;
  strNumber++;
}












