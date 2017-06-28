 $(document).ready(function(){

      //Check if the browser supports local storage
      if (typeof(Storage) !== "undefined") {
            // Code for localStorage/sessionStorage.
      } else {
            // Sorry! No Web Storage support..
      }

      //Clear after expering time
      var cartItems = JSON.parse(localStorage.getItem('cartItems'));
      if (cartItems !=null && cartItems[0].added < new Date()) {
            localStorage.clear();
      }

      var $table = $( "<table class='table'></table>" );
      var total = 0;
      for ( var i = 0; i < cartItems.length; i++ ) {
            var item = cartItems[i];
            var $line = $( "<tr></tr>" );
            $line.append( $( "<td></td>" ).html( item.name ) );
            $line.append( $( "<td></td>" ).html( emp.price ) );
            $table.append( $line );
            total = total + emp.price;
      }

      //$table.appendTo( document.body );

      // if you want to insert this table in a div with id attribute 
      // set as "myDiv", you can do this:
      $table.appendTo( $( "#myCart" ) );

      $('#skin_care').click(function(e){

            var addedDate = new Date();
            addedDate.setMinutes(addedDate.getMinutes() + 1);
            var item = { 'id': 1, 'name': 'Skin Care Package', 'price': 3300, added:addedDate };
            addToCart(item);
            alert("Skin Care package added to cart");
      });

      $('#hair_care').click(function(e){

            var addedDate = new Date();
            addedDate.setMinutes(addedDate.getMinutes() + 1);
            var item = { 'id': 2, 'name': 'Hair Care Package', 'price': 1200, added:addedDate };
            addToCart(item);
            alert("Hair  Care package added to cart");

      });    

      $('#makeup_care').click(function(e){

            var addedDate = new Date();
            addedDate.setMinutes(addedDate.getMinutes() + 1);
            var item = { 'id': 2, 'name': 'Makeup Package', 'price': 1200, added:addedDate };
            addToCart(item);
            alert("Makeup Package added to cart");

      });

      function addToCart(item) {
            var cartItems = JSON.parse(localStorage.getItem('cartItems'));
            console.log('cartItems: ', cartItems);
            //console.log('cartItems: ', JSON.parse(cartItems));

            if(cartItems == null){
                  cartItems = new Array();
            }
            
            var itemFound = false;
            for(i=0; i<cartItems.length; i++){
                  if(cartItems[i].id == item.id){
                        itemFound = true;
                        i = cartItems.length;
                  }
            }

            if(!itemFound){
                  cartItems.push(item);
                  localStorage.setItem('cartItems', JSON.stringify(cartItems));

                  return true;
            }
            else{
                  return false;
            }
      }
});