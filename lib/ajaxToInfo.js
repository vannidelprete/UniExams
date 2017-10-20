$('#toInfo').click(function(e){
               e.preventDefault();
               $('#allContent').remove();
               $('#pageContent').load('info.html #ajaxCont');
});