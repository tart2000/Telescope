Package.describe({
  summary: "Telescope radar theme",
  version: '0.1.0',
  name: "telescope-theme-radar"
});

Package.onUse(function (api) {

  api.use(['screen:css', 'telescope-theme-hubble'], ['client']);

  api.addFiles([
    'client/stylesheets/screen.css',
    ], ['client']);

});