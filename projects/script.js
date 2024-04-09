var projects = [{
	"head": "Laser Drawing",
	"text": "Using lasers, this device can draw anything on the wall. To view the image, a photo is taken with a long exposure camera. It also has an ultrasonic sensor in front to measure the distance from the wall, ensuring accurate scaling regardless of distance.",
	"img": "./banners/laser-project.jpeg"
}, {
	"head": "Minecraft Server Finder",
	"text": "Ever felt so bored on your Minecraft server that you wanted to join a random one? Fear no more, the mc-pinger is here. It scans Minecraft servers hosted by ngrok, a popular port forwarding tool, based on server versions and installed datapacks.",
	"img": "./banners/minecraft-server-finder.png"
}, {
	"head": "Ms teams attendance",
	"text": "I made this cool Google thingy for my online classes. Now, I can easily see who's there in Microsoft Teams without any fancy stuff. It's like magic - just a quick peek and I know who's in class!",
	"img": "./banners/mst-attendance.jpg",
}, {
	"head": "Multiplayer Game",
	"text": "This technically challenging project utilizes C++ to handle networking and basic game functions. Players can shoot bullets at each other and have a life system where they can die if shot multiple times. Additionally, I wrote a wrapper library for asio to make it easily usable.",
	"img": "./banners/online-multiplayer.png"
}, {
	"head": "Self-Balancing Robot",
	"text": "A remarkable project where I made a 2-wheeled robot balance itself. Using an MPU6050 to measure and an Arduino to process, along with a PID control loop, it achieves self-balancing. All code was written from scratch and the build quality is exceptional.",
	"img": "./banners/self-balancing-robot-2.jpg"
}, {
	"head": "Games",
	"text": "Alright, so for my school project, I cooked up this Python thingy with a menu where I can play loads of games. And get this – Login acccounts can be created, stored by mysql! Each game is like its own little file, and they pop up on the screen depending on what's in this special folder. It's kinda like having a bunch of game cartridges, but all crammed into one place!",
	"img": "./banners/multi-game-emulator.png"
}, {
	"head": "School election website",
	"text": "I created this website where students can vote for our school's student council. It's pretty cool – everyone logs in using their own register ID. And get this – even when the power went out unexpectedly, no problemo, smooth sailing! It was my first time making a big website from start to finish, and it was awesome!",
	"img": "./banners/school-election-website.jpg"
}, {
	"head": "Twitter Bot",
	"text": "One of the most boring bots I have ever made. Thanks to Elon Musk. I have decided to bury the bot before it reached its full potential.",
	"img": "./banners/twitter-bot.png"
}, {
	"head": "MARIO!",
	"text": "Just a cool game I made from scratch. The world can be changed by the player while gaming. Wrote a game-library that uses SDL for window and image rendering.",
	"img": "./banners/cstm-mario.png"
}, {
	"head": "Discord Bot",
	"text": "One of the most fun bots to play with friends. Its text-to-voice mode is hilarious. Its only purpose was text-to-speech and it performed great.",
	"img": "./banners/discord-bot.png"
}, {
	"head": "Flappy Bird",
	"text": "Implemented using C++, this version includes only bottom pipes, resembling buildings. Experimented with beautifully using the terminal, learned a lot on how terminal itself can be made interactive.",
	"img": "./banners/flappy-bird-terminal.png"
}, {
	"head": "Gesture Detection",
	"text": "From idea to execution, this project is entirely my own creation. You can move balls on the screen just by opening and closing your hands, akin to using AR without glasses.",
	"img": "./banners/gesture-detection.jpg"
}, {
	"head": "E-Cell Website",
	"text": "Created for my college club, E-Cell, in collaboration with another club member. Primarily focused on CSS work, with technical aspects including email verification for KYC and newsletter sign-ups.",
	"link": "https://ecellsastra.org/",
	"img": "./banners/ecell.png"
}, {
	"head": "Daksh Website",
	"text": "A project involving extensive backend work. Features include transaction verification, admin editing capabilities, all dynamically loaded and stored in MongoDB, and hosted by Next.js. A significant real-world application. ",
	"link": "https://daksh.sastra.edu/",
	"img": "./banners/daksh.png"
}]


var elem = document.querySelector(".row")
for (var i = 0; i < projects.length; i++) {
	var clone = elem.cloneNode(true);
	clone.style.display = "flex"
	clone.querySelector(".head").innerHTML = projects[i].head
	clone.querySelector(".text").innerHTML = projects[i].text

	if (projects[i].link) {
		let link = document.createElement("a")
		link.href = projects[i].link
		link.innerHTML = "link"
		link.target = "_blank"
		clone.querySelector(".text").appendChild(link)
	}

	clone.querySelector(".right-img").src = projects[i].img
	elem.after(clone);
}