$('#toContacts').click(function(e){
   e.preventDefault();
   $('#allContent').remove();
   $('#pageContent').load('contacts.html #ajaxCont');
});