
<template>
  <Icon :iconName="'checkmark-circle-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CheckmarkCircle03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'checkmark-circle-03'
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
