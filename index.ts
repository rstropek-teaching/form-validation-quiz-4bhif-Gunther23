$(document).ready(function(){
    $('#form').validate({
        rules: {
            firstName: {
                required: true
            },
            lastName: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            newsletter: {
                required:true  
            }



        }
    })
})


 