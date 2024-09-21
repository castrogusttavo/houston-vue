
<template>
  <Icon :iconName="'face-id'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FaceIdIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'face-id'
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
