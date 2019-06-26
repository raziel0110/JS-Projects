var LikeComponet = /** @class */ (function () {
    function LikeComponet(likesCount, isSelected) {
        this.likesCount = likesCount;
        this.isSelected = isSelected;
    }
    LikeComponet.prototype.onClick = function () {
        if (this.isSelected) {
            this.likesCount--;
        }
        else {
            this.likesCount++;
        }
        this.likesCount += this.isSelected ? 1 : -1;
        this.isSelected = !this.isSelected;
    };
    return LikeComponet;
}());
var component = new LikeComponet(10, true);
component.onClick();
console.log(component.likesCount);
