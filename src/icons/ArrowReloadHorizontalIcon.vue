
<template>
  <Icon :iconName="'arrow-reload-horizontal'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowReloadHorizontalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-reload-horizontal'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
