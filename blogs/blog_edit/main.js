console.log("Wassup inspect element hackers.")

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

document.getElementById("add_text_block").addEventListener("click", () => {
	var blog_content = document.getElementById("blog_content")

	var node = document.createElement("div")

	textarea = document.createElement("textarea")
	textarea.setAttribute("cols", 50)
	textarea.setAttribute("rows", 2)
	node.appendChild(textarea)

	var button = document.createElement("button");
	button.innerHTML = "Delete";
	button.setAttribute("onclick", "this.parentElement.remove()")
	node.appendChild(button);

	blog_content.appendChild(node)
})

document.getElementById("add_image_block").addEventListener("click", () => {
	var blog_content = document.getElementById("blog_content")

	var node = document.createElement("div")

	image = document.createElement("input")
	image.setAttribute("width", 50)
	node.appendChild(image)

	var button = document.createElement("button");
	button.innerHTML = "Delete";
	button.setAttribute("onclick", "this.parentElement.remove()")
	node.appendChild(button);

	blog_content.appendChild(node)
})

routeRequest("POST", '', JSON.stringify({
	'purpose': "blog_view",
	'data': urlParams.get('id')
})).then((res) => {
	document.getElementById("heading").value = res["data"]["heading"]
	document.getElementById("description").value = res["data"]["description"]
	document.getElementById("head_image").value = res["data"]["head_image"]

	var content = JSON.parse(res["data"]["content"])
	for (var i in content) {
		if (content[i]["img"] == undefined) { // its an text
			document.getElementById("add_text_block").click()
			document.getElementById("blog_content").childNodes[document.getElementById("blog_content").childNodes.length - 1].getElementsByTagName("textarea")[0].value = content[i]["text"]
		}
		else {
			document.getElementById("add_image_block").click()
			document.getElementById("blog_content").childNodes[document.getElementById("blog_content").childNodes.length - 1].getElementsByTagName("input")[0].value = content[i]["img"]
		}
	}
})

document.getElementById("submit_blog").addEventListener("click", () => {
	const d = new Date();

	var heading = document.getElementById("heading").value
	var image = document.getElementById("head_image").value
	var description = document.getElementById("description").value
	var content = document.getElementById("blog_content").childNodes
	var blog = {}

	blog["heading"] = heading
	blog["image"] = image
	blog["description"] = description
	blog["time_stamp"] = d.getFullYear() + '/' + d.getMonth() + '/' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ":10" // "2000-10-16 10:11:10"
	blog["content"] = []
	blog["id"] = urlParams.get('id');

	for (var i = 1; i < content.length; i++) {
		if (content[i].getElementsByTagName("textarea").length == 0) // its image content
			blog["content"].push({
				"img": content[i].getElementsByTagName("input")[0].value
			})
		else
			blog["content"].push({
				"text": content[i].getElementsByTagName("textarea")[0].value
			})
	}
	blog.content = JSON.stringify(blog.content)

	routeRequest("POST", '', JSON.stringify({
		"purpose": "blog_edit",
		"data": blog
	})).then((res) => {
		window.location.pathname="/blogs/"
	})
})