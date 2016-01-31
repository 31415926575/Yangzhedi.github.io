window.onload=function(){
	var oTxt=document.getElementById('txt1');
	var oBtn1=document.getElementById('btn1');
	var oBtn2=document.getElementById('btn-choose');
	var oUl=document.getElementById('ul1');
	oBtn1.onclick=function(){
		if(oTxt.value ==""){
			alert("输入框不能为空！")
		}else{
			var oLi= document.createElement("li");
			oUl.appendChild(oLi);
			oLi.innerHTML=oTxt.value;
			// 加入删除功能
			/*var oA= document.createElement("a");
			oLi.appendChild(oA);
			oA.innerHTML="×";*/
			//获取li的长度
			var Lis=document.getElementsByTagName('li').length-1;
			var Li_id="li"+Lis;
			//设置新的li的id；
			oLi.setAttribute("id",Li_id);
			//oTxt.value="";
		}
	}
	oBtn2.onclick=function(){
		var aLi=document.getElementsByTagName("li");
		var Lis=aLi.length;
		var oDiv=document.getElementById("show");
		var i=Math.random()*Lis;
		var I=parseInt(i);
			//被选中的li
		oDiv.innerHTML=aLi[I].innerHTML;
		console.log(i);
		console.log(I);
		console.log(aLi[I].innerHTML);
	}
  		/*var aA=document.getElementsByTagName('a');
  		for(var j=0;j<aA.length;j++){
  			aA[j].onclick=function(){

  			}
  		}*/
};
