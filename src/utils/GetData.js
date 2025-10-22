
export async function getProduct(productId) {
    const respuesta = await fetch("https://dummyjson.com/products/" + productId);
    console.log("respuesta: " + respuesta);
    if (!respuesta.ok) {
        throw new Error('Error al obtener el producto');
      }
    const datos = await respuesta.json();
    console.log("datos: " + datos);
    return datos;
    /*fetch("https://dummyjson.com/products/" + productId)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        return (data);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });*/
}