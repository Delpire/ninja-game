
var Background = function(){

	this.tilesheet = [];
	
	//TEST CODE
	// This should be made outside of code and read in.
	for(var y = 0; y < HEIGHT / TILESIZE; y++){

		this.tilesheet.push([]);

		for(var x = 0; x < WIDTH / TILESIZE; x++){

			this.tilesheet[y][x] = 0;

			if( y == HEIGHT / TILESIZE - 1)
				this.tilesheet[y][x] = 1;
		}
	}
	// This is the end of testing code.

}

Background.prototype = {

	render: function(context) {
		//TEST CODE
		// This should be made outside of code and read in.
		for(var y = 0; y < HEIGHT / TILESIZE; y++){

			for(var x = 0; x < WIDTH / TILESIZE; x++){
				context.save();
				context.drawImage(sprite_sheet, 224 + TILESIZE * this.tilesheet[y][x] , 64, TILESIZE, TILESIZE, x * TILESIZE, y * TILESIZE, TILESIZE, TILESIZE);
				context.restore();
			}
		}
		// This is the end of testing code.
	},

  //Checks if there is a collision with a world tile.
  //Returns an index indicating collision type.
  //0 - Indicates no collision.
  //1 - Indicates safe collision with ground.
  //2 - Indicates unsafe collision.
  checkCollision: function(x, y){
    
    tile_x = x / TILESIZE;
    tile_y = y / TILESIZE;
    
    
    
    
  }
	
}