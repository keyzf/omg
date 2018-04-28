declare type GraghShape = {
  color: string,
  x: number,
  scaled_x: number,
  y: number,
  scaled_y: number,
  width: number,
  scaled_width: number,
  height: number,
  scaled_height: number,
  moveX: number,
  scaled_moveX: number,
  moveY: number,
  scaled_moveY: number,
  boundingWidth: number,
  boundingHeight: number,
  zindex: number,
  isBg: boolean,
  enableChangeIndex: boolean,
  enableDrag: boolean,
  fixed: boolean,
  isDragging: boolean,
  hasEnter: boolean,
  hasDraggedIn: boolean,
  isShape: boolean,
  parent: ?GraghShape,
  hide: boolean,
  animating: boolean,
  forceUpdate: boolean,
  updated: boolean,
  getBounding: Function,
  _: Object,
  events: Array<{eventType: string, callback: Function}>,
  draw: Function,
  on: Function,
  isPointInner: Function,
  config: Function,
  animateTo: Function,
  drag: Function,
  changeIndex: Function
}
