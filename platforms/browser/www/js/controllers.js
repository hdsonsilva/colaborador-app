/***********************************************************************
 * App Controllers. These controllers will be called on page initialization. *
 ***********************************************************************/

myApp.controllers = {

  //////////////////////////
  // Tabbar Page Controller //
  //////////////////////////
  tabbarPage: function(page) {
    // Set button functionality to open/close the menu.

    page.querySelector('[component="button/menu"]').onclick = function() {
      document.querySelector('#mySplitter').left.toggle();
    };

    // Set button functionality to push 'new_task.html' page.
    Array.prototype.forEach.call(page.querySelectorAll('[component="button/new-task"]'), function(element) {
      element.onclick = function() {
        document.querySelector('#myNavigator').pushPage('html/new_task.html');
      };

      element.show && element.show(); // Fix ons-fab in Safari.
    });

    // Change tabbar animation depending on platform.
    page.querySelector('#myTabbar').setAttribute('animation', ons.platform.isAndroid() ? 'slide' : 'none');
  },

  ////////////////////////
  // HOME Page Controller //
  ////////////////////////
  pageFinanceiro: function(page) {
    //ons.notification.alert("Alerta do controlador pageFinanceiro");
    /*$('#login_user').html("Usuário:<br/>"+localStorage.getItem('sys_username'));

    $('#login_nome').html("Nome:<br/>"+localStorage.getItem('sys_nome'));

    $('#login_email').html("Email:<br/>"+localStorage.getItem('sys_email'));
    */


    
    //;
    //localStorage.getItem('login_email');

  },

  homePage: function(page) {
    

    //;
    //localStorage.getItem('login_email');

  },
  
  ////////////////////////
  // Menu Page Controller //
  ////////////////////////
  menuPage: function(page) {
    // Set functionality for 'No Category' and 'All' default categories respectively.
    myApp.services.categories.bindOnCheckboxChange(page.querySelector('#default-category-list ons-list-item[category-id=""]'));
    myApp.services.categories.bindOnCheckboxChange(page.querySelector('#default-category-list ons-list-item:not([category-id])'));

    // Change splitter animation depending on platform.
    document.querySelector('#mySplitter').left.setAttribute('animation', ons.platform.isAndroid() ? 'overlay' : 'reveal');
  },

  ////////////////////////////
  // New Task Page Controller //
  ////////////////////////////
  newTaskPage: function(page) {
    // Set button functionality to save a new task.
    Array.prototype.forEach.call(page.querySelectorAll('[component="button/save-task"]'), function(element) {
      element.onclick = function() {
        var newTitle = page.querySelector('#title-input').value;

        if (newTitle) {
          // If input title is not empty, create a new task.
          myApp.services.tasks.create(
            {
              title: newTitle,
              category: page.querySelector('#category-input').value,
              description: page.querySelector('#description-input').value,
              highlight: page.querySelector('#highlight-input').checked,
              urgent: page.querySelector('#urgent-input').checked
            }
          );

          // Set selected category to 'All', refresh and pop page.
          document.querySelector('#default-category-list ons-list-item ons-radio').checked = true;
          document.querySelector('#default-category-list ons-list-item').updateCategoryView();
          document.querySelector('#myNavigator').popPage();

        } else {
          // Show alert if the input title is empty.
          if(debug == 1){
            ons.notification.alert('You must provide a task title.');
          }
        }
      };
    });
  },

  ////////////////////////////////
  // Details Task Page Controller //
  ///////////////////////////////
  detailsTaskPage: function(page) {
    // Get the element passed as argument to pushPage.
    var element = page.data.element;
    var pagina ;
    if(debug == 1){
      ons.notification.alert('aqui');
    }

    // Fill the view with the stored data.
    $('#titulo').html(element.titulo);
    $('#descricao').html(element.dados.descricao);
    //ons.notification.alert(JSON.stringify(element));
    //page.querySelector('#description-input').value = element.data.description;
    //page.querySelector('#highlight-input').checked = element.data.highlight;
    //page.querySelector('#urgent-input').checked = 1;
    $('#verweb').click(function(){
      //ons.notification.alert(element.dados.tiposolicitacao);
      //console.log(element.page+"?"+element.dados.tiposolicitacao+"="+element.dados.idsolicitacao+"&token="+localStorage.getItem('token')+"&id="+element.dados.idempresa);
      pagina = element.page+"&token="+localStorage.getItem('token');
      if(debug == 0){
        
        document.addEventListener('deviceready', function () {
          navigator.app.loadUrl(pagina, { openExternal: true });
        }, false);

      }
      else{
        window.open(pagina);
      }

    });

    
  }
};
