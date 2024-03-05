import Productdetalis from "@/app/components/ProductDetalis"
export default async function productDetalis({ params }) {
    const id = params.id
    console.log(id)






    return (
        <div>
            <Productdetalis ID={id} />
        </div>
    )
}