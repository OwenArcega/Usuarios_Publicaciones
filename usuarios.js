class Usuario{
    constructor(){
        this.usuarios = usuarios;
    }

    listar(){
        let list = "";
            $.each(this.usuarios,(indice,p)=>{
                list += `<tr><td>${p.name}</td><td>${p.username}</td><td>${p.email}</td><td>${p.address.street}</td><td>${p.address.suite}</td><td>${p.address.city}</td><td>${p.address.zipcode}</td><td>${p.address.geo.lat}</td><td>${p.address.geo.lng}</td><td>${p.phone}</td><td>${p.website}</td><td>${p.company.name}</td><td>${p.company.catchPhrase}</td><td>${p.company.bs}</td></tr>`
            })
        return list;
        } 

    buscar(username){
        for(let i = 0; i < this.usuarios.length; i++){
            if(this.usuarios[i].username === username){
                return this.usuarios[i];
            }
        }
        return null;
    }

    agregar(nuevo){
        return this.usuarios.push(nuevo);
    }
}
