
<template>
  <Icon :iconName="'arrow-right-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowRight01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-right-01'
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
