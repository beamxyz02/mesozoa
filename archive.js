/* =====================================================================
   ARCHIVE DATA & PARSER (archive.js)
   ===================================================================== */

const ARCHIVE_SPECIES = [
{
  "name": "Tyrannosaurus",
  "sci": "Tyrannosaurus rex",
  "period": "Late Cretaceous",
  "mya": 66,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Tyrannosauroidea",
    "Tyrannosauridae",
    "Tyrannosaurinae",
    "Tyrannosaurini",
    "Tyrannosaurus"
  ]
},
  {
  "name": "Spinosaurus",
  "sci": "Spinosaurus aegyptiacus",
  "period": "Late Cretaceous",
  "mya": 94,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Megalosauroidea",
    "Spinosauridae",
    "Spinosaurinae",
    "Spinosaurini",
    "Spinosaurus"
  ]
},
{
  "name": "Baryonyx",
  "sci": "Baryonyx walkeri",
  "period": "Early Cretaceous",
  "mya": 125,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Megalosauroidea",
    "Spinosauridae",
    "Baryonychinae",
    "Baryonyx"
  ]
},
{
  "name": "Iberospinus",
  "sci": "Iberospinus natarioi",
  "period": "Early Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Megalosauroidea",
    "Spinosauridae",
    "Iberospinus"
  ]
},
{
  "name": "Ceratosuchops",
  "sci": "Ceratosuchops infernalis",
  "period": "Early Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Megalosauroidea",
    "Spinosauridae",
    "Baryonychinae",
    "Ceratosuchopsini",
    "Ceratosuchops"
  ]
},
{
  "name": "Suchomimus",
  "sci": "Suchomimus tenerensis",
  "period": "Early Cretaceous",
  "mya": 112,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Megalosauroidea",
    "Spinosauridae",
    "Baryonychinae",
    "Ceratosuchopsini",
    "Suchomimus"
  ]
},
{
  "name": "Ichthyovenator",
  "sci": "Ichthyovenator laosensis",
  "period": "Early Cretaceous",
  "mya": 113,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Megalosauroidea",
    "Spinosauridae",
    "Spinosaurinae",
    "Ichthyovenator"
  ]
},
{
  "name": "Irritator",
  "sci": "Irritator challengeri",
  "period": "Early Cretaceous",
  "mya": 110,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Megalosauroidea",
    "Spinosauridae",
    "Spinosaurinae",
    "Irritator"
  ]
},
{
  "name": "Siamosaurus",
  "sci": "Siamosaurus suteethorni",
  "period": "Early Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Megalosauroidea",
    "Spinosauridae",
    "Siamosaurus"
  ]
},
{
  "name": "Oxalaia",
  "sci": "Oxalaia quilombensis",
  "period": "Late Cretaceous",
  "mya": 93,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Megalosauroidea",
    "Spinosauridae",
    "Spinosaurinae",
    "Spinosaurini",
    "Oxalaia"
  ]
},
{
  "name": "Sigilmassasaurus",
  "sci": "Sigilmassasaurus brevicollis",
  "period": "Late Cretaceous",
  "mya": 94,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Megalosauroidea",
    "Spinosauridae",
    "Spinosaurinae",
    "Spinosaurini",
    "Sigilmassasaurus"
  ]
},
{
  "name": "Compsognathus",
  "sci": "Compsognathus ellioti",
  "period": "Late Jurassic",
  "mya": 150,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Compsognathidae",
    "Compsognathus"
  ]
},
{
  "name": "Sinosauropteryx",
  "sci": "Sinosauropteryx prima",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Compsognathidae",
    "Sinosauropteryx"
  ]
},
{
  "name": "Maip",
  "sci": "Maip macrothorax",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Megaraptora",
    "Megaraptoridae",
    "Maip"
  ]
},
{
  "name": "Australovenator",
  "sci": "Australovenator wintonensis",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Megaraptora",
    "Megaraptoridae",
    "Australovenator"
  ]
},
{
  "name": "Megaraptor",
  "sci": "Megaraptor namunhuaiquii",
  "period": "Late Cretaceous",
  "mya": 88,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Megaraptora",
    "Megaraptoridae",
    "Megaraptor"
  ]
},
{
  "name": "Archaeornithomimus",
  "sci": "Archaeornithomimus asiaticus",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Ornithomimosauria",
    "Ornithomimidae",
    "Archaeornithomimus"
  ]
},
{
  "name": "Gallimimus",
  "sci": "Gallimimus bullatus",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Ornithomimosauria",
    "Ornithomimidae",
    "Gallimimus"
  ]
},
{
  "name": "Ornithomimus",
  "sci": "Ornithomimus edmontonicus",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Ornithomimosauria",
    "Ornithomimidae",
    "Ornithomimus"
  ]
},
{
  "name": "Sinornithomimus",
  "sci": "Sinornithomimus dongi",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Ornithomimosauria",
    "Ornithomimidae",
    "Sinornithomimus"
  ]
},
{
  "name": "Struthiomimus",
  "sci": "Struthiomimus altus",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Ornithomimosauria",
    "Ornithomimidae",
    "Struthiomimus"
  ]
},
{
  "name": "Deinocheirus",
  "sci": "Deinocheirus mirificus",
  "period": "Late Cretaceous",
  "mya": 70,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Ornithomimosauria",
    "Deinocheiridae",
    "Deinocheirus"
  ]
},
{
  "name": "Moros",
  "sci": "Moros intrepidus",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Tyrannosauroidea",
    "Moros"
  ]
},
{
  "name": "Yutyrannus",
  "sci": "Yutyrannus huali",
  "period": "Early Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Tyrannosauroidea",
    "Proceratosauridae",
    "Yutyrannus"
  ]
},
{
  "name": "Guanlong",
  "sci": "Guanlong wucaii",
  "period": "Late Jurassic",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Tyrannosauroidea",
    "Proceratosauridae",
    "Guanlong"
  ]
},
{
  "name": "Nanotyrannus",
  "sci": "Nanotyrannus lancensis",
  "period": "Late Cretaceous",
  "mya": 66,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Tyrannosauroidea",
    "Eutyrannosauria",
    "Nanotyrannus"
  ]
},
{
  "name": "Raptorex",
  "sci": "Raptorex kriegsteini",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Tyrannosauroidea",
    "Eutyrannosauria",
    "Raptorex"
  ]
},
{
  "name": "Nanuqsaurus",
  "sci": "Nanuqsaurus hoglundii",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Tyrannosauroidea",
    "Tyrannosauridae",
    "Tyrannosaurinae",
    "Nanuqsaurus"
  ]
},
{
  "name": "Alioramus",
  "sci": "Alioramus remotus",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Tyrannosauroidea",
    "Tyrannosauridae",
    "Tyrannosaurinae",
    "Alioramini",
    "Alioramus"
  ]
},
{
  "name": "Qianzhousaurus",
  "sci": "Qianzhousaurus sinensis",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Tyrannosauroidea",
    "Tyrannosauridae",
    "Tyrannosaurinae",
    "Alioramini",
    "Qianzhousaurus"
  ]
},
{
  "name": "Daspletosaurus",
  "sci": "Daspletosaurus torosus",
  "period": "Late Cretaceous",
  "mya": 74,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Tyrannosauroidea",
    "Tyrannosauridae",
    "Tyrannosaurinae",
    "Daspletosaurini",
    "Daspletosaurus"
  ]
},
{
  "name": "Lythronax",
  "sci": "Lythronax argestes",
  "period": "Late Cretaceous",
  "mya": 81,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Tyrannosauroidea",
    "Tyrannosauridae",
    "Tyrannosaurinae",
    "Teratophoneini",
    "Lythronax"
  ]
},
{
  "name": "Teratophoneus",
  "sci": "Teratophoneus curriei",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Tyrannosauroidea",
    "Tyrannosauridae",
    "Tyrannosaurinae",
    "Teratophoneini",
    "Teratophoneus"
  ]
},
{
  "name": "Tarbosaurus",
  "sci": "Tarbosaurus bataar",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Tyrannosauroidea",
    "Tyrannosauridae",
    "Tyrannosaurinae",
    "Tyrannosaurini",
    "Tarbosaurus"
  ]
},
{
  "name": "Albertosaurus",
  "sci": "Albertosaurus sarcophagus",
  "period": "Late Cretaceous",
  "mya": 71,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Tyrannosauroidea",
    "Tyrannosauridae",
    "Albertosaurinae",
    "Albertosaurus"
  ]
},
{
  "name": "Gorgosaurus",
  "sci": "Gorgosaurus libratus",
  "period": "Late Cretaceous",
  "mya": 73,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Tyrannosauroidea",
    "Tyrannosauridae",
    "Albertosaurinae",
    "Gorgosaurus"
  ]
},
{
  "name": "Mononykus",
  "sci": "Mononykus olecranus",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Alvarezsauria",
    "Alvarezsauroidea",
    "Alvarezsauridae",
    "Mononykus"
  ]
},
{
  "name": "Monolophosaurus",
  "sci": "Monolophosaurus jiangi",
  "period": "Middle Jurassic",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Allosauroidea",
    "Monolophosaurus"
  ]
},
{
  "name": "Cryolophosaurus",
  "sci": "Cryolophosaurus ellioti",
  "period": "Early Jurassic",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Cryolophosaurus"
  ]
},
{
  "name": "Duonychus",
  "sci": "Duonychus tsogtbaatari",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Maniraptoriformes",
    "Therizinosauria",
    "Therizinosauroidea",
    "Therizinosauridae",
    "Duonychus"
  ]
},
{
  "name": "Erlikosaurus",
  "sci": "Erlikosaurus andrewsi",
  "period": "Late Cretaceous",
  "mya": 89,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Maniraptoriformes",
    "Therizinosauria",
    "Therizinosauroidea",
    "Therizinosauridae",
    "Erlikosaurus"
  ]
},
{
  "name": "Segnosaurus",
  "sci": "Segnosaurus galbinensis",
  "period": "Late Cretaceous",
  "mya": 86,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Maniraptoriformes",
    "Therizinosauria",
    "Therizinosauroidea",
    "Therizinosauridae",
    "Segnosaurus"
  ]
},
{
  "name": "Therizinosaurus",
  "sci": "Therizinosaurus cheloniformis",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Maniraptoriformes",
    "Therizinosauria",
    "Therizinosauroidea",
    "Therizinosauridae",
    "Therizinosaurus"
  ]
},
{
  "name": "Oviraptor",
  "sci": "Oviraptor philoceratops",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Maniraptora",
    "Oviraptorosauria",
    "Oviraptoridae",
    "Oviraptor"
  ]
},
{
  "name": "Corythoraptor",
  "sci": "Corythoraptor jacobsi",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Maniraptora",
    "Oviraptorosauria",
    "Oviraptoridae",
    "Corythoraptor"
  ]
},
{
  "name": "Troodon",
  "sci": "Troodon formosus",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Maniraptora",
    "Paraves",
    "Deinonychosauria",
    "Troodontidae",
    "Troodontinae",
    "Troodontini",
    "Troodon"
  ]
},
{
  "name": "Austroraptor",
  "sci": "Austroraptor cabazai",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Maniraptora",
    "Paraves",
    "Deinonychosauria",
    "Dromaeosauridae",
    "Unenlagiinae",
    "Austroraptor"
  ]
},
{
  "name": "Pyroraptor",
  "sci": "Pyroraptor olympius",
  "period": "Late Cretaceous",
  "mya": 72,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Maniraptora",
    "Paraves",
    "Deinonychosauria",
    "Dromaeosauridae",
    "Pyroraptor"
  ]
},
{
  "name": "Microraptor",
  "sci": "Microraptor zhaoianus",
  "period": "Early Cretaceous",
  "mya": 120,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Maniraptora",
    "Paraves",
    "Deinonychosauria",
    "Dromaeosauridae",
    "Microraptoria",
    "Microraptorinae",
    "Microraptor"
  ]
},
{
  "name": "Sinornithosaurus",
  "sci": "Sinornithosaurus is",
  "period": "Early Cretaceous",
  "mya": 124,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Maniraptora",
    "Paraves",
    "Deinonychosauria",
    "Dromaeosauridae",
    "Microraptoria",
    "Microraptorinae",
    "Sinornithosaurus"
  ]
},
{
  "name": "Atrociraptor",
  "sci": "Atrociraptor marshalli",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Maniraptora",
    "Paraves",
    "Deinonychosauria",
    "Dromaeosauridae",
    "Eudromaeosauria",
    "Saurornitholestinae",
    "Atrociraptor"
  ]
},
{
  "name": "Deinonychus",
  "sci": "Deinonychus antirrhopus",
  "period": "Late Cretaceous",
  "mya": 98,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Maniraptora",
    "Paraves",
    "Deinonychosauria",
    "Dromaeosauridae",
    "Eudromaeosauria",
    "Deinonychus"
  ]
},
{
  "name": "Dromaeosaurus",
  "sci": "Dromaeosaurus albertensis",
  "period": "Late Cretaceous",
  "mya": 69,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Maniraptora",
    "Paraves",
    "Deinonychosauria",
    "Dromaeosauridae",
    "Eudromaeosauria",
    "Dromaeosaurinae",
    "Dromaeosaurus"
  ]
},
{
  "name": "Saurornitholestes",
  "sci": "Saurornitholestes langstoni",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Maniraptora",
    "Paraves",
    "Deinonychosauria",
    "Dromaeosauridae",
    "Eudromaeosauria",
    "Saurornitholestinae",
    "Saurornitholestes"
  ]
},
{
  "name": "Velociraptor",
  "sci": "Velociraptor mongoliensis",
  "period": "Late Cretaceous",
  "mya": 75,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Maniraptora",
    "Paraves",
    "Deinonychosauria",
    "Dromaeosauridae",
    "Eudromaeosauria",
    "Velociraptorinae",
    "Velociraptor"
  ]
},
{
  "name": "Dakotaraptor",
  "sci": "Dakotaraptor steini",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Maniraptora",
    "Paraves",
    "Deinonychosauria",
    "Dromaeosauridae",
    "Eudromaeosauria",
    "Dromaeosaurinae",
    "Dakotaraptor"
  ]
},
{
  "name": "Dilophosaurus",
  "sci": "Dilophosaurus wetherilli",
  "period": "Early Jurassic",
  "mya": 186,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Dilophosaurus"
  ]
},
{
  "name": "Megalosaurus",
  "sci": "Megalosaurus bucklandii",
  "period": "Middle Jurassic",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Megalosauroidea",
    "Megalosauridae",
    "Megalosaurinae",
    "Megalosaurus"
  ]
},{
  "name": "Torvosaurus",
  "sci": "Torvosaurus tanneri",
  "period": "Late Jurassic",
  "mya": 146,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Megalosauroidea",
    "Megalosauridae",
    "Megalosaurinae",
    "Torvosaurus"
  ]
},
{
  "name": "Allosaurus",
  "sci": "Allosaurus fragilis",
  "period": "Late Jurassic",
  "mya": 143,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Carnosauria",
    "Allosauroidea",
    "Allosaurus"
  ]
},
{
  "name": "Yangchuanosaurus",
  "sci": "Yangchuanosaurus shangyouensis",
  "period": "Late Jurassic",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Allosauroidea",
    "Metriacanthosauridae",
    "Yangchuanosaurus"
  ]
},
{
  "name": "Metriacanthosaurus",
  "sci": "Metriacanthosaurus parkeri",
  "period": "Late Jurassic",
  "mya": 160,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Allosauroidea",
    "Metriacanthosauridae",
    "Metriacanthosaurinae",
    "Metriacanthosaurus"
  ]
},
{
  "name": "Sinraptor",
  "sci": "Sinraptor dongi",
  "period": "Jurassic",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Allosauroidea",
    "Metriacanthosauridae",
    "Metriacanthosaurinae",
    "Sinraptor"
  ]
},
{
  "name": "Concavenator",
  "sci": "Concavenator corcovatus",
  "period": "Early Cretaceous",
  "mya": 125,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Allosauroidea",
    "Carcharodontosauridae",
    "Concavenator"
  ]
},
{
  "name": "Neovenator",
  "sci": "Neovenator salerii",
  "period": "Early Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Allosauroidea",
    "Neovenatoridae",
    "Neovenator"
  ]
},
{
  "name": "Acrocanthosaurus",
  "sci": "Acrocanthosaurus atokensis",
  "period": "Late Cretaceous",
  "mya": 99,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Allosauroidea",
    "Carcharodontosauridae",
    "Acrocanthosaurus"
  ]
},
{
  "name": "Carcharodontosaurus",
  "sci": "Carcharodontosaurus saharicus",
  "period": "Cretaceous",
  "mya": 94,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Allosauroidea",
    "Carcharodontosauridae",
    "Carcharodontosaurus"
  ]
},
{
  "name": "Giganotosaurus",
  "sci": "Giganotosaurus carolini",
  "period": "Late Cretaceous",
  "mya": 95,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Allosauroidea",
    "Carcharodontosauridae",
    "Giganotosaurus"
  ]
},
{
  "name": "Mapusaurus",
  "sci": "Mapusaurus roseae",
  "period": "Late Cretaceous",
  "mya": 95,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Allosauroidea",
    "Carcharodontosauridae",
    "Mapusaurus"
  ]
},
{
  "name": "Ceratosaurus",
  "sci": "Ceratosaurus nasicornis",
  "period": "Late Jurassic",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Ceratosauria",
    "Ceratosaurus"
  ]
},
{
  "name": "Majungasaurus",
  "sci": "Majungasaurus crenatissimus",
  "period": "Cretaceous",
  "mya": 66,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Ceratosauria",
    "Abelisauridae",
    "Majungasaurinae",
    "Majungasaurus"
  ]
},
{
  "name": "Rajasaurus",
  "sci": "Rajasaurus narmadensis",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Ceratosauria",
    "Abelisauridae",
    "Majungasaurinae",
    "Rajasaurus"
  ]
},
{
  "name": "Carnotaurus",
  "sci": "Carnotaurus sastrei",
  "period": "Late Cretaceous",
  "mya": 66,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Ceratosauria",
    "Abelisauridae",
    "Brachyrostra",
    "Carnotaurini",
    "Carnotaurus"
  ]
},
{
  "name": "Utahraptor",
  "sci": "Utahraptor ostrommaysi",
  "period": "Early Cretaceous",
  "mya": 135,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Maniraptora",
    "Paraves",
    "Deinonychosauria",
    "Dromaeosauridae",
    "Eudromaeosauria",
    "Utahraptor"
  ]
},
// HERBIVORES
{
  "name": "Heterodontosaurus",
  "sci": "Heterodontosaurus tucki",
  "period": "Early Jurassic",
  "mya": 190,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Parapredentata",
    "Saphornithischia",
    "Prionodontia",
    "Heterodontosauridae",
    "Heterodontosaurinae",
    "Heterodontosaurus"
  ]
},
{
  "name": "Pegomastax",
  "sci": "Pegomastax africanus",
  "period": "Early Jurassic",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Parapredentata",
    "Saphornithischia",
    "Prionodontia",
    "Heterodontosauridae",
    "Heterodontosaurinae",
    "Pegomastax"
  ]
},
{
  "name": "Yuxisaurus",
  "sci": "Yuxisaurus kopchicki",
  "period": "Early Jurassic",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Parapredentata",
    "Saphornithischia",
    "Prionodontia",
    "Genasauria",
    "Thyreophora",
    "Thyreophoroidea",
    "Yuxisaurus"
  ]
},
{
  "name": "Scelidosaurus",
  "sci": "Scelidosaurus harrisonii",
  "period": "Jurassic",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Parapredentata",
    "Saphornithischia",
    "Prionodontia",
    "Genasauria",
    "Thyreophora",
    "Thyreophoroidea",
    "Scelidosaurus"
  ]
},
{
  "name": "Scutellosaurus",
  "sci": "Scutellosaurus lawleri",
  "period": "Jurassic",
  "mya": 196,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Parapredentata",
    "Saphornithischia",
    "Prionodontia",
    "Genasauria",
    "Thyreophora",
    "Scutellosaurus"
  ]
},
{
  "name": "Chungkingosaurus",
  "sci": "Chungkingosaurus jiangbeiensis",
  "period": "Late Jurassic",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Parapredentata",
    "Saphornithischia",
    "Prionodontia",
    "Genasauria",
    "Thyreophora",
    "Thyreophoroidea",
    "Eurypoda",
    "Stegosauria",
    "Stegosauridae",
    "Chungkingosaurus"
  ]
},
{
  "name": "Gigantspinosaurus",
  "sci": "Gigantspinosaurus sichuanensis",
  "period": "Late Jurassic",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Parapredentata",
    "Saphornithischia",
    "Prionodontia",
    "Genasauria",
    "Thyreophora",
    "Thyreophoroidea",
    "Eurypoda",
    "Stegosauria",
    "Huayangosauridae",
    "Gigantspinosaurus"
  ]
},
{
  "name": "Tuojiangosaurus",
  "sci": "Tuojiangosaurus multispinus",
  "period": "Late Jurassic",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Parapredentata",
    "Saphornithischia",
    "Prionodontia",
    "Genasauria",
    "Thyreophora",
    "Thyreophoroidea",
    "Eurypoda",
    "Stegosauria",
    "Stegosauridae",
    "Tuojiangosaurus"
  ]
},
{
  "name": "Huayangosaurus",
  "sci": "Huayangosaurus taibaii",
  "period": "Middle Jurassic",
  "mya": 165,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Parapredentata",
    "Saphornithischia",
    "Prionodontia",
    "Genasauria",
    "Thyreophora",
    "Thyreophoroidea",
    "Eurypoda",
    "Stegosauria",
    "Huayangosauridae",
    "Huayangosaurus"
  ]
},
{
  "name": "Miragaia",
  "sci": "Miragaia longicollum",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Parapredentata",
    "Saphornithischia",
    "Prionodontia",
    "Genasauria",
    "Thyreophora",
    "Thyreophoroidea",
    "Eurypoda",
    "Stegosauria",
    "Stegosauridae",
    "Neostegosauria",
    "Dacentrurinae",
    "Miragaia"
  ]
},
{
  "name": "Kentrosaurus",
  "sci": "Kentrosaurus aethiopicus",
  "period": "Late Jurassic",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Parapredentata",
    "Saphornithischia",
    "Prionodontia",
    "Genasauria",
    "Thyreophora",
    "Thyreophoroidea",
    "Eurypoda",
    "Stegosauria",
    "Stegosauridae",
    "Neostegosauria",
    "Kentrosaurus"
  ]
},
{
  "name": "Thyreosaurus",
  "sci": "Thyreosaurus atlasicus",
  "period": "Middle Jurassic",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Parapredentata",
    "Saphornithischia",
    "Prionodontia",
    "Genasauria",
    "Thyreophora",
    "Thyreophoroidea",
    "Eurypoda",
    "Stegosauria",
    "Stegosauridae",
    "Neostegosauria",
    "Dacentrurinae",
    "Thyreosaurus"
  ]
},
{
  "name": "Stegosaurus",
  "sci": "Stegosaurus stenops",
  "period": "Late Jurassic",
  "mya": 145,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Parapredentata",
    "Saphornithischia",
    "Prionodontia",
    "Genasauria",
    "Thyreophora",
    "Thyreophoroidea",
    "Eurypoda",
    "Stegosauria",
    "Stegosauridae",
    "Neostegosauria",
    "Stegosaurinae",
    "Stegosaurus"
  ]
},
{
  "name": "Wuerhosaurus",
  "sci": "Wuerhosaurus homheni",
  "period": "Early Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Parapredentata",
    "Saphornithischia",
    "Prionodontia",
    "Genasauria",
    "Thyreophora",
    "Thyreophoroidea",
    "Eurypoda",
    "Stegosauria",
    "Stegosauridae",
    "Neostegosauria",
    "Stegosaurinae",
    "Wuerhosaurus"
  ]
},
{
  "name": "Gastonia",
  "sci": "Gastonia burgei",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Parapredentata",
    "Saphornithischia",
    "Prionodontia",
    "Genasauria",
    "Thyreophora",
    "Thyreophoroidea",
    "Eurypoda",
    "Ankylosauria",
    "Euankylosauria",
    "Nodosauridae",
    "Gastonia"
  ]
},
{
  "name": "Borealopelta",
  "sci": "Borealopelta markmitchelli",
  "period": "Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Parapredentata",
    "Saphornithischia",
    "Prionodontia",
    "Genasauria",
    "Thyreophora",
    "Thyreophoroidea",
    "Eurypoda",
    "Ankylosauria",
    "Euankylosauria",
    "Nodosauridae",
    "Borealopelta"
  ]
},
{
  "name": "Nodosaurus",
  "sci": "Nodosaurus textilis",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Parapredentata",
    "Saphornithischia",
    "Prionodontia",
    "Genasauria",
    "Thyreophora",
    "Thyreophoroidea",
    "Eurypoda",
    "Ankylosauria",
    "Euankylosauria",
    "Nodosauridae",
    "Nodosaurus"
  ]
},
{
  "name": "Sauropelta",
  "sci": "Sauropelta edwardsorum",
  "period": "Early Cretaceous",
  "mya": 108,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Parapredentata",
    "Saphornithischia",
    "Prionodontia",
    "Genasauria",
    "Thyreophora",
    "Thyreophoroidea",
    "Eurypoda",
    "Ankylosauria",
    "Euankylosauria",
    "Nodosauridae",
    "Sauropelta"
  ]
},
{
  "name": "Polacanthus",
  "sci": "Polacanthus foxii",
  "period": "Early Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Parapredentata",
    "Saphornithischia",
    "Prionodontia",
    "Genasauria",
    "Thyreophora",
    "Thyreophoroidea",
    "Eurypoda",
    "Ankylosauria",
    "Euankylosauria",
    "Nodosauridae",
    "Polacanthus"
  ]
},
{
  "name": "Denversaurus",
  "sci": "Denversaurus schlessmani",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Parapredentata",
    "Saphornithischia",
    "Prionodontia",
    "Genasauria",
    "Thyreophora",
    "Thyreophoroidea",
    "Eurypoda",
    "Ankylosauria",
    "Euankylosauria",
    "Nodosauridae",
    "Denversaurus"
  ]
},
{
  "name": "Antarctopelta",
  "sci": "Antarctopelta oliveroi",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Parapredentata",
    "Saphornithischia",
    "Prionodontia",
    "Genasauria",
    "Thyreophora",
    "Thyreophoroidea",
    "Eurypoda",
    "Ankylosauria",
    "Parankylosauria",
    "Antarctopelta"
  ]
},
{
  "name": "Minmi",
  "sci": "Minmi paravertebra",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Parapredentata",
    "Saphornithischia",
    "Prionodontia",
    "Genasauria",
    "Thyreophora",
    "Thyreophoroidea",
    "Eurypoda",
    "Ankylosauria",
    "Parankylosauria",
    "Minmi"
  ]
},
{
  "name": "Crichtonsaurus",
  "sci": "Crichtonsaurus bohlini",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Parapredentata",
    "Saphornithischia",
    "Prionodontia",
    "Genasauria",
    "Thyreophora",
    "Thyreophoroidea",
    "Eurypoda", 
    "Ankylosauria",
    "Euankylosauria",
    "Ankylosauridae",
    "Ankylosaurinae",
    "Crichtonsaurus"
  ]
},
{
  "name": "Ankylosaurus",
  "sci": "Ankylosaurus magniventris",
  "period": "Cretaceous",
  "mya": 66,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Parapredentata",
    "Saphornithischia",
    "Prionodontia",
    "Genasauria",
    "Thyreophora",
    "Thyreophoroidea",
    "Eurypoda",
    "Ankylosauria",
    "Euankylosauria",
    "Ankylosauridae",
    "Ankylosaurinae",
    "Ankylosaurini",
    "Ankylosaurus"
  ]
},
{
  "name": "Euoplocephalus",
  "sci": "Euoplocephalus tutus",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Parapredentata",
    "Saphornithischia",
    "Prionodontia",
    "Genasauria",
    "Thyreophora",
    "Thyreophoroidea",
    "Eurypoda",
    "Ankylosauria",
    "Euankylosauria",
    "Ankylosauridae",
    "Ankylosaurinae",
    "Ankylosaurini",
    "Euoplocephalus"
  ]
},
{
  "name": "Scolosaurus",
  "sci": "Scolosaurus",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Parapredentata",
    "Saphornithischia",
    "Prionodontia",
    "Genasauria",
    "Thyreophora",
    "Thyreophoroidea",
    "Eurypoda",
    "Ankylosauria",
    "Euankylosauria",
    "Ankylosauridae",
    "Ankylosaurinae",
    "Ankylosaurini",
    "Scolosaurus"
  ]
},
{
  "name": "Wannanosaurus",
  "sci": "Wannanosaurus yansiensis",
  "period": "Late Cretaceous",
  "mya": 70,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Marginocephalia",
    "Pachycephalosauria",
    "Wannanosaurus"
  ]
},
{
  "name": "Zavacephale",
  "sci": "Zavacephale rinpoche",
  "period": "Early Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Marginocephalia",
    "Pachycephalosauria",
    "Zavacephale"
  ]
},
{
  "name": "Stegoceras",
  "sci": "Stegoceras validum",
  "period": "Late Cretaceous",
  "mya": 74,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Marginocephalia",
    "Pachycephalosauria",
    "Pachycephalosauridae",
    "Stegoceras"
  ]
},
{
"name": "Homalocephale",
  "sci": "Homalocephale calathocercos",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Marginocephalia",
    "Pachycephalosauria",
    "Pachycephalosauridae",
    "Pachycephalosaurinae",    
    "Homalocephale"
  ]
},
{
  "name": "Pachycephalosaurus",
  "sci": "Pachycephalosaurus wyomingensis",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Marginocephalia",
    "Pachycephalosauria",
    "Pachycephalosauridae",
    "Pachycephalosaurinae",    
    "Pachycephalosaurus"
  ]
},
{
  "name": "Psittacosaurus",
  "sci": "Psittacosaurus mongoliensis",
  "period": "Early Cretaceous",
  "mya": 105,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Marginocephalia",
    "Ceratopsia",
    "Psittacosaurus"
  ]
},
{
  "name": "Koreaceratops",
  "sci": "Koreaceratops hwaseongensis",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Marginocephalia",
    "Ceratopsia",
    "Neoceratopsia",
    "Koreaceratops"
  ]
},
{
  "name": "Aquilops",
  "sci": "Aquilops americanus",
  "period": "Early Cretaceous",
  "mya": 109,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Marginocephalia",
    "Ceratopsia",
    "Neoceratopsia",
    "Aquilops"
  ]
},
{
  "name": "Microceratus",
  "sci": "Microceratus gobiensis",
  "period": "Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Marginocephalia",
    "Ceratopsia",
    "Neoceratopsia",
    "Microceratus"
  ]
},
{
  "name": "Protoceratops",
  "sci": "Protoceratops andrewsi",
  "period": "Late Cretaceous",
  "mya": 71,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Marginocephalia",
    "Ceratopsia",
    "Neoceratopsia",
    "Coronosauria",
    "Protoceratopsidae",
    "Protoceratops"
  ]
},
{
  "name": "Chasmosaurus",
  "sci": "Chasmosaurus belli",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Marginocephalia",
    "Ceratopsia",
    "Ceratopsidae",
    "Chasmosaurinae",
    "Chasmosaurus"
  ]
},
{
  "name": "Pentaceratops",
  "sci": "Pentaceratops sternbergii",
  "period": "Late Cretaceous",
  "mya": 73,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Marginocephalia",
    "Ceratopsia",
    "Ceratopsidae",
    "Chasmosaurinae",
    "Pentaceratops"
  ]
},
{
  "name": "Triceratops",
  "sci": "Triceratops horridus",
  "period": "Late Cretaceous",
  "mya": 66,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Marginocephalia",
    "Ceratopsia",
    "Ceratopsidae",
    "Chasmosaurinae",
    "Triceratopsini",
    "Triceratops"
  ]
},
{
  "name": "Torosaurus",
  "sci": "Torosaurus latus",
  "period": "Late Cretaceous",
  "mya": 66,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Marginocephalia",
    "Ceratopsia",
    "Ceratopsidae",
    "Chasmosaurinae",
    "Triceratopsini",
    "Torosaurus"
  ]
},
{
  "name": "Diabloceratops",
  "sci": "Diabloceratops eatoni",
  "period": "Cretaceous",
  "mya": 81,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Marginocephalia",
    "Ceratopsia",
    "Ceratopsidae",
    "Centrosaurinae",
    "Diabloceratops"
  ]
},
{
  "name": "Sinoceratops",
  "sci": "Sinoceratops zhuchengensis",
  "period": "Cretaceous",
  "mya": 73,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Marginocephalia",
    "Ceratopsia",
    "Ceratopsidae",
    "Centrosaurinae",
    "Sinoceratops"
  ]
},
{
  "name": "Lokiceratops",
  "sci": "Lokiceratops rangiformis",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Marginocephalia",
    "Ceratopsia",
    "Ceratopsidae",
    "Centrasaurinae",
    "Albertaceratopsini",
    "Lokiceratops"
  ]
},
{
  "name": "Nasutoceratops",
  "sci": "Nasutoceratops titusi",
  "period": "Late Cretaceous",
  "mya": 75,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Marginocephalia",
    "Ceratopsia",
    "Ceratopsidae",
    "Centrosaurinae",
    "Nasutoceratopsini",
    "Nasutoceratops"
  ]
},
{
  "name": "Centrosaurus",
  "sci": "Centrosaurus apertus",
  "period": "Late Cretaceous",
  "mya": 75,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Marginocephalia",
    "Ceratopsia",
    "Ceratopsidae",
    "Centrosaurinae",
    "Centrosaurini",
    "Centrosaurus"
  ]
},
{
  "name": "Styracosaurus",
  "sci": "Styracosaurus albertensis",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Marginocephalia",
    "Ceratopsia",
    "Ceratopsidae",
    "Centrosaurinae",
    "Centrosaurini",
    "Styracosaurus"
  ]
},
{
  "name": "Einiosaurus",
  "sci": "Einiosaurus procurvicornis",
  "period": "Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Marginocephalia",
    "Ceratopsia",
    "Ceratopsidae",
    "Centrosaurinae",
    "Pachyrhinosaurini",
    "Einiosaurus"
  ]
},
{
  "name": "Pachyrhinosaurus",
  "sci": "Pachyrhinosaurus lakustai",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Marginocephalia",
    "Ceratopsia",
    "Ceratopsidae",
    "Centrosaurinae",
    "Pachyrhinosaurini",
    "Pachyrostra",
    "Pachyrhinosaurus"
  ]
},
{
  "name": "Muttaburrasaurus",
  "sci": "Muttaburrasaurus langdoni",
  "period": "Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Ornithopoda",
    "Iguanodontia",
    "Euiguanodontia",
    "Elasmaria",
    "Muttaburrasaurus"
  ]
},
{
  "name": "Proceratosaurus",
  "sci": "Proceratosaurus bradleyi",
  "period": "Middle Jurassic",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Theropoda",
    "Neotheropoda",
    "Averostra",
    "Tetanurae",
    "Coelurosauria",
    "Tyrannosauroidea",
    "Proceratosauridae",
    "Proceratosaurus"
  ]
},
{
  "name": "Ouranosaurus",
  "sci": "Ouranosaurus nigeriensis",
  "period": "Early Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Ornithopoda",
    "Iguanodontia",
    "Euiguanodontia",
    "Dryomorpha",
    "Ankylopollexia",
    "Styracosterna",
    "Ouranosaurus"
  ]
},
{
  "name": "Iguanodon",
  "sci": "Iguanodon bernissartensis",
  "period": "Early Cretaceous",
  "mya": 122,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Ornithopoda",
    "Iguanodontia",
    "Euiguanodontia",
    "Dryomorpha",
    "Ankylopollexia",
    "Iguanodontidae",
    "Iguanodon"
  ]
},
{
  "name": "Dryosaurus",
  "sci": "Dryosaurus altus",
  "period": "Late Jurassic",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Ornithopoda",
    "Iguanodontia",
    "Euiguanodontia",
    "Dryomorpha",
    "Dryosauridae",
    "Dryosaurus"
  ]
},
{
  "name": "Tethyshadros",
  "sci": "Tethyshadros insularis",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Ornithopoda",
    "Iguanodontia",
    "Euiguanodontia",
    "Dryomorpha",
    "Ankylopollexia",
    "Styracosterna",
    "Hadrosauriformes",
    "Hadrosauroidea",
    "Telmatosauridae",
    "Tethyshadros"
  ]
},
{
  "name": "Eolambia",
  "sci": "Eolambia caroljonesa",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Ornithopoda",
    "Iguanodontia",
    "Euiguanodontia",
    "Dryomorpha",
    "Ankylopollexia",
    "Styracosterna",
    "Hadrosauriformes",
    "Hadrosauroidea",
    "Eolambia"
  ]
},
{
  "name": "Hadrosaurus",
  "sci": "Hadrosaurus foulkii",
  "period": "Late Cretaceous",
  "mya": 77,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Ornithopoda",
    "Iguanodontia",
    "Euiguanodontia",
    "Dryomorpha",
    "Ankylopollexia",
    "Styracosterna",
    "Hadrosauriformes",
    "Hadrosauroidea",
    "Hadrosauridae",
    "Saurolophinae",
    "Hadrosaurus"
  ]
},
{
  "name": "Brachylophosaurus",
  "sci": "Brachylophosaurus canadensis",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Ornithopoda",
    "Iguanodontia",
    "Euiguanodontia",
    "Dryomorpha",
    "Ankylopollexia",
    "Styracosterna",
    "Hadrosauriformes",
    "Hadrosauroidea",
    "Hadrosauridae",
    "Saurolophinae",
    "Brachylophosaurini",
    "Brachylophosaurus"
  ]
},
{
  "name": "Maiasaura",
  "sci": "Maiasaura peeblesorum",
  "period": "Cretaceous",
  "mya": 70,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Ornithopoda",
    "Iguanodontia",
    "Euiguanodontia",
    "Dryomorpha",
    "Ankylopollexia",
    "Styracosterna",
    "Hadrosauriformes",
    "Hadrosauroidea",
    "Hadrosauridae",
    "Saurolophinae",
    "Brachylophosaurini",
    "Maiasaura"
  ]
},
{
  "name": "Edmontosaurus",
  "sci": "Edmontosaurus annectens",
  "period": "Cretaceous",
  "mya": 73,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Ornithopoda",
    "Iguanodontia",
    "Euiguanodontia",
    "Dryomorpha",
    "Ankylopollexia",
    "Styracosterna",
    "Hadrosauriformes",
    "Hadrosauroidea",
    "Hadrosauridae",
    "Saurolophinae",
    "Edmontosaurini",
    "Edmontosaurus"
  ]
},
{
  "name": "Shantungosaurus",
  "sci": "Shantungosaurus giganteus",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Ornithopoda",
    "Iguanodontia",
    "Euiguanodontia",
    "Dryomorpha",
    "Ankylopollexia",
    "Styracosterna",
    "Hadrosauriformes",
    "Hadrosauroidea",
    "Hadrosauridae",
    "Saurolophinae",
    "Edmontosaurini",
    "Shantungosaurus"
  ]
},
{
  "name": "Saurolophus",
  "sci": "Saurolophus osborni",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Ornithopoda",
    "Iguanodontia",
    "Euiguanodontia",
    "Dryomorpha",
    "Ankylopollexia",
    "Styracosterna",
    "Hadrosauriformes",
    "Hadrosauroidea",
    "Hadrosauridae",
    "Saurolophinae",
    "Saurolophini",
    "Saurolophus"
  ]
},
{
  "name": "Jaxartosaurus",
  "sci": "Jaxartosaurus aralensis",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Ornithopoda",
    "Iguanodontia",
    "Euiguanodontia",
    "Dryomorpha",
    "Ankylopollexia",
    "Styracosterna",
    "Hadrosauriformes",
    "Hadrosauroidea",
    "Hadrosauridae",
    "Lambeosaurinae",
    "Jaxartosaurus"
  ]
},
{
  "name": "Tsintaosaurus",
  "sci": "Tsintaosaurus spinorhinus",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Ornithopoda",
    "Iguanodontia",
    "Euiguanodontia",
    "Dryomorpha",
    "Ankylopollexia",
    "Styracosterna",
    "Hadrosauriformes",
    "Hadrosauroidea",
    "Hadrosauridae",
    "Lambeosaurinae",
    "Tsintaosaurini",
    "Tsintaosaurus"
  ]
},
{
  "name": "Corythosaurus",
  "sci": "Corythosaurus casuarius",
  "period": "Late Cretaceous",
  "mya": 75,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Ornithopoda",
    "Iguanodontia",
    "Euiguanodontia",
    "Dryomorpha",
    "Ankylopollexia",
    "Styracosterna",
    "Hadrosauriformes",
    "Hadrosauroidea",
    "Hadrosauridae",
    "Lambeosaurinae",
    "Corythosauria",
    "Lambeosaurini",
    "Corythosaurus"
  ]
},
{
  "name": "Lambeosaurus",
  "sci": "Lambeosaurus lambei",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Ornithopoda",
    "Iguanodontia",
    "Euiguanodontia",
    "Dryomorpha",
    "Ankylopollexia",
    "Styracosterna",
    "Hadrosauriformes",
    "Hadrosauroidea",
    "Hadrosauridae",
    "Lambeosaurinae",
    "Corythosauria",
    "Lambeosaurini",
    "Lambeosaurus"
  ]
},
{
  "name": "Olorotitan",
  "sci": "Olorotitan arharensis",
  "period": "Late Cretaceous",
  "mya": 0,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Ornithopoda",
    "Iguanodontia",
    "Euiguanodontia",
    "Dryomorpha",
    "Ankylopollexia",
    "Styracosterna",
    "Hadrosauriformes",
    "Hadrosauroidea",
    "Hadrosauridae",
    "Lambeosaurinae",
    "Corythosauria",
    "Lambeosaurini",
    "Olorotitan"
  ]
},
{
  "name": "Parasaurolophus",
  "sci": "Parasaurolophus walkeri",
  "period": "Late Cretaceous",
  "mya": 73,
  "lineage": [
    "Dinosauria",
    "Ornithischia",
    "Neornithischia",
    "Pyrodontia",
    "Cerapoda",
    "Ornithopoda",
    "Iguanodontia",
    "Euiguanodontia",
    "Dryomorpha",
    "Ankylopollexia",
    "Styracosterna",
    "Hadrosauriformes",
    "Hadrosauroidea",
    "Hadrosauridae",
    "Lambeosaurinae",
    "Corythosauria",
    "Parasaurolophini",
    "Parasaurolophus"
  ]
}

];

