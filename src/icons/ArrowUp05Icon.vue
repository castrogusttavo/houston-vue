
<template>
  <Icon :iconName="'arrow-up-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowUp05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-up-05'
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
