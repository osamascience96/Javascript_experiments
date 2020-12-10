<?php
    header('Content-Type: text/xml');
    echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>';

    echo '<response>';
    // get the food namae
    $food = $_GET['food'];
    // food available
    $foodArray = array('Fish', 'Meat', 'Vegetables', 'Sweets', 'Bakery');
    // creating the check
    if(in_array($food, $foodArray)){
        echo 'We do have ' . $food . '!';
    }else if($food == ''){
        echo 'Enter a food you idiot';
    }else{
        echo 'Sorry hoe! No food available like ' . $food . '!'; 
    }
    echo '</response>';
?>