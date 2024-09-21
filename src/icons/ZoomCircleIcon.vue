
<template>
  <Icon :iconName="'zoom-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ZoomCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'zoom-circle'
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
