import CategoryDetails from "@/app/components/CategoryDetails"
export default async function categoryDetalis({ params }) {
    const category_id = params.category_id
    console.log(category_id)






    return (
        <div>
            <CategoryDetails IDs={category_id} />
        </div>
    )
}