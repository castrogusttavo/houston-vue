
<template>
  <Icon :iconName="'wall-lamp'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WallLampIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wall-lamp'
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
