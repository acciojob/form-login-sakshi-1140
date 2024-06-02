function getFormvalue() {
    //Write your code here
	 const Form=document.getElementById("form1")
    const inputs=Form.elements
    const firstName=inputs["fname"].value
    const lastName=inputs["lname"].value
    alert(firstName+" "+lastName);

}
