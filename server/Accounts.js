ServiceConfiguration.configurations.remove({
    service: 'github'
});
ServiceConfiguration.configurations.insert({
    service    : 'github',
    clientId   : '435a2a4cedbd64b7e26d',
    secret     : '0627d3c40ee7be628ce1ea1fa9cf0b52963722dc'
});

Accounts.onCreateUser(function(options, user) {
    if (options.profile) {
        user.profile = options.profile;
    }
    return user;
});
