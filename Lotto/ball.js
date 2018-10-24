    
    $(document).ready(function() {
    
    var machine = document.getElementById("canvasLab");
    var ctx = machine.getContext("2d");
	
	setInterval(function() {
			
			ctx.save();
			ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
			ctx.fillRect(0, 0, canvasLab.width, canvasLab.height);
			ctx.restore();

	},1000/120);
			
    balls = new Array(49);
    
    //建立彩球的元素
    function ball() {
    	this.x = Math.floor( Math.random () * 176) + 12;
    	this.y = 190;
    	this.r = 10;
    	this.vx = 4 - Math.random() * 8;
    	this.vy = Math.random()*2 + 2 ;
		this.plays = function () {	
			this.x += this.vx;
			this.y += this.vy;
			
			if (this.y + this.r > canvasLab.height) {
				this.vy = -Math.abs(this.vy);
			};
			
			if (this.y - this.r < 0) {
				this.vy = Math.abs(this.vy);
			};
			
			if (this.x + this.r > canvasLab.width) {
				this.vx = -Math.abs(this.vx);
			};
			
			if (this.x - this.r < 0) {
				this.vx = Math.abs(this.vx);
			};
	
			ctx.save();
			ctx.translate(this.x, this.y);
			ctx.fillStyle = "#FF8800";
			ctx.beginPath();
			ctx.arc(0, 0, this.r, 0, Math.PI * 2, true);
			ctx.closePath();
			ctx.fill();
			ctx.restore();
		}
    }
    
    //在陣列中新增彩球
    for (var i = 0;i<balls.length;i++){
    	balls[i] = new ball();
    } 
    
   // balls = [{
   // 		// ball1
			// x : Math.floor(Math.random()*176) + 12,
			// y : 190,
			// r : 12,
			// vx : 4 - Math.random()*8,
			// vy : Math.random()*2 + 2,
			// plays:function() {

			// 	ctx.save();
			// 	ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
			// 	ctx.fillRect(0, 0, canvasLab.width, canvasLab.height);
			// 	ctx.restore();
		
			// 	balls[0].x += balls[0].vx;
			// 	balls[0].y += balls[0].vy;
				
			// 	if (balls[0].y + balls[0].r > canvasLab.height) {
			// 		balls[0].vy = -Math.abs(balls[0].vy);
			// 	};
				
			// 	if (balls[0].y - balls[0].r < 0) {
			// 		balls[0].vy = Math.abs(balls[0].vy);
			// 	};
				
			// 	if (balls[0].x + balls[0].r > canvasLab.width) {
			// 		balls[0].vx = -Math.abs(balls[0].vx);
			// 	};
				
			// 	if (balls[0].x - balls[0].r < 0) {
			// 		balls[0].vx = Math.abs(balls[0].vx);
			// 	};
		
			// 	ctx.save();
			// 	ctx.translate(balls[0].x, balls[0].y);
			// 	ctx.fillStyle = "#FF8800";
			// 	ctx.beginPath();
			// 	ctx.arc(0, 0, balls[0].r, 0, Math.PI * 2, true);
			// 	ctx.closePath();
			// 	ctx.fill();
			// 	ctx.restore();
				
			// 	}
				
   // 		},
   // 		{
   // 		// ball2
   // 		x : Math.floor(Math.random()*176) + 12,
			// y : 190,
			// r : 12,
			// vx : 4 - Math.random()*8,
			// vy : Math.random()*2 + 2,
			// plays:function() {

			// 	balls[1].x += balls[1].vx;
			// 	balls[1].y += balls[1].vy;
				
			// 	if (balls[1].y + balls[1].r > canvasLab.height) {
			// 		balls[1].vy = -Math.abs(balls[1].vy);
			// 	};
				
			// 	if (balls[1].y - balls[1].r < 0) {
			// 		balls[1].vy = Math.abs(balls[1].vy);
			// 	};
				
			// 	if (balls[1].x + balls[1].r > canvasLab.width) {
			// 		balls[1].vx = -Math.abs(balls[1].vx);
			// 	};
				
			// 	if (balls[1].x - balls[1].r < 0) {
			// 		balls[1].vx = Math.abs(balls[1].vx);
			// 	};
		
			// 	ctx.save();
			// 	ctx.translate(balls[1].x, balls[1].y);
			// 	ctx.fillStyle = "#FF8800";
			// 	ctx.beginPath();
			// 	ctx.arc(0, 0, balls[1].r, 0, Math.PI * 2, true);
			// 	ctx.closePath();
			// 	ctx.fill();
			// 	ctx.restore();
				
		 //       }
   // 		},
   // 		{
   // 		// ball3
   // 		x : Math.floor(Math.random()*176) + 12,
			// y : 190,
			// r : 12,
			// vx : 4 - Math.random()*8,
			// vy : Math.random()*2 + 2,
			// plays:function() {

			// 	balls[2].x += balls[2].vx;
			// 	balls[2].y += balls[2].vy;
				
				
			// 	if (balls[2].y + balls[2].r > canvasLab.height) {
			// 		balls[2].vy = -Math.abs(balls[2].vy);
			// 	};
				
			// 	if (balls[2].y - balls[2].r < 0) {
			// 		balls[2].vy = Math.abs(balls[2].vy);
			// 	};
				
			// 	if (balls[2].x + balls[2].r > canvasLab.width) {
			// 		balls[2].vx = -Math.abs(balls[2].vx);
			// 	};
				
			// 	if (balls[2].x - balls[2].r < 0) {
			// 		balls[2].vx = Math.abs(balls[2].vx);
			// 	};
			
			// 	ctx.save();
			// 	ctx.translate(balls[2].x, balls[2].y);
			// 	ctx.fillStyle = "#FF8800";
			// 	ctx.beginPath();
			// 	ctx.arc(0, 0, balls[2].r, 0, Math.PI * 2, true);
			// 	ctx.closePath();
			// 	ctx.fill();
			// 	ctx.restore();
				
			// }
   // 		},
   
   // 		{
   // 		//ball4
   // 		x : Math.floor(Math.random()*176) + 12,
			// y : 190,
			// r : 12,
			// vx : 4 - Math.random()*8,
			// vy : Math.random()*2 + 2,
			// plays:function() {

			// 	balls[3].x += balls[3].vx;
			// 	balls[3].y += balls[3].vy;
				
			// 	if (balls[3].y + balls[3].r > canvasLab.height) {
			// 		balls[3].vy = -Math.abs(balls[3].vy);
			// 	};
				
			// 	if (balls[3].y - balls[3].r < 0) {
			// 		balls[3].vy = Math.abs(balls[3].vy);
			// 	};
				
			// 	if (balls[3].x + balls[3].r > canvasLab.width) {
			// 		balls[3].vx = -Math.abs(balls[3].vx);
			// 	};
				
			// 	if (balls[3].x - balls[3].r < 0) {
			// 		balls[3].vx = Math.abs(balls[3].vx);
			// 	};
		
			// 	ctx.save();
			// 	ctx.translate(balls[3].x, balls[3].y);
			// 	ctx.fillStyle = "#FF8800";
			// 	ctx.beginPath();
			// 	ctx.arc(0, 0, balls[3].r, 0, Math.PI * 2, true);
			// 	ctx.closePath();
			// 	ctx.fill();
			// 	ctx.restore();
				
			// }
   // 		},
   
   // 		{
   // 		// ball5
   // 		x : Math.floor(Math.random()*176) + 12,
			// y : 190,
			// r : 12,
			// vx : 4 - Math.random()*8,
			// vy : Math.random()*2 + 2,
			// plays:function() {

			// 	balls[4].x += balls[4].vx;
			// 	balls[4].y += balls[4].vy;
				
			// 	if (balls[4].y + balls[4].r > canvasLab.height) {
			// 		balls[4].vy = -Math.abs(balls[4].vy);
			// 	};
				
			// 	if (balls[4].y - balls[4].r < 0) {
			// 		balls[4].vy = Math.abs(balls[4].vy);
			// 	};
				
			// 	if (balls[4].x + balls[4].r > canvasLab.width) {
			// 		balls[4].vx = -Math.abs(balls[4].vx);
			// 	};
				
			// 	if (balls[4].x - balls[4].r < 0) {
			// 		balls[4].vx = Math.abs(balls[4].vx);
			// 	};
		
			// 	ctx.save();
			// 	ctx.translate(balls[4].x, balls[4].y);
			// 	ctx.fillStyle = "#FF8800";
			// 	ctx.beginPath();
			// 	ctx.arc(0, 0, balls[4].r, 0, Math.PI * 2, true);
			// 	ctx.closePath();
			// 	ctx.fill();
			// 	ctx.restore();
				
			// }
   // 		},
   
   // 		{
   // 		// ball6
   // 		x : Math.floor(Math.random()*176) + 12,
			// y : 190,
			// r : 12,
			// vx : 4 - Math.random()*8,
			// vy : Math.random()*2 + 2,
			// plays:function() {

			// 	balls[5].x += balls[5].vx;
			// 	balls[5].y += balls[5].vy;
				
			// 	if (balls[5].y + balls[5].r > canvasLab.height) {
			// 		balls[5].vy = -Math.abs(balls[5].vy);
			// 	};
				
			// 	if (balls[5].y - balls[5].r < 0) {
			// 		balls[5].vy = Math.abs(balls[5].vy);
			// 	};
				
			// 	if (balls[5].x + balls[5].r > canvasLab.width) {
			// 		balls[5].vx = -Math.abs(balls[5].vx);
			// 	};
				
			// 	if (balls[5].x - balls[5].r < 0) {
			// 		balls[5].vx = Math.abs(balls[5].vx);
			// 	};
		
			// 	ctx.save();
			// 	ctx.translate(balls[5].x, balls[5].y);
			// 	ctx.fillStyle = "#FF8800";
			// 	ctx.beginPath();
			// 	ctx.arc(0, 0, balls[5].r, 0, Math.PI * 2, true);
			// 	ctx.closePath();
			// 	ctx.fill();
			// 	ctx.restore();
				
			// }
   // 		},
   
   // 		{
   // 		// ball7
			// x : Math.floor(Math.random()*176) + 12,
			// y : 190,
			// r : 12,
			// vx : 4 - Math.random()*8,
			// vy : Math.random()*2 + 2,
			// plays:function() {

			// 	balls[6].x += balls[6].vx;
			// 	balls[6].y += balls[6].vy;
				
			// 	if (balls[6].y + balls[6].r > canvasLab.height) {
			// 		balls[6].vy = -Math.abs(balls[6].vy);
			// 	};
				
			// 	if (balls[6].y - balls[6].r < 0) {
			// 		balls[6].vy = Math.abs(balls[6].vy);
			// 	};
				
			// 	if (balls[6].x + balls[6].r > canvasLab.width) {
			// 		balls[6].vx = -Math.abs(balls[6].vx);
			// 	};
				
			// 	if (balls[6].x - balls[6].r < 0) {
			// 		balls[6].vx = Math.abs(balls[6].vx);
			// 	};
		
			// 	ctx.save();
			// 	ctx.translate(balls[6].x, balls[6].y);
			// 	ctx.fillStyle = "#FF8800";
			// 	ctx.beginPath();
			// 	ctx.arc(0, 0, balls[6].r, 0, Math.PI * 2, true);
			// 	ctx.closePath();
			// 	ctx.fill();
			// 	ctx.restore();
				
			// 	}
   //     	},
   
   //     	{
   //     	// ball8
   //     	x : Math.floor(Math.random()*176) + 12,
			// y : 190,
			// r : 12,
			// vx : 4 - Math.random()*8,
			// vy : Math.random()*2 + 2,
			// plays:function() {

			// 	balls[7].x += balls[7].vx;
			// 	balls[7].y += balls[7].vy;
				
			// 	if (balls[7].y + balls[7].r > canvasLab.height) {
			// 		balls[7].vy = -Math.abs(balls[7].vy);
			// 	};
				
			// 	if (balls[7].y - balls[7].r < 0) {
			// 		balls[7].vy = Math.abs(balls[7].vy);
			// 	};
				
			// 	if (balls[7].x + balls[7].r > canvasLab.width) {
			// 		balls[7].vx = -Math.abs(balls[7].vx);
			// 	};
				
			// 	if (balls[7].x - balls[7].r < 0) {
			// 		balls[7].vx = Math.abs(balls[7].vx);
			// 	};
		
			// 	ctx.save();
			// 	ctx.translate(balls[7].x, balls[7].y);
			// 	ctx.fillStyle = "#FF8800";
			// 	ctx.beginPath();
			// 	ctx.arc(0, 0, balls[7].r, 0, Math.PI * 2, true);
			// 	ctx.closePath();
			// 	ctx.fill();
			// 	ctx.restore();
				
			// 	}
   //     	},
   
   //     	{
   //     	// ball9
   //     	x : Math.floor(Math.random()*176) + 12,
			// y : 190,
			// r : 12,
			// vx : 4 - Math.random()*8,
			// vy : Math.random()*2 + 2,
			// plays:function() {

			// 	balls[8].x += balls[8].vx;
			// 	balls[8].y += balls[8].vy;
				
			// 	if (balls[8].y + balls[8].r > canvasLab.height) {
			// 		balls[8].vy = -Math.abs(balls[8].vy);
			// 	};
				
			// 	if (balls[8].y - balls[8].r < 0) {
			// 		balls[8].vy = Math.abs(balls[8].vy);
			// 	};
				
			// 	if (balls[8].x + balls[8].r > canvasLab.width) {
			// 		balls[8].vx = -Math.abs(balls[8].vx);
			// 	};
				
			// 	if (balls[8].x - balls[8].r < 0) {
			// 		balls[8].vx = Math.abs(balls[8].vx);
			// 	};
		
			// 	ctx.save();
			// 	ctx.translate(balls[8].x, balls[8].y);
			// 	ctx.fillStyle = "#FF8800";
			// 	ctx.beginPath();
			// 	ctx.arc(0, 0, balls[8].r, 0, Math.PI * 2, true);
			// 	ctx.closePath();
			// 	ctx.fill();
			// 	ctx.restore();
				
			// 	}	
   //     	},
   
   //     	{
   //     	// ball10
   //     	x : Math.floor(Math.random()*176) + 12,
			// y : 190,
			// r : 12,
			// vx : 4 - Math.random()*8,
			// vy : Math.random()*2 + 2,
			// plays:function() {

			// 	balls[9].x += balls[9].vx;
			// 	balls[9].y += balls[9].vy;
				
			// 	if (balls[9].y + balls[9].r > canvasLab.height) {
			// 		balls[9].vy = -Math.abs(balls[9].vy);
			// 	};
				
			// 	if (balls[9].y - balls[9].r < 0) {
			// 		balls[9].vy = Math.abs(balls[9].vy);
			// 	};
				
			// 	if (balls[9].x + balls[9].r > canvasLab.width) {
			// 		balls[9].vx = -Math.abs(balls[9].vx);
			// 	};
				
			// 	if (balls[9].x - balls[9].r < 0) {
			// 		balls[9].vx = Math.abs(balls[9].vx);
			// 	};
		
			// 	ctx.save();
			// 	ctx.translate(balls[9].x, balls[9].y);
			// 	ctx.fillStyle = "#FF8800";
			// 	ctx.beginPath();
			// 	ctx.arc(0, 0, balls[9].r, 0, Math.PI * 2, true);
			// 	ctx.closePath();
			// 	ctx.fill();
			// 	ctx.restore();
				
			// 	}	
   //     	},
   
   //     	{
   //     	// ball11
   //     	x : Math.floor(Math.random()*176) + 12,
			// y : 190,
			// r : 12,
			// vx : 4 - Math.random()*8,
			// vy : Math.random()*2 + 2,
			// plays:function() {

			// 	balls[10].x += balls[10].vx;
			// 	balls[10].y += balls[10].vy;
				
			// 	if (balls[10].y + balls[10].r > canvasLab.height) {
			// 		balls[10].vy = -Math.abs(balls[10].vy);
			// 	};
				
			// 	if (balls[10].y - balls[10].r < 0) {
			// 		balls[10].vy = Math.abs(balls[10].vy);
			// 	};
				
			// 	if (balls[10].x + balls[10].r > canvasLab.width) {
			// 		balls[10].vx = -Math.abs(balls[10].vx);
			// 	};
				
			// 	if (balls[10].x - balls[10].r < 0) {
			// 		balls[10].vx = Math.abs(balls[10].vx);
			// 	};
		
			// 	ctx.save();
			// 	ctx.translate(balls[10].x, balls[10].y);
			// 	ctx.fillStyle = "#FF8800";
			// 	ctx.beginPath();
			// 	ctx.arc(0, 0, balls[10].r, 0, Math.PI * 2, true);
			// 	ctx.closePath();
			// 	ctx.fill();
			// 	ctx.restore();
				
			// 	}	
   //     	},
   
   //     	{
   //     	// ball12
   //     	x : Math.floor(Math.random()*176) + 12,
			// y : 190,
			// r : 12,
			// vx : 4 - Math.random()*8,
			// vy : Math.random()*2 + 2,
			// plays:function() {

			// 	balls[11].x += balls[11].vx;
			// 	balls[11].y += balls[11].vy;
				
			// 	if (balls[11].y + balls[11].r > canvasLab.height) {
			// 		balls[11].vy = -Math.abs(balls[11].vy);
			// 	};
				
			// 	if (balls[11].y - balls[11].r < 0) {
			// 		balls[11].vy = Math.abs(balls[11].vy);
			// 	};
				
			// 	if (balls[11].x + balls[11].r > canvasLab.width) {
			// 		balls[11].vx = -Math.abs(balls[11].vx);
			// 	};
				
			// 	if (balls[11].x - balls[11].r < 0) {
			// 		balls[11].vx = Math.abs(balls[11].vx);
			// 	};
		
			// 	ctx.save();
			// 	ctx.translate(balls[11].x, balls[11].y);
			// 	ctx.fillStyle = "#FF8800";
			// 	ctx.beginPath();
			// 	ctx.arc(0, 0, balls[11].r, 0, Math.PI * 2, true);
			// 	ctx.closePath();
			// 	ctx.fill();
			// 	ctx.restore();
				
			// 	}	
   //     	},
   
   //     	{
   //     	// ball13
   //     	x : Math.floor(Math.random()*176) + 12,
			// y : 190,
			// r : 12,
			// vx : 4 - Math.random()*8,
			// vy : Math.random()*2 + 2,
			// plays:function() {

			// 	balls[12].x += balls[12].vx;
			// 	balls[12].y += balls[12].vy;
				
			// 	if (balls[12].y + balls[12].r > canvasLab.height) {
			// 		balls[12].vy = -Math.abs(balls[12].vy);
			// 	};
				
			// 	if (balls[12].y - balls[12].r < 0) {
			// 		balls[12].vy = Math.abs(balls[12].vy);
			// 	};
				
			// 	if (balls[12].x + balls[12].r > canvasLab.width) {
			// 		balls[12].vx = -Math.abs(balls[12].vx);
			// 	};
				
			// 	if (balls[12].x - balls[12].r < 0) {
			// 		balls[12].vx = Math.abs(balls[12].vx);
			// 	};
		
			// 	ctx.save();
			// 	ctx.translate(balls[12].x, balls[12].y);
			// 	ctx.fillStyle = "#FF8800";
			// 	ctx.beginPath();
			// 	ctx.arc(0, 0, balls[12].r, 0, Math.PI * 2, true);
			// 	ctx.closePath();
			// 	ctx.fill();
			// 	ctx.restore();
				
			// 	}	
   //     	},
   
   //     	{
   //     	// ball14
   //     	x : Math.floor(Math.random()*176) + 12,
			// y : 190,
			// r : 12,
			// vx : 4 - Math.random()*8,
			// vy : Math.random()*2 + 2,
			// plays:function() {

			// 	balls[13].x += balls[13].vx;
			// 	balls[13].y += balls[13].vy;
				
			// 	if (balls[13].y + balls[13].r > canvasLab.height) {
			// 		balls[13].vy = -Math.abs(balls[13].vy);
			// 	};
				
			// 	if (balls[13].y - balls[13].r < 0) {
			// 		balls[13].vy = Math.abs(balls[13].vy);
			// 	};
				
			// 	if (balls[13].x + balls[13].r > canvasLab.width) {
			// 		balls[13].vx = -Math.abs(balls[13].vx);
			// 	};
				
			// 	if (balls[13].x - balls[13].r < 0) {
			// 		balls[13].vx = Math.abs(balls[13].vx);
			// 	};
		
			// 	ctx.save();
			// 	ctx.translate(balls[13].x, balls[13].y);
			// 	ctx.fillStyle = "#FF8800";
			// 	ctx.beginPath();
			// 	ctx.arc(0, 0, balls[13].r, 0, Math.PI * 2, true);
			// 	ctx.closePath();
			// 	ctx.fill();
			// 	ctx.restore();
				
			// 	}	
   //     	},
   
   //     	{
   //     	// ball15
   //     	x : Math.floor(Math.random()*176) + 12,
			// y : 190,
			// r : 12,
			// vx : 4 - Math.random()*8,
			// vy : Math.random()*2 + 2,
			// plays:function() {

			// 	balls[14].x += balls[14].vx;
			// 	balls[14].y += balls[14].vy;
				
			// 	if (balls[14].y + balls[14].r > canvasLab.height) {
			// 		balls[14].vy = -Math.abs(balls[14].vy);
			// 	};
				
			// 	if (balls[14].y - balls[14].r < 0) {
			// 		balls[14].vy = Math.abs(balls[14].vy);
			// 	};
				
			// 	if (balls[14].x + balls[14].r > canvasLab.width) {
			// 		balls[14].vx = -Math.abs(balls[14].vx);
			// 	};
				
			// 	if (balls[14].x - balls[14].r < 0) {
			// 		balls[14].vx = Math.abs(balls[14].vx);
			// 	};
		
			// 	ctx.save();
			// 	ctx.translate(balls[14].x, balls[14].y);
			// 	ctx.fillStyle = "#FF8800";
			// 	ctx.beginPath();
			// 	ctx.arc(0, 0, balls[14].r, 0, Math.PI * 2, true);
			// 	ctx.closePath();
			// 	ctx.fill();
			// 	ctx.restore();
				
			// 	}
   //     	},
   
   //     	{
   //     	// ball16
   //     	x : Math.floor(Math.random()*176) + 12,
			// y : 190,
			// r : 12,
			// vx : 4 - Math.random()*8,
			// vy : Math.random()*2 + 2,
			// plays:function() {

			// 	balls[15].x += balls[15].vx;
			// 	balls[15].y += balls[15].vy;
				
			// 	if (balls[15].y + balls[15].r > canvasLab.height) {
			// 		balls[15].vy = -Math.abs(balls[15].vy);
			// 	};
				
			// 	if (balls[15].y - balls[15].r < 0) {
			// 		balls[15].vy = Math.abs(balls[15].vy);
			// 	};
				
			// 	if (balls[15].x + balls[15].r > canvasLab.width) {
			// 		balls[15].vx = -Math.abs(balls[15].vx);
			// 	};
				
			// 	if (balls[15].x - balls[15].r < 0) {
			// 		balls[15].vx = Math.abs(balls[15].vx);
			// 	};
		
			// 	ctx.save();
			// 	ctx.translate(balls[15].x, balls[15].y);
			// 	ctx.fillStyle = "#FF8800";
			// 	ctx.beginPath();
			// 	ctx.arc(0, 0, balls[15].r, 0, Math.PI * 2, true);
			// 	ctx.closePath();
			// 	ctx.fill();
			// 	ctx.restore();
				
			// 	}
   //     	},
   
   //     	{
   //     	// ball17
   //     	x : Math.floor(Math.random()*176) + 12,
			// y : 190,
			// r : 12,
			// vx : 4 - Math.random()*8,
			// vy : Math.random()*2 + 2,
			// plays:function() {

			// 	balls[16].x += balls[16].vx;
			// 	balls[16].y += balls[16].vy;
				
			// 	if (balls[16].y + balls[16].r > canvasLab.height) {
			// 		balls[16].vy = -Math.abs(balls[16].vy);
			// 	};
				
			// 	if (balls[16].y - balls[16].r < 0) {
			// 		balls[16].vy = Math.abs(balls[16].vy);
			// 	};
				
			// 	if (balls[16].x + balls[16].r > canvasLab.width) {
			// 		balls[16].vx = -Math.abs(balls[16].vx);
			// 	};
				
			// 	if (balls[16].x - balls[16].r < 0) {
			// 		balls[16].vx = Math.abs(balls[16].vx);
			// 	};
		
			// 	ctx.save();
			// 	ctx.translate(balls[16].x, balls[16].y);
			// 	ctx.fillStyle = "#FF8800";
			// 	ctx.beginPath();
			// 	ctx.arc(0, 0, balls[16].r, 0, Math.PI * 2, true);
			// 	ctx.closePath();
			// 	ctx.fill();
			// 	ctx.restore();
				
			// 	}
   //     	},
   
   //     	{
   //     	// ball18
   //     	x : Math.floor(Math.random()*176) + 12,
			// y : 190,
			// r : 12,
			// vx : 4 - Math.random()*8,
			// vy : Math.random()*2 + 2,
			// plays:function() {

			// 	balls[17].x += balls[17].vx;
			// 	balls[17].y += balls[17].vy;
				
			// 	if (balls[17].y + balls[17].r > canvasLab.height) {
			// 		balls[17].vy = -Math.abs(balls[17].vy);
			// 	};
				
			// 	if (balls[17].y - balls[17].r < 0) {
			// 		balls[17].vy = Math.abs(balls[17].vy);
			// 	};
				
			// 	if (balls[17].x + balls[17].r > canvasLab.width) {
			// 		balls[17].vx = -Math.abs(balls[17].vx);
			// 	};
				
			// 	if (balls[17].x - balls[17].r < 0) {
			// 		balls[17].vx = Math.abs(balls[17].vx);
			// 	};
		
			// 	ctx.save();
			// 	ctx.translate(balls[17].x, balls[17].y);
			// 	ctx.fillStyle = "#FF8800";
			// 	ctx.beginPath();
			// 	ctx.arc(0, 0, balls[17].r, 0, Math.PI * 2, true);
			// 	ctx.closePath();
			// 	ctx.fill();
			// 	ctx.restore();
				
			// 	}
   //     	},
   
   //     	{
   //     	// ball19
   //     	x : Math.floor(Math.random()*176) + 12,
			// y : 190,
			// r : 12,
			// vx : 4 - Math.random()*8,
			// vy : Math.random()*2 + 2,
			// plays:function() {

			// 	balls[18].x += balls[18].vx;
			// 	balls[18].y += balls[18].vy;
				
			// 	if (balls[18].y + balls[18].r > canvasLab.height) {
			// 		balls[18].vy = -Math.abs(balls[18].vy);
			// 	};
				
			// 	if (balls[18].y - balls[18].r < 0) {
			// 		balls[18].vy = Math.abs(balls[18].vy);
			// 	};
				
			// 	if (balls[18].x + balls[18].r > canvasLab.width) {
			// 		balls[18].vx = -Math.abs(balls[18].vx);
			// 	};
				
			// 	if (balls[18].x - balls[18].r < 0) {
			// 		balls[18].vx = Math.abs(balls[18].vx);
			// 	};
		
			// 	ctx.save();
			// 	ctx.translate(balls[18].x, balls[18].y);
			// 	ctx.fillStyle = "#FF8800";
			// 	ctx.beginPath();
			// 	ctx.arc(0, 0, balls[18].r, 0, Math.PI * 2, true);
			// 	ctx.closePath();
			// 	ctx.fill();
			// 	ctx.restore();
				
			// 	}
   //     	},
   
   //     	{
   //     	// ball20
   //     	x : Math.floor(Math.random()*176) + 12,
			// y : 190,
			// r : 12,
			// vx : 4 - Math.random()*8,
			// vy : Math.random()*2 + 2,
			// plays:function() {

			// 	balls[19].x += balls[19].vx;
			// 	balls[19].y += balls[19].vy;
				
			// 	if (balls[19].y + balls[19].r > canvasLab.height) {
			// 		balls[19].vy = -Math.abs(balls[19].vy);
			// 	};
				
			// 	if (balls[19].y - balls[19].r < 0) {
			// 		balls[19].vy = Math.abs(balls[19].vy);
			// 	};
				
			// 	if (balls[19].x + balls[19].r > canvasLab.width) {
			// 		balls[19].vx = -Math.abs(balls[19].vx);
			// 	};
				
			// 	if (balls[19].x - balls[19].r < 0) {
			// 		balls[19].vx = Math.abs(balls[19].vx);
			// 	};
		
			// 	ctx.save();
			// 	ctx.translate(balls[19].x, balls[19].y);
			// 	ctx.fillStyle = "#FF8800";
			// 	ctx.beginPath();
			// 	ctx.arc(0, 0, balls[19].r, 0, Math.PI * 2, true);
			// 	ctx.closePath();
			// 	ctx.fill();
			// 	ctx.restore();
				
			// 	}
   //     	}];
        	
   // ball1 = {
			// x : 160,
			// y : 190,
			// r : 12,
			// vx : -2,
			// vy : 1.4,
			// plays:setInterval(function() {

			// 	ctx.save();
			// 	ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
			// 	ctx.fillRect(0, 0, canvasLab.width, canvasLab.height);
			// 	ctx.restore();
		
			// 	ball1.x += ball1.vx;
			// 	ball1.y += ball1.vy;
				
			// 	if (ball1.y + ball1.r > canvasLab.height) {
			// 		ball1.vy = -Math.abs(ball1.vy);
			// 	};
				
			// 	if (ball1.y - ball1.r < 0) {
			// 		ball1.vy = Math.abs(ball1.vy);
			// 	};
				
			// 	if (ball1.x + ball1.r > canvasLab.width) {
			// 		ball1.vx = -Math.abs(ball1.vx);
			// 	};
				
			// 	if (ball1.x - ball1.r < 0) {
			// 		ball1.vx = Math.abs(ball1.vx);
			// 	};
		
			// 	ctx.save();
			// 	ctx.translate(ball1.x, ball1.y);
			// 	ctx.fillStyle = "#FF8800";
			// 	ctx.beginPath();
			// 	ctx.arc(0, 0, ball1.r, 0, Math.PI * 2, true);
			// 	ctx.closePath();
			// 	ctx.fill();
			// 	ctx.restore();
				
		 //       }, 1000 / 120)
		        
   //     	};
	
   // ball2 = {
			// x : 140,
			// y : 190,
			// r : 12,
			// vx : -1,
			// vy : 3.7,
			// plays:setInterval(function() {

			// 	ball2.x += ball2.vx;
			// 	ball2.y += ball2.vy;
				
			// 	if (ball2.y + ball2.r > canvasLab.height) {
			// 		ball2.vy = -Math.abs(ball2.vy);
			// 	};
				
			// 	if (ball2.y - ball2.r < 0) {
			// 		ball2.vy = Math.abs(ball2.vy);
			// 	};
				
			// 	if (ball2.x + ball2.r > canvasLab.width) {
			// 		ball2.vx = -Math.abs(ball2.vx);
			// 	};
				
			// 	if (ball2.x - ball2.r < 0) {
			// 		ball2.vx = Math.abs(ball2.vx);
			// 	};
		
			// 	ctx.save();
			// 	ctx.translate(ball2.x, ball2.y);
			// 	ctx.fillStyle = "#FF8800";
			// 	ctx.beginPath();
			// 	ctx.arc(0, 0, ball2.r, 0, Math.PI * 2, true);
			// 	ctx.closePath();
			// 	ctx.fill();
			// 	ctx.restore();
				
		 //       }, 1000 / 120)
		        
   //     	}; 
        		
   // ball3 = {
			// x : 20,
			// y : 190,
			// r : 12,
			// vx : 1,
			// vy : 2,
			// plays:setInterval(function() {

			// 	ball3.x += ball3.vx;
			// 	ball3.y += ball3.vy;
				
				
			// 	if (ball3.y + ball3.r > canvasLab.height) {
			// 		ball3.vy = -Math.abs(ball3.vy);
			// 	};
				
			// 	if (ball3.y - ball3.r < 0) {
			// 		ball3.vy = Math.abs(ball3.vy);
			// 	};
				
			// 	if (ball3.x + ball3.r > canvasLab.width) {
			// 		ball3.vx = -Math.abs(ball3.vx);
			// 	};
				
			// 	if (ball3.x - ball3.r < 0) {
			// 		ball3.vx = Math.abs(ball3.vx);
			// 	};
			
			// 	ctx.save();
			// 	ctx.translate(ball3.x, ball3.y);
			// 	ctx.fillStyle = "#FF8800";
			// 	ctx.beginPath();
			// 	ctx.arc(0, 0, ball3.r, 0, Math.PI * 2, true);
			// 	ctx.closePath();
			// 	ctx.fill();
			// 	ctx.restore();
				
			//     }, 1000 / 120)
			    
   //     	}; 
        		
   // ball4 = {
			// x : 90,
			// y : 190,
			// r : 12,
			// vx : 2,
			// vy : 1.5,
			// plays:setInterval(function() {

			// 	ball4.x += ball4.vx;
			// 	ball4.y += ball4.vy;
				
			// 	if (ball4.y + ball4.r > canvasLab.height) {
			// 		ball4.vy = -Math.abs(ball4.vy);
			// 	};
				
			// 	if (ball4.y - ball4.r < 0) {
			// 		ball4.vy = Math.abs(ball4.vy);
			// 	};
				
			// 	if (ball4.x + ball4.r > canvasLab.width) {
			// 		ball4.vx = -Math.abs(ball4.vx);
			// 	};
				
			// 	if (ball4.x - ball4.r < 0) {
			// 		ball4.vx = Math.abs(ball4.vx);
			// 	};
		
			// 	ctx.save();
			// 	ctx.translate(ball4.x, ball4.y);
			// 	ctx.fillStyle = "#FF8800";
			// 	ctx.beginPath();
			// 	ctx.arc(0, 0, ball4.r, 0, Math.PI * 2, true);
			// 	ctx.closePath();
			// 	ctx.fill();
			// 	ctx.restore();
				
		 //       }, 1000 / 120)
		        
   //     	};
        		
   // ball5 = {
			// x : 40,
			// y : 190,
			// r : 12,
			// vx : 2,
			// vy : 2.6,
			// plays:setInterval(function() {

			// 	ball5.x += ball5.vx;
			// 	ball5.y += ball5.vy;
				
			// 	if (ball5.y + ball5.r > canvasLab.height) {
			// 		ball5.vy = -Math.abs(ball5.vy);
			// 	};
				
			// 	if (ball5.y - ball5.r < 0) {
			// 		ball5.vy = Math.abs(ball5.vy);
			// 	};
				
			// 	if (ball5.x + ball5.r > canvasLab.width) {
			// 		ball5.vx = -Math.abs(ball5.vx);
			// 	};
				
			// 	if (ball5.x - ball5.r < 0) {
			// 		ball5.vx = Math.abs(ball5.vx);
			// 	};
		
			// 	ctx.save();
			// 	ctx.translate(ball5.x, ball5.y);
			// 	ctx.fillStyle = "#FF8800";
			// 	ctx.beginPath();
			// 	ctx.arc(0, 0, ball5.r, 0, Math.PI * 2, true);
			// 	ctx.closePath();
			// 	ctx.fill();
			// 	ctx.restore();
				
		 //       }, 1000 / 120)
   //     	};
        		
   // ball6 = {
			// x : 120,
			// y : 190,
			// r : 12,
			// vx : -3,
			// vy : 1.9,
			// plays:setInterval(function() {

			// 	ball6.x += ball6.vx;
			// 	ball6.y += ball6.vy;
				
			// 	if (ball6.y + ball6.r > canvasLab.height) {
			// 		ball6.vy = -Math.abs(ball6.vy);
			// 	};
				
			// 	if (ball6.y - ball6.r < 0) {
			// 		ball6.vy = Math.abs(ball6.vy);
			// 	};
				
			// 	if (ball6.x + ball6.r > canvasLab.width) {
			// 		ball6.vx = -Math.abs(ball6.vx);
			// 	};
				
			// 	if (ball6.x - ball6.r < 0) {
			// 		ball6.vx = Math.abs(ball6.vx);
			// 	};
		
			// 	ctx.save();
			// 	ctx.translate(ball6.x, ball6.y);
			// 	ctx.fillStyle = "#FF8800";
			// 	ctx.beginPath();
			// 	ctx.arc(0, 0, ball6.r, 0, Math.PI * 2, true);
			// 	ctx.closePath();
			// 	ctx.fill();
			// 	ctx.restore();
				
		 //       }, 1000 / 120)
		        
   //     	};
   
   //  ball7 = {
			// x : 70,
			// y : 190,
			// r : 12,
			// vx : -1,
			// vy : 3.5,
			// plays:function () {
				
			// 	setInterval(function() {

			// 	ball7.x += ball7.vx;
			// 	ball7.y += ball7.vy;
				
			// 	if (ball7.y + ball7.r > canvasLab.height) {
			// 		ball7.vy = -Math.abs(ball7.vy);
			// 	};
				
			// 	if (ball7.y - ball7.r < 0) {
			// 		ball7.vy = Math.abs(ball7.vy);
			// 	};
				
			// 	if (ball7.x + ball7.r > canvasLab.width) {
			// 		ball7.vx = -Math.abs(ball7.vx);
			// 	};
				
			// 	if (ball7.x - ball7.r < 0) {
			// 		ball7.vx = Math.abs(ball7.vx);
			// 	};
		
			// 	ctx.save();
			// 	ctx.translate(ball7.x, ball7.y);
			// 	ctx.fillStyle = "#FF8800";
			// 	ctx.beginPath();
			// 	ctx.arc(0, 0, ball7.r, 0, Math.PI * 2, true);
			// 	ctx.closePath();
			// 	ctx.fill();
			// 	ctx.restore();
				
		 //       }, 1000 / 120)
		        
			// } 
		        
   //     	}; 
        		
   // ball8 = {
			// x : 30,
			// y : 190,
			// r : 12,
			// vx : 1,
			// vy : 2.2,
			// plays:setInterval(function() {

			// 	ball8.x += ball8.vx;
			// 	ball8.y += ball8.vy;
				
			// 	if (ball8.y + ball8.r > canvasLab.height) {
			// 		ball8.vy = -Math.abs(ball8.vy);
			// 	};
				
			// 	if (ball8.y - ball8.r < 0) {
			// 		ball8.vy = Math.abs(ball8.vy);
			// 	};
				
			// 	if (ball8.x + ball8.r > canvasLab.width) {
			// 		ball8.vx = -Math.abs(ball8.vx);
			// 	};
				
			// 	if (ball8.x - ball8.r < 0) {
			// 		ball8.vx = Math.abs(ball8.vx);
			// 	};
		
			// 	ctx.save();
			// 	ctx.translate(ball8.x, ball8.y);
			// 	ctx.fillStyle = "#FF8800";
			// 	ctx.beginPath();
			// 	ctx.arc(0, 0, ball8.r, 0, Math.PI * 2, true);
			// 	ctx.closePath();
			// 	ctx.fill();
			// 	ctx.restore();
				
		 //       }, 1000 / 120)
		        
   //     	}; 
        		
   // ball9 = {
			// x : 110,
			// y : 190,
			// r : 12,
			// vx : 3,
			// vy : 1.6,
			// plays:setInterval(function() {

			// 	ball9.x += ball9.vx;
			// 	ball9.y += ball9.vy;
				
			// 	if (ball9.y + ball9.r > canvasLab.height) {
			// 		ball9.vy = -Math.abs(ball9.vy);
			// 	};
				
			// 	if (ball9.y - ball9.r < 0) {
			// 		ball9.vy = Math.abs(ball9.vy);
			// 	};
				
			// 	if (ball9.x + ball9.r > canvasLab.width) {
			// 		ball9.vx = -Math.abs(ball9.vx);
			// 	};
				
			// 	if (ball9.x - ball9.r < 0) {
			// 		ball9.vx = Math.abs(ball9.vx);
			// 	};
		
			// 	ctx.save();
			// 	ctx.translate(ball9.x, ball9.y);
			// 	ctx.fillStyle = "#FF8800";
			// 	ctx.beginPath();
			// 	ctx.arc(0, 0, ball9.r, 0, Math.PI * 2, true);
			// 	ctx.closePath();
			// 	ctx.fill();
			// 	ctx.restore();
				
		 //       }, 1000 / 120)
			
   //     	 };
        		
   // ball10 = {
			// x : 50,
			// y : 190,
			// r : 12,
			// vx : 3,
			// vy : 3,
			// plays:setInterval(function() {

			// 	ball10.x += ball10.vx;
			// 	ball10.y += ball10.vy;
				
			// 	if (ball10.y + ball10.r > canvasLab.height) {
			// 		ball10.vy = -Math.abs(ball10.vy);
			// 	};
				
			// 	if (ball10.y - ball10.r < 0) {
			// 		ball10.vy = Math.abs(ball10.vy);
			// 	};
				
			// 	if (ball10.x + ball10.r > canvasLab.width) {
			// 		ball10.vx = -Math.abs(ball10.vx);
			// 	};
				
			// 	if (ball10.x - ball10.r < 0) {
			// 		ball10.vx = Math.abs(ball10.vx);
			// 	};
		
			// 	ctx.save();
			// 	ctx.translate(ball10.x, ball10.y);
			// 	ctx.fillStyle = "#FF8800";
			// 	ctx.beginPath();
			// 	ctx.arc(0, 0, ball10.r, 0, Math.PI * 2, true);
			// 	ctx.closePath();
			// 	ctx.fill();
			// 	ctx.restore();
				
		 //       }, 1000 / 120)
		        
   //     	};
        	
   // ball11 = {
			// x : 100,
			// y : 190,
			// r : 12,
			// vx : 2,
			// vy : 3.2,
			// plays:setInterval(function() {

			// 	ball11.x += ball11.vx;
			// 	ball11.y += ball11.vy;
				
			// 	if (ball11.y + ball11.r > canvasLab.height) {
			// 		ball11.vy = -Math.abs(ball11.vy);
			// 	};
				
			// 	if (ball11.y - ball11.r < 0) {
			// 		ball11.vy = Math.abs(ball11.vy);
			// 	};
				
			// 	if (ball11.x + ball11.r > canvasLab.width) {
			// 		ball11.vx = -Math.abs(ball11.vx);
			// 	};
				
			// 	if (ball11.x - ball11.r < 0) {
			// 		ball11.vx = Math.abs(ball11.vx);
			// 	};
		
			// 	ctx.save();
			// 	ctx.translate(ball11.x, ball11.y);
			// 	ctx.fillStyle = "#FF8800";
			// 	ctx.beginPath();
			// 	ctx.arc(0, 0, ball11.r, 0, Math.PI * 2, true);
			// 	ctx.closePath();
			// 	ctx.fill();
			// 	ctx.restore();
				
		 //       }, 1000 / 120)
        			
   //     	};
        		
   // ball12 = {
			// x : 180,
			// y : 190,
			// r : 12,
			// vx : 3,
			// vy : 1.8,
			// plays:setInterval(function() {

			// 	ball12.x += ball12.vx;
			// 	ball12.y += ball12.vy;
				
			// 	if (ball12.y + ball12.r > canvasLab.height) {
			// 		ball12.vy = -Math.abs(ball12.vy);
			// 	};
				
			// 	if (ball12.y - ball12.r < 0) {
			// 		ball12.vy = Math.abs(ball12.vy);
			// 	};
				
			// 	if (ball12.x + ball12.r > canvasLab.width) {
			// 		ball12.vx = -Math.abs(ball12.vx);
			// 	};
				
			// 	if (ball13.x - ball13.r < 0) {
			// 		ball13.vx = Math.abs(ball13.vx);
			// 	};
		
			// 	ctx.save();
			// 	ctx.translate(ball13.x, ball13.y);
			// 	ctx.fillStyle = "#FF8800";
			// 	ctx.beginPath();
			// 	ctx.arc(0, 0, ball13.r, 0, Math.PI * 2, true);
			// 	ctx.closePath();
			// 	ctx.fill();
			// 	ctx.restore();
				
		 //       }, 1000 / 120)
			
   // 		};
    		
   // ball13 = {
			// x : 80,
			// y : 190,
			// r : 12,
			// vx : 1,
			// vy : 1.7,
			// plays:setInterval(function() {

			// 	ball13.x += ball13.vx;
			// 	ball13.y += ball13.vy;
				
			// 	if (ball13.y + ball13.r > canvasLab.height) {
			// 		ball13.vy = -Math.abs(ball13.vy);
			// 	};
				
			// 	if (ball13.y - ball13.r < 0) {
			// 		ball13.vy = Math.abs(ball13.vy);
			// 	};
				
			// 	if (ball13.x + ball13.r > canvasLab.width) {
			// 		ball13.vx = -Math.abs(ball13.vx);
			// 	};
				
			// 	if (ball13.x - ball13.r < 0) {
			// 		ball13.vx = Math.abs(ball13.vx);
			// 	};
		
			// 	ctx.save();
			// 	ctx.translate(ball13.x, ball13.y);
			// 	ctx.fillStyle = "#FF8800";
			// 	ctx.beginPath();
			// 	ctx.arc(0, 0, ball13.r, 0, Math.PI * 2, true);
			// 	ctx.closePath();
			// 	ctx.fill();
			// 	ctx.restore();
				
		 //       }, 1000 / 120)
        			
   //     	};    
        		
   // ball14 = {
			// x : 60,
			// y : 190,
			// r : 12,
			// vx : -2,
			// vy : 2.4,
			// plays:setInterval(function() {

			// 	ball14.x += ball14.vx;
			// 	ball14.y += ball14.vy;
				
			// 	if (ball14.y + ball14.r > canvasLab.height) {
			// 		ball14.vy = -Math.abs(ball14.vy);
			// 	};
				
			// 	if (ball14.y - ball14.r < 0) {
			// 		ball14.vy = Math.abs(ball14.vy);
			// 	};
				
			// 	if (ball14.x + ball14.r > canvasLab.width) {
			// 		ball14.vx = -Math.abs(ball14.vx);
			// 	};
				
			// 	if (ball14.x - ball14.r < 0) {
			// 		ball14.vx = Math.abs(ball14.vx);
			// 	};
		
			// 	ctx.save();
			// 	ctx.translate(ball14.x, ball14.y);
			// 	ctx.fillStyle = "#FF8800";
			// 	ctx.beginPath();
			// 	ctx.arc(0, 0, ball14.r, 0, Math.PI * 2, true);
			// 	ctx.closePath();
			// 	ctx.fill();
			// 	ctx.restore();
				
		 //       }, 1000 / 120)
			
			// };
			
   // ball15 = {
			// x : 130,
			// y : 190,
			// r : 12,
			// vx : -1,
			// vy : 2.8,
			// plays:setInterval(function() {

			// 	ball15.x += ball15.vx;
			// 	ball15.y += ball15.vy;
				
			// 	if (ball15.y + ball15.r > canvasLab.height) {
			// 		ball15.vy = -Math.abs(ball15.vy);
			// 	};
				
			// 	if (ball15.y - ball15.r < 0) {
			// 		ball15.vy = Math.abs(ball15.vy);
			// 	};
				
			// 	if (ball15.x + ball15.r > canvasLab.width) {
			// 		ball15.vx = -Math.abs(ball15.vx);
			// 	};
				
			// 	if (ball15.x - ball15.r < 0) {
			// 		ball15.vx = Math.abs(ball15.vx);
			// 	};
		
			// 	ctx.save();
			// 	ctx.translate(ball15.x, ball15.y);
			// 	ctx.fillStyle = "#FF8800";
			// 	ctx.beginPath();
			// 	ctx.arc(0, 0, ball15.r, 0, Math.PI * 2, true);
			// 	ctx.closePath();
			// 	ctx.fill();
			// 	ctx.restore();
				
		 //       }, 1000 / 120)
			
   //     	};
    
 //   setInterval(function() {

	// 	// Clear display
	// 	ctx.save();
	// 	ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
	// 	ctx.fillRect(0, 0, canvasLab.width, canvasLab.height);
	// 	ctx.restore();

	// 	//apply velocity to position (vx -> x)
	// 	ball1.x += ball1.vx;
	// 	ball1.y += ball1.vy;
		
		
	// 	if (ball1.y + ball1.r > canvasLab.height) {
	// 		ball1.vy = -Math.abs(ball1.vy);
	// 	};
		
	// 	if (ball1.y - ball1.r < 0) {
	// 		ball1.vy = Math.abs(ball1.vy);
	// 	};
		
	// 	if (ball1.x + ball1.r > canvasLab.width) {
	// 		ball1.vx = -Math.abs(ball1.vx);
	// 	};
		
	// 	if (ball1.x - ball1.r < 0) {
	// 		ball1.vx = Math.abs(ball1.vx);
	// 	};

	// 	// Draw ball
	// 	ctx.save();
	// 	ctx.translate(ball1.x, ball1.y);
	// 	ctx.fillStyle = "#FF8800";
	// 	ctx.beginPath();
	// 	ctx.arc(0, 0, ball1.r, 0, Math.PI * 2, true);
	// 	ctx.closePath();
	// 	ctx.fill();
	// 	ctx.restore();
		
	// 	ball2.x += ball2.vx;
	// 	ball2.y += ball2.vy;
		
		
	// 	if (ball2.y + ball2.r > canvasLab.height) {
	// 		ball2.vy = -Math.abs(ball2.vy);
	// 	};
		
	// 	if (ball2.y - ball2.r < 0) {
	// 		ball2.vy = Math.abs(ball2.vy);
	// 	};
		
	// 	if (ball2.x + ball2.r > canvasLab.width) {
	// 		ball2.vx = -Math.abs(ball2.vx);
	// 	};
		
	// 	if (ball2.x - ball2.r < 0) {
	// 		ball2.vx = Math.abs(ball2.vx);
	// 	};

		
	// 	ctx.save();
	// 	ctx.translate(ball2.x, ball2.y);
	// 	ctx.fillStyle = "#FF8800";
	// 	ctx.beginPath();
	// 	ctx.arc(0, 0, ball2.r, 0, Math.PI * 2, true);
	// 	ctx.closePath();
	// 	ctx.fill();
	// 	ctx.restore();
		
	// 	ball3.x += ball3.vx;
	// 	ball3.y += ball3.vy;
		
		
	// 	if (ball3.y + ball3.r > canvasLab.height) {
	// 		ball3.vy = -Math.abs(ball3.vy);
	// 	};
		
	// 	if (ball3.y - ball3.r < 0) {
	// 		ball3.vy = Math.abs(ball3.vy);
	// 	};
		
	// 	if (ball3.x + ball3.r > canvasLab.width) {
	// 		ball3.vx = -Math.abs(ball3.vx);
	// 	};
		
	// 	if (ball3.x - ball3.r < 0) {
	// 		ball3.vx = Math.abs(ball3.vx);
	// 	};

		
	// 	ctx.save();
	// 	ctx.translate(ball3.x, ball3.y);
	// 	ctx.fillStyle = "#FF8800";
	// 	ctx.beginPath();
	// 	ctx.arc(0, 0, ball3.r, 0, Math.PI * 2, true);
	// 	ctx.closePath();
	// 	ctx.fill();
	// 	ctx.restore();
		
	// 	ball4.x += ball4.vx;
	// 	ball4.y += ball4.vy;
		
		
	// 	if (ball4.y + ball4.r > canvasLab.height) {
	// 		ball4.vy = -Math.abs(ball4.vy);
	// 	};
		
	// 	if (ball4.y - ball4.r < 0) {
	// 		ball4.vy = Math.abs(ball4.vy);
	// 	};
		
	// 	if (ball4.x + ball4.r > canvasLab.width) {
	// 		ball4.vx = -Math.abs(ball4.vx);
	// 	};
		
	// 	if (ball4.x - ball4.r < 0) {
	// 		ball4.vx = Math.abs(ball4.vx);
	// 	};

		
	// 	ctx.save();
	// 	ctx.translate(ball4.x, ball4.y);
	// 	ctx.fillStyle = "#FF8800";
	// 	ctx.beginPath();
	// 	ctx.arc(0, 0, ball4.r, 0, Math.PI * 2, true);
	// 	ctx.closePath();
	// 	ctx.fill();
	// 	ctx.restore();
		
	// 	ball5.x += ball5.vx;
	// 	ball5.y += ball5.vy;
		
		
	// 	if (ball5.y + ball5.r > canvasLab.height) {
	// 		ball5.vy = -Math.abs(ball5.vy);
	// 	};
		
	// 	if (ball5.y - ball5.r < 0) {
	// 		ball5.vy = Math.abs(ball5.vy);
	// 	};
		
	// 	if (ball5.x + ball5.r > canvasLab.width) {
	// 		ball5.vx = -Math.abs(ball5.vx);
	// 	};
		
	// 	if (ball5.x - ball5.r < 0) {
	// 		ball5.vx = Math.abs(ball5.vx);
	// 	};

		
	// 	ctx.save();
	// 	ctx.translate(ball5.x, ball5.y);
	// 	ctx.fillStyle = "#FF8800";
	// 	ctx.beginPath();
	// 	ctx.arc(0, 0, ball5.r, 0, Math.PI * 2, true);
	// 	ctx.closePath();
	// 	ctx.fill();
	// 	ctx.restore();
		
	// 	ball6.x += ball6.vx;
	// 	ball6.y += ball6.vy;
		
		
	// 	if (ball6.y + ball6.r > canvasLab.height) {
	// 		ball6.vy = -Math.abs(ball6.vy);
	// 	};
		
	// 	if (ball6.y - ball6.r < 0) {
	// 		ball6.vy = Math.abs(ball6.vy);
	// 	};
		
	// 	if (ball6.x + ball6.r > canvasLab.width) {
	// 		ball6.vx = -Math.abs(ball6.vx);
	// 	};
		
	// 	if (ball6.x - ball6.r < 0) {
	// 		ball6.vx = Math.abs(ball6.vx);
	// 	};

		
	// 	ctx.save();
	// 	ctx.translate(ball6.x, ball6.y);
	// 	ctx.fillStyle = "#FF8800";
	// 	ctx.beginPath();
	// 	ctx.arc(0, 0, ball6.r, 0, Math.PI * 2, true);
	// 	ctx.closePath();
	// 	ctx.fill();
	// 	ctx.restore();
		
	// 	ball7.x += ball7.vx;
	// 	ball7.y += ball7.vy;
		
		
	// 	if (ball7.y + ball7.r > canvasLab.height) {
	// 		ball7.vy = -Math.abs(ball7.vy);
	// 	};
		
	// 	if (ball7.y - ball7.r < 0) {
	// 		ball7.vy = Math.abs(ball7.vy);
	// 	};
		
	// 	if (ball7.x + ball7.r > canvasLab.width) {
	// 		ball7.vx = -Math.abs(ball7.vx);
	// 	};
		
	// 	if (ball7.x - ball7.r < 0) {
	// 		ball7.vx = Math.abs(ball7.vx);
	// 	};

		
	// 	ctx.save();
	// 	ctx.translate(ball7.x, ball7.y);
	// 	ctx.fillStyle = "#FF8800";
	// 	ctx.beginPath();
	// 	ctx.arc(0, 0, ball7.r, 0, Math.PI * 2, true);
	// 	ctx.closePath();
	// 	ctx.fill();
	// 	ctx.restore();
		
	// 	ball8.x += ball8.vx;
	// 	ball8.y += ball8.vy;
		
		
	// 	if (ball8.y + ball8.r > canvasLab.height) {
	// 		ball8.vy = -Math.abs(ball8.vy);
	// 	};
		
	// 	if (ball8.y - ball8.r < 0) {
	// 		ball8.vy = Math.abs(ball8.vy);
	// 	};
		
	// 	if (ball8.x + ball8.r > canvasLab.width) {
	// 		ball8.vx = -Math.abs(ball8.vx);
	// 	};
		
	// 	if (ball8.x - ball8.r < 0) {
	// 		ball8.vx = Math.abs(ball8.vx);
	// 	};

		
	// 	ctx.save();
	// 	ctx.translate(ball8.x, ball8.y);
	// 	ctx.fillStyle = "#FF8800";
	// 	ctx.beginPath();
	// 	ctx.arc(0, 0, ball5.r, 0, Math.PI * 2, true);
	// 	ctx.closePath();
	// 	ctx.fill();
	// 	ctx.restore();
		
	// 	ball9.x += ball9.vx;
	// 	ball9.y += ball9.vy;
		
		
	// 	if (ball9.y + ball9.r > canvasLab.height) {
	// 		ball9.vy = -Math.abs(ball9.vy);
	// 	};
		
	// 	if (ball9.y - ball9.r < 0) {
	// 		ball9.vy = Math.abs(ball9.vy);
	// 	};
		
	// 	if (ball9.x + ball9.r > canvasLab.width) {
	// 		ball9.vx = -Math.abs(ball9.vx);
	// 	};
		
	// 	if (ball9.x - ball9.r < 0) {
	// 		ball9.vx = Math.abs(ball9.vx);
	// 	};

		
	// 	ctx.save();
	// 	ctx.translate(ball9.x, ball9.y);
	// 	ctx.fillStyle = "#FF8800";
	// 	ctx.beginPath();
	// 	ctx.arc(0, 0, ball9.r, 0, Math.PI * 2, true);
	// 	ctx.closePath();
	// 	ctx.fill();
	// 	ctx.restore();
		
	// 	ball10.x += ball10.vx;
	// 	ball10.y += ball10.vy;
		
		
	// 	if (ball10.y + ball10.r > canvasLab.height) {
	// 		ball10.vy = -Math.abs(ball10.vy);
	// 	};
		
	// 	if (ball10.y - ball10.r < 0) {
	// 		ball10.vy = Math.abs(ball10.vy);
	// 	};
		
	// 	if (ball10.x + ball10.r > canvasLab.width) {
	// 		ball10.vx = -Math.abs(ball10.vx);
	// 	};
		
	// 	if (ball10.x - ball10.r < 0) {
	// 		ball10.vx = Math.abs(ball10.vx);
	// 	};

		
	// 	ctx.save();
	// 	ctx.translate(ball10.x, ball10.y);
	// 	ctx.fillStyle = "#FF8800";
	// 	ctx.beginPath();
	// 	ctx.arc(0, 0, ball10.r, 0, Math.PI * 2, true);
	// 	ctx.closePath();
	// 	ctx.fill();
	// 	ctx.restore();
		
	// 	ball11.x += ball11.vx;
	// 	ball11.y += ball11.vy;
		
		
	// 	if (ball11.y + ball11.r > canvasLab.height) {
	// 		ball11.vy = -Math.abs(ball11.vy);
	// 	};
		
	// 	if (ball11.y - ball11.r < 0) {
	// 		ball11.vy = Math.abs(ball11.vy);
	// 	};
		
	// 	if (ball11.x + ball11.r > canvasLab.width) {
	// 		ball11.vx = -Math.abs(ball11.vx);
	// 	};
		
	// 	if (ball11.x - ball11.r < 0) {
	// 		ball11.vx = Math.abs(ball11.vx);
	// 	};

		
	// 	ctx.save();
	// 	ctx.translate(ball11.x, ball11.y);
	// 	ctx.fillStyle = "#FF8800";
	// 	ctx.beginPath();
	// 	ctx.arc(0, 0, ball11.r, 0, Math.PI * 2, true);
	// 	ctx.closePath();
	// 	ctx.fill();
	// 	ctx.restore();
		
	// 	ball12.x += ball12.vx;
	// 	ball12.y += ball12.vy;
		
		
	// 	if (ball12.y + ball12.r > canvasLab.height) {
	// 		ball12.vy = -Math.abs(ball12.vy);
	// 	};
		
	// 	if (ball12.y - ball12.r < 0) {
	// 		ball12.vy = Math.abs(ball12.vy);
	// 	};
		
	// 	if (ball12.x + ball12.r > canvasLab.width) {
	// 		ball12.vx = -Math.abs(ball12.vx);
	// 	};
		
	// 	if (ball12.x - ball12.r < 0) {
	// 		ball12.vx = Math.abs(ball12.vx);
	// 	};

		
	// 	ctx.save();
	// 	ctx.translate(ball12.x, ball12.y);
	// 	ctx.fillStyle = "#FF8800";
	// 	ctx.beginPath();
	// 	ctx.arc(0, 0, ball12.r, 0, Math.PI * 2, true);
	// 	ctx.closePath();
	// 	ctx.fill();
	// 	ctx.restore();
		
	// 	ball13.x += ball13.vx;
	// 	ball13.y += ball13.vy;
		
		
	// 	if (ball13.y + ball13.r > canvasLab.height) {
	// 		ball13.vy = -Math.abs(ball13.vy);
	// 	};
		
	// 	if (ball13.y - ball13.r < 0) {
	// 		ball13.vy = Math.abs(ball13.vy);
	// 	};
		
	// 	if (ball13.x + ball13.r > canvasLab.width) {
	// 		ball13.vx = -Math.abs(ball13.vx);
	// 	};
		
	// 	if (ball13.x - ball13.r < 0) {
	// 		ball13.vx = Math.abs(ball13.vx);
	// 	};

		
	// 	ctx.save();
	// 	ctx.translate(ball13.x, ball13.y);
	// 	ctx.fillStyle = "#FF8800";
	// 	ctx.beginPath();
	// 	ctx.arc(0, 0, ball13.r, 0, Math.PI * 2, true);
	// 	ctx.closePath();
	// 	ctx.fill();
	// 	ctx.restore();
		
	// 	ball14.x += ball14.vx;
	// 	ball14.y += ball14.vy;
		
		
	// 	if (ball14.y + ball14.r > canvasLab.height) {
	// 		ball14.vy = -Math.abs(ball14.vy);
	// 	};
		
	// 	if (ball14.y - ball14.r < 0) {
	// 		ball14.vy = Math.abs(ball14.vy);
	// 	};
		
	// 	if (ball14.x + ball14.r > canvasLab.width) {
	// 		ball14.vx = -Math.abs(ball14.vx);
	// 	};
		
	// 	if (ball14.x - ball14.r < 0) {
	// 		ball14.vx = Math.abs(ball14.vx);
	// 	};

		
	// 	ctx.save();
	// 	ctx.translate(ball14.x, ball14.y);
	// 	ctx.fillStyle = "#FF8800";
	// 	ctx.beginPath();
	// 	ctx.arc(0, 0, ball14.r, 0, Math.PI * 2, true);
	// 	ctx.closePath();
	// 	ctx.fill();
	// 	ctx.restore();
		
	// 	ball15.x += ball15.vx;
	// 	ball15.y += ball15.vy;
		
		
	// 	if (ball15.y + ball15.r > canvasLab.height) {
	// 		ball15.vy = -Math.abs(ball15.vy);
	// 	};
		
	// 	if (ball15.y - ball15.r < 0) {
	// 		ball15.vy = Math.abs(ball15.vy);
	// 	};
		
	// 	if (ball15.x + ball15.r > canvasLab.width) {
	// 		ball15.vx = -Math.abs(ball15.vx);
	// 	};
		
	// 	if (ball15.x - ball15.r < 0) {
	// 		ball15.vx = Math.abs(ball15.vx);
	// 	};

		
	// 	ctx.save();
	// 	ctx.translate(ball15.x, ball15.y);
	// 	ctx.fillStyle = "#FF8800";
	// 	ctx.beginPath();
	// 	ctx.arc(0, 0, ball15.r, 0, Math.PI * 2, true);
	// 	ctx.closePath();
	// 	ctx.fill();
	// 	ctx.restore();

	// }, 1000 / 120);

        		
    });