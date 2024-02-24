import Link from 'next/link';
import { client } from "../config/contentful";
import Header from "../header/page";

const fetchProduct = async () => {
    const product = await client.getEntries({
        'content_type': "services"
    });
    return product.items;
};

export default async function Product() {
    const data = await fetchProduct();

    return (
        <div className="flex flex-col items-center">
            <Header />
            <h1 className="mb-10">List of Products</h1>
            {data?.map((product):any => (
                <Link key={product.sys.id} href="/details">
                    <div className="bg-red-500 p-10 mb-4 flex items-center justify-center cursor-pointer" style={{ height: "400px", width: "400px" }}>
                        <h2>{product?.fields?.heading}</h2>
                    </div>
                </Link>
            ))}
        </div>
    );
}
