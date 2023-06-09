var projects = [{
	head: "Laser drawing",
	text: "With lasers, this can draw anything on the wall, to view the img, the photo is taken with long exposure camera. It also has a ultrasonic sensor in fron to measure the distance from wall, so it can accurately draw the scale of image, regardless of distance from wall.",
	img: "./proofs/laser_project.jpeg"
}, {
	head: "Minecraft server finder",
	text: "You ever felt sooo bored in your minecraft server that you wanted to join some random server. Fear no more, the mc-pinger is here. It will scan minecraft servers hostel by ngrok, a popular port forwarding tool. It can scan based on server versions, datapacks installed etc.",
	img: "./proofs/minecraft_server_finder.png"
}, {
	head: "Multiplayer game",
	text: "This is not much new, but just technically kinda challenging since used c++ to handle networking and the basic game functions. Can shoot bullets at each other, and has life system where you can die if shot many times. Nothing new, but wrote a wrapper library for asio to make it easily usable for me.",
	img: "./proofs/online_multiplayer.png"
}, {
	head: "Self balancing robot",
	text: "SUCH A COOL PROJECT, made a 2 wheeled robot balance itself, using a mpu6050 to measure and gle and arduino to do brain stuff, using a PID control loop, it can balance itself. All code from scratch and very noice build 9/10 i give it.",
	img: "./proofs/self_balancing_robot_2.jpg"
}, {
	head: "Twitter bot",
	text: "One of the most boring bot i have ever made. Thanks to elom musk. I have decided to burry the bot before it reached its fukl potential.",
	img: "./proofs/twitter_bot.png"
}, {
	head: "MARIO!",
	text: "Just a cool freaking game. So decided to make it myself. The world can be changed by the player while gaming, and yes ik its not even close to a clone, but this is just a programming challenge-ish. Wrote a game-library (borderline-can-be-called-that) that uses SDL for the window and image rendering stuff.",
	img: "./proofs/cstm_mario.png"
}, {
	head: "Discord bot",
	text: "One of the most fun bot to play with friends. Its text to voice mode is funny as hell. And had many other functions, but this one was overused too much that the others seem pointless. Its only purpose was to text-to-speech and it did it great. RIP o7.",
	img: "./proofs/discord_bot.png"
}, {
	head: "Flappy bird",
	text: "With only the bottom pipes, so this is more like buildings. But experimented with using the terminal beautifully using c++. Leart a lot on how terminal itself can be made interactive and very intiutivenes?, yes.",
	img: "./proofs/flappy_bird_terminal.png"
}, {
	head: "Gesture detection",
	text: "First thing first, i didnt copy this from anywhere, I did think of it on my own, and created it on my own from scratch. Idea to execution all mine. About the project, you can move the balls on the screen just by opening and closing your hands. Kinda like using ar, but without the glasses.",
	img: "./proofs/gesture_detection.jpg"
}]

var elem = document.querySelector(".row")
for (var i = 0; i < projects.length; i++) {
	var clone = elem.cloneNode(true);
	clone.style.display = "flex"
	clone.querySelector(".head").innerHTML = projects[i].head
	clone.querySelector(".text").innerHTML = projects[i].text
	clone.querySelector(".right-img").src = projects[i].img
	elem.after(clone);
}