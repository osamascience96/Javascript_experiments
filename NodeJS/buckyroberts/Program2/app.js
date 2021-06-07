/* Lets see that there are 6 customers in the resturant and the resturant can cook an egg in only 5 seconds,
    so if the waiter waits at every 5 seconds, it'll take 30 seconds to the last customer and 5 secods for the
    first customer, but what if the waiter don't wait for the finish of every order, instead the waitress
    takes the other orders, while the previous order prepares and assigns them to the chef, it'll take almost 
    5 seconds to each customer for his meal to prepare. */

    var count = 0;

    function createOrder(ordernumber){
        if(ordernumber !== undefined){
            console.log("Start Preparing Order No: ", ordernumber);

            // cook meal call back 
            mealcookcallback(() => {
                console.log("Meal Cooked of Order Number: ", ordernumber);
            });
        }
    }

    function mealcookcallback(callback){
        setTimeout(callback, 5000);
    }

    for(let i=0; i < 6; i++){
        createOrder(createOrder(++count));
    }

