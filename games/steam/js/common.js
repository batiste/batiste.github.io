
function createXMLHttpRequest() {
    try { return new XMLHttpRequest(); } catch(e) {}
    try { return new ActiveXObject("Msxml2.XMLHTTP"); } catch (e) {}
    alert("XMLHttpRequest not supported");
    return null;
}

//var xhReq = createXMLHttpRequest();
//xhReq.open("GET", "map_test.json", true);
//xhReq.onreadystatechange = onSumResponse;
//xhReq.send(null);

//function onSumResponse() {
//    alert("loaf")
//    if (xhReq.readyState != 4)  { return; }
//    var serverResponse = xhReq.responseText;
//}