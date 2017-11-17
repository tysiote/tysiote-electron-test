function test() {
    let b = $("#button");
    console.log(b);
    if (b.html() == "button") b.html("BUTTON");
    else b.html("button");
}