/*Created 2015-08-26  by Andy*/

    function show_results(id){
    
        if ( $("#"+id+"_results").is(":visible")){
            $("#"+id+"_results").slideUp();
            $("#"+id+"_arrow").removeClass("fa-chevron-down", 1000);
            $("#"+id+"_arrow").addClass("fa-chevron-right", 1000);
        } else {
            $(".results_div").slideUp();
            $(".search_arrow").removeClass("fa-chevron-down", 1000);
            $(".search_arrow").addClass("fa-chevron-right", 1000);
            $("#"+id+"_results").slideDown();   
            $("#"+id+"_arrow").removeClass("fa-chevron-right", 1000);
            $("#"+id+"_arrow").addClass("fa-chevron-down", 1000);
        }
        
    }
    
    $('#search_input').keyup(function(e){
        showSearchResults();
    });

    $('#search_input').on('input', function() {
        showSearchResults();
    });

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
                    if (key <= 1){
                        item_rendered.push(rendered);    
                    }
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
   
   function toggle_search(){
       if($(".hidden_search").is(":visible")){
           $(".hidden_search").slideUp();
           $(".visible_icons").slideDown();
       } else {
           $(".hidden_search").slideDown();
           $(".visible_icons").slideUp();
       }
   }
    
    $(document).click(function(event) { 
        if(!$(event.target).closest('.desktop_menu_ul li button').length) {
            if($('.submenu').is(":visible")) {
                $('.submenu').slideUp()
            }
        }        
    })