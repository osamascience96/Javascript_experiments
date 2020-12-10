<?php
    include 'Comments.php';

    $commentsObj = new Comments();
    $get_response = null;

    if(isset($_GET['data_type'])){
        $data_type = $_GET['data_type'];
        if ($data_type == 'initial'){
            $get_response = $commentsObj->GetInitialComments();
            echo json_encode($get_response);
        }else{
            $get_response = $commentsObj->GetMoreComments($_GET['commentCount']);
            foreach($get_response as $comment_list){
                echo "<p>" . $comment_list[0] . "<br>" . $comment_list[1] . "</p>";
            }
        }
    }else{
        echo 'Please Send any data';
    }
?>