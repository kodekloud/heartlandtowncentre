/*Created 2015-08-26  by Andy*/



    function renderPageData(container, template, collection, type){
            
            var item_list = [];
            var item_rendered = [];
            var template_html = $(template).html();
            Mustache.parse(template_html);   // optional, speeds up future uses
            
            if (type != 'property'){
                item_list.push(collection);    
            }
                
            
            
            $.each( collection , function( key, val ) {
                console.log(val)
                var rendered = Mustache.render(template_html,val);
                item_rendered.push(rendered);
            });
            
            $(container).show();
            $(container).html(item_rendered.join(''));
            
            
        }
   
    
