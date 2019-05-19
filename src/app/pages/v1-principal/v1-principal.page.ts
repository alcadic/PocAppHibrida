import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { Router } from '@angular/router';
import { Usuario } from '../../models/Usuario'

@Component({
  selector: 'app-v1-principal',
  templateUrl: './v1-principal.page.html',
  styleUrls: ['./v1-principal.page.scss'],
})
export class V1PrincipalPage implements OnInit {

    public usuarios: Array<Usuario> = [];

  constructor(private router: Router, private userServiceService: UserServiceService) { }

  ngOnInit() {
  }

  ionViewWillEnter (){
    this.usuarios = [];
    this.getAll();
  }


  /////////////////////////////////////// SERVICIOS ///////////////////////////////////////////////
  async getAll(){

      let me = this;

      let susServ = this.userServiceService.getAll().subscribe(
          response => {
              let responseJson = JSON.parse(response);

                let usuario;
                responseJson.usuarios.forEach(function(user, index) {

                    usuario = new Usuario();
                    usuario.setId(user.id);
                    usuario.setNombre(user.nombre);
                    usuario.setApellidos(user.apellidos);
                    usuario.setDni(user.dni);
                    me.usuarios.push(usuario);

                });

              susServ.unsubscribe();
          },
          err => {
              susServ.unsubscribe();
          }

      );

  }

  async getUsuario(){
    let me = this;

        let susServ = this.userServiceService.getUsuario().subscribe(
            response => {
                let responseJson = JSON.parse(response);
                susServ.unsubscribe();
            },
            err => {
                susServ.unsubscribe();
            }

        );
    }

    async delUsuario(){

        let me = this;
    
            let susServ = this.userServiceService.delUsuario(this.userServiceService.usuarioMarcado).subscribe(
                response => {
                    let responseJson = JSON.parse(response);
                    this.ionViewWillEnter();
                    susServ.unsubscribe();
                },
                err => {
                    susServ.unsubscribe();
                }
    
            );
    }

    /////////////////////////////////////// OTRAS ///////////////////////////////////////////////
    eliminar(value:any) {
        this.userServiceService.usuarioMarcado = value;
        this.delUsuario();
    }

    editar(value:any){
        this.userServiceService.usuarioMarcado = value;
        this.router.navigate(['v2-add-registro']);
    }

}
