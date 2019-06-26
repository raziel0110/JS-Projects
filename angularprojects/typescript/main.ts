class LikeComponet {
  constructor(public likesCount: number, public isSelected: boolean) {}

  onClick() {
    if (this.isSelected) {
      this.likesCount--;
    } else {
      this.likesCount++;
    }

    this.likesCount += this.isSelected ? 1 : -1;
    this.isSelected = !this.isSelected;
  }
}

const component = new LikeComponet(10, true);

component.onClick();
console.log(component.likesCount);
