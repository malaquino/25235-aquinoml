
export async function getProduct(productId) {
    const respuesta = await fetch("https://dummyjson.com/products/" + productId);
    if (!respuesta.ok) {
        throw new Error('Error al obtener el producto');
      }
    const datos = await respuesta.json();
    return datos;
}