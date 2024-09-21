
<template>
  <Icon :iconName="'3d-scale'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ThreeDScaleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: '3d-scale'
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
