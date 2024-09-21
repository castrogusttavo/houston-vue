
<template>
  <Icon :iconName="'maze'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MazeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'maze'
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
