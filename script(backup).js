

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


		$( '.firstColor' ).addClass( "choosing1", 700 , callback );
		$( '.firstColorCMYK' ).addClass( "choosing1TextColor", 700 , callback );
		$( '.firstColorName' ).addClass( "choosing1TextColor", 700 , callback );
		$( '.firstColorName' ).text("戰 爭 煙 霧");
		$( '.firstColorCMYK' ).text("C50 M100 Y98 K29");

		// $(".firstColor").animate({'background-color' : '#7b131d'}, 'slow');

		$(".color1").animate({'background-color' : '#c4122c'}, 'slow');
		$(".color2").animate({'background-color' : '#f43e49'}, 'slow');
		$(".color3").animate({'background-color' : '#f38c7a'}, 'slow');
		$(".color4").animate({'background-color' : '#ffc3b4'}, 'slow');
		$(".color5").animate({'background-color' : '#9b7f66'}, 'slow');



		function callback() {
				$( '.firstColor' ).removeClass( "choosing2 , choosing3 , choosing4 , choosing5 , choosing6 , choosing7 , choosing8 , choosing9 ",350);
				$( '.firstColorCMYK' ).removeClass( "choosing2TextColor , choosing3TextColor , choosing4TextColor , choosing5TextColor , choosing6TextColor , choosing7TextColor , choosing8TextColor , choosing9TextColor" , 350);
				$( '.firstColorName' ).removeClass( "choosing2TextColor , choosing3TextColor , choosing4TextColor , choosing5TextColor , choosing6TextColor , choosing7TextColor , choosing8TextColor , choosing9TextColor" , 350);
		}
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


		$( '.firstColor' ).addClass( "choosing2", 700 , callback);
		$( '.firstColorCMYK' ).addClass( "choosing2TextColor", 700 , callback);
		$( '.firstColorName' ).addClass( "choosing2TextColor", 700 , callback);
		$( '.firstColorName' ).text("秋 果 豐 收");
		$( '.firstColorCMYK' ).text("C14 M59 Y91 K0");


		$(".color1").animate({'background-color' : '#2c140e'}, 'slow');
		$(".color2").animate({'background-color' : '#454216'}, 'slow');
		$(".color3").animate({'background-color' : '#95451f'}, 'slow');
		$(".color4").animate({'background-color' : '#ecb719'}, 'slow');
		$(".color5").animate({'background-color' : '#fbc38e'}, 'slow');


		function callback() {
				$( '.firstColor' ).removeClass( "choosing1 , choosing3 , choosing4 , choosing5 , choosing6 , choosing7 , choosing8 , choosing9 ",350);
				$( '.firstColorCMYK' ).removeClass( "choosing1TextColor , choosing3TextColor , choosing4TextColor , choosing5TextColor , choosing6TextColor , choosing7TextColor , choosing8TextColor , choosing9TextColor" , 350);
				$( '.firstColorName' ).removeClass( "choosing1TextColor , choosing3TextColor , choosing4TextColor , choosing5TextColor , choosing6TextColor , choosing7TextColor , choosing8TextColor , choosing9TextColor" , 350);
		}
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

		$( '.firstColor' ).addClass( "choosing3", 700 , callback);
		$( '.firstColorCMYK' ).addClass( "choosing3TextColor", 700 , callback);
		$( '.firstColorName' ).addClass( "choosing3TextColor", 700 , callback);
		$( '.firstColorName' ).text("沙 漠 之 花");
		$( '.firstColorCMYK' ).text("C55 M71 Y60 K8");

		function callback() {
				$( '.firstColor' ).removeClass( "choosing1 , choosing2 , choosing4 , choosing5 , choosing6 , choosing7 , choosing8 , choosing9 ",350);
				$( '.firstColorCMYK' ).removeClass( "choosing1TextColor , choosing2TextColor , choosing4TextColor , choosing5TextColor , choosing6TextColor , choosing7TextColor , choosing8TextColor , choosing9TextColor" , 350);
				$( '.firstColorName' ).removeClass( "choosing1TextColor , choosing2TextColor , choosing4TextColor , choosing5TextColor , choosing6TextColor , choosing7TextColor , choosing8TextColor , choosing9TextColor" , 350);
		}
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

		$( '.firstColor' ).addClass( "choosing4", 700 , callback);
		$( '.firstColorCMYK' ).addClass( "choosing4TextColor", 700 , callback);
		$( '.firstColorName' ).addClass( "choosing4TextColor", 700 , callback);
		$( '.firstColorName' ).text("淡 薰 衣 草");
		$( '.firstColorCMYK' ).text("C51 M55 Y30 K0");

		function callback() {
				$( '.firstColor' ).removeClass( "choosing1 , choosing2 , choosing3 , choosing5 , choosing6 , choosing7 , choosing8 , choosing9 ",350);
				$( '.firstColorCMYK' ).removeClass( "choosing1TextColor , choosing2TextColor , choosing3TextColor , choosing5TextColor , choosing6TextColor , choosing7TextColor , choosing8TextColor , choosing9TextColor" , 350);
				$( '.firstColorName' ).removeClass( "choosing1TextColor , choosing2TextColor , choosing3TextColor , choosing5TextColor , choosing6TextColor , choosing7TextColor , choosing8TextColor , choosing9TextColor" , 350);
		}
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

		$( '.firstColor' ).addClass( "choosing5", 700 , callback);
		$( '.firstColorCMYK' ).addClass( "choosing5TextColor", 700 , callback);
		$( '.firstColorName' ).addClass( "choosing5TextColor", 700 , callback);
		$( '.firstColorName' ).text("小 風 鈴 草");
		$( '.firstColorCMYK' ).text("C67 M48 Y40 K0");

		function callback() {
				$( '.firstColor' ).removeClass( "choosing1 , choosing2 , choosing3 , choosing4 , choosing6 , choosing7 , choosing8 , choosing9 ",350);
				$( '.firstColorCMYK' ).removeClass( "choosing1TextColor , choosing2TextColor , choosing3TextColor , choosing4TextColor , choosing6TextColor , choosing7TextColor , choosing8TextColor , choosing9TextColor" , 350);
				$( '.firstColorName' ).removeClass( "choosing1TextColor , choosing2TextColor , choosing3TextColor , choosing4TextColor , choosing6TextColor , choosing7TextColor , choosing8TextColor , choosing9TextColor" , 350);
		}
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

		$( '.firstColor' ).addClass( "choosing6", 700 , callback);
		$( '.firstColorCMYK' ).addClass( "choosing6TextColor", 700 , callback);
		$( '.firstColorName' ).addClass( "choosing6TextColor", 700 , callback);
		$( '.firstColorName' ).text("異 域 磚 牆");
		$( '.firstColorCMYK' ).text("C45 M53 Y62 K0");

		function callback() {
				$( '.firstColor' ).removeClass( "choosing1 , choosing2 , choosing3 , choosing4 , choosing5 , choosing7 , choosing8 , choosing9 ",350);
				$( '.firstColorCMYK' ).removeClass( "choosing1TextColor , choosing2TextColor , choosing3TextColor , choosing4TextColor , choosing5TextColor , choosing7TextColor , choosing8TextColor , choosing9TextColor" , 350);
				$( '.firstColorName' ).removeClass( "choosing1TextColor , choosing2TextColor , choosing3TextColor , choosing4TextColor , choosing5TextColor , choosing7TextColor , choosing8TextColor , choosing9TextColor" , 350);
		}
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

		$( '.firstColor' ).addClass( "choosing7", 700 , callback);
		$( '.firstColorCMYK' ).addClass( "choosing7TextColor", 700 , callback);
		$( '.firstColorName' ).addClass( "choosing7TextColor", 700 , callback);
		$( '.firstColorName' ).text("綠 洲 野 獸");
		$( '.firstColorCMYK' ).text("C63 M58 Y95 K0");

		function callback() {
				$( '.firstColor' ).removeClass( "choosing1 , choosing2 , choosing3 , choosing4 , choosing5 , choosing6 , choosing8 , choosing9 ",350);
				$( '.firstColorCMYK' ).removeClass( "choosing1TextColor , choosing2TextColor , choosing3TextColor , choosing4TextColor , choosing5TextColor , choosing6TextColor , choosing8TextColor , choosing9TextColor" , 350);
				$( '.firstColorName' ).removeClass( "choosing1TextColor , choosing2TextColor , choosing3TextColor , choosing4TextColor , choosing5TextColor , choosing6TextColor , choosing8TextColor , choosing9TextColor" , 350);
		}
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

		$( '.firstColor' ).addClass( "choosing8", 700 , callback);
		$( '.firstColorCMYK' ).addClass( "choosing8TextColor", 700 , callback);
		$( '.firstColorName' ).addClass( "choosing8TextColor", 700 , callback);
		$( '.firstColorName' ).text("夜 幕 遊 走");
		$( '.firstColorCMYK' ).text("C90 M84 Y71 K59");

		function callback() {
				$( '.firstColor' ).removeClass( "choosing1 , choosing2 , choosing3 , choosing4 , choosing5 , choosing6 , choosing7 , choosing9 ",350);
				$( '.firstColorCMYK' ).removeClass( "choosing1TextColor , choosing2TextColor , choosing3TextColor , choosing4TextColor , choosing5TextColor , choosing6TextColor , choosing7TextColor , choosing9TextColor" , 350);
				$( '.firstColorName' ).removeClass( "choosing1TextColor , choosing2TextColor , choosing3TextColor , choosing4TextColor , choosing5TextColor , choosing6TextColor , choosing7TextColor , choosing9TextColor" , 350);
		}
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

		$( '.firstColor' ).addClass( "choosing9", 700 , callback);
		$( '.firstColorCMYK' ).addClass( "choosing9TextColor", 700 , callback);
		$( '.firstColorName' ).addClass( "choosing9TextColor", 700 , callback);
		$( '.firstColorName' ).text("雪 色 絨 毛");
		$( '.firstColorCMYK' ).text("C15 M16 Y19 K0");

		function callback() {
				$( '.firstColor' ).removeClass( "choosing1 , choosing2 , choosing3 , choosing4 , choosing5 , choosing6 , choosing7 , choosing8 ",350);
				$( '.firstColorCMYK' ).removeClass( "choosing1TextColor , choosing2TextColor , choosing3TextColor , choosing4TextColor , choosing5TextColor , choosing6TextColor , choosing7TextColor , choosing8TextColor" , 350);
				$( '.firstColorName' ).removeClass( "choosing1TextColor , choosing2TextColor , choosing3TextColor , choosing4TextColor , choosing5TextColor , choosing6TextColor , choosing7TextColor , choosing8TextColor" , 350);
		}
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
