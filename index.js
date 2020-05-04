import {
    NativeModules,
    Image
} from 'react-native';

module.exports = {
    setWallpaper: (source, type, callback = (res)=>{}) =>{
        NativeModules.WallPaperManager.setWallpaper(Image.resolveAssetSource(source), type, callback);
    }
} ;
