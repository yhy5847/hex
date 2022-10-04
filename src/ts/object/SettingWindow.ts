import { Scene } from "phaser";

/**
 * 설정창
 * 
 * @author yhy5847
 * @since 2022-09-29 오전 09:46
 */
 export default class SettingWindow extends Phaser.GameObjects.Container
{
    /**오브젝트 이름에 대한 키 값 */
    static readonly KEY = {
        NAME: "SettingWindow",
        IMAGE : {
            MENU: "Menu",
            CONTROLLER: "Controller",
            CONTINUE_BUTTON: "Continue_Button",
            QUIT_THE_GAME_BUTTON: "Quit_The_Game_Button",
            RETURN_TO_LOGIN_BUTTON: "Return_To_Login_Button",
            KEY_MAP_SCROLL_UP: "Key_Map_Scroll_Up",
            KEY_MAP_SCROLL_DOWN: "Key_Map_Scroll_Down",
            KEY_MAP_ZOOM_IN: "Key_Map_Zoom_In",
            KEY_MAP_ZOOM_OUT: "Key_Map_Zoom_Out",
            KEY_FULL_SCREEN: "Key_Full_Screen"
        }
    }

    static mapKey: Array<number> = [87, 83, 68, 65]

    constructor(scene: Scene, x: number = 0, y: number = 0) {
        super(scene, x, y);

        const centerX = 500;
        const centerY = 50;

        let background: Phaser.GameObjects.Image;

        this.add([
            background = scene.add.image(centerX, centerY+300, SettingWindow.KEY.IMAGE.MENU).setDepth(0).setScale(0.65),
            scene.add.image(centerX-180, centerY+330, SettingWindow.KEY.IMAGE.CONTROLLER).setDepth(1).setScale(1),
            scene.add.image(centerX-330, centerY+200, SettingWindow.KEY.IMAGE.KEY_FULL_SCREEN).setDepth(2).setScale(0.6),
            scene.add.image(centerX-330, centerY+250, SettingWindow.KEY.IMAGE.KEY_MAP_SCROLL_UP).setDepth(2).setScale(0.6),
            scene.add.image(centerX-330, centerY+300, SettingWindow.KEY.IMAGE.KEY_MAP_SCROLL_DOWN).setDepth(2).setScale(0.6),
            scene.add.image(centerX-330, centerY+350, SettingWindow.KEY.IMAGE.KEY_MAP_ZOOM_IN).setDepth(2).setScale(0.6),
            scene.add.image(centerX-330, centerY+400, SettingWindow.KEY.IMAGE.KEY_MAP_ZOOM_OUT).setDepth(2).setScale(0.6),
            scene.add.image(centerX+330, centerY+200, SettingWindow.KEY.IMAGE.RETURN_TO_LOGIN_BUTTON).setDepth(2).setScale(0.6),
            scene.add.image(centerX+330, centerY+350, SettingWindow.KEY.IMAGE.CONTINUE_BUTTON).setDepth(2).setScale(0.6),
            scene.add.image(centerX+330, centerY+500, SettingWindow.KEY.IMAGE.QUIT_THE_GAME_BUTTON).setDepth(2).setScale(0.6)
        ])

        this.setSize(background.displayWidth, background.displayHeight).setDepth(5);

        // this.add([
        //     scene.add.text(0, 0, `${SettingWindow.mapKey[0]}`, {
        //     fontFamily: 'neodgm',
        //     fontSize: "16px",
        //     color: "gray"
        //     }).setShadow(2, 2, '#000000', 2, true, true).setName('Key_Map_Scroll_Up')
        // ]);

        scene.add.existing(this);
    }
}