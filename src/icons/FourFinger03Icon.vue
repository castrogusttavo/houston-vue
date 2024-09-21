
<template>
  <Icon :iconName="'four-finger-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FourFinger03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'four-finger-03'
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
