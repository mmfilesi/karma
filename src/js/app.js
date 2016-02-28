
var AddBook = function() {

	/* Recogemos el libro */
	this.getBook = function(title, author, year) {

		/* Ponemos el autor en minúscula */
		author = this.prepareAuthor(author);

		/* Comprobamos que están todos los campos y que el año es un número */
		if ( !this.checkBook(title, author, year) ) {
			return false;
		}

		/* Enviamos el libro a la bbdd */
		this.sendBook(title, author, year);

		return true;
	};

	this.checkBook = function(title, author, year) {
	  var isValid = true;

	  if ( !title || !author || !year || isNaN(year) ) {
			isValid = false;
	  }
	  return isValid;
	};

	this.prepareAuthor = function(author) {
		//author = author.toLowerCase();
		//return author; 
	};

	this.sendBook = function(title, author, year) {
		// ajax request...
	};

};


var objetcWithoutCoverage = {
	foo: function() {
		console.log('foo');
	}
}

function functionWithOutCoverage() {
	console.log('oo');
}

var addBook = new AddBook();

addBook.getBook('La diosa blanca', 'Robert Graves', '1948');