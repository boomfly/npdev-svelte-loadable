Package.describe({
  name: "npdev:svelte-loadable",
  version: "1.0.0-alpha.3",
  summary: "Easy code splitting with Svelte-loadable",
  git: "https://github.com/CaptainN/npdev-svelte-loadable.git"
})

Package.onUse(function (api) {
  api.versionsFrom(['METEOR@2.0'])
  // api.use(['ecmascript', 'ejson', 'zodern:melte'])
  api.use(['ecmascript', 'ejson'])

  api.mainModule('svelte-loadable-server.js', 'server')
  api.mainModule('svelte-loadable-client.js', 'client')
});
