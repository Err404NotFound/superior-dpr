import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'geForm',
  templateUrl: './gen-ed-form.component.html',
  styleUrls: ['./gen-ed-form.component.css']
})



export class GenEdFormComponent implements OnInit {
  
  isValidated = false;

  @Input() courses: any = ['Apple', 'Mango', 'Banana', 'Strawberry'];
  @Output() result = new EventEmitter<any>()
  constructor(public fb: FormBuilder) { }

  ngOnInit():void{}

  

  myForm = this.fb.group({
    course: ['', [Validators.required]]
  })

  get course() {
    return this.myForm.get('course');
  }

  changeCourse(e) {
    this.course.setValue(e.target.value)
    //console.log(e.target.value);
  }

  // onCheckboxChange(e) {
  //   const checkArray: FormArray = this.form.get('checkArray') as FormArray;

  //   if (e.target.checked) {
  //     checkArray.push(new FormControl(e.target.value));
  //   } else {
  //     let i: number = 0;
  //     checkArray.controls.forEach((item: FormControl) => {
  //       if (item.value == e.target.value) {
  //         checkArray.removeAt(i);
  //         return;
  //       }
  //       i++;
  //     });
  //   }

  submit() {
    this.isValidated = true;
    if (!this.myForm.valid) {
      return false;
    } else {
      //alert(JSON.stringify(this.myForm.value))
      //this.course.setValue(e.target.value)
      console.log(JSON.stringify(this.myForm.value));
      this.result.emit(JSON.stringify(this.myForm.value));
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
