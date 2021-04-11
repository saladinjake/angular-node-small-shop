import   Product   from '../models/product';
import { User } from '../models/user';
export const  seed  = async function() {
    // First delete all users
    await User.deleteMany({})

    // Create two users
    const smith = await User.create({
        email: 'smith@email.com',
        password: 'abcdef',
        name: 'Mr. Smith',

    })

    const adam = await User.create({
        email: 'adam@email.com',
        password: 'abcdef',
        name: 'Mr. Adam',

    });

    const products = [
      {id: 1, description: 'dark energy vibes 18', name: 'dark energy', image:'./assets/images/products/big/1.jpg', price:12},
      {id: 2, description: 'darkness 18', name: 'darkness', image:'./assets/images/products/big/2.jpg',price:12},
      {id: 3, description: 'midnight haunter 159', name: 'haunter', image:'./assets/images/products/big/3.jpg',price:12},
      {id: 4, description: 'magic  18', name: 'boe glases', image:'./assets/images/products/big/4.jpg',price:12},
      {id: 5, description: 'boe  18', name: 'boe glases', image:'./assets/images/products/big/5.jpg',price:12},
      {id: 6, description: 'salami shoes  159', name: 'salami', image:'./assets/images/products/big/6.jpg',price:12},
      {id: 7, description: 'hades 18', name: 'hades glases', image:'./assets/images/products/big/7.jpg',price:12},
      {id: 8, description: 'demon knights 18', name: 'demon knights', image:'./assets/images/products/big/8.jpg',price:12},
      {id: 9, description: 'orgres 159', name: 'orgres 159', image:'./assets/images/products/big/9.jpg',price:12},
      {id: 10, description: 'kilijoe 18', name: 'killijoe', image:'./assets/images/products/big/10.jpg',price:12},
      {id: 11, description: 'madness glasses 18', name: 'NMandman', image:'./assets/images/products/big/11.jpg',price:12},
      {id: 12, description: 'zobies glasses 159', name: 'zombie specs', image:'./assets/images/products/big/12.jpg',price:12},
      {id: 13, description: 'witch haunter 18', name: 'witches', image:'./assets/images/products/big/13.jpg',price:12},
      {id: 14, description: 'salvation glass 18', name: 'solomon grandy', image:'./assets/images/products/big/3.jpg',price:12},
      {id: 15, description: 'butt glasses 159', name: 'qwert',image:'./assets/images/products/big/1.jpg',price:12},
    ];

    const productsCreated = await Product.create(products)
    return productsCreated;
}
