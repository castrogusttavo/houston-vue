
<template>
  <Icon :iconName="'three-finger-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ThreeFinger01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'three-finger-01'
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
