$(document).ready(function() {
    
    /** 
    *   Configures the sliding 'Enjoy the View' functionality on each page
    */
    
    $('.sleed').tabSlideOut({
        tabHandle: '.handle',             // class of the element that will be your tab                       
        pathToTabImage: 'images/tab.png', // path to the image for the tab (optionaly can be set using css)           
        imageHeight: '28px',              // height of tab image                                              
        imageWidth: '15px',               // width of tab image                                                
        tabLocation: 'right',             // side of screen where tab lives, top, right, bottom, or left     
        speed: 300,                       // speed of animation                                               
        action: 'click',                  // options: 'click' or 'hover', action to trigger animation         
        topPos: '0px',                    // position from the top                                              
        fixedPosition: false              // options: true makes it stick(fixed position) on scroll             
      });

  
    /** 
    *   Add default text to the top search box
    */
    
    $('input.query').defaultvalue("Search UCSC...");

    /** 
    *   Fix for Quickstart menus dropdown
    */

    $("#mainNav li").hover(
        function() { $(this).addClass('hov') }, 
        function() { $(this).removeClass('hov') }
    );
  	
  	/**
  	*   For pages with Lightbox image viewer block
  	*   @todo: Not sure why this was included on every page?
  	*/
  	
  	$('#theView a').lightBox({fixedNavigation:true});
  	
});

