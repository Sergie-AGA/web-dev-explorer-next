import SimpleCardLoader from "@/components/Global/Loaders/SimpleCardLoader";

export default function SkeletonLoading() {
    const loaders = Array.from({length: 21})

    return (
        <main className="max-width-container py-4">
        
        <section>
        <ul className="custom-grid lg:grid">
        {loaders.map((loader, index) => (
            <SimpleCardLoader key={index} />
        ))}
    </ul>
    </section>

</main>
    )
}
