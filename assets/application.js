/*Created 2015-08-26  by Andy*/

    
    function load_slider(slider){
        $('.'+slider).flexslider({
            animation: "slide",
            controlNav: true,
            directionNav: true,    
            animationLoop: true,
            slideshow: true,
            minItems: 3,
            maxItems: 3,
            prevText: "",
            nextText: ""
        });
    }
    
    
    
    
    
    function show_results(id){
        console.log("test")
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
        
        
    function toggle_mobile_menu(){
        if ($(".mobile_menu").is(":visible")){
            $(".mobile_menu").slideUp();
        } else {
            $(".mobile_menu").slideDown();
        }
    }    
    
    
    
    function get_hour_string(day_of_week, open_time, close_time, is_closed){
        switch(day_of_week) {
            case 0:
                val.day = "Sunday"
                break;
            case 1:
                val.day = "Monday"
                break;
            case 2:
                val.day = "Tuesday"
                break;
            case 3:
                val.day = "Wednesday"
                break;
            case 4:
                val.day = "Thursday"
                break;
            case 5:
                val.day = "Friday"
                break;
            case 6:
                val.day = "Saturday"
                break;
            
        }
        var open_time = new Date (open_time)
        var close_time = new Date (close_time)
        open_time = convert_hour(open_time);
        close_time = convert_hour(close_time);
        if (is_closed == true){
            hour_string = "Closed"
        } else {
            hour_string = open_time + " - " + close_time
        }
        return hour_string;
        
    }
    
    
    function convert_hour(d){
            var h = addZero(d.getUTCHours());
            var m = addZero(d.getUTCMinutes());
            var s = addZero(d.getUTCSeconds());
            if (h >= 12) {
                if ( h != 12) {
                    h = h - 12;    
                }
                
                i = "PM"
            } else {
                i = "AM"
            }
            return h+":"+m+" "+i;
        }
        
        
        
        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }
    
    

    function renderPageData(container, template, collection, type){
            
            var item_list = [];
            var item_rendered = [];
            var template_html = $(template).html();
            Mustache.parse(template_html);   // optional, speeds up future uses
            
            if (type == 'property' || type == 'store_details'){
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
                } else if (type == 'bottom_block'){
                    if (key >= 2){
                        item_rendered.push(rendered);    
                    }
                } 
                
                else {
                    item_rendered.push(rendered);    
                }
                
            });
            
            $(container).show();
            $(container).html(item_rendered.join(''));
            
            if (type == 'directory'){
                $(container).hide();
            }
            
    }
    
    function toggle_menu(id){
     
        if ($("#"+id).is(":visible")){
            $("#"+id).slideUp();
        } else {
            $(".submenu").slideUp();
            $(".mobile_submenu").slideUp();
            $("#"+id).slideDown();
        }
    }
   
   
   function toggle_mobile_submenu(id){
       
        if ($("#"+id).is(":visible")){
            $("#"+id).slideUp();
            $("#"+id+"_icon").addClass("fa-plus")
            $("#"+id+"_icon").removeClass("fa-minus")
        } else {
            $(".mobile_submenu").slideUp();
            $(".mobile_menu_ul li button i").removeClass("fa-minus")
            $(".mobile_menu_ul li button i").addClass("fa-plus")
            $("#"+id).slideDown();
            $("#"+id+"_icon").removeClass("fa-plus")
            $("#"+id+"_icon").addClass("fa-minus")
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