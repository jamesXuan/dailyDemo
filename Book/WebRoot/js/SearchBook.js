	function who_submit()
	{
		var form1 = document.getElementById("form2");
		//alert("hello");
		var str=(document.getElementById("vhidden")).value;
		
		if(str=="allbook")
		{
			form1.action = "/Book/index.jsp" ;
			form1.submit();
		}
		if(str=="ByID")
		{
			form1.action = "/Book/jsp/SearchByID.jsp";
			form1.submit();
		}
		if(str=="ByName")
		{
			form1.action = "/Book/jsp/SearchByName.jsp";
			form1.submit();
		}
	
	}