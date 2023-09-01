console.log("Wassup inspect element hackers.")

var server_blogs;;
var is_admin;
var prev_search;

authUserWServer()
	.then((res) => {
		if (!res)
			window.location.pathname = "/restricted/"
	})

routeRequest("POST", '', JSON.stringify({
	'purpose': "blogs_list"
})).then((res) => {
	server_blogs = JSON.parse(res["data"])
	console.log(server_blogs)
	authAdminWServer()
		.then((res) => {
			is_admin = res
			renderBlogs()
		})
})

window.setInterval(() => {
	var input_field = document.getElementById("search_blogs_field").value
	if (input_field != prev_search) {

		document.getElementById("all_blogs").innerHTML = "" // clear all blogs;
		for (var i in server_blogs) {
			if (server_blogs[i].heading.toLowerCase().includes(input_field))
				add_blog(server_blogs[i])

			else if (server_blogs[i].description.toLowerCase().includes(input_field))
				add_blog(server_blogs[i])

			else if (server_blogs[i].content.toLowerCase().includes(input_field))
				add_blog(server_blogs[i])
		}

		prev_search = input_field
	}
}, 200);

function deleteBlog(id) {
	routeRequest("DELETE", '?blog_id=' + id)
		.then((res) => {
			window.location.pathname = "/blogs/"
		})
}

function editBlog(id) {
	window.location.href = window.location.origin + "/blogs/blog_edit?id=" + id
}

function renderBlogs() {
	for (var i in server_blogs)
		add_blog(server_blogs[i])

	if (!is_admin) { // if not admin, hide button
		var new_blog_add = document.getElementById("new_blog_add");
		new_blog_add.style.display = "none"

		var all = document.getElementById("all_blogs")
		for (var blog in all.childNodes) {
			if (all.childNodes[blog].id == "blog_x") {
				all.childNodes[blog].getElementsByTagName("button")[0].style.display = "none"
				all.childNodes[blog].getElementsByTagName("button")[1].style.display = "none"
			}
		}
	}
}

function redir(id) {
	// console.log('"/blogs/blog_view?id=' + id + '"')

}

function add_blog(blog) {
	var blog_x = document.createElement("div");

	var blog_details = document.createElement("div")
	var blog_image = document.createElement("img")
	var blog_heading = document.createElement("div")
	var blog_time = document.createElement("div")
	blog_details.appendChild(blog_image)
	blog_details.appendChild(blog_heading)
	blog_details.appendChild(blog_time)

	var blog_buttons = document.createElement("div")
	var blog_description = document.createElement("span")
	var blog_delete = document.createElement("button")
	var blog_edit = document.createElement("button")
	blog_delete.innerHTML = "Delete"
	blog_edit.innerHTML = "Edit"
	blog_delete.setAttribute("onclick", "deleteBlog(" + blog.id + ")") // stop propog and delete blog trigger
	blog_edit.setAttribute("onclick", "editBlog(" + blog.id + ")") // stop propog and delete blog trigger
	blog_buttons.appendChild(blog_description)
	blog_buttons.appendChild(blog_delete)
	blog_buttons.appendChild(blog_edit)

	blog_heading.innerHTML = blog.heading
	blog_image.setAttribute("src", "/blogs/blog_images/" + blog.head_image)
	blog_time.innerHTML = blog.time_stamp
	blog_description.innerHTML = blog.description

	blog_x.setAttribute("id", "blog_x")
	blog_details.setAttribute("id", "blog_details")
	blog_image.setAttribute("id", "blog_image")
	blog_heading.setAttribute("id", "blog_heading")
	blog_time.setAttribute("id", "blog_time")
	blog_buttons.setAttribute("id", "blog_buttons")
	blog_description.setAttribute("id", "blog_description")
	blog_delete.setAttribute("id", "blog_delete")
	blog_edit.setAttribute("id", "blog_edit")

	blog_x.appendChild(blog_details)
	blog_x.appendChild(blog_buttons)
	blog_details.setAttribute("onclick", 'window.location.href = window.location.origin + "/blogs/blog_view?id=' + blog.id + '"')

	document.getElementById("all_blogs").appendChild(blog_x)
	document.getElementById("all_blogs").appendChild(document.createElement("hr"))
}