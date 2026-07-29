/* =====================================================================
   MESOZOIC ARCHIVE DATABASE
   ---------------------------------------------------------------------
   HOW TO ADD YOUR OWN ENTRIES:
   
   1. Clades / Higher Taxa (Branch Nodes):
      { name: "CladeName", rank: "clade"|"phylum"|"order"|"family", desc: "...", children: [...] }
      
   2. Genera / Species (Leaf Nodes):
      { name: "GenusName", sci: "Genus species", rank: "genus", period: "Late Jurassic", species: true, desc: "..." }

   - Make sure every node has a unique `name`.
   - Set `species: true` on leaf nodes so the game knows they can be secret targets.
===================================================================== */

const MESOZOIC_ARCHIVE = {
  name: "Animalia", rank: "kingdom", desc: "Multicellular, eukaryotic organisms that form the biological kingdom Animalia.", children: [
            {
              name: "Dinosauria", rank: "clade", desc: "A diverse group of reptiles of the clade Dinosauria that dominated the Mesozoic era.", children: [
                {
                  name: "Saurischia", rank: "clade", desc: "Lizard-hipped dinosaurs including theropods and sauropodomorphs.", children: [
                    {
                      name: "Theropoda", rank: "clade", desc: "Bipedal carnivores (and some herbivores) including T. rex and raptors.", children: [
                        {
                          name: "Ceratosauria", rank: "clade", desc: "Early theropods often characterized by unique cranial crests or horns.", children: [
                            { name: "Ceratosaurus", sci: "Ceratosaurus nasicornis", rank: "genus", period: "Late Jurassic", species: true, desc: "A predatory theropod with distinctive horn-like structures on its snout." },
                            { name: "Carnotaurus", sci: "Carnotaurus sastrei", rank: "genus", period: "Late Cretaceous", species: true, desc: "A large theropod with distinct bull-like horns above its eyes." }
                          ]
                        },
                        {
                          name: "Tetanurae", rank: "clade", desc: "Stiff-tailed theropods comprising most advanced carnivorous lineages.", children: [
                            {
                              name: "Spinosauridae", rank: "family", desc: "Semi-aquatic theropods with elongated, crocodile-like skulls.", children: [
                                { name: "Spinosaurus", sci: "Spinosaurus aegyptiacus", rank: "genus", period: "Late Cretaceous", species: true, desc: "A massive semi-aquatic predator with a large sail on its back." },
                                { name: "Baryonyx", sci: "Baryonyx walkeri", rank: "genus", period: "Early Cretaceous", species: true, desc: "A fish-eating theropod with a large thumb claw." }
                              ]
                            },
                            {
                              name: "Avetheropoda", rank: "clade", desc: "Advanced theropods including allosauroids and coelurosaurs.", children: [
                                { name: "Allosaurus", sci: "Allosaurus fragilis", rank: "genus", period: "Late Jurassic", species: true, desc: "A large bipedal predator common during the Jurassic period." },
                                {
                                  name: "Tyrannosauridae", rank: "family", desc: "Apex predators with massive skulls and tiny two-fingered arms.", children: [
                                    { name: "Tyrannosaurus", sci: "Tyrannosaurus rex", rank: "genus", period: "Late Cretaceous", species: true, desc: "One of the largest land carnivores of all time with an immensely powerful bite." },
                                    { name: "Albertosaurus", sci: "Albertosaurus sarcophagus", rank: "genus", period: "Late Cretaceous", species: true, desc: "A smaller, sleek relative of Tyrannosaurus." }
                                  ]
                                },
                                {
                                  name: "Dromaeosauridae", rank: "family", desc: "Feathered carnivores known as 'raptors' with sickled foot claws.", children: [
                                    { name: "Velociraptor", sci: "Velociraptor mongoliensis", rank: "genus", period: "Late Cretaceous", species: true, desc: "A turkey-sized feathered predator with a sharp sickle claw." },
                                    { name: "Utahraptor", sci: "Utahraptor ostrommaysorum", rank: "genus", period: "Early Cretaceous", species: true, desc: "The largest known member of the dromaeosaurid family." }
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      name: "Sauropodomorpha", rank: "clade", desc: "Long-necked herbivorous dinosaurs.", children: [
                        { name: "Diplodocus", sci: "Diplodocus carnegii", rank: "genus", period: "Late Jurassic", species: true, desc: "An extremely long-necked, whip-tailed sauropod." },
                        { name: "Brachiosaurus", sci: "Brachiosaurus altithorax", rank: "genus", period: "Late Jurassic", species: true, desc: "A high-shouldered sauropod built to reach tall foliage." }
                      ]
                    }
                  ]
                },
                {
                  name: "Ornithischia", rank: "clade", desc: "Bird-hipped herbivorous dinosaurs.", children: [
                    {
                      name: "Stegosauria", rank: "clade", desc: "Armored herbivorous dinosaurs with back plates and tail spikes.", children: [
                        { name: "Stegosaurus", sci: "Stegosaurus stenops", rank: "genus", period: "Late Jurassic", species: true, desc: "An armored dinosaur famous for its double row of back plates and spiked tail." }
                      ]
                    },
                    {
                      name: "Ceratopsia", rank: "clade", desc: "Beaked herbivores with facial horns and neck frills.", children: [
                        { name: "Triceratops", sci: "Triceratops horridus", rank: "genus", period: "Late Cretaceous", species: true, desc: "A massive three-horned herbivore with a broad bony frill." }
                      ]
                    },
                    {
                      name: "Hadrosauridae", rank: "family", desc: "Duck-billed herbivorous dinosaurs.", children: [
                        { name: "Parasaurolophus", sci: "Parasaurolophus walkeri", rank: "genus", period: "Late Cretaceous", species: true, desc: "A duck-billed dinosaur known for its long, curved cranial crest." }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }

/* --- Node Map & Helpers --- */
const ARCHIVE_MAP = new Map();
const ARCHIVE_SPECIES = [];

(function indexArchive(node, parent = null) {
  node.parent = parent;
  node.children = node.children || [];
  ARCHIVE_MAP.set(node.name.toLowerCase(), node);
  if (node.sci) ARCHIVE_MAP.set(node.sci.toLowerCase(), node);
  if (node.species) ARCHIVE_SPECIES.push(node);
  node.children.forEach(child => indexArchive(child, node));
})(MESOZOIC_ARCHIVE);

function getLineage(node) {
  const path = [];
  let curr = node;
  while (curr) {
    path.unshift(curr);
    curr = curr.parent;
  }
  return path;
}

function getMRCAIndex(nodeA, nodeB) {
  const lA = getLineage(nodeA);
  const lB = getLineage(nodeB);
  let i = 0;
  while (i < lA.length && i < lB.length && lA[i] === lB[i]) i++;
  return i - 1;
}