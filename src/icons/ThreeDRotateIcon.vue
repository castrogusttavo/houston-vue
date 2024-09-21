
<template>
  <Icon :iconName="'3d-rotate'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ThreeDRotateIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: '3d-rotate'
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
