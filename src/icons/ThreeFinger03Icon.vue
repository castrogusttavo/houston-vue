
<template>
  <Icon :iconName="'three-finger-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ThreeFinger03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'three-finger-03'
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
