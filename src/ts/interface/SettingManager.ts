import SettingWindow from "../object/SettingWindow";
import MapManager from "./MapManager";

export default class SettingManager
{
    constructor(private readonly mapManager: MapManager) {}

    setMapKeyInteraction(settingWindow: SettingWindow, cam: Phaser.Cameras.Scene2D.Camera): void {
        console.log("setMapKeyinteraction 진입")
        settingWindow.setInteractive()
                .on("pointerdown", () => {
                    this.mapManager.scene.input.keyboard.on('keydown', (event: Phaser.Input.Keyboard.Key) => {
                        if(SettingWindow.mapKey[0] !== (event as key).keyCode)
                        {
                            SettingWindow.mapKey[0] = (event as key).keyCode;
                            console.log("실행완료");
                            console.log(SettingWindow.mapKey[0]);
                            this.mapManager.mapCamMove(cam);
                            console.log("실행완료2");

                        }
                    }) 
                })
    }
}

interface key extends Phaser.Input.Keyboard.Key 
    {
        key: string
    }