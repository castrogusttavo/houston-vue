
<template>
  <Icon :iconName="'arc-browser'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArcBrowserIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arc-browser'
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
