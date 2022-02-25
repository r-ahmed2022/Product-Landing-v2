
document.querySelector("#nav-bar").addEventListener("click", function(event)
{
    let id=event.target
    if(id.id=="feature")
       {
         alert("feature");
        } else {
          if(id.id=="h-work")
                 {
                   alert("h-works");
                  }
                   else
                    {
                       alert("pricing");
                    }
    }
})
