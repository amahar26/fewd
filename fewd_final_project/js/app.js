
(function(d){var r=function(b){return b.split("").reverse().join("")},m={numberStep:function(b,a){var e=Math.floor(b);d(a.elem).text(e)}},g=function(b){var a=b.elem;a.nodeType&&a.parentNode&&(a=a._animateNumberSetter,a||(a=m.numberStep),a(b.now,b))};d.Tween&&d.Tween.propHooks?d.Tween.propHooks.number={set:g}:d.fx.step.number=g;d.animateNumber={numberStepFactories:{append:function(b){return function(a,e){var f=Math.floor(a);d(e.elem).prop("number",a).text(f+b)}},separator:function(b,a,e){b=b||" ";
a=a||3;e=e||"";return function(f,k){var u=0>f,c=Math.floor((u?-1:1)*f).toString(),n=d(k.elem);if(c.length>a){for(var h=c,l=a,m=h.split("").reverse(),c=[],p,s,q,t=0,g=Math.ceil(h.length/l);t<g;t++){p="";for(q=0;q<l;q++){s=t*l+q;if(s===h.length)break;p+=m[s]}c.push(p)}h=c.length-1;l=r(c[h]);c[h]=r(parseInt(l,10).toString());c=c.join(b);c=r(c)}n.prop("number",f).text((u?"-":"")+c+e)}}}};d.fn.animateNumber=function(){for(var b=arguments[0],a=d.extend({},m,b),e=d(this),f=[a],k=1,g=arguments.length;k<g;k++)f.push(arguments[k]);
if(b.numberStep){var c=this.each(function(){this._animateNumberSetter=b.numberStep}),n=a.complete;a.complete=function(){c.each(function(){delete this._animateNumberSetter});n&&n.apply(this,arguments)}}return e.animate.apply(e,f)}})(jQuery);



//	var myCounter = 0;
//	setInterval(function () {

//  if (myCounter == 1985){
//    $("#counter-test").html("1985");
//  }else{
//	$("#counter-test").html(myCounter++) ;
// 	}
// }, 1);

$('.sec2').click(function(){
	//alert("working");
	//$("body").toggleClass("active");
})
$('.work').slideReveal({
  trigger: $(".sec2")
  
});





$("#year").animateNumber({ number: 1985 }, 2000);


window.sr = ScrollReveal();

sr.reveal('nav .sec1', { duration: 1000, easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'});
sr.reveal('nav .sec2', { duration: 1000, easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)', delay: 500});
sr.reveal('nav .sec3', { duration: 1000, easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)', delay: 1000 });


$(".sec1").click(function(){

sr.reveal('.reveal-test', { axis: 'x',
  origin: 'right',
  distance: '500px',
  easing   : 'ease-in-out',
  scale: '1',
  duration: '2000',
  delay: '-300'})


});


//$("#trigger").click(function(){});


console.log("loaded bro");





		
		
		
