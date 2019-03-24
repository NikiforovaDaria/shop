//Home work №5

-created AdminComponent which activated by an AuthGuard
-created OrderComponent 
-created ProductFormComponent and oppotrunity to edit product and add new product if you use application as an admin 



//Home work №2

-created 1 component
    CartListComponent

-created 1 directive
      ChangeHoverStyleDirective which changing background color in cart product after hovering it

-created 1 shared module with directive

-combine component with the same funtionality in modules and plug them into a root module

-add functionality:
    ability to add goods in cart
    ability to change count of goods in cart
    adility to delete goods from cart
    ability to see total price and total amoutn of goods in a cart

    buttons "BUY" "ADD TO CART" and "+" (ability to increase count of goods) became desable if quantity 
    of the goods equals zero

    App Title is added by using @ViewChild

-used decorators and life hooks    



//Home work №1
- created 3 components: 
    ProductComponent,
    ProductListComponent,
    CartComponent

- created 2 services:
        ProductsService, 
        CartService

- created model : ProductModel        

- add button "BUY" in Product component which write in console a string 'You bought the goods'
- add button "Add to card" which adds a choosen goods into cart
- add button "Remove from cart" which removing a choosen goods from cart



