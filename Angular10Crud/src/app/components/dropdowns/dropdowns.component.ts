import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import {GenEdFormComponent } from '../gen-ed-form/gen-ed-form.component';
import {CourseService} from '../../services/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.css']
})
export class DropdownsComponent {
  booleanCoreArray: Array<boolean>=[];
  booleanElectives1Array: Array<boolean>=[];
  booleanElectives2Array: Array<boolean>=[];
  booleanElectives3Array: Array<boolean>=[];
  
  completedCoreCourses: Array<any>;
  
  coreCourses: Array<any>;
  elective1Courses: Array<any>;
  elective2Courses: Array<any>;
  elective3Courses: Array<any>;

  //Progress Bar variables
  percentCore: String;
  colorCore: String;
  percentElectives1: String;
  colorElectives1: String;
  percentElectives2: String;
  colorElectives2: String;
  percentElectives3: String;
  colorElectives3: String;

  //Data: Array<any> = majorElectivesAtLeast12;
  igeCourses=[
    {"name":"AG 4010 - Ethical Issues in Food, Agricultural and Apparel Industries (3) (fulfills Area C3 or D4)"},
    {"name":"ANT 3500 - Environment, Technology and Culture (3) (fulfills Area B5 or D4)"},
    {"name":"ANT 3600 - Magic, Shamanism, and Religion (3) (fulfills Area C3 or D4)"},
    {"name":"ANT 4050 - Anthropology of Gender (3) (fulfills Area C3 or D4)"},
    {"name":"BUS 4820 - International Destinations and the United States: Cross-Cultural Analysis (3) (fulfills Area C3 or D4)"},
    {"name":"CLS 4100 - Model United Nations (3) (fulfills Area C3 or D4)"},
    {"name":"CS 3750 - Computers and Society (3) (fulfills Area B5 or D4)"},
    {"name":"EC 4441 - Industry Studies (3) (fulfills Area B5 or D4)"},
    {"name":"EWS 4430 - Women, Health, and Body Politics (3) (fulfills Area C3 or D4)"},
    {"name":"EWS 4500 - Multiracial and Hybrid Identities (3) (fulfills Area C3 or D4)"},
    {"name":"EWS 4510 - Diaspora Studies (3) (fulfills Area C3 or D4)"},
    {"name":"GEO 3510 - Geography of California (3) (fulfills Area B5 or D4)"},
    {"name":"HST 3306 - Modern India (3) (fulfills Area C3 or D4)"},
    {"name":"HST 4230 - Modern Science in World History (3) (fulfills Area C3 or D4)"},
    {"name":"HST 4406 - Women in the United States (3) (fulfills Area C3 or D4)"},
    {"name":"HST 4408 - History of American Science and Technology (3) (fulfills Area C3 or D4)"},
    {"name":"HST 4433 - Nonviolence in the Modern World (3) (fulfills Area C3 or D4)"},
    {"name":"IGE 3500 - The Creative Process: Theory and Practice (3) (fulfills Area C3 or D4)"},
    {"name":"IME 4020 - Ethical Concepts in Technology and Applied Science (3) (fulfills Area B5 or C3)"},
    {"name":"IME 4030 - Fiscal Implications in Technical Decision Making (3) (fulfills Area B5 or D4)"},
    {"name":"MU 3100 - History of Technology in Music (3) (fulfills Area B5, C3, or D4)"},
    {"name":"MU 4240 - Beatlemania (3) (fulfills Area C3 or D4)"},
    {"name":"PHL 3110 - Philosophical Issues in the Law (3) (fulfills Area C3 or D4)"},
    {"name":"PHL 3330 - Bioethics (3) (fulfills Area B5 or C3)"},
    {"name":"PHL 3530 - Cognitive Science (3) (fulfills Area B5 or C3)"},
    {"name":"PHL 3540 - The Philosophy and Science of Implicit Bias (3) (fulfills Area C3 or D4)"},
    {"name":"PHL 3810 - Race and Racism (3) (fulfills Area C3 or D4)"},
    {"name":"PSY 3326 - Health Psychology (3) (fulfills Area B5 or D4)"},
    {"name":"RS 3030 - Organization for Regenerative Practices (3) (fulfills Area C3 or D4)"},
    {"name":"RS 4500 - Sustainable Communities (3) (fulfills Area C3 or D4)"}
  ];
  
