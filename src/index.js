import { createRoot } from 'react-dom/client'
import './styles.css'
import { App } from './App'

const images = [

  // Left
  {
    position: [-2, 0, 2.75], rotation: [0, Math.PI / 2.5, 0],
    url: "https://i.seadn.io/gcs/files/b0cb11f124718b277e90951f486a36ae.png?auto=format&w=2048",
    opensea: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/108410636104839124165118863154963818345309492574903794015325593788184763826177",
    name: "Selene"
  },
  {
    position: [-2.15, 0, 1.5], rotation: [0, Math.PI / 2.5, 0],
    url: 'https://i.seadn.io/gcs/files/c3051decdf5902a9f7a21e9c96c7630f.png?auto=format&w=3840',
    name: "Falling Forward",
    opensea: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/108410636104839124165118863154963818345309492574903794015325593785985740570625"
  },
  {
    position: [-1.75, 0, 0.25], rotation: [0, Math.PI / 2.5, 0],
    name: "Cosmic Survivor",
    opensea: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/108410636104839124165118863154963818345309492574903794015325593789284275453953",
    url: "https://i.seadn.io/gcs/files/090b2eca76366e302eaf9ac33b13df16.jpg?auto=format&w=1000"
  },

  // Front
  {
    position: [0, 0, 1], rotation: [0, 0, 0],
    name: "Bit Leapfrog",
    opensea: "https://opensea.io/assets/ethereum/0x031c70a4844f60c86b75cfcde202de0a4227df31/2",
    url: "https://i.seadn.io/gcs/files/79a6e2195202019e85624f7b98b3b1ee.jpg?auto=format&w=1000"

  },
  // Back
  {
    position: [-0.8, 0, -0.6], rotation: [0, 0, 0],
    name: "Satoshi Salamander",
    opensea: "https://opensea.io/assets/ethereum/0x031c70a4844f60c86b75cfcde202de0a4227df31/0",
    url: "https://i.seadn.io/gcs/files/6d706339c1590847e55f06550ab5d352.png?auto=format&w=1000"
  },

  {
    position: [0.8, 0, -0.6], rotation: [0, 0, 0],
    opensea: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/108410636104839124165118863154963818345309492574903794015325593792582810337281",
    name: "How I Met God",
    url: 'https://i.seadn.io/gcs/files/b20b0426e5f7713fe8411a19582a9382.png?auto=format&w=1000'
  },

  // Right

  {
    position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0],
    name: "Blockchain Bullfrog",
    opensea: "https://opensea.io/assets/ethereum/0x031c70a4844f60c86b75cfcde202de0a4227df31/3",
    url: "https://i.seadn.io/gcs/files/ac007f5eddc3278cb5509e902deb8928.png?auto=format&w=1000"
  },
  {

    position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0],
    name: "Per aspera ad astra",
    url: "https://i.seadn.io/gcs/files/9a07aa56146cda223ef133294582aee6.png?auto=format&w=1000",
    opensea: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/108410636104839124165118863154963818345309492574903794015325593790383787081729"

  },

  {
    position: [2, 0, 2.75], rotation: [0, -Math.PI / 2.5, 0],
    name: "SolitudeBot",
    opensea: "https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/108410636104839124165118863154963818345309492574903794015325593787085252198401",
    url: "https://i.seadn.io/gcs/files/d8a99143351f55805416df435066cbcb.png?auto=format&w=2048"
  }

]

createRoot(document.getElementById('root')).render(<App images={images} />)
