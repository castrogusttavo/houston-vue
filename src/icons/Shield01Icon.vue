
<template>
  <Icon :iconName="'shield-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Shield01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shield-01'
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
