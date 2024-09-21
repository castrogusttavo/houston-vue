
<template>
  <Icon :iconName="'loading-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Loading01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'loading-01'
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
