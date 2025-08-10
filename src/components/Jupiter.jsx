import * as three from 'three';

export default function Jupiter(){
    //load the geometry
    let radius=10;
    let widthSegments=64;
    let heightSegments=64;
    const geometry=new three.SphereGeometry(
        radius,
        widthSegments,
        heightSegments
    );
    //load the material
    const material=new three.MeshBasicMaterial({color: '#D3D3D3' });
    //make the mesh=material+geometry
    const sphere=new three.Mesh(geometry,material);

    //add scene
    const scene=new three.Scene();
    scene.add(sphere);
    return(
        <div>

        </div>
    )
}