console.log("sending get_req")
fetch(window.location.protocol + "//" + window.location.hostname + window.location.pathname + "?file_name=1")
	// .then(response => response.json())
	.then(response => {
		console.log(response)
		// Do something with response.
	});

// function getit() {

// 	postReq(sendPacket = {
// 		'purpose': "get_file",
// 		'data': document.getElementById("file_folder_need").value
// 	}).then(function(value) {
// 		console.log(value)
// 	})
// }