  a1courses=[];
  a2courses=[];
  a3courses=[];
  b1courses=[];
  b2courses=[];
  b3courses=[];
  b4courses=[];
  b5courses=[];
  c1courses=[];
  c2courses=[];
  c3courses=[];
  d1courses =[];
  d2courses=[];
  d3courses=[];
  d4courses=[];
  ecourses=[];
  

  geForm: GenEdFormComponent;
  geForm2:GenEdFormComponent;
  geForm3: GenEdFormComponent;
  geForm4: GenEdFormComponent;
  geForm5: GenEdFormComponent;
  geForm6: GenEdFormComponent;
  geForm7: GenEdFormComponent;
  geForm8: GenEdFormComponent;
  geForm9: GenEdFormComponent;
  geForm10: GenEdFormComponent;
  completedGEs: any;

  form0: FormGroup;
  form1: FormGroup;
  form2: FormGroup;
  form3: FormGroup;
  form4: FormGroup;

  constructor(private fb: FormBuilder, private courseService: CourseService) {
    this.form0 = this.fb.group({
      checkArray0: this.fb.array([], [Validators.required])
    })

    this.form1 = this.fb.group({
      checkArray1: this.fb.array([], [Validators.required])
    })

    this.form2 = this.fb.group({
      checkArray2: this.fb.array([], [Validators.required])
    })

    this.form3 = this.fb.group({
      checkArray3: this.fb.array([], [Validators.required])
    })
    this.form4 = this.fb.group({
      checkArray4: this.fb.array([], [Validators.required])
    })
    this.geForm= new GenEdFormComponent( fb );
    
  }

  ngOnInit(): void {
    this.retrieveCourses();
    this.retrieveElective1Courses();
    this.retrieveElective2Courses();
    this.retrieveElective3Courses();
    this.retrieveGEAreaACourses();
    this.retrieveGEAreaBCourses();
    this.retrieveGEAreaCCourses();
    this.retrieveGEAreaDCourses();
    this.retrieveGEAreaECourses();
  }

  /**retrieveCourses populates the arrays needed for checkbox forms
   * calls course.service.ts to retrieve data from Java spring backend with HTTP get request
  */
  retrieveCourses(): void{
    this.courseService.getAll()
      .subscribe(
        data=>{
          this.coreCourses=data;
        },
        error =>{
          console.log(error);
        })
        .add(() => {
          this.courseService.getCoreCompleted()
          .subscribe(response=>{
            this.completedCoreCourses=response;
          },
          err => {
            console.log(err);
          })
          .add(() => {
            this.booleanCoreArray=this.populateCore(this.booleanCoreArray);
          })
        });
  }

  retrieveElective1Courses(): void{
    this.courseService.getElective1All()
      .subscribe(
        data=>{
          this.elective1Courses=data;
        },
        error =>{
          console.log(error);
        });
  }

  retrieveElective2Courses(): void{
    this.courseService.getElective2All()
      .subscribe(
        data=>{
          this.elective2Courses=data;
        },
        error =>{
          console.log(error);
        });
  }

  retrieveElective3Courses(): void{
    this.courseService.getElective3All()
      .subscribe(
        data=>{
          this.elective3Courses=data;
        },
        error =>{
          console.log(error);
        });
  }

  retrieveGEAreaACourses(): void{
    this.courseService.getGEAreaA1All()
      .subscribe(
        data=>{
          this.a1courses=data;
        },
        error =>{
          console.log(error);
        });

    this.courseService.getGEAreaA2All()
      .subscribe(
        data=>{
          this.a2courses=data;
      },          
        error =>{
          console.log(error);
        });
        
    this.courseService.getGEAreaA3All()
      .subscribe(
        data=>{
          this.a3courses=data;
        },          
        error =>{
          console.log(error);
    });
  }

