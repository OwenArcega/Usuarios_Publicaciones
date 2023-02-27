class Interface{
    constructor(){
        this.Usuarios = new Usuario();
        this.publicaciones = new Posts();
        $('#tabla_usuarios').append(this.Usuarios.listar())
        //Menú de selección de usuario
        $(document).ready(()=>{
            for(let i = 0; i < this.Usuarios.usuarios.length; i++){
                $("#select-usuarios").append(`<option value="${this.Usuarios.usuarios[i].id}">${this.Usuarios.usuarios[i].username}</option>`)
            }
            this.publicacionesPorUsuario($('#select-usuarios').val());
        });
    }

    cambiarClase(elemento){
        if(elemento.attr('class') === 'oculta'){
            elemento.removeClass("oculta");
        } else{
            elemento.addClass("oculta");
        }
    }

    mostrarSecciones(elementoAOcultar, agregar = false, tabla = false, buscar = false, formulario = false, mostrar = false){        
        if(agregar == true){
            $('#form_u').removeClass('oculta');
        } else if(tabla == true){
            $('#table_u').removeClass('oculta');
        } else if(buscar == true){
            $('#Buscar_u').removeClass('oculta');
        } else if(formulario == true){
            $('#form_p').removeClass('oculta');
        } else if(mostrar == true){
            $('#buscar_p').removeClass('oculta');
        }
        elementoAOcultar.addClass('oculta');
    }

    mostrarMenu(elemento){
        const self = this;
        $('ul').children().each(function(){
            if($(this).attr('class') == "oculta"){
                self.cambiarClase($(this));
            } 
        });
        self.cambiarClase(elemento.parent());
    }

    agregarUsuario(){
            const self = this;

            let id = this.Usuarios.usuarios[this.Usuarios.usuarios.length-1].id+1;
            let name = $("#name").val();
            let username = $("#username").val();
            let email = $("#email").val();
            let street = $("#street").val();
            let suit = $("#suit").val();
            let city = $("#city").val();
            let zipcode = $("#zipcode").val();
            let lat = $("#lat").val();
            let lng = $("#lng").val();
            let phone = $("#phone").val();
            let website = $("#website").val();
            let company = $("#company").val();
            let catchphrase = $("#catchphrase").val();
            let bs = $("#bs").val();

            let nuevo = {
                "id": id,
                "name": name,
                "username": username,
                "email": email,
                "address": {
                    "street": street,
                    "suite": suit,
                    "city": city,
                    "zipcode": zipcode,
                    "geo": {
                        "lat": lat,
                        "lng": lng
                    }
                },
                "phone": phone,
                "website": website,
                "company": {
                    "name": company,
                    "catchPhrase": catchphrase,
                    "bs": bs
                }
            };

            this.Usuarios.agregar(nuevo);
    
                $('#tabla_usuarios').empty();
                $('#tabla_usuarios').append("<tr><th>Name</th><th>Username</th><th>Email</th><th>Street</th><th>Suit</th><th>City</th><th>Zipcode</th><th>Lat</th><th>Lng</th><th>Phone</th><th>Website</th><th>Company Name</th><th>Catch Phrase</th><th>Bs</th></tr>");
                $('#tabla_usuarios').append(this.Usuarios.listar())
                $('#name').val("");
                $('#username').val("");
                $('#email').val("");
                $('#street').val("");
                $('#suit').val("");
                $('#city').val("");
                $('#zipcode').val("");
                $('#lat').val("");
                $('lng').val("");
                $('#phone').val("");
                $('#website').val("");
                $('#company').val("");
                $('#catchphrase').val("");
                $('#bs').val("");
            }

    buscarUsuario(usuario){
        let resultado = this.Usuarios.buscar(usuario);
            if(resultado === null){
                alert("Sin coincidencias");
                $("#buscador").val("");
            } else{
                $("#name").val(resultado.name);
                $("#username").val(resultado.username);
                $("#email").val(resultado.email);
                $("#street").val(resultado.address.street);
                $("#suit").val(resultado.address.suite);
                $("#city").val(resultado.address.city);
                $("#zipcode").val(resultado.address.zipcode);
                $("#lat").val(resultado.address.geo.lat);
                $("#lng").val(resultado.address.geo.lng);
                $("#phone").val(resultado.phone);
                $("#website").val(resultado.website);
                $("#company").val(resultado.company.name);
                $("#catchphrase").val(resultado.company.catchPhrase);
                $("#bs").val(resultado.company.bs);

                $('#form_u').removeClass('oculta');
                $('#form_u').find('input').each(function(){
                    $(this).attr("disabled",true);
                });
                $('#form_u').find('button').each(function(){
                    $(this).removeClass('boton');
                    $(this).addClass("oculta");
                    }
                );
            }
    }

    ocultarForm(){
        $('#form_u').addClass('oculta');
    }

    publicacionesPorUsuario(usuarioId){
        let resultado = this.publicaciones.PostsUsuario(usuarioId);
        if(resultado.length == 0){
            $("#resultado-user-post").text("Sin Registros");
        } else{
            $("#resultado-user-post").empty();
            for(let i = 0; i < resultado.length; i++){
                $("#resultado-user-post").append(`<div class='p-post'>${i+1}. <strong>${resultado[i].title}</strong><p>${resultado[i].body}</p></div>`);
            }
        }
        console.log($("#resultado-user-post"));
    }

    obtenerPublicacion(postId){
            let resultado = this.publicaciones.obtenerPost(postId);
            if(resultado === null){
                $("#resultado-post").text("Sin Registros");
            } else{
                $("#resultado-post").empty();
                $("#resultado-post").append(`<div class="p-post"><strong>${resultado.title}</strong><p>${resultado.body}</p></div>`);
            }
    }
}