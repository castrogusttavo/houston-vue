
<template>
  <Icon :iconName="'zoom-out-area'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ZoomOutAreaIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'zoom-out-area'
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
