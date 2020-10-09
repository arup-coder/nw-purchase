export interface IAlertConfig {
    type: string;
    heading: IAlertHeading;
    content: IAlertContent;
    acceptBtn: IAlertButton;
    rejectBtn: IAlertButton;
    contentIcon: IAlertIcon;
    closeIcon: IAlertCloseIcon;
    reloadBtn: IAlertButton;
}

interface IAlertHeading {
    label: string;
    id: string;
}

interface IAlertContent {
    label: string;
    id: string;
}

interface IAlertButton {
    label: string;
    id: string;
    class: string;
    type: string;
}

interface IAlertIcon {
    path: string;
    alt: string;
}

interface IAlertCloseIcon extends IAlertIcon {
    wrapperClass: string;
}

export class AlertConfig implements IAlertConfig {
    type: string;
    heading: IAlertHeading;
    content: IAlertContent;
    acceptBtn: IAlertButton;
    rejectBtn: IAlertButton;
    contentIcon: IAlertIcon;
    closeIcon: IAlertCloseIcon;
    reloadBtn: IAlertButton;

    constructor(
        type = '',
        heading = {label: '', id: ''},
        content = {label: '', id: ''},
        acceptBtn = {label: '', id: '', class: '', type: ''},
        rejectBtn = {label: '', id: '', class: '', type: ''},
        contentIcon = {path: '', alt: ''},
        closeIcon = {path: '', alt: '', wrapperClass: ''},
        reloadBtn= {label: '', id: '', class: '', type: ''},
    ) {
      this.type = type;
      this.heading = heading;
      this.content = content;
      this.acceptBtn = acceptBtn;
      this.rejectBtn = rejectBtn;
      this.contentIcon = contentIcon;
      this.closeIcon = closeIcon;
      this.reloadBtn = reloadBtn;
    }
}

