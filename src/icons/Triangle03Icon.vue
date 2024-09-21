
<template>
  <Icon :iconName="'triangle-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Triangle03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'triangle-03'
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
