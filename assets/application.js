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
    
    


    function showSearchResults(){
        console.log("ROOLLLLL")
            $('#search_results').show();
            if($('#search_input').val().length === 0){
                $('#search_results').hide();
            }else{
                var search_results = getSearchResults($('#search_input').val(),10,100);
                $('.search-results-count').html("Total Results : "+search_results.summary.count);
                renderSearchResultsTemplate('#search_results_template','#search_results_items',search_results);
                if (search_results["stores"]){
                    if (search_results["stores"].length > 0){
                        $("#store_results_header").html(search_results["stores"].length+" Stores <i id='store_arrow' class='fa fa-chevron-right pull-right search_arrow'></i>") ;
                        $("#store_results_header").show();
                    }
                    
                } else {
                    $("#store_results_header").hide();
                }
                if (search_results["promotions"]){
                    if (search_results["promotions"].length > 0){
                        $("#promotions_results_header").html(search_results["promotions"].length+" Promotions <i id='promo_arrow' class='fa fa-chevron-right search_arrow pull-right'></i>")    ;
                        $("#promotions_results_header").show();
                    }
                    
                } else {
                    $("#promotions_results_header").hide();
                }
                if (search_results["events"]){
                    if (search_results["events"].length > 0) {
                        $("#events_results_header").html(search_results["events"].length+" Events <i id='event_arrow' class='fa fa-chevron-right pull-right search_arrow'></i>")    
                        $("#events_results_header").show();
                    }
                    
                } else {
                    $("#events_results_header").hide();
                }
                // $(document).i18n();
            }
        }
        
        
        $('.close-search').click(function(){
            $('#search_results').hide();
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