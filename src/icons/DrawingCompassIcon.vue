
<template>
  <Icon :iconName="'drawing-compass'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DrawingCompassIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'drawing-compass'
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
