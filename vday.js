

      function btYES() { 
        document.getElementById("textDisplay").innerHTML = "SEE YOU LATER!"
        document.getElementById("dateDisplay").innerHTML = "When: February 14, 2026 | Time: 10:00 PM | Where: Messenger Call/ Discord"
        document.getElementById("spotifylink").innerHTML = "Open Link"

      }

    const btNo = document.getElementById("btNo");
    
    btNo.addEventListener("mouseover" , function() {
      btNo.innerHTML = "YES"
    });
    btNo.addEventListener("mouseout" , function() {
      btNo.innerHTML = "NO"

    });

    