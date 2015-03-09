Package.describe({
  summary: "Telescope radar theme",
  version: '0.1.0',
  name: "telescope-theme-radar"
});

Package.onUse(function (api) {

  api.use(['templating', 'telescope-base', 'telescope-theme-hubble'], ['client']);

  api.addFiles([
    'lib/client/stylesheets/screen.css',
    'lib/client/radar_post_title.html',
    ], ['client']);

});