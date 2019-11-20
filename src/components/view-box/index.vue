<script>
export default {
  name: "view-box",
  functional: true,
  render(createElement, context) {
    let list = []
    let rootStyle = {}
    context.children.forEach(child => {
      let componentOptions = child.componentOptions
      let fnOptions = child.fnOptions
      if (componentOptions || fnOptions) {
        switch (componentOptions.tag || fnOptions.name) {
          case 'rg-header':
          case "tabbar": {
            list.push(child)
            break
          }
          case "keep-alive":
          case "RouterView": {
            list.push(<div class="box-body">{child}</div>)
            break
          }
        }
      }
    })

    return (<div style={rootStyle} class="view-box">{list}</div>)
  },
}
</script>

<style lang="stylus" scope>
.view-box
  height 100%
  display flex
  flex-direction column
.box-body
  overflow-y scroll
  flex 1
</style>