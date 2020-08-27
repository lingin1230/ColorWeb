

// 點按戰爭煙霧
// document.querySelector('.choosing1').addEventListener('click' , function(){
//
// 	document.querySelector('.firstColorName').style = 'color : #7b131d';
//   document.querySelector('.firstColorName').textContent = '戰 爭 煙 霧';
//   document.querySelector('.firstColor').style = 'background-color : #7b131d';
//   document.querySelector('.firstColorCMYK').textContent = 'C50 M100 Y98 K29';
//   document.querySelector('.firstColorCMYK').style = 'color : #7b131d';
// });


// 主色調緩緩變化
//

//
//
// 1點按戰爭煙霧
$( function() {

	$( '.choosing1' ).on( "click", function() {

		anime.timeline({loop: false})
			.add({
				targets: '.firstColorName',
				translateX: [40,0],
				translateZ: 0,
				opacity: [0,1],
				easing: "easeOutExpo",
				duration: 3600,
				delay: (el, i) => 350 + 30 * i
			});


		$( '.firstColorName' ).text("戰 爭 煙 霧");
		$( '.firstColorCMYK' ).text("C50 M100 Y98 K29");
		$('.firstColor').animate({'background-color' : '#7b131d'}, 'slow');
		$('.firstColorName').animate({'color' : '#7b131d'}, 'slow');
		$('.firstColorCMYK').animate({'color' : '#7b131d'}, 'slow');

		$(".color1").animate({'background-color' : '#c4122c'}, 'slow');
		$(".color2").animate({'background-color' : '#f43e49'}, 'slow');
		$(".color3").animate({'background-color' : '#f38c7a'}, 'slow');
		$(".color4").animate({'background-color' : '#ffc3b4'}, 'slow');
		$(".color5").animate({'background-color' : '#9b7f66'}, 'slow');

		$(".one")  .animate({'background-color' : '#7b131d' , 'width':'50'}, 'fast');
		$(".two")  .animate({'background-color' : '#772934' , 'width':'50'}, 'fast');
		$(".three").animate({'background-color' : '#723f48' , 'width':'50'}, 'fast');
		$(".four") .animate({'background-color' : '#6d5258' , 'width':'50'}, 'fast');
		$(".five") .animate({'background-color' : '#665d60' , 'width':'50'}, 'fast');


	});
} );

// 2點按秋果豐收
$( function() {
	$( '.choosing2' ).on( "click", function() {

		anime.timeline({loop: false})
			.add({
				targets: '.firstColorName',
				translateX: [40,0],
				translateZ: 0,
				opacity: [0,1],
				easing: "easeOutExpo",
				duration: 3600,
				delay: (el, i) => 350 + 30 * i
			});


		$('.firstColor').animate({'background-color' : '#e28220'}, 'slow');
		$('.firstColorName').animate({'color' : '#e28220'}, 'slow');
		$('.firstColorCMYK').animate({'color' : '#e28220'}, 'slow');
		$( '.firstColorName' ).text("秋 果 豐 收");
		$( '.firstColorCMYK' ).text("C14 M59 Y91 K0");

		$(".color1").animate({'background-color' : '#2c140e'}, 'slow');
		$(".color2").animate({'background-color' : '#454216'}, 'slow');
		$(".color3").animate({'background-color' : '#95451f'}, 'slow');
		$(".color4").animate({'background-color' : '#ecb719'}, 'slow');
		$(".color5").animate({'background-color' : '#fbc38e'}, 'slow');

		$(".one")  .animate({'background-color' : '#e28220'}, 'slow');
		$(".two")  .animate({'background-color' : '#dd924e'}, 'slow');
		$(".three").animate({'background-color' : '#d8a57c'}, 'slow');
		$(".four") .animate({'background-color' : '#d3b49f'}, 'slow');
		$(".five") .animate({'background-color' : '#c6b6ac'}, 'slow');


	});
} );

