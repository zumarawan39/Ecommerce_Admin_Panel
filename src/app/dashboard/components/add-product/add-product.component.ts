import { Component } from '@angular/core';
import { Validators,FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DashBoardService } from '../../service/dash-board.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  uploadedFiles: Array<File> = [];

  signupForm!: FormGroup;
  constructor(private formbuilder: FormBuilder, private productService: DashBoardService, private router: Router) {
    this.signupForm = formbuilder.group({
     name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
     description: ['', [Validators.required]],
     bestprice: ['', [Validators.required]],
     discount: ['', [Validators.required]],
     category: ['', [Validators.required]],
     status: ['', [Validators.required]],
    });
  }

  fileChange(element: any) {
    this.uploadedFiles = element.target.files;
    // console.log(`element : ${this.uploadedFiles}`);
    // console.log(`element : ${element}`);
    // console.log(`element.target: ${element.target}`);
    console.log(`element.target.files: ${element.target.files}`);
  }

  upload() {
    let formData = new FormData();
    for (var i = 0; i < this.uploadedFiles.length; i++) {
      formData.append("file", this.uploadedFiles[i], this.uploadedFiles[i].name);
      formData.append("name", this.signupForm.get('name')?.value);
      formData.append("description", this.signupForm.get('description')?.value);
      formData.append("bestprice", this.signupForm.get('bestprice')?.value);
      formData.append("discount", this.signupForm.get('discount')?.value);
      formData.append("category", this.signupForm.get('category')?.value);
      formData.append("status", this.signupForm.get('status')?.value);
      // console.log(`uploadedFiles[i]: ${this.uploadedFiles[i].name}`);
      // console.log(`uploadedFiles[i]: ${this.uploadedFiles[i]}`);

    }
    if (this.signupForm.valid) {
      console.log("formdata===>",this.signupForm);
      
      this.productService.productdatafun(formData)
        .subscribe((response) => {
          console.log('response received is ', response);
          if (response.saveUser.description && response.saveUser.imagePath){
             alert("Your Product Added Successfully");
             let data=prompt(`Here is Product Info is it ok? ==>${JSON.stringify(response)}`);
             if(data=="ok" || data=="OK"){
              alert("Please visit Website")
             }
          }else{
            alert("Something wrong check you  info again")
          }
        })
      
      }
  }

}
