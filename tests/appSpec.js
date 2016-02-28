describe('add book to library', function() {
   var testBook;

   /* Antes de cada expect, instanciamos el objeto que estamos testando */
   beforeEach(function() {
      testBook = new AddBook();

      spyOn(testBook, 'getBook');
      testBook.getBook('La diosa blanca', 'Robert Graves', 1948);

   });

   it('should be possible called getBook method with 3 params', function() {
      expect(testBook.getBook).toHaveBeenCalledWith('La diosa blanca', 'Robert Graves', 1948);
   });

   it('should be possible check params are valid', function() {
      var result;
      spyOn(testBook, 'checkBook').and.callThrough();
      result = testBook.checkBook('La diosa blanca', 'Robert Graves', 1948);
      expect(result).toBeTruthy();
      //expect(result).toBeFalsy();
   });

   it('should be possible check year is not a number', function() {
      var result;
      spyOn(testBook, 'checkBook').and.callThrough();
      result = testBook.checkBook('La diosa blanca', 'Robert Graves', 'sin fecha');
      expect(result).toBeFalsy();
   });

   it('should be possible called sendBook', function() {
      var title = 'La diosa blanca',
          author = 'Robert Graves',
          year = 1948;

      var fakePrepare = function(author) {
         return author.toLowerCase();
      }

      spyOn(testBook, 'prepareAuthor').and.callFake(fakePrepare);

      testBook.prepareAuthor.and.stub()

      author = testBook.prepareAuthor(author);
      console.log(author);
      spyOn(testBook, 'sendBook').and.returnValue(true);
      result = testBook.sendBook(title, author, year);
      expect(result).toBeTruthy();
   });
   

});


/*
   afterEach(function() {
      testBook = null;
   });

*/


//        testPerson.toString();
//        expect(testPerson.getName).toHaveBeenCalled();