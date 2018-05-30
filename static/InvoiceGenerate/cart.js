// function success()
// {
 var firebaseRef = firebase.database().ref().child('cart');

 firebaseRef.on("child_added",snap =>{
	
	  var total =0;
	  var finalprice=0;
      var data = snap.val();
	  var keys = Object.keys(data);
	  console.log(data);
	  // console.log(keys);
	  for (var i=0;i<keys.length;i++)
	  {
		   var k =keys[i];
		  var name =  data[k].NAME;
		  var  weigh =data[k].KGS;
		  var price = data[k].price;
		   
	  }
	  total += price*weigh;
	  console.log(total);
	  
	  
	  
	 
	  
	  
	  
	  
	 
	  
	   


     $("#t_body").append("<tr><td>" +name+ "</td><td>"+ price +" </td> <input type = text /><td>"+ weigh+"</td> <td>"+ total+"</td></tr> ");
	
});

