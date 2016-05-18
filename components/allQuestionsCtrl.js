(function () {
    "use strict";
    
     function allQuestionsCtrl(questionsResource) {
            
            var vm = this;
            
           var data = questionsResource.all({}, function () {
                
                vm.categories = data;
                
                data.forEach(function (theme) {
                    
                    theme.questions.forEach(function (question) {
                            var answers = questionsResource.answers({id: question.id}, function () {
                                question.answers = answers.answers;
                          }); 
                    });
                    
                });
                    
            });
            
            var answers = questionsResource.answers({id: '5'}, function () {
                console.log(answers);
                vm.answers = answers;    
            });
            
            
           /* questionsResource.get({id: "5"}, function (answers) {
                console.log('------->');
                console.log(answers);    
            });
           */ 
            
           
        }
    
    
    angular
        .module('ngClassifieds')
        .controller('allQuestionsCtrl' ,allQuestionsCtrl);
        
       

})();