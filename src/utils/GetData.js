
export async function getProduct(productId) {
    const respuesta = await fetch("https://6924c11e82b59600d7213ee1.mockapi.io/apitest/v1/products/" + productId);
    if (!respuesta.ok) {
        throw new Error('Error al obtener el producto');
      }
    const datos = await respuesta.json();
    return datos;
}