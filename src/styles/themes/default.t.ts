import 'styled-components'


declare module 'styled-components'{
    export interface DefaultTheme{
        //Product
        yellow_dark: string,
        yellow: string,
        yellow_light: string,

        purple_dark: string,
        purple: string,
        purple_light: string,

        //Base
        base_title:string,
        base_subtitle: string,
        base_text: string,
        base_label: string,
        base_hover: string,

        base_button: string,
        base_input: string,
        base_card: string,
        background: string,
        while: string,

    }
}