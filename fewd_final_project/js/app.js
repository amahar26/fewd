
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

$(".work").hide();



$('.work').slideReveal({
  trigger: $(".trig")
  
});

$(".link2").click(function(){
  if ($(".link2").hasClass("active")){
    $("section.contact").fadeOut(500);
    $(".link2").removeClass("active");
    $("body").removeClass("noscroll");
  } else{
    $("section.contact").fadeIn(500);
    $(".link2").addClass("active");
    $("body").addClass("noscroll");
    var homeOrWork = $(".trig a").html();
 	if(homeOrWork == "Work"){
	$("section.work").fadeOut(500);
	}else{
	$("section.home").fadeOut(500);
	}
  }
 
});




$(".trig").click(function(){
  var homeOrWork = $(".trig a").html();
 // console.log(homeOrWork);
  if (homeOrWork == "Work"){
    $(".trig a").html("About");
    $("section.contact").fadeOut(500);
    $("body").removeClass("noscroll");
    $(".link2").removeClass("active");
  }else{
    $(".trig a").html("Work");
    $("section.contact").fadeOut(500);
    $("body").removeClass("noscroll");
    $(".link2").removeClass("active");
	
  }
});



$("#year").animateNumber({ number: 1985 }, 2000);

  window.sr = ScrollReveal();

sr.reveal('nav .link1', { duration: 1000, easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'});
sr.reveal('nav .link2', { duration: 1000, easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)', delay: 500});
sr.reveal('nav .link3', { duration: 1000, easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)', delay: 1000 });





$(document).ready(function() {
    // Optimalisation: Store the references outside the event handler:
    var $window = $(window);


    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize < 700) {
		
            //if the window is less than 700px wide ..
		
          sr.reveal('.work .scrll .left-side', { 
		 axis: 'x', origin: 'bottom', distance: '200px',
 		  easing: 'ease-in-out', scale: '1', duration: '300',
 		 });
		
            sr.reveal('.work .scrll .right-side', { 
		    axis: 'x', origin: 'bottom', distance: '200px',
  		    easing   : 'ease-in-out', scale: '1', duration: '300',
  		});
     
        }else{

          sr.reveal('.work .scrllrvl1', { 
		  axis: 'x', origin: 'left', distance: '300px',
 		 easing: 'ease-in-out', scale: '1', duration: '300',
  		});

          sr.reveal('.work .scrllrvl2', { 
		  axis: 'x', origin: 'right', distance: '300px',
 		 easing:'ease-in-out', scale: '1', duration: '300',
 		 });

        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});

		
		
		
