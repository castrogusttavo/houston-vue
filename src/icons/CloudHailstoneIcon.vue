
<template>
  <Icon :iconName="'cloud-hailstone'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CloudHailstoneIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cloud-hailstone'
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
