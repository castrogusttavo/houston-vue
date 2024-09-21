
<template>
  <Icon :iconName="'mail-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Mail01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mail-01'
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
