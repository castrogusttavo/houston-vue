
<template>
  <Icon :iconName="'shaka-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Shaka01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shaka-01'
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