  retrieveGEAreaBCourses(): void{
    this.courseService.getGEAreaB1All()
      .subscribe(
        data=>{
          this.b1courses=data;
          console.log(data)
        },
        error =>{
          console.log(error);
        });

      this.courseService.getGEAreaB2All()
        .subscribe(
        data=>{
          this.b2courses=data;
        },          
        error =>{
          console.log(error);
        });
        
      this.courseService.getGEAreaB3All()
        .subscribe(
        data=>{
          this.b3courses=data;
        },          
        error =>{
          console.log(error);
        });

    this.courseService.getGEAreaB4All()
      .subscribe(
       data=>{
         this.b4courses=data;
       },          
       error =>{
         console.log(error);
       });
 
    this.courseService.getGEAreaB5All()
       .subscribe(
        data=>{
          this.b5courses=data;
          console.log(data);
        },          
        error =>{
          console.log(error);
        });
  }

  retrieveGEAreaCCourses(): void{
    this.courseService.getGEAreaC1All()
      .subscribe(
        data=>{
          this.c1courses=data;
        },
        error =>{
          console.log(error);
        });

    this.courseService.getGEAreaC2All()
      .subscribe(
        data=>{
          this.c2courses=data;
      },          
        error =>{
          console.log(error);
        });
        
    this.courseService.getGEAreaC3All()
      .subscribe(
        data=>{
          this.c3courses=data;
        },          
        error =>{
          console.log(error);
    });
  }

  retrieveGEAreaDCourses(): void{
    this.courseService.getGEAreaD1All()
      .subscribe(
        data=>{
          this.d1courses=data;
          console.log(data)
        },
        error =>{
          console.log(error);
        });

      this.courseService.getGEAreaD2All()
        .subscribe(
        data=>{
          this.d2courses=data;
        },          
        error =>{
          console.log(error);
        });
        
      this.courseService.getGEAreaD3All()
        .subscribe(
        data=>{
          this.d3courses=data;
        },          
        error =>{
          console.log(error);
        });

    this.courseService.getGEAreaD4All()
      .subscribe(
       data=>{
         this.d4courses=data;
       },          
       error =>{
         console.log(error);
       });
 
  }

  retrieveGEAreaECourses(): void{
    this.courseService.getGEAreaEAll()
      .subscribe(
        data=>{
          this.ecourses=data;
          console.log(data)
        },
        error =>{
          console.log(error);
        });
      }


