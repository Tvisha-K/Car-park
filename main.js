var canvas = document.getElementById("my_canvas");

pen = canvas.getContext("2d")

car_height = 200;

car_width = 100;

//Give specific height and width to the car image

background_image = "parking.jpg";

car_img = "car.png";

car_x = 420;

car_y = 100;

//Set initial position for a car image.

function add(){

	background_image_tag = new Image();

	background_image_tag.onload = upload_background;

	background_image_tag.src=background_image;

	car_img_tag = new Image();

	car_img_tag.onload = upload_car;

    car_img_tag.src = car_img;
	
}

function upload_background() {

	pen.drawImage(background_image_tag,0,0,canvas.width,canvas.height);

}

function upload_car() {
	
	pen.drawImage(car_img_tag,car_x,car_y,car_width,car_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (car_y >= 0){

        car_y = car_y - 10;

        upload_background();

        upload_car();

    }
}

function down()
{
	if (car_y <= 500){

        car_y = car_y + 10;

        upload_background();

        upload_car();

    }
}

function left()
{
	if (car_x >= 0){

        car_x = car_x - 10;

        upload_background();

        upload_car();

    }
}

function right()
{
	if (car_x <= 700){

        car_x = car_x + 10;

        upload_background();

        upload_car();

    }
}
