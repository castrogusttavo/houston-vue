
<template>
  <Icon :iconName="'arrow-up-right-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowUpRight01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-up-right-01'
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
