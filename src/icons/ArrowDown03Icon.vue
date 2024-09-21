
<template>
  <Icon :iconName="'arrow-down-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowDown03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-down-03'
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
