var projects = [{
	"head": "Laser Drawing",
	"text": "Utilizing lasers, this device can draw anything on a wall. To view the image, a photo is taken with a long exposure camera. Additionally, it incorporates an ultrasonic sensor in front to measure the distance from the wall, ensuring accurate scaling regardless of distance.",
	"img": "./banners/laser-project.jpeg"
}, {
	"head": "Minecraft Server Finder",
	"text": "Ever felt bored on your Minecraft server and wished to join a random one? Fear no more, the mc-pinger is here. It scans Minecraft servers hosted by ngrok, a popular port forwarding tool, based on server versions and installed datapacks.",
	"img": "./banners/minecraft-server-finder.png"
}, {
	"head": "Microsoft Teams Attendance",
	"text": "I developed a convenient tool for my online classes using Google technologies. Now, I can easily monitor attendance in Microsoft Teams without any complexity. It's like magic - just a quick peek, and I know who's in class!",
	"img": "./banners/mst-attendance.jpg"
}, {
	"head": "Multiplayer Game",
	"text": "This technically challenging project employs C++ for networking and basic game functions. Players can shoot bullets at each other and have a life system where they can die if shot multiple times. Additionally, I developed a wrapper library for asio to enhance usability.",
	"img": "./banners/online-multiplayer.png"
}, {
	"head": "Self-Balancing Robot",
	"text": "A remarkable project where I created a 2-wheeled robot that can balance itself. Using an MPU6050 for measurement and an Arduino for processing, along with a PID control loop, it achieves self-balancing. All code was written from scratch, and the build quality is exceptional.",
	"img": "./banners/self-balancing-robot-2.jpg"
}, {
	"head": "Games",
	"text": "For a school project, I developed a Python application with a menu offering various games. What's unique is that login accounts can be created and stored using MySQL! Each game is like its own little file, accessible from a central repository. It's akin to having a collection of game cartridges, all conveniently stored in one place!",
	"img": "./banners/multi-game-emulator.png"
}, {
	"head": "School Election Website",
	"text": "I designed and developed a website for facilitating student council elections at our school. It allows students to vote using their unique registration IDs. Even when faced with unexpected power outages, the website operated smoothly. This project marked my first experience creating a comprehensive website from start to finish, and it was truly rewarding!",
	"img": "./banners/school-election-website.jpg"
}, {
	"head": "Twitter Bot",
	"text": "One of the bots I created was inspired by Elon Musk. Although initially promising, I decided to discontinue its development before it reached its full potential.",
	"img": "./banners/twitter-bot.png"
}, {
	"head": "Among Us Bot",
	"text": "I developed a bot to automate tasks in the popular game Among Us. The script automates every task in the default map of the game, enhancing the gaming experience.",
	"img": "./banners/amoungus.jpeg"
}, {
	"head": "Archers Bot",
	"text": "I explored controlling an Android phone with ADB (Android Debug Bridge) and created a bot to automate gameplay in the game Archers. The bot achieved an unreachable high score, surpassing human capabilities.",
	"img": "./banners/archers.png"
}, {
	"head": "MARIO!",
	"text": "I developed a custom game from scratch called 'MARIO!'. Players can dynamically alter the game world while playing. Additionally, I created a game library utilizing SDL for window and image rendering.",
	"img": "./banners/cstm-mario.png"
}, {
	"img": "./banners/arch.png",
	"head": "Arch System",
	"text": "While not technically a project, installing Arch Linux from scratch and configuring it to use as a daily driver was a valuable learning experience. It helped me gain proficiency with Linux and become more comfortable using it. Arch has been my preferred operating system since 2020. So yhea, i use archbtw."
}, {
	"head": "Discord Bot",
	"text": "One of the most enjoyable bots I developed is for use with friends on Discord. Its text-to-voice mode provides endless entertainment. Its sole purpose was text-to-speech conversion, and it performed admirably.",
	"img": "./banners/discord-bot.png"
}, {
	"head": "Flappy Bird",
	"text": "Implemented using C++, this version includes only bottom pipes resembling buildings. I experimented with terminal-based graphics and learned extensively about making the terminal interactive.",
	"img": "./banners/flappy-bird-terminal.png"
}, {
	"head": "Gesture Detection",
	"text": "From conception to execution, this project is entirely my creation. Users can manipulate balls on the screen simply by opening and closing their hands, similar to using AR without glasses.",
	"img": "./banners/gesture-detection.jpg"
}, {
	"head": "E-Cell Website",
	"text": "Developed for my college club, E-Cell, in collaboration with another member. It primarily focused on CSS work, with technical features including email verification for KYC and newsletter sign-ups.",
	"link": "https://ecellsastra.org/",
	"img": "./banners/ecell.png"
}, {
	"head": "Cuckoo & CAPEv2 Sandbox Deployment",
	"text": "While it might seem simple to install two software systems, the deployment of Cuckoo and CAPEv2 was a complex task. The process involved navigating through numerous dependency errors, particularly as both systems rely heavily on Python. The setup required in-depth Linux knowledge, virtual machine configurations, and troubleshooting to ensure both sandboxes ran smoothly and provided reliable malware analysis capabilities. Overcoming these challenges significantly enhanced my technical proficiency in system deployment and management.",
	"img": "./banners/cuckoo.png"
}, {
	"head": "Daksh Website",
	"text": "A project involving extensive backend work, the Daksh website boasts features such as transaction verification and admin editing capabilities. All data is dynamically loaded and stored in MongoDB, and the website is hosted using Next.js. It serves as a significant real-world application.",
	"link": "https://daksh.sastra.edu/",
	"img": "./banners/daksh.png"
}]


var elem = document.querySelector(".row")
for (var i = 0; i < projects.length; i++) {
	var clone = elem.cloneNode(true);
	clone.style.display = "flex"
	clone.id = i
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
