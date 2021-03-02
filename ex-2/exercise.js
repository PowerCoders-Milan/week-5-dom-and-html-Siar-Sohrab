function getAttributes() {
    
   var type = document.getElementsByTagName("a")[0].getAttribute("type");

   var hreflang = document.getElementsByTagName("a")[0].getAttribute("hreflang");

   var rel = document.getElementsByTagName("a")[0].getAttribute("rel");

   var target = document.getElementsByTagName("a")[0].getAttribute("target");


   console.log(type+" "+ hreflang+ " "+ rel+ " "+target );
}

