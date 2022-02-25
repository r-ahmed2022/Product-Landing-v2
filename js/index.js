
nav.addEventListener("click", function(event)
{
    let id=event.target
    if(id.id=="feature")
       {
        alert("hello feature")
        } else {
          if(id.id=="h-work")
                 {
                  alert("hello work")
                  }
                   else
                    {
                     alert("hello pricing")
                    }
    }
})
