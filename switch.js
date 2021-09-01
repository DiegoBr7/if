let permissa ; // comum,gerente,diretr
permissa = 'diretor';
switch(permissa) {
    case 'comum':
        console.log('usuario comum');
        break;

    case 'gerene':
    console.log('usuario gerente') ;
    break ;

    case 'diretor':
        console.log('usuario diretor');
        break;

        default:
            console.log('usuario n reconhecido')
}
