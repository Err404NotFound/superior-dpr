import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'geForm',
  templateUrl: './gen-ed-form.component.html',
  styleUrls: ['./gen-ed-form.component.css']
})



export class GenEdFormComponent implements OnInit {
  //@Input Fruits:any=[''];
  
  isValidated = false;

  @Input() courses: any = ['Apple', 'Mengo', 'Banana', 'Strawberry'];

  constructor(public fb: FormBuilder) { }

  ngOnInit():void{}

  

  myForm = this.fb.group({
    fruits: ['', [Validators.required]]
  })

  get fruits() {
    return this.myForm.get('fruits');
  }

  changeFruit(e) {
    this.fruits.setValue(e.target.value, {
      onlySelf: true
    })
  }

  submit() {
    this.isValidated = true;
    if (!this.myForm.valid) {
      return false;
    } else {
      alert(JSON.stringify(this.myForm.value))
    }
  }

}





// export class GenEdFormComponent implements OnInit {
//   courseName=[];
//  // courses:any = ['CS100', 'CS101', 'CS102']
//   geForm: FormGroup;
//   constructor(private formBuilder: FormBuilder) { 
//     this.geForm=this.formBuilder.group({
//       courseName:['']
//     });
//   this.courseName = this.getCourses();
// }

// getCourses() {
//   return [
//     { id: '1', name: 'CS100'},
//     { id: '2', name: 'CS101' },
//     { id: '3', name: 'CS102' },
//     { id: '4', name: 'CS103' }
//   ];
// }

//   ngOnInit(): void {
//   }

//   /* Form  */
//   // geForm = this.fb.group({
//   //   courseName: ['', [Validators.required]]
//   // })

//    changeCourse(e){
//  //    this.geForm.courseName.setValue(e.target.value, {
//    //    onlySelf:true
//    //  })
//    }

//   onSubmit(){
//     console.log(this.geForm.value);
//     alert(JSON.stringify(this.geForm.value));
//   }

// }
