
<template>
  <Icon :iconName="'three-finger-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ThreeFinger04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'three-finger-04'
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
