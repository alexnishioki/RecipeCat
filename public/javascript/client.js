(function() {
		$(document).ready(function() {
			recipeStart()
		})
})
})()

function recipeStart() {
	var recipeSearch;
	var divPlaceHolder = $('#q-results')
	$('#recipe-q-button').on('click',function recipeSearch() {
		var params= {
		search: $('#recipe-q').val()
		}
	$.get('/', params, function(data) {
            divPlaceHolder.html(data);
        });
    });
}