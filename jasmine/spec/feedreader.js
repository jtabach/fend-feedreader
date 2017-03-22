/* feedreader.js
*
* This is the spec file that Jasmine will read and contains
* all of the tests that will be run against your application.
*/

/* We're placing all of our tests within the $() function,
* since some of these tests may require DOM elements. We want
* to ensure they don't run until the DOM is ready.
*/
$(function() {

  describe('RSS Feeds', function() {

    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    it('has a url', function() {
      allFeeds.forEach(function(feed){
        expect(feed.url).toBeDefined(true);
        expect(feed.url).not.toBe('');
        expect(feed.url).not.toBeNull();
      });
    });

    it('has a name', function() {
      allFeeds.forEach(function(feed){
        expect(feed.name).toBeDefined(true);
        expect(feed.name).not.toBe('');
        expect(feed.name).not.toBeNull();
      });
    });
  });

  describe('The menu', function() {
    var $body = $('body');

    // checks if class menu-hidden is present on load/default
    it('is hidden by default', function() {
      expect($body.hasClass('menu-hidden')).toBe(true);
    });

    $menuIcon = $('.menu-icon-link');

    // checks if menu-hidden in toggled on click
    it('changes visibility on click', function() {
      $menuIcon.trigger('click');
      expect($body.hasClass('menu-hidden')).toBe(false);
      $menuIcon.trigger('click');
      expect($body.hasClass('menu-hidden')).toBe(true);
    });

  });

  describe('Initial Entries', function() {
    // loadFeed is called and completes its work
    beforeEach(function(done) {
      loadFeed(0, done);
    });

    // finds entries in feed and checks if there is at least 1 entry present
    it('loadFeed function is called and has at least one entry', function(done) {
      var $feed = $('.feed')
      var $entries = $feed.find('.entry');
      var entriesLen = $entries.length;
      expect(entriesLen > 0).toBe(true);
      done();
    });
  });

  /* TODO: Write a new test suite named "New Feed Selection"

  /* TODO: Write a test that ensures when a new feed is loaded
  * by the loadFeed function that the content actually changes.
  * Remember, loadFeed() is asynchronous.
  */
}());
