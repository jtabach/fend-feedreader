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

    it('is hidden by default', function() {
      expect($body.hasClass('menu-hidden')).toBe(true);
    });

    /* TODO: Write a test that ensures the menu changes
    * visibility when the menu icon is clicked. This test
    * should have two expectations: does the menu display when
    * clicked and does it hide when clicked again.
    */
    $menuIcon = $('.menu-icon-link');

    it('changes visibility on click', function() {
      $menuIcon.trigger('click');
      expect($body.hasClass('menu-hidden')).toBe(false);
      $menuIcon.trigger('click');
      expect($body.hasClass('menu-hidden')).toBe(true);
    });

  });
  /* TODO: Write a new test suite named "Initial Entries" */

  /* TODO: Write a test that ensures when the loadFeed
  * function is called and completes its work, there is at least
  * a single .entry element within the .feed container.
  * Remember, loadFeed() is asynchronous so this test will require
  * the use of Jasmine's beforeEach and asynchronous done() function.
  */

  /* TODO: Write a new test suite named "New Feed Selection"

  /* TODO: Write a test that ensures when a new feed is loaded
  * by the loadFeed function that the content actually changes.
  * Remember, loadFeed() is asynchronous.
  */
}());
