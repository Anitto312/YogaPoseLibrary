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
    { 
        id: 1, name: "Downward Facing Dog", type: "Standing", image: "/yoga1.png", 
        description: "A great pose for stretching your hamstrings and back.",
        steps: [
            "Start on your hands and knees.",
            "Lift your hips toward the ceiling.",
            "Straighten your legs while keeping your heels down.",
            "Press your hands firmly into the mat.",
            "Hold for 5 breaths, then release."
        ]
    },
    { 
        id: 2, name: "Tree Pose", type: "Standing", image: "/yoga2.png", 
        description: "Improves balance and strengthens your legs.",
        steps: [
            "Stand tall with feet together.",
            "Shift weight onto one leg and lift the other foot.",
            "Place the foot on your inner thigh or calf.",
            "Bring your hands together in front of your chest.",
            "Hold for 5 breaths, then switch sides."
        ]
    },
    { 
        id: 3, name: "Warrior II", type: "Standing", image: "/yoga3.png", 
        description: "Strengthens legs, shoulders, and increases stamina.",
        steps: [
            "Step one foot back into a wide stance.",
            "Bend your front knee at a 90-degree angle.",
            "Stretch your arms out, parallel to the floor.",
            "Keep your gaze over your front hand.",
            "Hold for 5 breaths, then switch sides."
        ]
    },
    { 
        id: 4, name: "Child's Pose", type: "Resting", image: "/yoga4.png", 
        description: "A gentle resting pose to relax your body.",
        steps: [
            "Sit on your heels with knees apart.",
            "Stretch your arms forward on the mat.",
            "Rest your forehead on the floor.",
            "Breathe deeply and relax your body.",
            "Hold for 5 breaths or as long as needed."
        ]
    }
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

            {/* Modal for Step Instructions */}
            {selectedPose && (
                <div className="modal-overlay" onClick={() => setSelectedPose(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>{selectedPose.name}</h2>
                        <img src={selectedPose.image} alt={selectedPose.name} />
                        <h3>Step-by-Step Instructions</h3>
                        <ul>
                            {selectedPose.steps.map((step, index) => (
                                <li key={index}>{index + 1}. {step}</li>
                            ))}
                        </ul>
                        <button onClick={() => setSelectedPose(null)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Library;