// 3點按沙漠之花
$( function() {
	$( '.choosing3' ).on( "click", function() {

		anime.timeline({loop: false})
			.add({
				targets: '.firstColorName',
				translateX: [40,0],
				translateZ: 0,
				opacity: [0,1],
				easing: "easeOutExpo",
				duration: 3600,
				delay: (el, i) => 350 + 30 * i
			});


		$('.firstColor').animate({'background-color' : '#855758'}, 'slow');
		$('.firstColorName').animate({'color' : '#855758'}, 'slow');
		$('.firstColorCMYK').animate({'color' : '#855758'}, 'slow');
		$( '.firstColorName' ).text("沙 漠 之 花");
		$( '.firstColorCMYK' ).text("C55 M71 Y60 K8");

		$(".color1").animate({'background-color' : '#996b83'}, 'slow');
		$(".color2").animate({'background-color' : '#c19d63'}, 'slow');
		$(".color3").animate({'background-color' : '#a4ad9a'}, 'slow');
		$(".color4").animate({'background-color' : '#827e62'}, 'slow');
		$(".color5").animate({'background-color' : '#5e666e'}, 'slow');

		$(".one")  .animate({'background-color' : '#771521'}, 'slow');
		$(".two")  .animate({'background-color' : '#7c282e'}, 'slow');
		$(".three").animate({'background-color' : '#823f42'}, 'slow');
		$(".four") .animate({'background-color' : '#855758'}, 'slow');
		$(".five") .animate({'background-color' : '#7f6667'}, 'slow');


	});
} );

// 4點按淡薰衣草
$( function() {
	$( '.choosing4' ).on( "click", function() {

		anime.timeline({loop: false})
			.add({
				targets: '.firstColorName',
				translateX: [40,0],
				translateZ: 0,
				opacity: [0,1],
				easing: "easeOutExpo",
				duration: 3600,
				delay: (el, i) => 350 + 30 * i
			});


		$('.firstColor').animate({'background-color' : '#917b8f'}, 'slow');
		$('.firstColorName').animate({'color' : '#917b8f'}, 'slow');
		$('.firstColorCMYK').animate({'color' : '#917b8f'}, 'slow');
		$( '.firstColorName' ).text("淡 薰 衣 草");
		$( '.firstColorCMYK' ).text("C51 M55 Y30 K0");

		$(".color1").animate({'background-color' : '#6f8fc9'}, 'slow');
		$(".color2").animate({'background-color' : '#c9c5df'}, 'slow');
		$(".color3").animate({'background-color' : '#c58194'}, 'slow');
		$(".color4").animate({'background-color' : '#965c7b'}, 'slow');
		$(".color5").animate({'background-color' : '#66485a'}, 'slow');

		$(".one")  .animate({'background-color' : '#77217c'}, 'slow');
		$(".two")  .animate({'background-color' : '#803682'}, 'slow');
		$(".three").animate({'background-color' : '#874c87'}, 'slow');
		$(".four") .animate({'background-color' : '#8c648a'}, 'slow');
		$(".five") .animate({'background-color' : '#917b8f'}, 'slow');
	});
} );


// 5點按小風鈴草
$( function() {
	$( '.choosing5' ).on( "click", function() {

		anime.timeline({loop: false})
			.add({
				targets: '.firstColorName',
				translateX: [40,0],
				translateZ: 0,
				opacity: [0,1],
				easing: "easeOutExpo",
				duration: 3600,
				delay: (el, i) => 350 + 30 * i
			});


		$('.firstColor').animate({'background-color' : '#687d8b'}, 'slow');
		$('.firstColorName').animate({'color' : '#687d8b'}, 'slow');
		$('.firstColorCMYK').animate({'color' : '#687d8b'}, 'slow');
		$( '.firstColorName' ).text("小 風 鈴 草");
		$( '.firstColorCMYK' ).text("C67 M48 Y40 K0");

		$(".color1").animate({'background-color' : '#e8b997'}, 'slow');
		$(".color2").animate({'background-color' : '#f0dfb9'}, 'slow');
		$(".color3").animate({'background-color' : '#b0c5d1'}, 'slow');
		$(".color4").animate({'background-color' : '#7cadbe'}, 'slow');
		$(".color5").animate({'background-color' : '#404e63'}, 'slow');

		$(".one")  .animate({'background-color' : '#1c637c'}, 'slow');
		$(".two")  .animate({'background-color' : '#336a82'}, 'slow');
		$(".three").animate({'background-color' : '#4c7287'}, 'slow');
		$(".four") .animate({'background-color' : '#687d8b'}, 'slow');
		$(".five") .animate({'background-color' : '#7b8387'}, 'slow');
	});
} );


