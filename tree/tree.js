const treeGenerator = () => {

  const _createNode = ( value ) => {
    let value = value;
    let children = [];

    this.addChild = ( child ) => {
      children.push( child );
    };

    this.getChildren = () => {
      return children;
    }
  }

  return {

  }
}