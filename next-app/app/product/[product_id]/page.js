import Productdetalis from "@/app/components/ProductDetalis"
export default async function productDetalis({ params }) {
    const id = params.product_id
    console.log(params.product_id)






    return (
        <div>
            <Productdetalis ID={id} />
        </div>
    )
}