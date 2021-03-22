//*** use npm install jspdf --save or cdn in html  */



function genreatedpdf(){
	//**create pdf and dwoload  */
     var doc = new jsPDF();
    

        var name = document.getElementById("author").value;
		var title = document.getElementById("title").value;
		var prix = document.getElementById("prix").value;
        var date = document.getElementById("date").value;

		
		doc.setFontSize(26);//**font size  */
		doc.setTextColor(92, 76, 76);//**color text  */
		
		doc.text(23, 81, name);//**x y  */
		doc.text(23, 122, title);
		doc.text(23, 162, prix);
		doc.text(23, 202, date);
		doc.save('formulaire.pdf');//**create pdf */
}