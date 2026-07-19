import axios from 'axios';
export const getUsers=()=>axios.get('http://example.com/api/users');
export const query=(id)=>'SELECT * FROM users WHERE id='+id;