import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  ngOnInit() {
    console.log('Life Cyle Hook with spontaneous response.');
  }
  // tinyAlert() {
  //   Swal.fire('Hey there!');
  // }
  // successNotification() {
  //   Swal.fire('Hi', 'We have been informed!', 'success');
  // }
  alertConfirmation() {
    Swal.fire({
  
      // text: 'This process is irreversible.',
      // icon: 'warning',
      // title: "An input!",
      // text: "Enter your details and address :",
      // input: 'text',
      // inputPlaceholder: 'Enter Your Address',
      html:
    '<input id="swal-input1" class="swal2-input" placeholder="Enter Your Name">' +
    '<input id="swal-input2" class="swal2-input" placeholder="Enter Your Phone Number">'+
    '<input id="swal-input1" class="swal2-input" placeholder="Enter Your Address">' ,

      // text: "Write something interesting:",
      // input: 'text',


      showCancelButton: true,
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Order Placed!', 'Product ordered successfully.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your Order has been cancelled.', 'error');
      }
    });
  }
}