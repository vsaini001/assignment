

$().ready(function(){


        $('form').cancel(function(e){

            var confirm = ConfirmDialog('Confirm', 'Are you sure?');

            if(confirm){
                form.cancel();
            }

            
            
        });
            
        function ConfirmDialog(title,message){
            
            var confirmdialog = $('<div></div>').appendTo('body')
            .html('<div><h6>'+message+'</h6></div>')
            .dialog({
                modal: true, title: title, zIndex: 10000, autoOpen: false,
                width: 'auto', resizable: false,
                buttons: {
                    Yes: function(){
                        $(this).dialog("close");
                        return true;
                    },
                    No: function(){
                        $(this).dialog("close");
                        return false;
                    }
                },
                close: function(event, ui){
                    $(this).remove();
                    return false;
                }
            });


            return confirmdialog.dialog("open");
    
        }
});
    

