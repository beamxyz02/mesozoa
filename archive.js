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
    "Dinosauromorpha",
    "Dinosauriformes",
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
  "name": "Triceratops",
  "sci": "Triceratops horridus",
  "period": "Late Cretaceous",
  "mya": 66,
  "lineage": [
    "Dinosauromorpha",
    "Dinosauriformes",
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
  "name": "Spinosaurus",
  "sci": "Spinosaurus aegyptiacus",
  "period": "Late Cretaceous",
  "mya": 94,
  "lineage": [
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
    "Dinosauromorpha",
    "Dinosauriformes",
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
