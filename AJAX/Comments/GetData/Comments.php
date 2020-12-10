<?php
    include 'dph.php';

    class Comments{
        private $connectionObj;
        private $comments_data;
        
        public function __construct(){
            global $conn;
            $this->connectionObj = $conn;
            $this->comments_data = array();
        }

        private function GetDatafromDatabase($query){
            $sql = $query;
            return mysqli_query($this->connectionObj, $sql);
        }

        public function GetInitialComments(){
            $result = $this->GetDatafromDatabase("SELECT * FROM comments LIMIT 2");
            if(mysqli_num_rows($result) > 0){
                while($row = mysqli_fetch_assoc($result)){
                    array_push($this->comments_data, array($row['author'], $row['message']));
                }
            }else{
                return 'There are no comments';
            }

            return $this->comments_data;
        }

        public function GetMoreComments($limit){
            $result = $this->GetDatafromDatabase("SELECT * FROM comments LIMIT " . $limit);
            if(mysqli_num_rows($result) > 0){
                while($row = mysqli_fetch_assoc($result)){
                    array_push($this->comments_data, array($row['author'], $row['message']));
                }
            }else{
                return 'There are no comments';
            }

            return $this->comments_data;
        }
    }
?>