var Foo = new Meteor.Collection('foo');
if (Meteor.isServer) {
  Meteor.startup(function () {
    Foo.remove({});
    try {
      Log('a')
      Foo.insert({_id: 'foo'})
      Log('b')
      Foo.insert({_id: 'foo'})
      Log('c')
    } catch (e) {
      Log('caught e')
    }
  });
}
