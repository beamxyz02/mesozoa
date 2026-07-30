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
    name: "Spinosaurus",
    sci: "Spinosaurus aegyptiacus",
    period: "Late Cretaceous",
    mya: 99,
    lineage: [
      "Dinosauria",
      "Saurischia",
      "Theropoda",
      "Megalosauroidea",
      "Spinosauridae",
      "Spinosaurus"
    ]
  },
  {
  "name": "Spinosaurus",
  "sci": "Spinosaurus is",
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
  "sci": "Baryonyx is",
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
  "sci": "Iberospinus is",
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
  "sci": "Ceratosuchops is",
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
  "sci": "Suchomimus is",
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
  "sci": "Ichthyovenator is",
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
  "sci": "Irritator is",
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
  "sci": "Siamosaurus is",
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
  "sci": "Oxalaia is",
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
  "sci": "Sigilmassasaurus is",
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
  "sci": "Compsognathus is",
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
  "sci": "Sinosauropteryx is",
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
  "sci": "Maip is",
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
  "sci": "Australovenator is",
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
  "sci": "Megaraptor is",
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
  "sci": "Archaeornithomimus is",
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
  "sci": "Gallimimus is",
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
  "sci": "Ornithomimus is",
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
  "sci": "Sinornithomimus is",
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
  "sci": "Struthiomimus is",
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
  "sci": "Deinocheirus is",
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
  "sci": "Moros Intrepidus",
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
  "sci": "Yutyrannus is",
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
  "sci": "Guanlong is",
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
  "sci": "Nanotyrannus is",
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
  "sci": "Raptorex is",
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
  "sci": "Nanuqsaurus is",
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
  "sci": "Alioramus is",
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
  "sci": "Qianzhousaurus is",
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
  "sci": "Daspletosaurus is",
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
  "sci": "Lythronax is",
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
  "sci": "Teratophoneus is",
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
  "sci": "Tarbosaurus is",
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
  "sci": "Albertosaurus is",
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
  "sci": "Gorgosaurus is",
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
  "sci": "Mononykus is",
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
  "sci": "Monolophosaurus is",
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
  "sci": "Cryolophosaurus is",
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
  "sci": "Duonychus is",
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
  "sci": "Erlikosaurus is",
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
  "sci": "Segnosaurus is",
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
  "sci": "Therizinosaurus is",
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
  "sci": "Oviraptor is",
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
  "sci": "Corythoraptor is",
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
  "sci": "Troodon is",
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
  "sci": "Austroraptor is",
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
  "sci": "Pyroraptor is",
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
  "sci": "Microraptor is",
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
  "sci": "Atrociraptor is",
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
  "sci": "Deinonychus is",
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
  "sci": "Dromaeosaurus is",
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
  "sci": "Saurornitholestes is",
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
  "sci": "Velociraptor is",
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
  "sci": "Dakotaraptor is",
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
  "sci": "Dilophosaurus is",
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
  "sci": "Megalosaurus is",
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
  "sci": "Torvosaurus is",
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
  "sci": "Allosaurus is",
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
  "sci": "Yangchuanosaurus is",
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
  "sci": "Metriacanthosaurus is",
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
  "sci": "Sinraptor is",
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
  "sci": "Concavenator is",
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
  "sci": "Neovenator is",
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
  "sci": "Acrocanthosaurus is",
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
  "sci": "Carcharodontosaurus is",
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
  "sci": "Giganotosaurus is",
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
  "sci": "Mapusaurus is",
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
  "sci": "Ceratosaurus is",
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
  "sci": "Majungasaurus is",
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
  "sci": "Rajasaurus is",
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
  "sci": "Carnotaurus is",
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
  "sci": "Utahraptor is",
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
