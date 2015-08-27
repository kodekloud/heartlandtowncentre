/*Created 2015-08-26  by Andy*/



    function renderPageData(container, template, collection, type){
            
            var item_list = [];
            var item_rendered = [];
            var template_html = $(template).html();
            Mustache.parse(template_html);   // optional, speeds up future uses
            
            if (type == 'property'){
                item_list.push(collection);    
            } else {
                item_list = collection;
            }
                
            
            
            $.each( item_list , function( key, val ) {
                var rendered = Mustache.render(template_html,val);
                if (type == 'right_block'){
                    console.log(key)
                } else {
                    item_rendered.push(rendered);    
                }
                
            });
            
            $(container).show();
            $(container).html(item_rendered.join(''));
            
    }
    
    function toggle_menu(id){
        if ($("#"+id).is(":visible")){
            $("#"+id).slideUp();
        } else {
            $(".submenu").slideUp();
            $("#"+id).slideDown();
        }
    }
   
    
    $(document).click(function(event) { 
        if(!$(event.target).closest('.desktop_menu_ul li button').length) {
            if($('.submenu').is(":visible")) {
                $('.submenu').slideUp()
            }
        }        
    })