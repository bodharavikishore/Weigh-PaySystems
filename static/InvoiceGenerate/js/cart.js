var d = new Date();
var date_key = d.getDate()+"-"+d.getMonth()+"-"+d.getFullYear();	
var price_keys;
var prices_list=[];
var firebaseRef = firebase.database().ref().child("pricelist");
firebaseRef.once("value",snap =>
{
	var items = snap.val();
	var price_object = items["1-2-2018"];
	price_keys = Object.keys(price_object);
	for(var i=0;i<price_keys.length;i++){
		prices_list.push(price_object[price_keys[i]]);
	}
	console.log("prices list");
	console.log(prices_list);
});

function getBuyer(){
	var buyer_id = exampleInputEmail1.value;
	console.log(buyer_id);
	alert("get buyer");	
	var firebaseRef = firebase.database().ref().child("Buyer");
	firebaseRef.on("child_added",snap =>
	{
		var data = snap.val();
		var keys = Object.keys(data);
		if(buyer_id==keys[0]){
			user_data = data[buyer_id];
			console.log(user_data);
			// debugger;
			var kgs;
			var name;
			var item_price;
			var total=0;
			for (var i=0;i<price_keys.length;i++)
			{
				name = price_keys[i]
				kgs=user_data[i][name][0];
				item_price = prices_list[i]
				total += parseInt(kgs)*parseInt(item_price);
$("#t_body").append("<tr><td>" +name+ "</td><td> "+ item_price +" </td> <input type = text /><td> "+ kgs+"</td> <td> "+ parseInt(kgs)*parseInt(item_price)+"</td> </tr> ");
		   }
		   $("#t_body").append("<tr> <td>Grand total: </td><td></td><td></td> <td>"+total+"</td></tr>");
		}
	});
	
}

function getSeller(){
	var buyer_id = exampleInputEmail1.value;
	console.log(buyer_id);
	// alert("get buyer");	
	var firebaseRef = firebase.database().ref().child("Seller");
	firebaseRef.on("child_added",snap =>
	{
		var data = snap.val();
		var keys = Object.keys(data);
		if(buyer_id==keys[0]){
			user_data = data[buyer_id];
			console.log(user_data);
			// debugger;
			var kgs;
			var name;
			var item_price;
			var total=0;
			for (var i=0;i<price_keys.length;i++)
			{
				name = price_keys[i]
				kgs=user_data[i][name][0];
				item_price = prices_list[i]
				total += parseInt(kgs)*parseInt(item_price);
$("#t_body").append("<tr><td>" +name+ "</td><td> "+ item_price +" </td> <input type = text /><td> "+ kgs+"</td> <td> "+ parseInt(kgs)*parseInt(item_price)+"</td> </tr> ");
		   }
		   $("#t_body").append("<tr> <td>Grand total: </td><td></td><td></td> <td>"+total+"</td></tr>");
		}
	});
	
}


function getweighbridge(){
	var buyer_id = exampleInputEmail1.value;
	console.log(buyer_id);
	// alert("get buyer");	
	var firebaseRef = firebase.database().ref().child("weighbridge");
	firebaseRef.on("child_added",snap =>
	{
		var data = snap.val();
		var keys = Object.keys(data);
		if(buyer_id==keys[0]){
			user_data = data[buyer_id];
			console.log(user_data);
			// debugger;
			var kgs;
			var name;
			var item_price;
			var total=0;
			for (var i=0;i<price_keys.length;i++)
			{
				name = price_keys[i]
				kgs=user_data[i][name][0];
				item_price = prices_list[i]
				total += parseInt(kgs)*parseInt(item_price);
$("#t_body").append("<tr><td>" +name+ "</td><td> "+ item_price +" </td> <input type = text /><td> "+ kgs+"</td> <td> "+ parseInt(kgs)*parseInt(item_price)+"</td> </tr> ");
		   }
		   $("#t_body").append("<tr> <td>Grand total: </td><td></td><td></td> <td>"+total+"</td></tr>");
		}
	});
	
}
