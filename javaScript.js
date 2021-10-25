var header = document.querySelector('header');
var modelBox  = document.querySelectorAll('.model-box');

// btnGoBack.addEventListener("click",function(){
// 	alert("clickinside");
//   console.log("i'm clicked");
// });


var time  = "1s";

for (var i =modelBox.length - 1; i >= 1; i--) {
modelBox[i].style.display="none";
}

modelBox[0].style.opacity = "1";
modelBox[0].style.animation = "show 2s linear";

var yesBtnFB = document.querySelector('#yes-btn-fb');
yesBtnFB.addEventListener('click',function () {
    modelBox[0].style.opacity = "0";
	modelBox[0].style.animation = "hide 1s linear";
	setTimeout(function(){
	modelBox[0].style.display = "none";
	modelBox[1].style.display = "block";
	modelBox[1].style.opacity = "1";
	modelBox[1].style.animation = "show "+time+" linear";
	},1000);
	
});

var noBtnFB = document.querySelector('#no-btn-fb');
noBtnFB.addEventListener('click',function() {
modelBox[2].style.display = "block";
header.innerHTML = modelBox[2].innerHTML;
var btnGoBack = document.querySelector('#btn-Go-Back');
btnGoBack.addEventListener('click',function() {
	location.reload();
	});

});

var boxChoices = document.querySelectorAll(".box-choice");
for (var i = boxChoices.length - 1; i >= 1; i--) {
	boxChoices[i].style.display = "none";
}

var result = 0;
var btnFunny = document.querySelectorAll(".btn-funny");
for (var i = btnFunny.length - 1; i >= 0; i--) {
	btnFunny[i].addEventListener('click',function(e){
		if(btnFunny[0].checked)
			result++;
		boxChoices[1].style.display = "block";
		boxChoices[1].style.opacity = "1";
		boxChoices[1].style.animation = "show "+time+" linear";
	})
}

var btnMotivated = document.querySelectorAll(".btn-motivated");
for (var i = btnMotivated.length - 1; i >= 0; i--) {
	btnMotivated[i].addEventListener('click',function(){
		if(btnMotivated[0].checked)
			result++;
		boxChoices[2].style.display = "block";
		boxChoices[2].style.opacity = "1";
		boxChoices[2].style.animation = "show "+time+" linear";
	})
}

var btnPassionated = document.querySelectorAll(".btn-passionated");
for (var i = btnPassionated.length - 1; i >= 0; i--) {
	btnPassionated[i].addEventListener('click',function(){
		if(btnPassionated[0].checked)
			result++;
			else
			result--;
		boxChoices[3].style.display = "block";
		boxChoices[3].style.opacity = "1";
		boxChoices[3].style.animation = "show "+time+" linear";
	})
}

var btnCreative = document.querySelectorAll(".btn-creative");
for (var i = btnCreative.length - 1; i >= 0; i--) {
	btnCreative[i].addEventListener('click',function(){
		if(btnCreative[0].checked)
			result++;
			else
			result--;
		boxChoices[4].style.display = "block";
		boxChoices[4].style.opacity = "1";
		boxChoices[4].style.animation = "show "+time+" linear";
	})
}

var btnAmbition = document.querySelectorAll(".btn-ambition");
for (var i = btnAmbition.length - 1; i >= 0; i--) {
	btnAmbition[i].addEventListener('click',function(){
		if(btnAmbition[0].checked)
			result++;
			else
			result--;
		boxChoices[5].style.display = "block";
		boxChoices[5].style.opacity = "1";
		boxChoices[5].style.animation = "show "+time+" linear";
	})
}

var btnTalented = document.querySelectorAll(".btn-talented");
for (var i = btnTalented.length - 1; i >= 0; i--) {
	btnTalented[i].addEventListener('click',function(){
		if(btnTalented[0].checked)
			result++;
			else
			result--;
		boxChoices[6].style.display = "block";
		boxChoices[6].style.opacity = "1";
		boxChoices[6].style.animation = "show "+time+" linear";
	})
}
var btnSelfTaught = document.querySelectorAll(".btn-self-taught");
for (var i = btnSelfTaught.length - 1; i >= 0; i--) {
	btnSelfTaught[i].addEventListener('click',function(){
		if(btnSelfTaught[0].checked)
			result++;
			else
			result--;
		boxChoices[7].style.display = "block";
		boxChoices[7].style.opacity = "1";
		boxChoices[7].style.animation = "show "+time+" linear";
	})
}

var btnSearch = document.querySelector("#btn-search");
btnSearch.addEventListener('click',function(){
   modelBox[1].style.opacity = "0";
	modelBox[1].style.animation = "hide 1s linear";
	setTimeout(function(){
	modelBox[1].style.display = "none";
	modelBox[3].style.display = "block";
	modelBox[3].style.opacity = "1";
	modelBox[3].style.animation = "show "+time+" linear";
		changeStatus();
	},2000);
   
});

var labelStatus = document.querySelector("#status");

	var i = 0;
function changeStatus(){
	    	i++;
	if(i<100){
    labelStatus.innerText ="searching....  "+i+" %";
    setTimeout(function(){changeStatus()},100);
}
else if(i == 100){
	setTimeout(function(){changeStatus()},1000);
}
else{
labelStatus.innerText = "it's done";
modelBox[3].style.opacity = "0";
	modelBox[3].style.animation = "hide 1s linear";
	setTimeout(function(){
	modelBox[3].style.display = "none";
	modelBox[4].style.display = "block";
	var labelResult = document.querySelector("#label-result");
    labelResult.innerHTML = "with <strong>"+((result/7)*100).toFixed(2)+"% </strong> this guy is the right developer for you";
	modelBox[4].style.opacity = "1";
	modelBox[4].style.animation = "show "+time+" linear";
},1000);
}

}

var btnContact = document.querySelector("#contact");
var dialog = document.querySelector("dialog");
btnContact.addEventListener('click',function(){
	dialog.showModal();
	dialog.style.opacity = "1";
	dialog.style.animation = "show "+time+" linear";
});

var btnClose = document.querySelector("#btn-close");
btnClose.addEventListener("click",function(){
	dialog.close();
});

