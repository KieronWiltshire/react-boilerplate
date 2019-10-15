export default class {

    /**
     * Update the position of the mouse.
     * 
     * @param {number} object.x
     * @param {number} object.y
     * @return {object}
     */
    static updateMousePosition({ x, y }) {
      return {
        type: 'UPDATE_MOUSE_POSITION',
        x, 
        y
      };
    }    

};