// 6點按異域磚牆
$( function() {
	$( '.choosing6' ).on( "click", function() {

		anime.timeline({loop: false})
			.add({
				targets: '.firstColorName',
				translateX: [40,0],
				translateZ: 0,
				opacity: [0,1],
				easing: "easeOutExpo",
				duration: 3600,
				delay: (el, i) => 350 + 30 * i
			});


		$('.firstColor').animate({'background-color' : '#a17f63'}, 'slow');
		$('.firstColorName').animate({'color' : '#a17f63'}, 'slow');
		$('.firstColorCMYK').animate({'color' : '#a17f63'}, 'slow');
		$( '.firstColorName' ).text("異 域 磚 牆");
		$( '.firstColorCMYK' ).text("C45 M53 Y62 K0");

		$(".color1").animate({'background-color' : '#f1d3b6'}, 'slow');
		$(".color2").animate({'background-color' : '#cba276'}, 'slow');
		$(".color3").animate({'background-color' : '#816559'}, 'slow');
		$(".color4").animate({'background-color' : '#855758'}, 'slow');
		$(".color5").animate({'background-color' : '#885436'}, 'slow');

		$(".one")  .animate({'background-color' : '#914e22'}, 'slow');
		$(".two")  .animate({'background-color' : '#965e38'}, 'slow');
		$(".three").animate({'background-color' : '#996f50'}, 'slow');
		$(".four") .animate({'background-color' : '#a17f63'}, 'slow');
		$(".five") .animate({'background-color' : '#a08f82'}, 'slow');
	});
} );


// 7點按綠洲野獸
$( function() {
	$( '.choosing7' ).on( "click", function() {

		anime.timeline({loop: false})
			.add({
				targets: '.firstColorName',
				translateX: [40,0],
				translateZ: 0,
				opacity: [0,1],
				easing: "easeOutExpo",
				duration: 3600,
				delay: (el, i) => 350 + 30 * i
			});


		$('.firstColor').animate({'background-color' : '#6c6230'}, 'slow');
		$('.firstColorName').animate({'color' : '#6c6230'}, 'slow');
		$('.firstColorCMYK').animate({'color' : '#6c6230'}, 'slow');
		$( '.firstColorName' ).text("綠 洲 野 獸");
		$( '.firstColorCMYK' ).text("C63 M58 Y95 K0");

		$(".color1").animate({'background-color' : '#e2c498'}, 'slow');
		$(".color2").animate({'background-color' : '#897064'}, 'slow');
		$(".color3").animate({'background-color' : '#6c6230'}, 'slow');
		$(".color4").animate({'background-color' : '#213d27'}, 'slow');
		$(".color5").animate({'background-color' : '#141d26'}, 'slow');

		$(".one")  .animate({'background-color' : '#665510'}, 'slow');
		$(".two")  .animate({'background-color' : '#685a1e'}, 'slow');
		$(".three").animate({'background-color' : '#6c6230'}, 'slow');
		$(".four") .animate({'background-color' : '#686141'}, 'slow');
		$(".five") .animate({'background-color' : '#636050'}, 'slow');
	});
} );


