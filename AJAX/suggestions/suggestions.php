<?php
    $existingNames = array("Osama", "Saad", "Jafri", "Hamza", "Ali", "Samray", "Salman", "Suleman", "Wajahat", "Fahad", "Atif", "Rahat", "Engin", "Osman", "Taniya", "Sheela", "Katrina", "Aamir", "Aryan", "Waheed", "Anwar", "Musa", "Esa", "Iftikhar", "Sajjad", "Ubaid", "Hareem", "Farooq", "Wajiha", "Ahson", "Anas", "Maria", "Bilal", "Areeba", "Ahmed", "Rubina", "Runaman", "Sadiq", "Shamshad");

    if(isset($_POST['suggestion'])){
        $name = $_POST['suggestion'];

        if(!empty($name)){
            foreach($existingNames as $existingName){
                if(strpos($existingName, $name) !== false){
                    echo $existingName;
                    echo '<br>';
                }
            }
        }
    }
?>