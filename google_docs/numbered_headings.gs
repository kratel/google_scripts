function Number_Headings() {
    // Get document contents
    // Adapted from: https://webapps.stackexchange.com/a/46905
    var pars = DocumentApp.getActiveDocument().getBody().getParagraphs();
    // Number Headings
    // Variables to keep track of header numbers
    var counterh1 = 0;
    var counterh2 = 0;
    var counterh3 = 0;
    var counterh4 = 0;
    // Loop to go through document elements
    for(var i=0; i < pars.length; i++) {
        var par = pars[i];
        var hdg = par.getHeading();
        // Check if we are at a Heading 1
        if (hdg == DocumentApp.ParagraphHeading.HEADING1) {
              // Increment the Heading 1 number
              // Reset all other headings to 0, since we want the counts to be relative
              //   to the outer heading.
              counterh1++;
              counterh2 = 0;
              counterh3 = 0;
              counterh4 = 0;
              // Get the current heading content
              var content = par.getText();
              var chunks = content.split('\t');
              // Create a new heading using the old heading content, and adding our number to the beginning
              if(chunks.length > 1) { 
                  par.setText(counterh1+'.\t'+chunks[1]); 
              } else {
                  par.setText(counterh1+'.\t'+chunks[0]); 
              }
        }
        // Repeat process for the next heading levels
        if (hdg == DocumentApp.ParagraphHeading.HEADING2) {
              counterh2++;
              counterh3 = 0;
              counterh4 = 0;
              var content = par.getText();
              var chunks = content.split('\t');
              if(chunks.length > 1) { 
                  par.setText(counterh1 + '.'+ counterh2+'.\t'+chunks[1]); 
              } else {
                  par.setText(counterh1 + '.'+counterh2+'.\t'+chunks[0]); 
              }
        }
        if (hdg == DocumentApp.ParagraphHeading.HEADING3) {
              counterh3++;
              counterh4 = 0;
              var content = par.getText();
              var chunks = content.split('\t');
              if(chunks.length > 1) { 
                  par.setText(counterh1 + '.'+ counterh2+ '.'+ counterh3+ '.\t'+chunks[1]); 
              } else {
                  par.setText(counterh1 + '.'+counterh2+ '.'+ counterh3+ '.\t'+chunks[0]); 
              }
        }
        if (hdg == DocumentApp.ParagraphHeading.HEADING4) {
              counterh4++;
              var content = par.getText();
              var chunks = content.split('\t');
              if(chunks.length > 1) { 
                  par.setText(counterh1 + '.'+ counterh2+ '.'+ counterh3+ '.'+ counterh4+ '.\t'+chunks[1]); 
              } else {
                  par.setText(counterh1 + '.'+counterh2+ '.'+ counterh3+ '.'+ counterh4+ '.\t'+chunks[0]); 
              }
        }
    }
}