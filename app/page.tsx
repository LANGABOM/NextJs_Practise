import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>Welcome to our comprehensive tickets portal, your one-stop destination for accessing a diverse array of events! Whether you're looking to immerse yourself in the vibrant atmosphere of social gatherings, dance the night away at electrifying night events, or seek spiritual enrichment through church gatherings, our platform offers a seamless and convenient way to secure your spot. With a user-friendly interface, you can effortlessly browse through an assortment of events tailored to your interests and preferences. From lively parties that celebrate life's joys to serene church events that nurture the soul, our portal caters to every facet of your social and spiritual spectrum. Purchase your tickets hassle-free, stay updated with event details, and embark on memorable experiences that resonate with you. Join us in embracing the enriching tapestry of events that bring communities together and create lasting memories."





</p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2>Company Updates</h2>

      <div className="card">
        <h3>New member of the web dev team...</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at quam. Dolores omnis possimus quam soluta rerum illo laborum ullam pariatur molestiae, modi beatae corrupti.</p>
      </div>
      <div className="card">
        <h3>New website live!</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at quam. Dolores omnis possimus quam soluta rerum illo laborum ullam pariatur molestiae, modi beatae corrupti, assumenda distinctio adipisci, cupiditate minima eum vitae? Similique dicta est facilis debitis, autem temporibus quo repellat illum unde id iste veritatis eveniet, aspernatur enim quas.</p>
      </div>
    </main>
  )
}