// 8點按夜幕遊走
$( function() {
	$( '.choosing8' ).on( "click", function() {

		anime.timeline({loop: false})
			.add({
				targets: '.firstColorName',
				translateX: [40,0],
				translateZ: 0,
				opacity: [0,1],
				easing: "easeOutExpo",
				duration: 3600,
				delay: (el, i) => 350 + 30 * i
			});


		$('.firstColor').animate({'background-color' : '#141d26'}, 'slow');
		$('.firstColorName').animate({'color' : '#141d26'}, 'slow');
		$('.firstColorCMYK').animate({'color' : '#141d26'}, 'slow');
		$( '.firstColorName' ).text("夜 幕 遊 走");
		$( '.firstColorCMYK' ).text("C90 M84 Y71 K59");

		$(".color1").animate({'background-color' : '#36243a'}, 'slow');
		$(".color2").animate({'background-color' : '#49435b'}, 'slow');
		$(".color3").animate({'background-color' : '#385d73'}, 'slow');
		$(".color4").animate({'background-color' : '#687d8b'}, 'slow');
		$(".color5").animate({'background-color' : '#ecb719'}, 'slow');

		$(".one")  .animate({'background-color' : '#000000'}, 'slow');
		$(".two")  .animate({'background-color' : '#141d26'}, 'slow');
		$(".three").animate({'background-color' : '#222c35'}, 'slow');
		$(".four") .animate({'background-color' : '#353d44'}, 'slow');
		$(".five") .animate({'background-color' : '#464d51'}, 'slow');
	});
} );


// 9點按雪色絨毛
$( function() {

	$( '.choosing9' ).on( "click", function() {

		anime.timeline({loop: false})
			.add({
				targets: '.firstColorName',
				translateX: [40,0],
				translateZ: 0,
				opacity: [0,1],
				easing: "easeOutExpo",
				duration: 3600,
				delay: (el, i) => 350 + 30 * i
			});


		$('.firstColor').animate({'background-color' : '#e0d7cc'}, 'slow');
		$('.firstColorName').animate({'color' : '#e0d7cc'}, 'slow');
		$('.firstColorCMYK').animate({'color' : '#e0d7cc'}, 'slow');
		$( '.firstColorName' ).text("雪 色 絨 毛");
		$( '.firstColorCMYK' ).text("C15 M16 Y19 K0");

		$(".color1").animate({'background-color' : '#dddae5'}, 'slow');
		$(".color2").animate({'background-color' : '#ecdfab'}, 'slow');
		$(".color3").animate({'background-color' : '#cbcbb3'}, 'slow');
		$(".color4").animate({'background-color' : '#9b9b9b'}, 'slow');
		$(".color5").animate({'background-color' : '#7b7376'}, 'slow');

		$(".one")  .animate({'background-color' : '#75716e'}, 'slow');
		$(".two")  .animate({'background-color' : '#99948f'}, 'slow');
		$(".three").animate({'background-color' : '#bcb5ad'}, 'slow');
		$(".four") .animate({'background-color' : '#e0d7cc'}, 'slow');
		$(".five") .animate({'background-color' : '#fff7ee'}, 'slow');
	});
} );






// 111111111111111111111
//
// var cn = document.querySelector('.firstColorName');
//
// var c = document.querySelector('.firstColor');
//
// var cmyk = document.querySelector('.firstColorCMYK');
//
// var cc = 1;
//
// // function pushBtn () {
// 	document.querySelector('.choosing'+ cc).addEventListener('click' , function(){
//
// 	  c.classList.add('choosing'+ cc);
// 		cn.classList.add('choosing'+ cc +'TextColor');
// 		cmyk.classList.add('choosing' + cc + 'TextColor');
//
// 	  cmyk.textContent = 'C50 M100 Y98 K29';
// 		cn.textContent = '戰 爭 煙 霧';
//
// 	});
//
//
//
// };

	// 111111111111111111111



// 可刪
// var currentPlayer = 1;
//
// if (currentPlayer === 1) {
// 	document.getElementById('player-' + currentPlayer + '-current-score').textContent = dice;
//
//
// }
//
// else {
// 		document.getElementById('player-' + currentPlayer + '-current-score').textContent = dice;
//
// 		player2TotalSc
//



//


















// 主色調標題動畫
// anime.timeline({loop: false})
//   .add({
//     targets: '.firstColorName',
//     translateX: [40,0],
//     translateZ: 0,
//     opacity: [0,1],
//     easing: "easeOutExpo",
//     duration: 3600,
//     delay: (el, i) => 350 + 30 * i
//   }).add({
  //   targets: '.firstColorName',
  //   translateX: [0,-30],
  //   opacity: [1,0],
  //   easing: "easeInExpo",
  //   duration: 1100,
  //   delay: (el, i) => 100 + 30 * i
  // });
