export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('NODE_ENV') == 'development' ?  `http://${env('HOST')}:${env('PORT')}` : `https://${env('PUBLIC_URL')}`, // Important for production
  proxy: env('NODE_ENV') == 'development' ? {enabled: false} : {enabled: true, koa: true},
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});

