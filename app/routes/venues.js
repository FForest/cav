import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      id: 'greenspon',
      title: 'Greenspon',
      address: '71 Morton Street, New York, NY  10014',
      email: '...@gmail.com',
      phone: 'xxx.xxx.xxxx',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
    }, {
      id: 'veda',
      title: 'Veda',
      address: 'Borgo Pinti 84/R, 50121 Florence',
      email: '...@gmail.com',
      phone: 'xxx.xxx.xxxx',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
    }, {
      id: 'bureau_des_realities',
      title: 'Bureau des Realities',
      address: '327 Chaussee de Neerstalle 1190 Brussels',
      email: '...@gmail.com',
      phone: 'xxx.xxx.xxxx',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
    }];
  }	
});
