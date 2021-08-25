document.getElementById("form").addEventListener("submit", function() {
    event.preventDefault() //prevents the form 0from autosubmitting
    var mng = serialize(this)
    console.log(mng)
})

function serialize(form) {
    var pet = {}
    var obj = new FormData(form)
    obj.forEach((e, k) => {
        //console.log(e,k)
        pet[k] = e
    })
    return pet
}
serialize(form)