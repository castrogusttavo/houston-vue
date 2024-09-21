
<template>
  <Icon :iconName="'cancel-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Cancel01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cancel-01'
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
