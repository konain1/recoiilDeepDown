// AtomPage.js
import { atom, selector } from 'recoil';

export const ContactNotification = atom({
    key: 'contactNotification',
    default: 10
});

export const ServiceNotification = atom({
    key: 'serviceNotification',
    default: 1
});

export const AboutNotification = atom({
    key: 'aboutNotification',
    default: 0
});

// export const HomeNotification = atom({
//     key: 'homeNotification',
//     default: 10
// });

export const ProductNotification = atom({
    key: 'productNotification',
    default: 1
});

// export const totalNotification = atom({
//     key: 'totalNotification',
//     default: 1
// });


export const tatalNotification = selector({
    key:'totalnotification',
    get:({get}) =>{
       
        const service = get(ServiceNotification)
        const about = get(AboutNotification)
        const product = get(ProductNotification)
        const contact = get(ContactNotification)
        return parseInt(contact + product + about + service )
      
    }
})