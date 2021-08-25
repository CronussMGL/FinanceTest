//Delgetsiin control
var uiController=(function()
{

})();
//Sanhuugiin control
var financeController=(function()
{
    
})();
//Program holbogch control
var appController=(function(uiCtrl,fnCtrl){

    var ctrlAddItem= function()
    {
        // 1. Oruulah ogogdliig delgetsees olj avna.
        console.log('Delgetseed ogogdol avah heseg');
        // 2. Olj avsan Datagaa Sanhuugiin controlruu damjuulj hadgalna.

        // 3. Olj avsan Datagaa Web deer tohiroh hesegt ni gargana.

        // 4. Tosoviig tootsoolno.

        // 5. Etssiin uldegdel, tootsoog delgetsend gargana.
    };

    document.querySelector('.add__btn').addEventListener('click',function(){
        ctrlAddItem();
    }); 

    document.addEventListener('keypress',function(event){
        if (event.keyCode===13){
        ctrlAddItem();
        }
    });



})(uiController,financeController);
