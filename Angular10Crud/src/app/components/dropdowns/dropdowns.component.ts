import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../services/course.service';
import { JsonPipe } from '@angular/common';

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
  completedElectives1Courses: Array<any>;
  completedElectives2Courses: Array<any>;
  completedElectives3Courses: Array<any>;
  
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

  completedGEs: any;
  completedA1: any;
  completedA2: any;
  completedA3: any;
  completedB1: any;
  completedB2: any;
  completedB3: any;
  completedB4: any;
  completedB5: any;
  completedC1: any;
  completedC2: any;
  completedC3: any;
  completedD1: any;
  completedD2: any;
  completedD3: any;
  completedD4: any;
  completedE: any;

  form0: FormGroup;
  form1: FormGroup;
  form2: FormGroup;
  form3: FormGroup;
  form4: FormGroup;
  parentAreaAForm: FormGroup;
  parentAreaBForm: FormGroup;
  parentAreaCForm: FormGroup;
  parentAreaDForm: FormGroup;
  parentAreaEForm: FormGroup;

  constructor(private fb: FormBuilder, private courseService: CourseService) {
    this.form0 = this.fb.group({
      checkArray0: this.fb.array([], [Validators.required])
    });

    this.form1 = this.fb.group({
      checkArray1: this.fb.array([], [Validators.required])
    });

    this.form2 = this.fb.group({
      checkArray2: this.fb.array([], [Validators.required])
    });

    this.form3 = this.fb.group({
      checkArray3: this.fb.array([], [Validators.required])
    });
    this.form4 = this.fb.group({
      checkArray4: this.fb.array([], [Validators.required])
    });
    
    this.parentAreaAForm = this.fb.group({
      areaA1: '',
      areaA2: '',
      areaA3: ''
    });

    this.parentAreaBForm = this.fb.group({
      areaB1: '',
      areaB2: '',
      areaB3: '',
      areaB4: '',
      areaB5: ''
    });
    
    this.parentAreaCForm = this.fb.group({
      areaC1: '',
      areaC2: '',
      areaC3: ''
    });

    this.parentAreaDForm = this.fb.group({
      areaD1: '',
      areaD2: '',
      areaD3: '',
      areaD4: ''
    });

    this.parentAreaEForm = this.fb.group({
      areaE: ''
    });

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
            this.updateCoreProgressBar();
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
        })
        .add(() => {
          this.courseService.getElectives1Completed()
          .subscribe(response => {
            this.completedElectives1Courses=response;
          },
          err => {
            console.log(err);
          })
          .add(() => {
            this.booleanElectives1Array=this.populateElectives1(this.booleanElectives1Array);
            this.updateElectives1ProgressBar();
          })
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
        })
        .add(() => {
          this.courseService.getElectives2Completed()
          .subscribe(response => {
            this.completedElectives2Courses=response;
          },
          err => {
            console.log(err);
          })
          .add(() => {
            this.booleanElectives2Array=this.populateElectives2(this.booleanElectives2Array);
            this.updateElectives2ProgressBar();
          })
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
        })
        .add(() => {
          this.courseService.getElectives3Completed()
          .subscribe(response => {
            this.completedElectives3Courses=response;
          },
          err => {
            console.log(err);
          })
          .add(() => {
            this.booleanElectives3Array=this.populateElectives3(this.booleanElectives3Array);
            this.updateElectives3ProgressBar();
          })
        });
  }

  retrieveGEAreaACourses(): void{
    this.courseService.getGEAreaA1Completed()
      .subscribe(
        data=>{
          this.completedA1=data;
          if(this.completedA1 != null) {
            var c = JSON.parse(JSON.stringify(this.completedA1));
            c.completionStatus = "TO DO";
            this.parentAreaAForm.controls["areaA1"].patchValue(JSON.stringify(c));
          }
        },
        error=>{
          console.log(error);
        }
      )

    this.courseService.getGEAreaA2Completed()
      .subscribe(
        data=>{
          this.completedA2=data;
          if(this.completedA2 != null) {
            var c = JSON.parse(JSON.stringify(this.completedA2));
            c.completionStatus = "TO DO";
            this.parentAreaAForm.controls["areaA2"].patchValue(JSON.stringify(c));
          }
        },
        error=>{
          console.log(error);
        }
      )

    this.courseService.getGEAreaA3Completed()
      .subscribe(
        data=>{
          this.completedA3=data;
          if(this.completedA3 != null) {
            var c = JSON.parse(JSON.stringify(this.completedA3));
            c.completionStatus = "TO DO";
            this.parentAreaAForm.controls["areaA3"].patchValue(JSON.stringify(c));
          }
        },
        error=>{
          console.log(error);
        }
      )

    this.courseService.getGEAreaA1All()
    .subscribe(
      response=>{
        response.forEach(element => {
          this.a1courses.push(JSON.stringify(element));
        })
      },
      err=>{
        console.log(err);
      }
    )

    this.courseService.getGEAreaA2All()
      .subscribe(
        data=>{
           data.forEach(element => {
             this.a2courses.push(JSON.stringify(element));
           })
      },          
        error =>{
          console.log(error);
        });
        
    this.courseService.getGEAreaA3All()
      .subscribe(
        data=>{
          data.forEach(element => {
            this.a3courses.push(JSON.stringify(element));
          })
        },          
        error =>{
          console.log(error);
    });
  }

  retrieveGEAreaBCourses(): void{
    this.courseService.getGEAreaB1Completed()
      .subscribe(
        data=>{
          this.completedB1=data;
          if(this.completedB1 != null) {
            var c = JSON.parse(JSON.stringify(this.completedB1));
            c.completionStatus = "TO DO";
            this.parentAreaBForm.controls["areaB1"].patchValue(JSON.stringify(c));
          }
        },
        error=>{
          console.log(error);
        }
      )

    this.courseService.getGEAreaB2Completed()
      .subscribe(
        data=>{
          this.completedB2=data;
          if(this.completedB2 != null) {
            var c = JSON.parse(JSON.stringify(this.completedB2));
            c.completionStatus = "TO DO";
            this.parentAreaBForm.controls["areaB2"].patchValue(JSON.stringify(c));
          }
        },
        error=>{
          console.log(error);
        }
      )

    this.courseService.getGEAreaB3Completed()
      .subscribe(
        data=>{
          this.completedB3=data;
          if(this.completedB3 != null) {
            var c = JSON.parse(JSON.stringify(this.completedB3));
            c.completionStatus = "TO DO";
            this.parentAreaBForm.controls["areaB3"].patchValue(JSON.stringify(c));
          }
        },
        error=>{
          console.log(error);
        }
      )

    this.courseService.getGEAreaB4Completed()
      .subscribe(
        data=>{
          this.completedB4=data;
          if(this.completedB4 != null) {
            var c = JSON.parse(JSON.stringify(this.completedB4));
            c.completionStatus = "TO DO";
            this.parentAreaBForm.controls["areaB4"].patchValue(JSON.stringify(c));
          }
        },
        error=>{
          console.log(error);
        }
      )
    
    this.courseService.getGEAreaB5Completed()
      .subscribe(
        data=>{
          this.completedB5=data;
          if(this.completedB5 != null) {
            var c = JSON.parse(JSON.stringify(this.completedB5));
            c.completionStatus = "TO DO";
            this.parentAreaBForm.controls["areaB5"].patchValue(JSON.stringify(c));
          }
        },
        error=>{
          console.log(error);
        }
      )

    this.courseService.getGEAreaB1All()
      .subscribe(
        data=>{
          data.forEach(element => {
            this.b1courses.push(JSON.stringify(element));
          })
        },
        error =>{
          console.log(error);
        });

      this.courseService.getGEAreaB2All()
        .subscribe(
        data=>{
          data.forEach(element => {
            this.b2courses.push(JSON.stringify(element));
          })
        },          
        error =>{
          console.log(error);
        });
        
      this.courseService.getGEAreaB3All()
        .subscribe(
        data=>{
          data.forEach(element => {
            this.b3courses.push(JSON.stringify(element));
          })
        },          
        error =>{
          console.log(error);
        });

    this.courseService.getGEAreaB4All()
      .subscribe(
       data=>{
        data.forEach(element => {
          this.b4courses.push(JSON.stringify(element));
        })
       },          
       error =>{
         console.log(error);
       });
 
    this.courseService.getGEAreaB5All()
       .subscribe(
        data=>{
          data.forEach(element => {
            this.b5courses.push(JSON.stringify(element));
          })
        },          
        error =>{
          console.log(error);
        });
  }

  retrieveGEAreaCCourses(): void{
    this.courseService.getGEAreaC1Completed()
      .subscribe(
        data=>{
          this.completedC1=data;
          if(this.completedC1 != null) {
            var c = JSON.parse(JSON.stringify(this.completedC1));
            c.completionStatus = "TO DO";
            this.parentAreaCForm.controls["areaC1"].patchValue(JSON.stringify(c));
          }
        },
        error=>{
          console.log(error);
        }
      )
    
    this.courseService.getGEAreaC2Completed()
      .subscribe(
        data=>{
          this.completedC2=data;
          if(this.completedC2 != null) {
            var c = JSON.parse(JSON.stringify(this.completedC2));
            c.completionStatus = "TO DO";
            this.parentAreaCForm.controls["areaC2"].patchValue(JSON.stringify(c));
          }
        },
        error=>{
          console.log(error);
        }
      )

    this.courseService.getGEAreaC3Completed()
      .subscribe(
        data=>{
          this.completedC3=data;
          if(this.completedC3 != null) {
            var c = JSON.parse(JSON.stringify(this.completedC3));
            c.completionStatus = "TO DO";
            this.parentAreaCForm.controls["areaC3"].patchValue(JSON.stringify(c));
          }
        },
        error=>{
          console.log(error);
        }
      )

    this.courseService.getGEAreaC1All()
      .subscribe(
        data=>{
          data.forEach(element => {
            this.c1courses.push(JSON.stringify(element))
          })
        },
        error =>{
          console.log(error);
        });

    this.courseService.getGEAreaC2All()
      .subscribe(
        data=>{
          data.forEach(element => {
            this.c2courses.push(JSON.stringify(element))
          })
      },          
        error =>{
          console.log(error);
        });
        
    this.courseService.getGEAreaC3All()
      .subscribe(
        data=>{
          data.forEach(element => {
            this.c3courses.push(JSON.stringify(element))
          })
        },          
        error =>{
          console.log(error);
    });
  }

  retrieveGEAreaDCourses(): void{
    this.courseService.getGEAreaD1Completed()
      .subscribe(
        data=>{
          this.completedD1=data;
          if(this.completedD1 != null) {
            var c = JSON.parse(JSON.stringify(this.completedD1));
            c.completionStatus = "TO DO";
            this.parentAreaDForm.controls["areaD1"].patchValue(JSON.stringify(c));
          }
        },
        error=>{
          console.log(error);
        }
      )
      
    this.courseService.getGEAreaD2Completed()
      .subscribe(
        data=>{
          this.completedD2=data;
          if(this.completedD2 != null) {
            var c = JSON.parse(JSON.stringify(this.completedD2));
            c.completionStatus = "TO DO";
            this.parentAreaDForm.controls["areaD2"].patchValue(JSON.stringify(c));
          }
        },
        error=>{
          console.log(error);
        }
      )

    this.courseService.getGEAreaD3Completed()
      .subscribe(
        data=>{
          this.completedD3=data;
          if(this.completedD3 != null) {
            var c = JSON.parse(JSON.stringify(this.completedD3));
            c.completionStatus = "TO DO";
            this.parentAreaDForm.controls["areaD3"].patchValue(JSON.stringify(c));
          }
        },
        error=>{
          console.log(error);
        }
      )

    this.courseService.getGEAreaD4Completed()
      .subscribe(
        data=>{
          this.completedD4=data;
          if(this.completedD4 != null) {
            var c = JSON.parse(JSON.stringify(this.completedD4));
            c.completionStatus = "TO DO";
            this.parentAreaDForm.controls["areaD4"].patchValue(JSON.stringify(c));
          }
        },
        error=>{
          console.log(error);
        }
      )
    
    this.courseService.getGEAreaD1All()
      .subscribe(
        data=>{
          data.forEach(element => {
            this.d1courses.push(JSON.stringify(element));
          })
        },
        error =>{
          console.log(error);
        });

      this.courseService.getGEAreaD2All()
        .subscribe(
        data=>{
          data.forEach(element => {
            this.d2courses.push(JSON.stringify(element));
          })
        },          
        error =>{
          console.log(error);
        });
        
      this.courseService.getGEAreaD3All()
        .subscribe(
        data=>{
          data.forEach(element => {
            this.d3courses.push(JSON.stringify(element));
          })
        },          
        error =>{
          console.log(error);
        });

    this.courseService.getGEAreaD4All()
      .subscribe(
       data=>{
        data.forEach(element => {
          this.d4courses.push(JSON.stringify(element));
        })
       },          
       error =>{
         console.log(error);
       });
 
  }

  retrieveGEAreaECourses(): void{
    this.courseService.getGEAreaECompleted()
      .subscribe(
        data=>{
          this.completedE=data;
          if(this.completedE != null) {
            var c = JSON.parse(JSON.stringify(this.completedE));
            c.completionStatus = "TO DO";
            this.parentAreaEForm.controls["areaE"].patchValue(JSON.stringify(c));
          }
        },
        error=>{
          console.log(error);
        }
      )

    this.courseService.getGEAreaEAll()
      .subscribe(
        data=>{
          data.forEach(element => {
            this.ecourses.push(JSON.stringify(element));
          })
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
        var loopItem = JSON.stringify(item.value).replace(/\s/gm, "");
        var eventItem = JSON.stringify(e.target.value).replace(/\r|\\n|\s/gm, "");
        if(loopItem == eventItem) {
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
        var loopItem = JSON.stringify(item.value).replace(/\s/gm, "");
        var eventItem = JSON.stringify(e.target.value).replace(/\r|\\n|\s/gm, "");
        if (loopItem == eventItem) {
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
        var loopItem = JSON.stringify(item.value).replace(/\s/gm, "");
        var eventItem = JSON.stringify(e.target.value).replace(/\r|\\n|\s/gm, "");
        if (loopItem == eventItem) {
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
        var loopItem = JSON.stringify(item.value).replace(/\s/gm, "");
        var eventItem = JSON.stringify(e.target.value).replace(/\r|\\n|\s/gm, "");
        if (loopItem == eventItem) {
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

  updateCoreProgressBar() {
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
  }

  updateElectives1ProgressBar() {
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
  }

  updateElectives2ProgressBar() {
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
  }

  updateElectives3ProgressBar() {
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
  }

/** submitForm methods user course.service.ts to send FormArray as HTTP Put request 
 * to Java Spring backend
 */
  submitFormCore() {
    this.updateCoreProgressBar();
    //don't need the json key checkArray#, so just get value of key and send
    this.courseService.updateCore(this.form0.value.checkArray0);
  }

  submitFormElective1() {
    this.updateElectives1ProgressBar();
    this.courseService.updateElectives1(this.form1.value.checkArray1);
  }

  submitFormElective2() {
    this.updateElectives2ProgressBar();
    this.courseService.updateElectives2(this.form2.value.checkArray2);
  }

  submitFormElective3() {
    this.updateElectives3ProgressBar();
    this.courseService.updateElectives3(this.form3.value.checkArray3);
  }

  submitFormIGE() {
    console.log(this.form4.value)
  }

  submitFormGeA() {
    var tempA=[];//don't want to add "" as as objects so checking controls for those values before sending http request
    Object.keys(this.parentAreaAForm.controls).forEach(key => {
      if(this.parentAreaAForm.controls[key].value!="") {
        var temp = this.parentAreaAForm.controls[key].value;
        tempA.push(temp);
      }
    });
    this.courseService.updateAreaA(tempA);
  }

  submitFormGeB() {
    var temp=[];
    Object.keys(this.parentAreaBForm.controls).forEach(key => {
      if(this.parentAreaBForm.controls[key].value!="")
        temp.push(this.parentAreaBForm.controls[key].value);
    });
    this.courseService.updateAreaB(temp);
  }

  submitFormGeC() {
    var temp=[];
    Object.keys(this.parentAreaCForm.controls).forEach(key => {
      if(this.parentAreaCForm.controls[key].value!="")
        temp.push(this.parentAreaCForm.controls[key].value);
    });
    this.courseService.updateAreaC(temp);
  }

  submitFormGeD() {
    var temp=[];
    Object.keys(this.parentAreaDForm.controls).forEach(key => {
      if(this.parentAreaDForm.controls[key].value!="")
        temp.push(this.parentAreaDForm.controls[key].value);
    });
    this.courseService.updateAreaD(temp);
  }
    //  //areaE is legit one value

  submitFormGeE() {
    this.courseService.updateAreaE([this.parentAreaEForm.value.areaE]);
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
  
  populateElectives1(arg:Array<boolean>):Array<boolean> {
    this.elective1Courses.forEach(element => {
      let e = JSON.parse(JSON.stringify(element));
      this.completedElectives1Courses.forEach(completedElement => {
        let c = JSON.parse(JSON.stringify(completedElement));
        if(e.courseNumber == c.courseNumber) {
          arg.push(true);
          const checkArray1: FormArray = this.form1.get('checkArray1') as FormArray;
          checkArray1.push(new FormControl(JSON.stringify(element)));
        }
      });
      if(arg.length != (this.elective1Courses.indexOf(element) + 1)) {
        arg.push(false);
      }
    });
    return this.booleanElectives1Array;
  }
  
  populateElectives2(arg:Array<boolean>):Array<boolean> {
    this.elective2Courses.forEach(element => {
      let e = JSON.parse(JSON.stringify(element));
      this.completedElectives2Courses.forEach(completedElement => {
        let c = JSON.parse(JSON.stringify(completedElement));
        if(e.courseNumber == c.courseNumber) {
          arg.push(true);
          const checkArray2: FormArray = this.form2.get('checkArray2') as FormArray;
          checkArray2.push(new FormControl(JSON.stringify(element)));
        }
      });
      if(arg.length != (this.elective2Courses.indexOf(element) + 1)) {
        arg.push(false);
      }
    });
    return this.booleanElectives2Array;
  }
  
  populateElectives3(arg:Array<boolean>):Array<boolean> {
    this.elective3Courses.forEach(element => {
      let e = JSON.parse(JSON.stringify(element));
      this.completedElectives3Courses.forEach(completedElement => {
        let c = JSON.parse(JSON.stringify(completedElement));
        if(e.courseNumber == c.courseNumber) {
          arg.push(true);
          const checkArray3: FormArray = this.form3.get('checkArray3') as FormArray;
          checkArray3.push(new FormControl(JSON.stringify(element)));
        }
      });
      if(arg.length != (this.elective3Courses.indexOf(element) + 1)) {
        arg.push(false);
      }
    });
    return this.booleanElectives3Array;
  }
}
