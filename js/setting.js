 
 export class setting{

     constructor()
     {
         this.categoryElement = document.getElementById("Category");
         this.difficultyElement= document.getElementsByName("difficulty");
         this.numberOfQuestion = document.getElementById("number");
         this.startBtn = document.getElementById("startBtn");
        

         this.startBtn.addEventListener("click",this.startQuiz.bind(this));

     }
     startQuiz()
     {
      
       let amout = this.numberOfQuestion.value ; 
       let category=this.categoryElement.value ;
       console.log( this.difficultyElement);
        

     }

}


