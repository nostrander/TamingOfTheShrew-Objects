
function displayMovie(movie)
{
	alert("Movie: "+movie.name);
	alert("Year: "+movie.year);
	alert("Director: "+movie.director);
	
	for (var i=0; i<movie.writer.length; i++)
	{
		var author = movie.writer[i];
		alert("Author: "+author.firstName + " " + author.lastName + ".");
	}
	for (var x=0; x<movie.cast.length; x++)
	{
		var roles = movie.cast[x];
		alert("Starring: "+roles.firstName + " " + roles.lastName+ " as " + roles.role + ".");
	}


}

function createMovieAsObject()
{
	var movie = new Object();
	movie.name = "Taming of the Shrew";
	movie.year = 1967;
	movie.director = "Franco Zeffirelli";

	var shakespeare = new Object();
	shakespeare.firstName = "William";
	shakespeare.lastName = "Shakespeare";

	var amico = new Object();
	amico.firstName = "Suso Cecchi";
	amico.lastName = "D'Amico";

	var zeffirelli = new Object();
	zeffirelli.firstName = "Franco";
	zeffirelli.lastName = "Zeffirelli";

	var dehn = new Object();
	dehn.firstName = "Paul";
	dehn.lastName = "Dehn";

	movie.writer = new Array(shakespeare, amico, zeffirelli,dehn);

	var katharina = new Object();
	katharina.firstName = "Elizabeth";
	katharina.lastName = "Taylor";
	katharina.role = "Katharina";

	var petruchio = new Object();
	petruchio.firstName = "Richard";
	petruchio.lastName = "Burton";
	petruchio.role = "Petruchio";

	var grumio = new Object();
	grumio.firstName = "Cyril";
	grumio.lastName = "Cusack";
	grumio.role = "Grumio";

	var baptista = new Object();
	baptista.firstName = "Michael";
	baptista.lastName = "Hordern";
	baptista.role = "Baptista";

	var tranio = new Object();
	tranio.firstName = "Alfred";
	tranio.lastName = "Lynch";
	tranio.role = "Tranio";

	var gremio = new Object();
	gremio.firstName = "Alan";
	gremio.lastName = "Webb";
	gremio.role = "Gremio";

	var priest = new Object();
	priest.firstName = "Giancarlo";
	priest.lastName = "Cobelli";
	priest.role = "The Priest";

	var pedant = new Object();
	pedant.firstName = "Vernon";
	pedant.lastName = "Dobtcheff";
	pedant.role = "Pedant";

	var tailor = new Object();
	tailor.firstName = "Ken";
	tailor.lastName = "Parry";
	tailor.role = "Tailor";

	var haberdasher = new Object();
	haberdasher.firstName = "Anthony";
	haberdasher.lastName = "Gardner";
	haberdasher.role = "Haberdasher";

	var bianca = new Object();
	bianca.firstName = "Natasha";
	bianca.lastName = "Pyne";
	bianca.role = "Bianca";

	var lucentio = new Object();
	lucentio.firstName = "Michael";
	lucentio.lastName = "York";
	lucentio.role = "Lucentio";

	var hortensio = new Object();
	hortensio.firstName = "Victor";
	hortensio.lastName = "Spinetti";
	hortensio.role = "Hortensio";

	var biondello = new Object();
	biondello.firstName = "Roy";
	biondello.lastName = "Holder";
	biondello.role = "Biondello";

	var vincentio = new Object();
	vincentio.firstName = "Mark";
	vincentio.lastName = "Dignam";
	vincentio.role = "Vincentio";

	var widow = new Object();
	widow.firstName = "Bice";
	widow.lastName = "Valori";
	widow.role = "The Widow";

	movie.cast = new Array(katharina,petruchio,grumio,baptista,tranio,gremio,priest,
		pedant,tailor,haberdasher,bianca,lucentio,hortensio,biondello,vincentio,widow);
	return movie;
}

$(document).ready(function()
{
	$(".button").mouseover(function()
	{
		$(this).css("border", "2px solid lime");
	});

	$(".button").mouseout(function()
	{
		$(this).css("border", "2px solid black");
	});

	$(".buttonMovie").click(function()
	{
		var movie = createMovieAsObject();
		displayMovie(movie);
	});
});