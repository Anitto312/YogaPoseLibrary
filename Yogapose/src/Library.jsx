// import "./css/Library.css"
// const Library = () => {
//   return (
//     <div class="grid-container">
//       <div class="grid-items"><button class="grid-button"><img src="/yoga1.png" alt="image-yoga" height="300px" width="300px"/></button><h4>yoga1</h4></div>
//       <div class="grid-items"><button class="grid-button"><img src="/yoga2.png" alt="image-yoga" height="300px" width="300px"/></button><h4>yoga2</h4></div>
//       <div class="grid-items"><button class="grid-button"><img src="/yoga3.png" alt="image-yoga" height="300px" width="300px"/></button><h4>yoga3</h4></div>
//       <div class="grid-items"><button class="grid-button"><img src="/yoga4.png" alt="image-yoga" height="300px" width="300px"/></button><h4>yoga4</h4></div>
//       <div class="grid-items"><button class="grid-button"><img src="/yoga5.png" alt="image-yoga" height="300px" width="300px"/></button><h4>yoga5</h4></div>
//       <div class="grid-items"><button class="grid-button"><img src="/yog6.png" alt="image-yoga" height="300px" width="300px"/></button><h4>yoga6</h4></div>
//       <div class="grid-items"><button class="grid-button"><img src="/yoga7.png" alt="image-yoga" height="300px" width="300px"/></button><h4>yoga7</h4></div>
//       <div class="grid-items"><button class="grid-button"><img src="/yoga8.png" alt="image-yoga" height="300px" width="300px"/></button><h4>yoga8</h4></div>
//       <div class="grid-items"><button class="grid-button"><img src="/yoga9.png" alt="image-yoga" height="300px" width="300px"/></button><h4>yoga9</h4></div>
//     </div>
//   );
// };
// export default Library;
import { useState } from "react";
import "./css/Library.css";

const yogaPoses = [
    { id: 1, name: "Downward Facing Dog", type: "Standing", image: "/yoga1.jpg", description: "A great pose for stretching your hamstrings and back." },
    { id: 2, name: "Tree Pose", type: "Standing", image: "/yoga2.jpg", description: "Improves balance and strengthens your legs." },
    { id: 3, name: "Warrior II", type: "Standing", image: "/yoga3.jpg", description: "Strengthens legs, shoulders, and increases stamina." },
    { id: 4, name: "Child's Pose", type: "Resting", image: "/yoga4.jpg", description: "A gentle resting pose to relax your body." },
    { id: 5, name: "Cobra Pose", type: "Backbend", image: "/yoga5.jpg", description: "Opens up the chest and strengthens the spine." },
    { id: 6, name: "Bridge Pose", type: "Backbend", image: "/yoga6.jpg", description: "Strengthens legs, glutes, and lower back." },
    { id: 7, name: "Seated Forward Bend", type: "Seated", image: "/yoga7.jpg", description: "Stretches hamstrings, lower back, and spine." },
    { id: 8, name: "Triangle Pose", type: "Standing", image: "/yoga8.jpg", description: "Great for stretching the legs and improving flexibility." },
    { id: 9, name: "Cat-Cow Pose", type: "Warm-up", image: "/yoga9.jpg", description: "Increases spinal flexibility and relieves tension." }
];

const Library = () => {
    const [search, setSearch] = useState("");

    const filteredPoses = yogaPoses.filter(pose =>
        pose.name.toLowerCase().includes(search.toLowerCase()) || 
        pose.type.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="library-container">
            <h2>Yoga Pose Library</h2>
            <input 
                type="text" 
                placeholder="Search Yoga Poses..." 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
                className="search-bar"
            />
            <div className="pose-grid">
                {filteredPoses.map((pose) => (
                    <div key={pose.id} className="pose-card">
                        <img src={pose.image} alt={pose.name} />
                        <h3>{pose.name}</h3>
                        <p><strong>Type:</strong> {pose.type}</p>
                        <p>{pose.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Library;
