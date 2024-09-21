
<template>
  <Icon :iconName="'arrow-up-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowUp03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-up-03'
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