  /**onCheckboxChange methods take in event from respective form, add checkbox value which is json object to FormArray */
  onCoreCheckboxChange(e) {
  	const checkArray0: FormArray = this.form0.get('checkArray0') as FormArray;
    if (e.target.checked) {
      checkArray0.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray0.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray0.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onElective1CheckboxChange(e) {
    const checkArray1: FormArray = this.form1.get('checkArray1') as FormArray;
    if (e.target.checked) {
      checkArray1.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray1.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray1.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onElective2CheckboxChange(e) {
    const checkArray2: FormArray = this.form2.get('checkArray2') as FormArray;
    if (e.target.checked) {
      checkArray2.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray2.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray2.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onElective3CheckboxChange(e) {
    const checkArray3: FormArray = this.form3.get('checkArray3') as FormArray;
    if (e.target.checked) {
      checkArray3.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray3.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray3.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onIgeCheckboxChange(e) {
    const checkArray4: FormArray = this.form4.get('checkArray4') as FormArray;
    if (e.target.checked) {
      checkArray4.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray4.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray4.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

/** submitForm methods user course.service.ts to send FormArray as HTTP Put request 
 * to Java Spring backend
 */
  submitFormCore() {
    // Gets the number of checkboxes checked for core courses
    var checkedUnits = 0;
    this.form0.value.checkArray0.forEach(function (value) {
    	let course = JSON.parse(value);
    	checkedUnits += course.units;
    });
    var percent = Math.round(checkedUnits / 65 * 100);
    this.percentCore = percent + "%";

    //Change the color of the progress bar based on how many courses completed
    if (percent < 26) {
      this.colorCore = 'Red';
    } else if (percent < 51) {
      this.colorCore = 'DarkOrange';
    } else if (percent < 76) {
        this.colorCore = 'GoldenRod';
    } else if (percent == 100) {
      this.colorCore = 'RoyalBlue';
    } else {
      this.colorCore = 'ForestGreen';
    }
    
    //console.log(this.form1.value)
    //console.log(this.form1.value.checkArray1);
    //don't need the json key checkArray#, so just get value of key and send
    this.courseService.updateCore(this.form0.value.checkArray0);
  }

  submitFormElective1() {
    // Gets the number of checkboxes checked for electives1 courses
    var checkedUnits = 0;
    this.form1.value.checkArray1.forEach(function (value) {
    	let course = JSON.parse(value);
    	checkedUnits += course.units;
    });
    var percent = Math.round(checkedUnits / 12 * 100);
    this.percentElectives1 = percent + "%";

    //Change the color of the progress bar based on how many courses completed
    if (percent < 26) {
      this.colorElectives1 = 'Red';
    } else if (percent < 51) {
      this.colorElectives1 = 'DarkOrange';
    } else if (percent < 76) {
        this.colorElectives1 = 'GoldenRod';
    } else if (percent < 100) {
      this.colorElectives1 = 'ForestGreen';
    } else {
      this.colorElectives1 = 'RoyalBlue';
      this.percentElectives1 = "100%";
    }

    console.log(this.form1.value);
    this.courseService.updateElectives1(this.form1.value.checkArray1);
  }

  submitFormElective2() {
    // Gets the number of checkboxes checked for electives2 courses
    var checkedUnits = 0;
    this.form2.value.checkArray2.forEach(function (value) {
    	let course = JSON.parse(value);
    	checkedUnits += course.units;
    });
    var percent = Math.round(checkedUnits / 3 * 100);
    this.percentElectives2 = percent + "%";

    //Change the color of the progress bar based on how many courses completed
    if (percent < 26) {
      this.colorElectives2 = 'Red';
    } else if (percent < 51) {
      this.colorElectives2 = 'DarkOrange';
    } else if (percent < 76) {
        this.colorElectives2 = 'GoldenRod';
    } else if (percent < 100) {
      this.colorElectives2 = 'ForestGreen';
    } else {
      this.colorElectives2 = 'RoyalBlue';
      this.percentElectives2 = "100%";
    }

    console.log(this.form2.value);
    this.courseService.updateElectives2(this.form2.value.checkArray2);
  }

  submitFormElective3() {
    // Gets the number of checkboxes checked for electives3 courses
    var checkedUnits = 0;
    this.form3.value.checkArray3.forEach(function (value) {
    	let course = JSON.parse(value);
    	checkedUnits += course.units;
    });
    var percent = Math.round(checkedUnits / 4 * 100);
    this.percentElectives3 = percent + "%";

    //Change the color of the progress bar based on how many courses completed
    if (percent < 26) {
      this.colorElectives3 = 'Red';
    } else if (percent < 51) {
      this.colorElectives3 = 'DarkOrange';
    } else if (percent < 76) {
        this.colorElectives3 = 'GoldenRod';
    } else if (percent < 100) {
      this.colorElectives3 = 'ForestGreen';
    } else {
      this.colorElectives3 = 'RoyalBlue';
      this.percentElectives3 = "100%";
    }

    console.log(this.form3.value);
    this.courseService.updateElectives3(this.form3.value.checkArray3);
  }

  submitFormIGE() {
    console.log(this.form4.value)
  }

  onGESubmit(e) {
    console.log(e);
  }
	
	populateCore(arg:Array<boolean>):Array<boolean> {
    this.coreCourses.forEach(element => {
      let e = JSON.parse(JSON.stringify(element));
      this.completedCoreCourses.forEach(completedElement => {
        let c = JSON.parse(JSON.stringify(completedElement));
        if(e.courseNumber == c.courseNumber) {
          arg.push(true);
          const checkArray0: FormArray = this.form0.get('checkArray0') as FormArray;
          checkArray0.push(new FormControl(JSON.stringify(element)));
        }
      });
      if(arg.length != (this.coreCourses.indexOf(element) + 1)) {
        arg.push(false);
      }
    });
    return this.booleanCoreArray;
	}
}
