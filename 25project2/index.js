function loadpets() {
    event.preventDefault()
        /* var http = new XMLHttpRequest()
    http.open("GET", "25project1/project/index.json")
    http.send()
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var result = JSON.parse(this.response)
            console.log(result)
        }
    }
}
loadpets()
 */
    fetch("json project/index.json").then(function(res) {
        if (res.ok) {
            res.json().then(function(result) {
                console.log(result)
            })
        }

    })
}
loadpets()