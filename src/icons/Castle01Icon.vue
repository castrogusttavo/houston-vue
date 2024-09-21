
<template>
  <Icon :iconName="'castle-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Castle01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'castle-01'
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
