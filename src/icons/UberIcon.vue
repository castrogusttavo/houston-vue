
<template>
  <Icon :iconName="'uber'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UberIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'uber'
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
