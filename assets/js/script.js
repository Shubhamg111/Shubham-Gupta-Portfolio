const form = document.querySelector('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message= document.getElementById('message')
/* <!-- Designed By Shubham Gupta. -->
<!-- Designed By Shubham Gupta. -->
<!-- Designed By Shubham Gupta. -->
<!-- Designed By Shubham Gupta. -->
<!-- Designed By Shubham Gupta. -->
<!-- Designed By Shubham Gupta. --> */



function sendEmail() {
    const bodyMessage = `Name: ${name.value}<br>
    Email: ${email.value}<br> Message:${message.value}` ;
    Email.send({
        SecureToken:"8e6eb848-3bb2-4a3d-b9ed-e8e51e46f5bd", 
        Host: "smtp.elasticemail.com",
        Username:"guptashuvam111@gmail.com",
        Password:"E420515CD8D9F84FFA0C5654729A07BD4379",
        From:'guptashuvam111@gmail.com' ,
        To: 'guptashuvam111@gmail.com',
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => {
        if (message=="OK"){
            Swal.fire({
                title: "Success",
                text: "Message sent successfully.",
                icon: "success"
              });
              
        }
        else{
            alert(message)
           
        }
        
    }
              
    );
    form.reset();

}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
   
});
/* <!-- Designed By Shubham Gupta. -->
<!-- Designed By Shubham Gupta. -->
<!-- Designed By Shubham Gupta. -->
<!-- Designed By Shubham Gupta. -->
<!-- Designed By Shubham Gupta. -->
<!-- Designed By Shubham Gupta. --> */