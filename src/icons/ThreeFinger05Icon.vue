
<template>
  <Icon :iconName="'three-finger-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ThreeFinger05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'three-finger-05'
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
