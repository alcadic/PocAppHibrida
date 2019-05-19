import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../../services/user-service.service';
import { Usuario } from '../../models/Usuario'

@Component({
  selector: 'app-v2-add-registro',
  templateUrl: './v2-add-registro.page.html',
  styleUrls: ['./v2-add-registro.page.scss'],
})
export class V2AddRegistroPage implements OnInit {

  public paraForm: FormGroup;
  submitted = false;
  private idUsuario: number = undefined;
  private usuario: Usuario = undefined;

  constructor(private formBuilder: FormBuilder, private router: Router, private userServiceService: UserServiceService) {
    this.paraForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      dni: ['', Validators.required]
    });
  }

  get f() { 
    return this.paraForm.controls; 
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.rellenar();
  }

  rellenar(){
    
    if(this.userServiceService.usuarioMarcado){
      document.getElementById("nombre").setAttribute("value", this.userServiceService.usuarioMarcado.getNombre());
      this.paraForm.controls['nombre'].setValue(this.userServiceService.usuarioMarcado.getNombre());
      document.getElementById("apellidos").setAttribute("value", this.userServiceService.usuarioMarcado.getApellidos());
      this.paraForm.controls['apellidos'].setValue(this.userServiceService.usuarioMarcado.getApellidos());
      document.getElementById("dni").setAttribute("value", this.userServiceService.usuarioMarcado.getDni());
      this.paraForm.controls['dni'].setValue(this.userServiceService.usuarioMarcado.getDni());
      this.idUsuario = this.userServiceService.usuarioMarcado.getId();
    }

    this.userServiceService.usuarioMarcado = undefined;
    
  }

  onSignIn(){
    
    this.submitted = true;

    if (this.paraForm.invalid) {
        return;
    }

    this.usuario = new Usuario();
    this.usuario.setNombre(this.paraForm.value.nombre);
    this.usuario.setApellidos(this.paraForm.value.apellidos);
    this.usuario.setDni(this.paraForm.value.dni);

    if(this.idUsuario != null && this.idUsuario != undefined){
        this.usuario.setId(this.idUsuario);
        this.updateUsuario();
    } else {
        this.addUsuario();
    }

    this.idUsuario = undefined;
    this.usuario = undefined;
  }

  async updateUsuario(){
    
    let me = this;

        let susServ = this.userServiceService.updateUsuario(this.usuario).subscribe(
            response => {
                let responseJson = JSON.parse(response);
                this.router.navigate(['v1-principal']);
                susServ.unsubscribe();
            },
            err => {
                susServ.unsubscribe();
            }

        );
}

async addUsuario(){
  let me = this;

      let susServ = this.userServiceService.addUsuario(this.usuario).subscribe(
          response => {
              let responseJson = JSON.parse(response);
              this.router.navigate(['v1-principal']);
              susServ.unsubscribe();
          },
          err => {
              susServ.unsubscribe();
          }

      );
}


}
