let count = 1
document.getElementById("radio1").checked = true

setInterval( function(){ /* para reproduzir infinitamente */
    nextImage();
}, 4000) /* a cada 4 segundos */


function nextImage(){
    count++;
    if(count > 4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true

}