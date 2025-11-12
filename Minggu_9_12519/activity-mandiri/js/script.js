function fn_ValForm() {
    var sMsg = "";

    var sEmail = document.getElementById("email").value;
    var sName = document.getElementById("name").value;
    var sMessage = document.getElementById("message").value;

    var emailPattern = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;

    if (sName == "") {
        sMsg += "\n* Anda belum mengisikan nama";
    }

    if (sEmail == "") {
        sMsg += "\n* Anda belum mengisikan email";
    } else if (!emailPattern.test(sEmail)) {
        sMsg += "\n* Format email yang Anda masukkan tidak valid";
    }

    if (sMessage == "") {
        sMsg += "\n* Anda belum mengisikan pesan";
    }

    if (sMsg != "") {
        alert("Peringatan:\n" + sMsg);
        return false;
    } else {
        return true;
    }
}