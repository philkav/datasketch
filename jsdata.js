function get_trains(){
	var trains = ["Solaris 11.3", "Solaris 11.4", "Solaris 12"];
	return trains;
}

function get_host_name(){
	return "sys002";
}

function get_train_name(){
	return "Solaris 11.4";
}

function get_metric_name(){
	return "vdb_rand_read_1024_mb_raw";
}

function get_trains_li(){
	var trains = "";
	var t_array = get_trains();
	t_array.forEach(function(item, index, array){
		trains = trains.concat("<li><a href='#'>",item,"</a></li>");
	});
	trains = trains.concat("<li class='divider'></li>", "<li><a href='#'>All Trains</a></li>");
	return trains;
}

function main(){


	$('#host_name').text(get_host_name());
	$('#train_name').text(get_train_name());
	$('#metric_name').text(get_metric_name());

	// Populate our trains dropdown
	$('#train_ul').append(get_trains_li());
}


$(document).ready(main);
