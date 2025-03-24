export default  async function ProductsDetials( {
params,
}: {
    params:Promise < { productsid: string }>;
}) {
    const { productsid } = await params;
    return <h1>Details about the product {productsid}</h1>;
}
