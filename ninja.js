// Size of a type.
TILESIZE = 32;

// Constants for Ninja's Animation Frames.
NINJA_ANIMATIONS = {

	run: {frames:7, x:0, y:64},

	jumpRight: {frames:1, x:32, y:128},

	fallRight: {frames:1, x:64, y:128},

	jumpLeft: {frames:1, x:96, y:128},

	fallLeft: {frames:1, x:128, y:128},

	attack: {frames:4, x:32 , y:192 }
}

var Ninja = function(state){
	
	this.state = state;

	this.model_x = NINJA_ANIMATIONS[state].x;
	this.model_y = NINJA_ANIMATIONS[state].y;

	this.world_x = 0;
	this.world_y = 13 * TILESIZE;

	this.velocity_x = 0;
	this.velocity_y = 0;

	this.world_y_init = this.world_y;

	this.animation_pointer = 0;

	this.jumpElapsedTime = -1;

}

Ninja.prototype = {
	
	update: function(elapsedTime, inputState){

    var new_y = this.world_y;

		if(this.jumpElapsedTime != -1)
			this.jumpElapsedTime += (elapsedTime / 1000);

		if(inputState.space){
			this.velocity_y = -384;
			this.jumpElapsedTime = 0;
			this.world_y_init = this.world_y;
		}

		if(this.velocity_y !== 0){
			this.new_y = this.world_y_init + this.velocity_y * (this.jumpElapsedTime) + 0.5 * 768 * (this.jumpElapsedTime) * (this.jumpElapsedTime);
		}
		
		this.background.checkCollision();
		


		//this.velocity_y = 0;
 
	},

	render: function(context) {
	
		context.save();
		context.drawImage(sprite_sheet, this.model_x, this.model_y, TILESIZE, TILESIZE, this.world_x, this.world_y, TILESIZE, TILESIZE);
		context.restore();

		this.animation_pointer = (this.animation_pointer + 1) % NINJA_ANIMATIONS[this.state].frames;

		this.model_x = NINJA_ANIMATIONS[this.state].x + this.animation_pointer * TILESIZE;
	}
}