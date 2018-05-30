var i=0;
var arr = []
var keys = []
var name,price,pic,weigh;
var matnames = []
var matvalues = []
var send_to = {}
var final_data = []
var hash_keys = []
var prices_list = []
var d = new Date();
var img_src_list = []
var date_key = d.getDate()+"-"+d.getMonth()+"-"+d.getFullYear();

var firebaseRef = firebase.database().ref().child("materials");
firebaseRef.on("child_added",snap =>
{
		var items = snap.val();
		var name= snap.key;
		arr.push(items);
		keys.push(Object.keys(items));
		// debugger;
	for (var j=0;j<keys[0].length-1;j++)
	{
		var img_src = items["image"];
		img_src_list.push(img_src);
		var k = keys[0][j];
		price = items[k]["price"];
		console.log("--->"+price);
		matnames.push(name);
	    // $("#t_body").append("<tr><td> <div class='card' style='width: 20rem;' id='t_body'><img height='250px' width='30px' class='card-img-top' src='"+img_src+"' alt='Card image cap'> </img></div> </td><td>" +name+ "</td> <td>" +prices_list[i]+ "</td>  <td> <input type='number' class='form-control' value='0' size='16' maxlength='5' id='"+name+"' id='"+name+"'>   </td> </tr> ");
	}
});


var firebaseRef = firebase.database().ref().child("pricelist");
firebaseRef.once("value",snap =>
{
		var items = snap.val();
		var price_object = items["1-2-2018"];
		for(var i=0;i<matnames.length;i++){
			prices_list.push(price_object[matnames[i]]);
			$("#t_body").append("<tr><td> <div class='card' style='width: 20rem;' id='t_body'><img height='250px' width='30px' class='card-img-top' src='"+img_src_list[i]+"' alt='Card image cap'> </img></div> </td><td>" +matnames[i]+ "</td> <td>" +prices_list[i]+ "</td>  <td> <input type='number' class='form-control' value='0' size='16' maxlength='5' id='"+matnames[i]+"' id='"+matnames[i]+"'>   </td> </tr> ");
		}
		
		console.log("prices list");
		console.log(prices_list);
});


