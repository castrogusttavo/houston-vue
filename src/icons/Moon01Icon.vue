
<template>
  <Icon :iconName="'moon-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Moon01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'moon-01'
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