/* =====================================================================
   AUTOMATIC MAP & HELPER FUNCTIONS
   ===================================================================== */

const ARCHIVE_MAP = new Map();

// 1. First map intermediate clades
ARCHIVE_SPECIES.forEach(specimen => {
  specimen.lineage.forEach((nodeName, index) => {
    const key = nodeName.toLowerCase();
    if (!ARCHIVE_MAP.has(key)) {
      ARCHIVE_MAP.set(key, {
        name: nodeName,
        rank: index === specimen.lineage.length - 1 ? "Genus" : "Clade",
        isSpecies: false
      });
    }
  });
});

// 2. Map direct specimen object references
ARCHIVE_SPECIES.forEach(specimen => {
  specimen.isSpecies = true;
  ARCHIVE_MAP.set(specimen.name.toLowerCase(), specimen);
});

// Helper: Convert array of names to lineage node objects
function getLineage(specimen) {
  if (!specimen || !specimen.lineage) return [];
  return specimen.lineage.map((nodeName, idx) => {
    return (
      ARCHIVE_MAP.get(nodeName.toLowerCase()) || {
        name: nodeName,
        rank: idx === specimen.lineage.length - 1 ? "Genus" : "Clade"
      }
    );
  });
}

// Helper: Find index of Most Recent Common Ancestor (MRCA)
function getMRCAIndex(nodeA, nodeB) {
  if (!nodeA || !nodeB) return -1;
  const linA = nodeA.lineage || [];
  const linB = nodeB.lineage || [];

  let sharedIndex = -1;
  const minLen = Math.min(linA.length, linB.length);

  for (let i = 0; i < minLen; i++) {
    if (linA[i].toLowerCase() === linB[i].toLowerCase()) {
      sharedIndex = i;
    } else {
      break;
    }
  }

  return sharedIndex;
}
