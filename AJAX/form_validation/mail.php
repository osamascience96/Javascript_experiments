<?php
    if(isset($_POST['submit'])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $gender = $_POST['gender'];
        $message = $_POST['message'];

        $errorEmpty = false;
        $errorEmail = false;
        
        if(empty($name) || empty($email) || empty($message)){
            echo "<span class='form-error'>Fill in all Fields!</span>";
            $errorEmpty = true;
        }else if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
            // if the email address is not valid
            echo "<span class='form-error'>Write a valid a email address</span>";
            $errorEmail = true;
        }else{
            echo "<span class='form-success'>Message Send Successfully</span>";
        }
    }else{
        echo "There was an error";
    }
?>

<script>
    $("#mail-name, #mail-email, #mail-gender, #mail-message").removeClass("input-error");

    var errorEmpty = "<?=$errorEmpty?>";
    var errorEmail = "<?=$errorEmail?>";

    if (errorEmpty == true){
        $("#mail-name, #mail-email, #mail-message").addClass("input-error");
    }

    if(errorEmail == true){
        $("#mail-email").addClass("input-error");
    }
    
    if(errorEmpty == false && errorEmail == false){
        $("#mail-name, #mail-email, #mail-message").val("");
    }
</script>