interface ICallout {
  title: string;
  description: string;
  onAccept: () => void;
  onReject: () => void;
}
