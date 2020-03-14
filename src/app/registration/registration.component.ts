import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Users } from '../model/users';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user:Users;
  msg: string;
  isNew: boolean;


  constructor(private userservice: UserserviceService,
    private actRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    let id = this.actRoute.snapshot.params.id;

    if (id) {
      this.isNew = false;
      this.userservice.getById(id).subscribe(
        (data) => {
          this.user = data;
        }
      );
    } else {
      this.isNew = true;
      this.user = {
        id: 0,
        username: "",
        password: "",
        confirmPassword: "",
      };
    }
  }

  save() {
    let ob: Observable<Users>;

    if (this.isNew) {
      ob = this.userservice.add(this.user);
    }
    ob.subscribe(
      () => {
        
        this.router.navigateByUrl("");
      },
      (errResponse) => {
        this.msg = errResponse.error;

      }
    );
  }
}