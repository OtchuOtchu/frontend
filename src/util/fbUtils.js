import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase/fbInstance';

export async function fetchImageURL(imagePath) {
    const imageRef = ref(storage, imagePath);
    try {
        const url = await getDownloadURL(imageRef);
        return url;
    } catch (error) {
        console.error('Failed to fetch image URL:', error);
        return null;
    }
}
