if (Meteor.isClient) {
    Meteor.startup(function () {
      Router.map(function() {
        this.route('about', {
          path: '/about',
          template: getTemplate('aboutPage')
        });
      });
    });
};

primaryNav.push({
  template: 'aboutLink',
  order: 90
});