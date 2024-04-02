console.log("Wassup inspect element hackers.")

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

routeRequest("POST", '', JSON.stringify({
	'blog_id': urlParams.get('id')
})).then((res) => {
	document.getElementById("heading").innerHTML = res["data"]["heading"]
	document.getElementById("description").innerHTML = res["data"]["description"]
	document.getElementById("time").innerHTML = res["data"]["time_stamp"]

	var blog_content = document.getElementById("blog_content")
	var content = JSON.parse(res["data"]["content"])
	for (var i in content) {
		if (content[i]["img"] == undefined) { /// its a text block
			var node = document.createElement("div")
			textarea = document.createElement("p")

			textarea.innerHTML = content[i]["text"].replace("\n", " <br> ") // \n to <br>

			node.appendChild(textarea)
			blog_content.appendChild(node)
		}
		else {
			var node = document.createElement("div")
			image = document.createElement("img")
			image.setAttribute("src", "/blogs/blog-images/" + content[i]["img"])
			image.setAttribute("height", "75px")
			image.setAttribute("width", "75px")
			node.appendChild(image)
			blog_content.appendChild(node)
		}
	}
})

function nav_go_back() {
	window.location.pathname = "/blogs/"
}