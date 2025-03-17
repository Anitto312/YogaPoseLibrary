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

import { useState } from "react";

const yogaPoses = [
    { id: 1, name: "Downward Facing Dog", type: "Standing", image: "/yoga1.png", description: "A great pose for stretching your hamstrings and back.", steps: ["Start on all fours", "Lift hips toward the ceiling", "Straighten your legs", "Keep your head between your arms", "Hold and breathe deeply"] },
    { id: 2, name: "Tree Pose", type: "Standing", image: "/yoga2.png", description: "Improves balance and strengthens your legs.", steps: ["Stand straight", "Shift weight to one foot", "Place the other foot on your inner thigh", "Balance and bring palms together", "Hold and breathe"] },
    { id: 3, name: "Warrior II", type: "Standing", image: "/yoga3.png", description: "Strengthens legs, shoulders, and increases stamina.", steps: ["Stand with legs wide apart", "Turn one foot outward", "Bend the front knee", "Extend arms parallel to the floor", "Hold and breathe"] },
    { id: 4, name: "Child's Pose", type: "Resting", image: "/yoga4.png", description: "A gentle resting pose to relax your body.", steps: ["Sit on your heels", "Extend arms forward", "Rest forehead on the mat", "Relax your body", "Breathe deeply"] },
    { id: 5, name: "Cobra Pose", type: "Backbend", image: "/yoga5.png", description: "Opens up the chest and strengthens the spine.", steps: ["Lie on your stomach", "Place hands under shoulders", "Press into hands and lift chest", "Keep elbows slightly bent", "Hold and breathe"] },
    { id: 6, name: "Bridge Pose", type: "Backbend", image: "/yoga6.png", description: "Strengthens legs, glutes, and lower back.", steps: ["Lie on your back", "Bend your knees and place feet flat on the floor", "Press feet into the ground and lift hips", "Clasp hands under your back", "Hold and breathe"] },
    { id: 7, name: "Seated Forward Bend", type: "Seated", image: "/yoga7.png", description: "Stretches hamstrings, lower back, and spine.", steps: ["Sit with legs extended", "Inhale and lengthen spine", "Exhale and fold forward from the hips", "Reach hands towards feet", "Hold and breathe"] },
    { id: 8, name: "Triangle Pose", type: "Standing", image: "/yoga8.png", description: "Great for stretching the legs and improving flexibility.", steps: ["Stand with legs wide apart", "Turn one foot outward", "Extend arms parallel to the floor", "Reach forward and place one hand on shin or floor", "Extend the other arm up and gaze at it"] },
    { id: 9, name: "Cat-Cow Pose", type: "Warm-up", image: "/yoga9.png", description: "Increases spinal flexibility and relieves tension.", steps: ["Start on all fours", "Inhale and arch your back (Cow Pose)", "Exhale and round your back (Cat Pose)", "Repeat the movement slowly", "Continue for several breaths"] }
];

const Library = () => {
    const [search, setSearch] = useState("");
    const [selectedPose, setSelectedPose] = useState(null);

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
                    <div key={pose.id} className="pose-card" onClick={() => setSelectedPose(pose)}>
                        <img src={pose.image} alt={pose.name} />
                        <h3>{pose.name}</h3>
                        <p><strong>Type:</strong> {pose.type}</p>
                        <p>{pose.description}</p>
                    </div>
                ))}
            </div>
            {selectedPose && (
                <div className="modal" onClick={() => setSelectedPose(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={() => setSelectedPose(null)}>&times;</span>
                        <h2>{selectedPose.name}</h2>
                        <img src={selectedPose.image} alt={selectedPose.name} />
                        <p>{selectedPose.description}</p>
                        <h3>Steps:</h3>
                        <ol>
                            {selectedPose.steps.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Library;
