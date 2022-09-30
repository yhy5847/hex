import SettingWindow from "../object/SettingWindow";
import MapManager from "./MapManager";

export default class SettingManager
{
    static setKeyFullScreen: Phaser.Input.Keyboard.Key;

    


    static setKeyMapDownScroll: Phaser.Input.Keyboard.Key;
    static setKeyMapZoomIn: Phaser.Input.Keyboard.Key;
    static setKeyMapZoomOut: Phaser.Input.Keyboard.Key;
    static downKey: Phaser.Input.Keyboard.Key;

    constructor(private readonly mapManager: MapManager) {}

    // clickbutton(text: Phaser.GameObjects.Image): void{
    //     text.setInteractive()
    //             .on("pointerdown", () => {
    //                 this.setDownKey();
    //             })
    // }

    setDownKey(cam: Phaser.Cameras.Scene2D.Camera): void {

        this.mapManager.scene.input.keyboard.on('keydown', (event: Phaser.Input.Keyboard.Key) => {
            if(SettingWindow.mapKey[0] !== (event as key).keyCode)
            {
                SettingWindow.mapKey[0] = (event as key).keyCode;
                console.log("실행완료");
                console.log(SettingWindow.mapKey[0]);
                console.log("실행완료2");
                this.mapManager.mapCamMove(cam);
            }
        }) 
    }
}

interface key extends Phaser.Input.Keyboard.Key 
    {
        key: string
    }