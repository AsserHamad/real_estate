FlowRouter.route('/',{
  name:'Home',
  action(){
    BlazeLayout.render('MainLayout',{main: 'HomeLayout'});
  }
})
