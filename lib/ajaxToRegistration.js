$('#registr').click(function(e){
                e.preventDefault();
                $('#container').remove();
                $('#content').load('registration.html #ajaxCont'); 
            });