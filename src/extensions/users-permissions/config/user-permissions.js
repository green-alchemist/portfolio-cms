module.exports = {
  // ...
  permissions: [
    {
      action: 'plugin::content-manager.explorer.find',
      subject: 'api::post.post',
      role: 'public',
    },
    {
      action: 'plugin::content-manager.explorer.findOne',
      subject: 'api::post.post',
      role: 'public',
    },
    {
      action: 'plugin::content-manager.explorer.find',
      subject: 'api::artwork.artwork',
      role: 'public',
    },
    {
      action: 'plugin::content-manager.explorer.findOne',
      subject: 'api::artwork.artwork',
      role: 'public',
    },
  ],
};
