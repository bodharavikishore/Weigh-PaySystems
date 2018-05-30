
		  
		  var email = document.getElementById('emailid');
		  var pass = document.getElementById('pswd');
		  var signin = document.getElementById('signin');
		  // var btnlogout = document.getElementById('btnlogout');
		  
		  
		  signin.addEventListener('click',e => {
			  
			  var emailid = email.value;
			  var pswd = pass.value;
			  var auth =firebase.auth();
			  var promise = auth.signInWithEmailAndPassword(emailid,pswd);
			  			
			  promise.catch(e => console.log(e.message));
			  
			  
		  });
		  // btnlogout.addEventListener('click',e => {
			  // firebase.auth().signOut();
			  
		  // });
		  
		  firebase.auth().onAuthStateChanged(firebaseUser =>{
				  if(firebaseUser)
				  {
					  console.log(firebaseUser);
					  // btnlogout.classList.remove('hidden');
					  document.cookie = email.value;
					  window.location='dashboard.html';
					  
				  }
				  else
				  {
					   console.log('not a firebase user');
					   // btnlogout.classList.add('hidden');
				  }
		  });
		  
		  function logout()
		  {
			  firebase.auth().signOut().then(function(){
				 alert("signout Sucess"); 
			  }).catch(function(error){
				  
			  });
		  }
		  
		  
		  
		  
		  
		  
		  
		  
		  
		  
		    









