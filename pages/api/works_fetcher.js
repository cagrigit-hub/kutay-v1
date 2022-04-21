
import {getFirestore , getDocs , collection , query} from "firebase/firestore"
import app from "../../lib/firebase"

export default async function handler(req,res){
    const db = getFirestore(app);
    const collectionRef = collection(db,"works")
    const q = query(collectionRef)
    const docs = await getDocs(q);
    const result = docs.docs.map((item) => item.data());
    res.status(200).json(result);
}