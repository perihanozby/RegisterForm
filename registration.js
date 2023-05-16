$(document).ready(function() {
  $('#registrationForm').submit(function(event) {
    event.preventDefault(); // Formun otomatik gönderilmesini engelle
    handleRegistrationForm();
  });
});

function handleRegistrationForm() {
  var name = $('#name').val();
  var email = $('#email').val();
  var password = $('#password').val();
  var confirm_password = $('#confirm_password').val();

  // Form girişlerini doğrula
  if (!validateForm()) {
    return;
  }

  // Form verileriyle bir nesne oluştur
  var formData = {
    name: name,
    email: email,
    password: password,
    confirm_password: confirm_password
  };

  // jQuery'nin $.post() yöntemiyle form verilerini Java sunucusuna gönder
  $.post('http://example.com/register', formData, function(response) {
    // Sunucudan gelen yanıtı işle
    console.log(response);
    // İsteğe bağlı olarak, ek işlemler yapabilir veya kullanıcıya başarı mesajı gösterebilirsiniz
  });
}

function validateForm() {
  var name = $('#name').val();
  var email = $('#email').val();
  var password = $('#password').val();
  var confirm_password = $('#confirm_password').val();

  // Form girişlerini doğrula
  // ...

  // Form geçerliyse true döndür; aksi takdirde false döndür
  // ...
}