var user_names = [];
var firebaseRef = firebase.database().ref().child("weighbridge");
firebaseRef.on("child_added",snap =>
{
		var items = snap.val();
		var key = Object.keys(items)[0];
		user_names.push(key);
		console.log(key+"  ::  ");
		
});
var firebaseRef = firebase.database().ref().child("weighbridge");
firebaseRef.once("value",snap =>
{
		var items = snap.val();
		hash_keys = Object.keys(items);
		
		console.log("^^^^^^^^^^");
		console.log(hash_keys);
		
});
function getTotal(list_user_materials)
{	var temp = 0;
	for(var i=0;i<matnames.length;i++){
		temp += prices_list[i]*list_user_materials[i];
	}
	console.log("total grand");
	console.log(temp);
	return temp;
}
function update_weighbridges()
{
	var i=0;
	var firebaseRef = firebase.database().ref('weighbridge');
	
	firebaseRef.once("value",snap =>
	{
		var items = snap.val();
		var keys = Object.keys(items);
		// console.log(keys);
		var pack_user = {};
		for(var j=0;j<keys.length;j++)
		{
			var t1 = Object.keys(items[keys[j]])[0];
			var data = items[keys[j]][t1];
			var toarray = Object.values(data);
			var t1_len = toarray.length;
			// var data = items[keys[j]];
			console.log("--------->");
			var pack_items = {};
			for(var k=0;k<t1_len-1;k++)
			{
				debugger;
				var t2 = toarray[k];
				var t3 = Object.keys(t2)[0];
				console.log(t3+"  :: "+t2[t3][0]);
				pack_items[t3] = t2[t3][0];
			}
			pack_items["Grand"] = data["Grand"];
			pack_items["Date"] = data["Date"];
			// console.log(pack_items);
			pack_user[t1] = pack_items;
			// send_to{[data["bname"]]: data});
			// debugger;
		}
		console.log(pack_user);
		var temp = {
			[date_key]: pack_user
		};
		firebaseRef.update(temp)
	});
	
}
function clicked()
{
	var aluminium_val = parseInt(aluminium.value);
	var books_val = parseInt(books.value);	
	var bottles_val = parseInt(bottles.value);	
	var brass_val = parseInt(brass.value);	
	var copper_val = parseInt(copper.value);	
	var iron_val = parseInt(iron.value);	
	var kb_val = parseInt(kb.value);	
	var paper_val = parseInt(paper.value);
	var plastic_val = parseInt(plastic.value);
	console.log(plastic_val);
	var bname = buyername.value;
	
	var firebaseRef = firebase.database().ref('weighbridge');
	var user_items_keys = [];
	for(var i=0;i<user_names.length;i++){
			if(bname == user_names[i]){
				console.log("------");
				firebaseRef.on("child_added",snap =>
				{
					var items = snap.val();
					var key = Object.keys(items)[0];
					console.log("*****");
					console.log(items);
					if(key == bname){
						console.log("<><><><><>");
						console.log(items[key]);
						var u_temp;
						var text;
						var user_items_values;
						for(var i=0;i<prices_list.length;i++)
						{	
							u_temp = Object.keys(items[key][i])[0];
							user_items_values = parseInt(items[key][i][u_temp]);
							console.log(u_temp);
							user_items_keys.push(u_temp);
							console.log("debugger  2  ");
							switch(u_temp) {
								case "aluminium":
									text = "Banana is good!";
									console.log(user_items_values+"--"+aluminium_val);
									aluminium_val += user_items_values;
									console.log(aluminium_val);
									break;
								case "books":
									text = "I am not a fan of orange.";
									console.log(user_items_values+"--"+books_val);
									books_val += user_items_values;
									break;
								case "bottles":
									text = "How you like them apples?";
									console.log(user_items_values+"--"+bottles_val);
									bottles_val += user_items_values;
									break;
								case "brass":
									text = "I am not a fan of brass.";
									console.log(user_items_values+"--"+brass_val);
									brass_val += user_items_values;
									break;
								case "copper":
									text = "I am not a fan of copper.";
									console.log(user_items_values+"--"+copper_val  );
									copper_val += user_items_values;
									break;
								case "iron":
									text = "I am not a fan of iron.";
									console.log(user_items_values+"--"+iron_val  );
									iron_val += user_items_values;
									break;
								case "kb":
									text = "I am not a fan of kb.";
									console.log(user_items_values+"--"+ kb_val );
									kb_val += user_items_values;
									break;
								case "paper":
									text = "I am not a fan of paper.";
									console.log(user_items_values+"--"+ paper_val );
									paper_val += user_items_values;
									console.log(paper_val);
									break;
								case "plastic":
									text = "I am not a fan of plastic.";
									console.log(user_items_values+"--"+ plastic_val );
									plastic_val += user_items_values;
									console.log(plastic_val);
									break;
								default:
									text = "I have never heard of that fruit...";
							}
							console.log(text);
						}
						var matvalues=[aluminium_val,books_val,bottles_val,brass_val,copper_val,iron_val,kb_val,paper_val,plastic_val];
						console.log("------> material  values");
						console.log(matvalues);
						console.log(user_items_keys);
						for(var x=0;x<matvalues.length;x++){
							final_data.push({[user_items_keys[x]] : [matvalues[x]]});
						}
						var total = getTotal(matvalues);
						console.log(total);
						final_data["Grand"] = total;
						final_data["Date"] = date_key;
						console.log(final_data);
					}
					console.log(key+"  ::  ");	
				});
				// firebaseRef.update({["xyz"]:["abc"]});
				// return alert("name in use");
				var temp = {
					[bname]:final_data
				};
				var xyz = {
					[hash_keys[i]] : temp
				};
				alert(i);
				console.log(xyz);
				if(confirm("Are you sure to merge this data with existing data ?")){
					return firebaseRef.child(hash_keys[i]).set(temp);
				}else{
					
				}
				
			}
	}
	// L6TGUjbD7lntJr8Y3iV
	
	var matvalues=[aluminium_val,books_val,bottles_val,brass_val,copper_val,iron_val,kb_val,paper_val,plastic_val];
	console.log("////////out////////");
	console.log("matvalues");
	console.log(matvalues);
	var total = getTotal(matvalues);
	var t;
	
	var db_mat_values = [];
	for(i=0;i<matvalues.length;i++)
	{	
		t = matvalues[i];
		db_mat_values.push( { [matnames[i]] : [matvalues[i]] } );
	}
	db_mat_values["Grand"]=total;
	db_mat_values["Date"] = date_key;
	console.log(db_mat_values);
	
	var firebaseRef = firebase.database().ref('weighbridge');
		 //var items = firebaseRef.child('materials');	 
         //debugger;
		send_data = {
			[bname]: db_mat_values
		};
		console.log(send_data);
		if(confirm("Are you sure to sell these items?")){
			firebaseRef.push (
				send_data
			);
		}else{
			var aaa=5;
		}
}