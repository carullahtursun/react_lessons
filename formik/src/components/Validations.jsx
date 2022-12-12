

import { object, string, number, date, InferType, ref } from 'yup';
let Validations = object({
    email: string().email('Geçerli bir email giriniz').required('Zorunlu alan'),
    password:string().min(5,'En az 5 karakter olmalıdır').required('Zorunlu alan'),
    passwordConfirm:string().oneOf([ref('password')],'Parolalar Uyuşmuyor').required('Zorunlu alan'),    
  });


export default Validations