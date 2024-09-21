
<template>
  <Icon :iconName="'svg-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Svg01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'svg-01'
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
