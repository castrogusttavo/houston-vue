
<template>
  <Icon :iconName="'bicycle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BicycleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bicycle'
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
